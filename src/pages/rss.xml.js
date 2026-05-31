import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const [blogs, weeklys] = await Promise.all([
    getCollection('blog'),
    getCollection('weekly'),
  ]);

  const toItem = (prefix) => (post) => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description ?? '',
    link: `/${prefix}/${post.id}/`,
  });

  const items = [
    ...blogs.map(toItem('blog')),
    ...weeklys.map(toItem('weekly')),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
    customData: `<language>ko-kr</language>`,
  });
}
