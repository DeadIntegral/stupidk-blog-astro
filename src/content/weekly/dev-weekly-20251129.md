---
title: dev-weekly 2025-11-29
date: "2025-11-29T18:15:00.000Z"
description: "dev-weekly 2025-11-29"
tags: ["css", "nodejs", "javascript"]
---

# CSS

### [Use `overscroll-behavior: contain` to prevent a page from scrolling while a `<dialog>` is open](https://www.bram.us/2025/11/25/use-overscroll-behavior-contain-to-prevent-a-page-from-scrolling-while-a-dialog-is-open/)

- 크롬144 부터 overscroll-behavior는 스크롤 불가능한 엘리먼트에서도 동작. 다이얼로그 오픈 시 contain값과 overflow: hidden을 주면 스크롤 방지 가능.

### [Keyframes Tokens: Standardizing Animation Across Projects](https://www.smashingmagazine.com/2025/11/keyframes-tokens-standardizing-animation-across-projects/)

- keyframes은 전역적으로 같은 이름 하나만 존재 가능. 로컬에서 동작해도 빌드하고 나서 나중에 불러온 파일이 같은 이름이면 마지막에 쓰인 애니메이션으로 동작.
- keyframes는 모아서 공통으로 추출하고, token을 통해 사용하는곳에서 세부 값 조절하는 방법 소개
- `animation-composition` 을 통해 애니메이션 함께 사용하기
- 애니메이션 통합하고 토큰으로 제어 할 경우 reduced motion 지원도 쉬움.

# Nodejs

### [The Summer I Shipped Type Stripping](https://satanacchio.hashnode.dev/the-summer-i-shipped-type-stripping)

- nodejs에서 TS 네이티브 지원 도입하게 했던 회고 블로깅
- TS 트랜스파일러의 대부분은 Rust로 작성. 당시 Nodejs는 Node가 지원하는 모든 플랫폼에서 Rust사용할 수 없었는데 WASM은 모든 환경에서 동작. swc/wasm-typescript 를 발견하여 작업 시작.
- 별 고민 없이 pr 오픈. bloomberg에서 ts-blank-space에 사용하던 타입 스크리핑 방식 제안받음.
- TS팀의 tight-coupling 우려를 듣고 swc/wasm-typescrip 대신 Amaro라는 새로운 패키지 개발.
- 깃헙 역사상 가장 많은 추천을 받은 PR 중 하나가 됨.

# Javascript

### [Unifying our mobile and desktop domains](https://techblog.wikimedia.org/2025/11/21/unifying-mobile-and-desktop-domains/)

- 2008년 구글은 별도의 모바일 URL을 광고할 수 있도록 허용하여 모바일 도메인 지원. 2016년 새로운 크롤러를 도입하고 모바일/데스크톱 링크 광고 기능 제거.
- 위키미디어 모바일과 데스크탑 도메인을 통합하여 UX, SEO 개선

### [Web GPU is now supported in major browsers](https://web.dev/blog/webgpu-supported-major-browsers?hl=en)

- 크롬, 엣지, 파이어폭스, 사파리 지원
- 렌더링 커맨드 집합을 기록하고 재사용하여 성능을 향상시키고, CPU 오버헤드를 줄일 수 있는 `Render Bundle` 도입

# ETC

### [Wrangling my email with Claude Code](https://jlongster.com/wrangling-email-claude-code)

- 클로드 코드 skill 사용해서 후속 조치가 필요한 메일 등 필요한 워크플로 자동화

### Release

- [open v11](https://github.com/sindresorhus/open)
- [pnpm v10.24.0](https://github.com/pnpm/pnpm/releases/tag/v10.24.0)
- [bun v1.3.3](https://bun.sh/blog/bun-v1.3.3)
- [playwright v1.57.0](https://github.com/microsoft/playwright/releases/tag/v1.57.0) - Chromium에서 Chrome for testing 으로 변경
- [antd v6.0](https://github.com/ant-design/ant-design/issues/55804) - IE지원종료. pure CSS variable mode 사용하면 성능 향상.