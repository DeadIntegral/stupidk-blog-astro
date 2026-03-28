---
title: dev-weekly 2026-03-28
date: "2026-03-28T22:24:00.000Z"
description: "dev-weekly 2026-03-28"
tags: ["javascript", "nodejs", "css"]
---

# CSS

### [More Easy Light-Dark Mode Switching: `light-dark()` is about to support images!](https://www.bram.us/2026/03/19/more-easy-light-dark-mode-switching-light-dark-is-about-to-support-images/)

- light-dark() 에서 이미지 지원.
- 크롬 148, 파이어폭스 150 이상 필요. 사파리 지원 안함.

### [CSS Refactoring with an AI Safety Net](https://danielabaron.me/blog/css-refactoring-with-an-ai-safety-net/)

- playwright를 통해 모든 페이지의 모든 상태(폼 입력 전후 등)를 캡쳐하고, 비교하도록 하여 기존과 제품을 똑같이 유지하면서 리팩토링.
- visual regression tool은 스크린샷을 나란히 표시하고 표시점 오버레이하는 HTML 리포터가 유용. 하지만 클로드에게 주면 실행 가능한 조치로 나옴.

### [theSVG: One Package, Every Brand](https://www.thesvg.org/)

- SVG파일 복사, CDN링크, 다운로드, 다크모드 버전 등 지원
- 브랜드 아이콘, AWS 아키텍처, 애져, GCP, 쿠버네티스 등 다양한 아이콘 지원.

# Javascript

### [The Three Pillars of JavaScript Bloat](https://43081j.com/2026/03/three-pillars-of-javascript-bloat)

- 오래된 런타임 하위호환, 아토믹 아키텍쳐, 너무 오랜시간 유지한 Ponyfill(polyfill alternative) 로 인해 발생한 문제들
- knip, e18e CLI 와 같은 도구를 활용한 개선 방안 제안

### [Rewriting our Rust WASM Parser in TypeScript](https://www.openui.com/blog/rust-wasm-parser)

- WASM 바운더리에서 JSON 직렬화/역직렬화에서 오버헤드 발생
- Rust구조체를 JsValue로 변환(serde-wasm-bindgen)해봤으나 30% 느려짐
- 전체 파이프라인을 TS로 처리 후 성능 개선.

### [Sugar High: Super lightweight syntax highlighter](https://sugar-high.vercel.app/)

- 초경량 코드 신택스 하이라이트 도구. Gzip 1KB

# Nodejs

### [Where did 400 MiB go?](https://frn.sh/pmem/)

- nodejs 웹소켓 앱 60개 이상의 팟을 재시작 했는데 모든 팟이 330MiB 메모리 사용하는데 하나만 640MiB 사용. 원인을 찾아가는 과정에 대한 아티클
- 프로세스 찾기, `kill -USR1 2043476` 을 통해 V8 inspector 활성화, `nsenter -t <pid> -n` 를 통해 컨테이너 네트워크 네임스페이스에 접근. 인스펙터에 웹소켓을 열고 실행중인 프로세스를 재시작 안하고 JS실행.
- 더 많은 웹소켓 연결이 있었고, mmap / external memory 사용.

# ETC

### [Tooscut: Professional video editing, right in your browser](https://tooscut.app/)

- GPU 합성, 키프레임 애니메이션, 실시간 미리 보기 등을 갖춘 브라우저 영상 편집기.

### Release

- [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/)
- [storybook 10.3.0](https://github.com/storybookjs/storybook/releases/tag/v10.3.0)
    - vite8, nextjs16.2, ESLint 10 지원. MCP제공
- [deno v2.7.6](https://github.com/denoland/deno/releases/tag/v2.7.6)
- [pnpm 11 beta 0](https://github.com/pnpm/pnpm/releases/tag/v11.0.0-beta.0)
- [knip v6](https://knip.dev/blog/knip-v6)
    - 2~4배 성능 향상, nodejs 18 지원 중단.