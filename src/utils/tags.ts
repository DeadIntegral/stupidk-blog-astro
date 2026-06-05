import { getCollection } from 'astro:content';

export type TagCollection = 'blog' | 'weekly' | 'archive';

export interface TaggedPost {
  collection: TagCollection;
  id: string;
  title: string;
  date: Date;
  tags: string[];
}

const COLLECTIONS: TagCollection[] = ['blog', 'weekly', 'archive'];

/** 모든 컬렉션에서 태그가 있는 글을 모아 평탄화한다. */
export async function getTaggedPosts(): Promise<TaggedPost[]> {
  const groups = await Promise.all(
    COLLECTIONS.map(async (collection) => {
      const entries = await getCollection(collection as any);
      return entries
        .filter((e: any) => Array.isArray(e.data.tags) && e.data.tags.length > 0)
        .map((e: any) => ({
          collection,
          id: e.id,
          title: e.data.title,
          date: new Date(e.data.date),
          tags: e.data.tags as string[],
        }));
    })
  );
  return groups.flat();
}

/** 태그 → 글 목록(최신순) 맵을 만든다. */
export function buildTagMap(posts: TaggedPost[]): Map<string, TaggedPost[]> {
  const map = new Map<string, TaggedPost[]>();
  for (const post of posts) {
    for (const tag of post.tags) {
      const list = map.get(tag);
      if (list) list.push(post);
      else map.set(tag, [post]);
    }
  }
  for (const list of map.values()) {
    list.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  return map;
}

/** 태그를 글 개수 내림차순(동점이면 이름순)으로 정렬해 반환한다. */
export function sortedTagCounts(map: Map<string, TaggedPost[]>) {
  return [...map.entries()]
    .map(([tag, posts]) => ({ tag, count: posts.length }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function postHref(post: TaggedPost) {
  return `/${post.collection}/${post.id}/`;
}

export function tagHref(tag: string) {
  return `/tags/${encodeURIComponent(tag)}/`;
}
