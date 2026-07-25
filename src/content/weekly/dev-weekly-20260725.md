---
title: dev-weekly 2026-07-25
date: "2026-07-25T21:35:00+09:00"
description: "CSS Subgrid로 FIFA 순위표 레이아웃 짜기, ESLint 마이그레이션을 자동화하는 Codemod, wasm 모듈을 import 하는 unwasm, 실제로 사이트를 읽는 AI는 누구인가 LLM 트래픽 측정까지 이번 주 개발 소식."
tags: ["subgrid", "css-grid", "eslint", "wasm", "ai", "seo", "llm"]
---

# CSS

### [Rebuilding FIFA Standings Layout with CSS Subgrid](https://ishadeed.com/article/fifa-layout/)

- 피파 랭킹 페이지 서브그리드를 활용해 CSS로 그리기
- 화면을 32개의 그리드로 생각하고 좌측 끝 열과 우측 끝 열을 한 쌍으로. 하지만 각 라운드가 정렬되어 있지는 않고 경기들 사이에 선 긋기 필요.
- 반응형으로 만들기

# Javascript

### [Automating ESLint migrations with Codemod](https://eslint.org/blog/2026/07/eslint-codemod-migrations/)

- ESLint 와 Codemod 가 파트너십을 맺고 마이그레이션 제공. v8 to v9, v9 to v10 마이그레이션 제공.

```jsx
npx codemod @eslint/v8-to-v9-config // config migration
npx codemod @eslint/v8-to-v9-custom-rules // custom rule. ESLint rule이 있는 파일에서만 실행해야함. JS파일 잘못 변환 가능.
npx codemod @eslint/v9-to-v10 // v9 to v10 migration
```

### [unwasm: WebAssembly tools for JavaScript](https://github.com/unjs/unwasm)

- 다른 모듈을 import 하는 것처럼 `.wasm` 파일 import 가능. 빌드 시점에 모듈을 읽고 모듈이 import, export 하는 항목을 파악해 사용중인 번들러에 적합한 바인딩 생성. `import { sum } from "sum.wasm"`
- JS런타임, 프레임워크, 빌드 툴 전반에 걸쳐 WASM 모듈을 지원하는, 보편적이고 미래에도 유효한 방식이  목표. ES Module Integration 제안을 따르며 현재 에코시스템과의 호환성 유지.

# AI

### [Which AI actually reads your site? Two months of LLM traffic, measured](https://evilmartians.com/chronicles/which-ai-actually-reads-your-site-two-months-of-llm-traffic-measured)

- AI SEO 에 대해서 2개월 간 트래픽 분석 리포트
- chatGPT는 대부분 HTML 형태로 전송, 클로드 코드는 76%가 마크다운 형식으로 요청.
- llms.txt는 AI 어시스턴트는 거의 보지 않고 봇들에 의해 소비.
- 사용자가 입력하지 않은 URL도 AI가 시도. 404가 많이 뜨는 페이지라면 다시 활용하면 좋을 것.

### [My Agentic Coding Setup, July 2026](https://domenic.me/agentic-coding-setup/)

- agentic codeing 환경 공유. Tailscale을 통해 외부에서 작업하기.
- 보안, 워크트리, VSC를 통한 코드리뷰, portless를 통한 개발서버 제공.

# ETC

### Release

- [Nuxt 4.5](https://nuxt.com/blog/v4-5)
- [preact v11.0.0-beta.2](https://github.com/preactjs/preact/releases/tag/11.0.0-beta.2)
- [astro 7.1](https://astro.build/blog/astro-710/)
- [rslint 0.7.0](https://github.com/web-infra-dev/rslint/releases/tag/v0.7.0)
- [rolldown v1.2.0](https://github.com/rolldown/rolldown/releases/tag/v1.2.0)
- [setup-node v7.0.0](https://github.com/actions/setup-node/releases/tag/v7.0.0)