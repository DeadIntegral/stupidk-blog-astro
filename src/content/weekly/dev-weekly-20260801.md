---
title: dev-weekly 2026-08-01
date: "2026-08-01T22:23:00+09:00"
description: "웹폰트 표준 WOFF 1.0의 이정표, Rust가 삼켜버린 JS 툴링, 컴포넌트 성능을 재는 Container Timing API, TS를 네이티브 바이너리로 굽는 scriptc, ARM64 리눅스에 도착한 Chrome까지 이번 주 개발 소식."
tags: ["woff", "font", "rust", "performance", "typescript", "compiler", "chrome"]
---

# CSS

### [WOFF 1.0: a milestone on W3C’s journey of fonts on the web](https://www.w3.org/blog/2026/woff-1-0-a-milestone-on-w3cs-journey-of-fonts-on-the-web/)

- WOFF 1.0 은 웹에서 폰트를 효율적으로 배포하기 위한 최초의 표준 포맷으로, 다양한 브라우저 벤더사 및 폰트 업체가 협력해 대중화를 이끈 중요한 이정표.
- CSS 워킹그룹은 1998년 font-face를 CSS2에 도입했지만 10년간 사용되지 않음. WOFF는 2011년 출시 후 2020년 즈음 80% 로 사용량 증가. 웹이 몇 가지 안전한 폰트에 의존하던 시대를 끝냄.

# Javascript

### [Rust Is Eating JavaScript](https://leerob.com/rust)

- 21년에 작성했던 Rust가 JS 툴링을 모두 잡아먹을거라는 글. 저자가 생각하기에도 다소의 과장을 넣었었는데 26년에 돌아보니 Rust 툴링이 많아짐.

### [The Launch of CodePen 2.0](https://blog.codepen.io/2026/07/23/two-point-oh/)

- 코드펜 2.0 릴리스. 원클릭 배포 지원 `*.codepen.app` 페이지. 파일 시스템, 버전 관리 시스템, 협업관리, 기술조합(Blocks) 지원.

### [KaTeX: The fastest math typesetting library for the web.](https://katex.org/)

- 커누스의 Tex를 기반으로 함.
- 페이지 리플로우 없고, 종속성없고, 환경 독립적이라 SSR 가능.

### [Measuring Component Performance with the Container Timing API](https://csswizardry.com/2026/07/meaasuring-component-performance-with-the-container-timing-api/)

- 브라우저는 LCP와 같은 API를 노출하지만 그게 우리 서비스의 핵심은 아님. Element Timing API가 있지만 우리의 핵심은 단일 엘리먼트가 아님. 그래서 블룸버그와 이갈리아가 Container Timing API 개발. 우리가 가장 중요하게 생각하는 부분의 퍼포먼스를 측정하기 위함.
    - [https://github.com/WICG/container-timing](https://github.com/WICG/container-timing)
- 컨테이너의 렌더링 완료 시점은 알 수 없음. 서비스마다 의미있는, 유용한 렌더링 지점이 다를 것. 그래서 entry만 전송하고 final 시간은 애플리케이션에서 직접 정의

# Nodejs

### [scriptc: TypeScript-to-NativeCompiler](https://scriptc.dev/)

- TS코드를 네이티브 바이너리로 컴파일. node와 바이트 단위로 동일하게 동작.
- hello world 출력의 경우 320KB 이며 실행하는데 4ms. nodejs로 만들면 120MB

# ETC

### [Google Chrome arrives on Arm64 Linux, Widevine DRM included](https://www.omgubuntu.co.uk/2026/07/chrome-arm64-linux-available)

- 26년 2분기에 ARM64 리눅스용 크롬 출시하기로 약속. 현재도 네이티브 arm 64 버전 다운로드 및 v150 버전 사용 가능.

### Release

- [htmx 4.0](https://four.htmx.org/)
- [tsgolint v7](https://oxc.rs/blog/2026-07-22-type-aware-linting-stable)
    - oxlint의 기반이 되는 type-aware linting 엔진 릴리스. 바이너리 크기 감소, npm 다운로드 크기 감소.
- [Ember 7.1](https://blog.emberjs.com/ember-released-7-1/)
- [Deno v2.9.4](https://github.com/denoland/deno/releases/tag/v2.9.4)
- [React Router v.8.3.0](https://github.com/remix-run/react-router/blob/main/CHANGELOG.md#v830)
- [Slick v2.0.0](https://github.com/kenwheeler/slick/releases/tag/v2.0.0) - jQuery 4 호환
- [MapLibreGLJS 6.0](https://maplibre.org/maplibre-gl-js/docs/)
- [jsdom v30.0.0](https://github.com/jsdom/jsdom/releases/tag/v30.0.0)