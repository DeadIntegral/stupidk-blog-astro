---
title: dev-weekly 2025-01-25
date: "2025-01-25T18:35:00.000Z"
description: "dev-weekly 2025-01-25"
tags: ["css", "javascript", "node", "bun", "browser"]
---

# CSS

### [Don’t Wrap Figure in a Link](https://adrianroselli.com/2025/01/dont-wrap-figure-in-a-link.html)

- `<figure>` 를 `<a>` 로 래핑했을 때 브라우저별 접근성 처리

# Node

### [Kill Switch Hidden in npm Packages Typosquatting Chalk and Chokidar](https://socket.dev/blog/kill-switch-hidden-in-npm-packages-typo-squatting-chalk-and-chokidar)

- 이름을 비슷하게 하는 악성 패키지는 과거에도 있었는데, 이번엔 README도 똑같이 작성.

# Javascript

### [**Announcing ArkType 2.0**](https://arktype.io/docs/blog/2.0)

- JS 런타임 타입.
- zod보다 월등한 속도. [https://moltar.github.io/typescript-runtime-type-benchmarks/](https://moltar.github.io/typescript-runtime-type-benchmarks/)

### [React-nil](https://github.com/pmndrs/react-nil)

- React의 라이프사이클을 따라가고 리액트가 매니징하지만 뷰 없이 렌더링.

### [Bun 1.2](https://bun.sh/blog/bun-v1.2)

- nodejs 호환성 향상. nodejs의 테스트를 갖다가 통과하도록 작업. 90% 이상 통과.
- http/2 서버 지원 (nodejs 보다 2배 빠르게)
- V8 API를 사용하는 Cpp 에드온 지원
    - JSCore에서 V8의 public Cpp API 를 구현
- s3지원 - cloud-first JS런타임을 목표로 하기 때문에.
- bun.sql 에서 postgres 지원
- 패키지매니저로서의 bun을 위해 bun.lock 파일을 jsonc 파일로 변경

# ETC

### [Node.js 18 is being deprecated on August 1, 2025](https://vercel.com/changelog/node-js-18-is-being-deprecated)

- 25년 4월30일에 nodejs 18지원 종료, vercel에서도 25년 8월1일 부터 Build, Functions 에서 사용 불가. Serverless Functions 를 사용한 기존 배포는 영향 없음.

### [Shapecatcher: Unicode Character Recognition](https://shapecatcher.com/)

- 박스에 뭔가를 그리면 유사한 유니코드를 검색해주는 서비스
- 데이터베이스에 11817개의 글리프 존재.

### [Running Inference In Web Extensions](https://blog.mozilla.org/en/mozilla/ai/ai-tech/running-inference-in-web-extensions/)

- Firefox에 AI 런타임 Transformers.js와 ONNX 런타임 엔진 내장.
- pdf.js의 이미지 alt 를 제공하기 위해 Firefox 133에 적용되었고, 134 부터는 다른곳에서도 사용될 예정
- firefox nightly 에서 ml API 사용 가능.

### Release

- [transformers.js v3.3.0](https://github.com/huggingface/transformers.js/releases/tag/3.3.0)
- [rspack v1.2.0](https://rspack.dev/blog/announcing-1-2)
- [Capacitor 7](https://ionic.io/blog/capacitor-7-has-hit-ga)
- [react native 0.77](https://reactnative.dev/blog/2025/01/21/version-0.77)
- [vitest 3.0](https://vitest.dev/blog/vitest-3)
- [NestJS 11](https://trilon.io/blog/announcing-nestjs-11-whats-new)
- [youtube.js v13.0.0](https://github.com/LuanRT/YouTube.js/releases/tag/v13.0.0)