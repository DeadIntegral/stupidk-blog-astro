# CLAUDE.md

Astro 기반 개인 블로그. 콘텐츠 컬렉션: `blog`(직접 쓴 글), `weekly`(주간 개발 소식 요약), `archive`(예전 글). 스키마는 `src/content.config.ts`.

## 콘텐츠 태그 컨벤션

태그는 각 글 frontmatter 의 `tags:` (문자열 배열)에 들어가며, `/tags` 와 `/tags/[tag]` 로 탐색된다. 태그 시스템은 본문이 실제 다루는 주제를 반영하도록 설계되어 있다 (단순 `javascript`/`node`/`css` 나열 ❌).

**표기 규칙**

- 모두 소문자
- 여러 단어는 kebab-case: `web-components`, `view-transitions`, `source-map`, `css-grid`
- 단수형 명사
- 글당 **4~8개**, 가장 핵심적인 구체 주제 위주
- 과도하게 일반적/모호한 태그 금지: `web`, `etc`, `tutorial`, `tools`, `code`, `dev`, `programming`, `news`, `release`, `set`, `layout`, `transform`, `https`, `viewport`, `module`, `async` 등
- 동의어는 표준형으로 통일: `nodejs`→`node`, `js`→`javascript`, `ts`→`typescript`, `webassembly`→`wasm`, `a11y`→`accessibility`, `db`→`database`, `grid`→`css-grid` (전체 매핑은 `scripts/normalize-tags.mjs` 의 `CANON`)
- **기존 어휘 재사용 우선**: 새 태그를 만들기 전에 현재 쓰이는 태그(예: `/tags` 또는 기존 frontmatter)를 먼저 살펴 같은 개념이면 같은 표기를 쓴다.

자주 쓰는 태그(참고): `node css javascript typescript react performance accessibility deno wasm v8 npm security electron animation testing devtools browser rust web-components eslint nextjs bun bundler angular astro vite svelte chrome go view-transitions http esm database svg pwa compiler esbuild vue vscode video websocket workers graphql html webgpu ...`

## 새 글에 태그 달기

1. 글 본문을 읽고, **실제로 다루는** 구체적 주제/기술 태그 4~8개를 frontmatter `tags:` 에 단다 (위 규칙 준수, 기존 어휘 재사용).
2. 정규화 스크립트로 표기를 통일한다 (소문자/동의어 병합/약한 태그 제거/중복 제거/최대 8개, 멱등):
   ```sh
   node scripts/normalize-tags.mjs src/content/weekly/<새-글>.md   # 특정 파일
   node scripts/normalize-tags.mjs                                  # 전체 재정규화
   ```

새 글이 한꺼번에 많이 들어와 일괄 태깅이 필요하면, 과거에 했던 방식을 그대로 재현하면 된다:
각 글 본문을 의미 분석해 태그를 *제안*하고(병렬 에이전트 가능), 제안 결과를 `scripts/normalize-tags.mjs` 로 결정론적으로 적용한다. 이렇게 LLM 제안과 결정론적 적용을 분리해 일관성과 안전성을 확보한다.

## 빌드 / 검증

- `yarn build` (= `astro build`): 정적 빌드 + Pagefind 검색 인덱스 자동 생성.
- 검색은 `astro dev` 에서 인덱스가 없어 동작하지 않을 수 있으므로, 로컬 확인은 `yarn build && yarn preview` 권장.
- 검색은 `blog`+`weekly` 본문만 인덱싱한다 (레이아웃의 `data-pagefind-body`). 태그 페이지는 인덱싱 대상이 아니다.
