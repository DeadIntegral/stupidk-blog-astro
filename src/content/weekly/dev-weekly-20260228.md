---
title: dev-weekly 2026-02-28
date: "2026-02-28T21:58:00.000Z"
description: "dev-weekly 2026-02-28"
tags: ["javascript", "nodejs", "css"]
---

# CSS

### [Honoring Mobile OS Text Size](https://adrianroselli.com/2026/02/honoring-mobile-os-text-size.html)

- 모바일 웹 브라우저별 OS 폰트 사이즈 지원하는 방법
- firefox는 아무것도 하지 않아도 지원. 크롬의 경우 meta tag 추가(아직 카나리만 제공), 사파리의 경우 `font: -apple-system-body;` 와 같은 코드 몇줄 필요.

# Nodejs

### [How To Publish To NPM From GitHub Actions](https://glebbahmutov.com/blog/npm-publish-from-github/)

- NPM 레지스트리 계정의 패키지 설정 - Github Actions 에서 github 유저 네임(조직명), 저장소, 워크플로 파일(.github/workflows의 파일) 입력. 필요하면 2FA 인증.
- 깃헙 액션의 레지스트리 비트는`id-token: write` 로, NPM이 이 워크플로가 정당하고 새로운 버전을 게시할 수 있음을 알게 함.

# Javascript

### [Oxfmt Beta](https://oxc.rs/blog/2026-02-24-oxfmt-beta)

- Rust 기반, prettier 호환하는 코드 포맷터
- `AI Migration Prompt` 제공. AI 에게 프롬프트 복사해주면 마이그레이션 완료.
- import sort 옵션, package.json 정렬 기능, 임베드 언어 포맷팅(css in js) 제공

### [Fastest Frontend Tooling for Humans & AI](https://cpojer.net/posts/fastest-frontend-tooling)

- 26년의 JS 툴링. tsgo, oxfmt, oxlint, tsnode 등 다양한 도구와 도구를 AI 마이그레이션하는 프롬프트 제안 등.

### [Goodbye innerHTML, Hello setHTML: Stronger XSS Protection in Firefox 148](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/)

- html 스트링을 sanitizing 해서 렌더링 해주는 setHTML 메서드 파이어폭스 148에 출시. (Sanitizer API와 Trusted Types)

### [Image Compare](https://image-compare-component.netlify.app/)

- 작고(gzip 1.5kB) 의존성 없는 이미지 비교 슬라이드 웹 컴포넌트
- 키보드 제어 지원, 스타일링 커스텀 가능

# ETC

### [PWA Browser Scorecards](https://pwascore.com/)

- 모바일 브라우저의 PWA 지원 기능 비교

### Release

- [hono v4.12.0](https://github.com/honojs/hono/releases/tag/v4.12.0)
- [deno v2.7](https://deno.com/blog/v2.7)
- [electron v40.6.0](https://github.com/electron/electron/releases/tag/v40.6.0)
- [bignumber.js v10.0.0](https://github.com/MikeMcl/bignumber.js/releases/tag/v10.0.0)