---
title: dev-weekly 2026-05-30
date: "2026-05-30T22:47:00+09:00"
description: "dev-weekly 2026-05-30"
tags: ["css", "javascript", "animation", "font", "json", "wasm", "deno"]
---

# CSS

### [CSS vs. JavaScript](https://www.joshwcomeau.com/animation/css-vs-javascript/)

- CSS, JS의 애니메이션 비교. motion의 WAAPI, GASP, CSS의 장단점 비교

### [Font metrics calculator for font-size-adjust](https://clagnut.com/sandbox/font-size-adjust.html)

- 업로드한 파일의 폰트 메트릭 계산. 결과값은 css의 `font-size-adjust` 와 함께 사용 가능.

# Javascript

### [tegaki: Handwriting animation for the web](https://github.com/KurtGokhan/tegaki)

- 텍스트를 손글씨 애니메이션으로 만들어주는 라이브러리
- react, svelte, vue, solidjs, astro, web components, vanilla js 지원

### [json4u: Visualize and processJSON in seconds](https://json4u.com/)

- JSON시각화 도구. 그래프, 표 등을 사용해 데이터를 시각화.
- JSON 비교, 유효성 검사 등 제공

# ETC

### [Saying goodbye to asm.js](https://spidermonkey.dev/blog/2026/05/20/saying-goodbye-to-asmjs.html)

- firefox 148 부터 asm.js 최적화 기능 디폴트 비활성화. 향후 제거 예정.
- asm.js는 웹에서 네이티브 속도로 코드를 실행하는 방법이자 WASM의 전신이었으나 이제 WASM으로 많이 전환.

### [Maybe Don’t Rely on Google’s “Modern Web Guidance”](https://adrianroselli.com/2026/05/maybe-dont-rely-on-googles-modern-web-guidance.html)

- 구글의 모던 웹 가이드라인([https://developer.chrome.com/docs/modern-web-guidance](https://developer.chrome.com/docs/modern-web-guidance))에 대한 비판.

### Release

- [storybook v10.4](https://storybook.js.org/blog/storybook-10-4/)
- [npm v12.0.0-pre.0.0](https://github.com/npm/cli/releases/tag/v12.0.0-pre.0.0)
- [Deno 2.8](https://deno.com/blog/v2.8)
    - v2.7에서는 nodejs 컴팻이 42%였는데 이제 76.4%