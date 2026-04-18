import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stupidk.com',
  integrations: [mdx(), sitemap()],
  redirects: {},
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
  },
});
