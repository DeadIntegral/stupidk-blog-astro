import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
// Astro 7 부터 Sätteri 가 기본 마크다운 프로세서다. remark/rehype 플러그인을 쓰려면
// unified 파이프라인을 명시해야 한다 (processor: unified()).
import { unified } from '@astrojs/markdown-remark';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import sitemap from '@astrojs/sitemap';

// Pagefind 검색 인덱싱을 astro 빌드의 일부로 실행하는 인라인 통합.
// 빌드 스크립트(`&& pagefind`)에 두면 Vercel 처럼 빌드 명령이 `astro build` 인 환경에서
// 실행되지 않으므로, astro:build:done hook 에서 pagefind 바이너리를 직접 돌린다.
// (astro-pagefind 통합을 쓰지 않는 이유: Astro 7 peer 미지원 → legacy-peer-deps 필요)
// pagefind 패키지는 ESM-only exports 라 import.meta.resolve 로 main(lib/index.js)을 찾고
// 그 옆의 bin(lib/runner/bin.cjs)을 node 로 실행한다.
function pagefind() {
  return {
    name: 'pagefind',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const bin = fileURLToPath(new URL('runner/bin.cjs', import.meta.resolve('pagefind')));
        const site = fileURLToPath(dir);
        logger.info(`Running Pagefind on ${site}`);
        execFileSync(process.execPath, [bin, '--site', site], { stdio: 'inherit' });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://stupidk.com',
  integrations: [mdx(), sitemap(), pagefind()],
  redirects: {},
  markdown: {
    processor: unified(),
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
  },
});
