---
title: dev-weekly 2024-09-07
date: "2024-09-07T22:53:00.000Z"
description: "dev-weekly 2024-09-07"
tags: ["css", "node", "javascript"]
---
# CSS

### [CSS Compatibility](https://marketplace.visualstudio.com/items?itemName=vivek9patel.vscode-css-compatibility)

- css코드에 커서를 올리면 compat을 보여주는 VSCode 확장

# Node

### [How I Created a 3.78MB Docker Image for a JavaScript Service](https://shenzilong.cn/record/How%20I%20Created%20a%203.78MB%20Docker%20Image%20for%20a%20JavaScript%20Service)

- Nodejs, Bun, Deno 의 가장 작은 이미지도 50MB. 때문에 Quickjs 기반의 llrt 사용
- Quickjs는 순수 인터프리터라 파일 IO, HTTP 등의 API가 없어서 llrt 선택.

# Javascript

### [An SSR Performance Showdown](https://blog.platformatic.dev/ssr-performance-showdown)

- Fastify에서 각 라이브러리(React, Vue, Solid, Svelte, Preact) SRR 성능 비교
- 기준치(Fastify-html ) 초당 1088개. Vue 1028, Svelte 968, Solid 907, Preact 717, React 572 개의 요청을 초당 처리.

### [OpenAI is shockingly good at unminifying code](https://glama.ai/blog/2024-08-29-reverse-engineering-minified-code-using-openai)

- minify된 js코드를 chatGPT에게 설명요청한 결과 공유
- 구현 세부 사항에 차이는 있지만 학습에 충분한 구현

# ETC

### [Brand New Performance Features in Chrome DevTools](https://www.debugbear.com/blog/fix-web-performance-devtools)

- 크롬 개발자 도구의 새로운 Performance 에 대한 소개.
    - Core Web Vital, CrUX, INP, 레코딩 등 기능 제공.
- 현재는 크롬 카나리에서만 제공.

### Release

- [Astro v4.15](https://astro.build/blog/astro-4150/)
- [Redwoodjs v8](https://redwoodjs.com/upgrade/v8)
- [jsdiff v7.0.0](https://github.com/kpdecker/jsdiff/releases/tag/7.0.0)