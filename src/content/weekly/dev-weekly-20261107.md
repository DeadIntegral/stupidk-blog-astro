---
title: dev-weekly 2026-11-07
date: "2026-11-07T18:55:00+09:00"
description: "clarity.js의 번들 크기 최적화부터 브라우저 파일 미리보기, Wiki.js, GitHub 개발 동향과 유니코드 공백 판별, i18n 관리까지 이번 주 개발 소식을 살펴봅니다."
tags: ["javascript", "performance", "bundler", "browser", "github", "unicode", "i18n", "node"]
---

# Javascript

### [How We Made clarity.js 4.5% Smaller Without Sacrificing Compatibility](https://clarity.microsoft.com/blog/how-we-made-clarity-js-smaller/)

- clarity.js의 경우 수십억개의 페이지에서 사용중이고 번들사이즈가 중요.
- Gzip 사용중인데 헬퍼를 빼내려고 하면 코드는 줄어들지만 압축된 파일 크기는 증가. 래퍼 생성이 필요한가 등 rollup의 동작 방식을 고려한 번들 사이즈 최적화 사례
- e.g. 네임스페이스 임포트가`import * as X` 가 값으로 사용된다면 named import로 변경.

### [File Viewer: provides read-only previews in the browser](https://github.com/flyfish-dev/file-viewer)

- office(DOCX, CLS, PPT), PDF, EPUB, drawio, excalidraw, zip, 7z, SQLite, PSD, AI, MP4, hwp 등 275개의 확장자를 read-only로 프리뷰 제공. 순수 프론트엔드 개발로 서버 컨버팅 필요 없음.
- Vue, React, Svelte, WebComponent 지원

# Nodejs

### [Wiki.js: Next GenerationOpen Source Wiki](https://js.wiki/)

- 오픈소스 셀프 호스팅 위키 플랫폼.
- 마크다운 기반이지만 실시간 동시 편집, Excalidraw 보드, content block 등 제공
- 페이지, 파일 관리, 다국어, 전체 검색, git 양방향 동기화, 버전 이력, 승인 워크플로, 권한 제어를 포함한 조직용 지식 관리 도구

# ETC

### [Octoverse: Commits, pushes, reach new highs in 2026 as developers build with agents](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)

- 2026년 github octoverse report
- 지난 12개월 동안 깃헙에 179억건의 푸시를 했는데 24, 25년 합친것보다 많은 수. 커밋은 343억건인데 2년 전 보다 3배 이상 많은 수치. 깃헙 액션은 하루 1억2400만건 실행.
- 26년 9월 전체 PR 중 40% 이상이 에이전트의 초안으로 시작. 3월에는 17%였음. 9월 PR은 1.1억건, 3월의 약 6배.
- Github에서 가장 많이 사용되는 언어 1위 TS, 2위 파이썬, 3위 JS. 27년에도 추세 유지될 것.

### [How hard is it to check for whitespace?](https://serce.me/posts/2026-10-30-how-hard-is-it-to-check-for-whitespace)

- 공백 문자는 유니코드 기준 25개가 존재하고(1개 감소) 언어마다 정의가 조금씩 다름.
- 구글에서 만든 라이브러리 Guava는 이 문자들을 빠르게 판별하기 위해 충돌없는 perfect hash를 사용해 32칸 테이블 조회로 처리.
- 매직넘버 1682554634 를 활용한 공백문자 확인

### [x18n: i18n files, checked and maintained](https://x18n.dev/)

- 프레임워크에 종속되지 않는 i18n 관리도구로, 번역 파일과 실제 코드 사용처 함께 분석. i18n 리소스를 IDE처럼 이해하고 관리해주는
- 45개 이상의 프로젝트 구성을 자동 감지하며, CI, MCP를 통해 AI 에이전트의 i18n 작업에도 연결 가능.

### Release

- [Node.js 27.0.0-alpha](https://nodejs.org/en/blog/release/v27.0.0-alpha.0.0.0) - V8 15.6 적용.
- [vitest 5.1](https://vitest.dev/blog/vitest-5-1)
- [Rspack 2.3](https://rspack.rs/blog/announcing-2-3) - SWC Next 통합
- [preact 11.1.0](https://github.com/preactjs/preact/releases/tag/11.1.0)
    - `preact/compat/compiler-rumtime` 를 통해 React Compiler로 컴파일된 코드를 preact에서 실행 가능
- [Parcel 3 alpha](https://v3.parceljs.org/blog/v3-alpha/)
    - Rust로 새롭게 작성했고 2보다 최대 100배 빠름. Node의존성 없는 완전한 Rust 바이너리.
- [postgres v4.0.0](https://github.com/porsager/postgres/releases/tag/v4.0.0)
- [nest v12.3.0](https://github.com/nestjs/nest/releases/tag/v12.3.0)
- [jsdom v31.0.0](https://github.com/jsdom/jsdom/releases/tag/v31.0.0)
- [nitro v3-rc](https://nitro.build/blog/v3-rc)
- [vite-plus v1.5.0](https://github.com/voidzero-dev/vite-plus/releases/tag/v1.5.0)