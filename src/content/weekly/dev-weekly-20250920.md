---
title: dev-weekly 2025-09-20
date: "2025-09-20T18:55:00.000Z"
description: "dev-weekly 2025-09-20"
tags: ["javascript", "npm", "wasm"]
---

# Nodejs

### [Updated and Ongoing Supply Chain Attack Targets CrowdStrike npm Packages](https://socket.dev/blog/ongoing-supply-chain-attack-targets-crowdstrike-npm-packages)

- 이전 tinycolor를 비롯한 패키지들을 손상 시켰던 “Shai-Hulud Attack” 의 연장선으로 보이는 공격 발견
- 자동으로 자격 증명을 훔친 후 해당 자격 증명을 다른 저장소에 워크플로를 삽입하여 자가 확산 될 수 있음. 확산 체인의 일부로 패키지를 수정하고 다시 게시.

# Javascript

### [Wasm 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)

- 6~8년동안 준비한 기능들 마무리 단계
- 64비트 주소 (사파리 지원X)
- 메모리 객체 동시 사용 가능. 두 개 이상의 WASM 모듈 병합하여 “정적 연결” 수행 (사파리 지원X)
- GC - WasmGC도 WASM처럼 로우 레벨. 컴파일러는 런타임 데이터 구조의 메모리 레이아웃을 선언할 수 있고, 이들의 할당과 수명은 WASM이 처리. 하지만 구현 세부 사항을 포함한 대부분의 작업은 컴파일러의 책임
- Typed Reference, Tail calls, Exception Handling, etc

# ETC

### [Replace Your Animated GIFs with SVGs](https://frontendmasters.com/blog/replace-your-animated-gifs-with-svgs/)

- GIF에 대한 대안 중 하나로 SVG소개. 파일에 CSS를 삽입 가능하여 keyframs 애니메이션 넣기
- max-width 미디어 쿼리는 화면 크기가 아닌 img 엘리먼트의 크기를 기반으로 동작
- prefers-reduced-motion을 인식하지 못하는 등 제약사항 존재

### [Help Us Raise $200k to Free JavaScript from Oracle](https://deno.com/blog/javascript-tm-gofundme)

- Javascript 상표에 대해 “취소 청원” 제출
- 연방소송 비용 모금. 남은 자금은 기부할 것. Deno에는 어떤 기금도 전달되지 않음.

### Release

- [Hexo v8.0.0](https://github.com/hexojs/hexo/releases/tag/v8.0.0)
- [WebKit Features in Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)
- [Bun v1.2.22](https://bun.com/blog/bun-v1.2.22)
    - async stack trace 지원
- [Expo SDK 54](https://expo.dev/changelog/sdk-54) - RN 0.81
- [deno fresh v2.1.0](https://github.com/denoland/fresh/releases/tag/2.1.0)