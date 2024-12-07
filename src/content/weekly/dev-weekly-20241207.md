---
title: dev-weekly 2024-12-07
date: "2024-12-07T22:51:00.000Z"
description: "dev-weekly 2024-12-07"
tags: ["javascript", "node"]
---

# Node

### [Skia Canvas: Browser-less nodejs canvas 2.0](https://skia-canvas.org/)

- 렌더링이 GPU에서 이루어지고 무거운 작업은 Rust, Cpp로 작성된 네이티브 코드에서 실행.
- woff, woff2 등 폰트에 대한 지원 추가
- svg, webp 비트맵을 이미지로 로드하여 캔버스에 그릴 수 있도록 지원
- https://github.com/samizdatco/skia-canvas/releases/tag/v2.0.0

### [Undici v7 is here](https://blog.platformatic.dev/undici-v7-is-here)

- fetch() 에서 써드파티 Blob, FormData, AbortController를 지원했었으나 제거하기로 결정
- 인터셉터 구성
- 캐싱을 RFC 9111에 따른 shared cache로 구현

### [Kaluma](https://kalumajs.org/)

- 라즈베리 파이를 위한 작고 효율적인 JS 런타임
- 300KB ROM, 64KB RAM에서 작동
- 비동기의 경우 Nodejs와 같은 내부 이벤트 루프 존재
- 파일시스템, 그래픽, 네트워킹을 포함한 내장 모듈 존재

# Javascript

### [Astro 5.0](https://astro.build/blog/astro-5/)

- Content Layer - 콘텐츠를 정의하고, 로드하고, 액세스 하는 통합된 타입 세이프한 API 제공
- Server Island - 고성능 정적 HTML과 동적 서버 제너레이터 컴포넌트를 같은 페이지에 결합 가능
- Simplified prerendering - 하이브리드 옵션과 정적 옵션이 `static` 옵션으로 통합되어 간소화
- vite 6 사용

### [Working with JavaScript's Scheduler API](https://www.trevorlasn.com/blog/javascript-scheduler-api)

- 전통적으로 setTimeout으로 컨트롤했던 스케쥴링을 보다 정확하게 제어할 수 있는 API
- 세 개의 우선순위 레벨 지원
    - user-blocking - 메인스레드를 차단하고 즉각적인 작업. e.g. 사용자 입력 처리
    - user-visible - 중요하지만 차단하지는 않는 자업. e.g. 다음화면을 위한 데이터 페칭
    - background - 사용자 경험에 영향을 주지 않고 백그라운드에서 실행하는 작업. e.g. 에셋 사전 로드
- 브라우저는 우선순위 순서대로 실행한 다음 큐잉 순서에 따라 실행.
- 작업 중 taskController, abortController로 동작의 우선순위를 변경하거나 중단 허용.

# ETC

### Release

- [Prisma 6: Better Performance, More Flexibility & Type-Safe SQL](https://www.prisma.io/blog/prisma-6-better-performance-more-flexibility-and-type-safe-sql)
- [react-route-v7](https://remix.run/blog/react-router-v7)
- [preact v10.25.0](https://github.com/preactjs/preact/releases/tag/10.25.0)
- [mathjs v14.0.0](https://github.com/josdejong/mathjs/releases/tag/v14.0.0)