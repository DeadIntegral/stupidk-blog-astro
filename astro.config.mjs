import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
// Astro 7 부터 Sätteri 가 기본 마크다운 프로세서다. remark/rehype 플러그인을 쓰려면
// unified 파이프라인을 명시해야 한다 (processor: unified()).
import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// 검색 인덱싱(Pagefind)은 통합 대신 빌드 스크립트에서 `pagefind --site dist` 로 직접 돌린다.
// (검색 UI 인 Search.astro 는 런타임에 /pagefind/pagefind.js 를 직접 로드하므로 통합이 불필요)
export default defineConfig({
  site: 'https://stupidk.com',
  integrations: [mdx(), sitemap()],
  redirects: {},
  markdown: {
    processor: unified(),
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
  },
});
