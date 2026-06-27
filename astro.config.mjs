import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
// Astro 7 부터 Sätteri 가 기본 마크다운 프로세서다. remark/rehype 플러그인을 쓰려면
// unified 파이프라인을 명시해야 한다 (processor: unified()).
import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.stupidk.com',
  integrations: [mdx(), sitemap(), pagefind()],
  redirects: {},
  markdown: {
    processor: unified(),
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
  },
});
