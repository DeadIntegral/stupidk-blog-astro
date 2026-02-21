---
title: dev-weekly 2026-02-21
date: "2026-02-21T17:36:00.000Z"
description: "dev-weekly 2026-02-21"
tags: ["javascript", "nodejs", "css"]
---

# CSS

### [**Modern CSS Code Snippets**](https://modern-css.com/)

- 레거시 코드를 모던한 방법으로 구현한 CSS 네이티브 대체 코드 제공

# Nodejs

### [We cut Node.js' Memory in half](https://blog.platformatic.dev/we-cut-nodejs-memory-in-half)

- V8 기능 포인터 압축 - 워커까지 4GB를 공유해야 했는데 isolateGroup을 만들어 이를 해결.
- 트레이드 오프
    - 메모리 - 각 포인터 크기 8바이트에서 4바이트로 감소.
    - CPU - 힙에 접근할 때 마다 읽기 작업은 덧셈, 쓰기 작업은 뺄셈 연산 추가. 계산량 측면에서 L1 캐시 적중과 비슷한 수준
    - 힙 제한 - 32비트 오프셋은 V8 isolate 당 최대 4GB 메모리 사용 가능.
- 실험결과 평균 오버헤드는 약간 증가. 하지만 P90, P99는 감소. GC가 처리할 작업이 적어지기 때문.

# Javascript

### [Oat: Ultra-lightweight UI library](https://oat.ink/)

- 의미론적이고 최소한의 기능만 제공하며 의존성 없는 UI 컴포넌트 라이브러리
- CSS, JS 파일의 크기는 약 8KB
- 시중에 나와있는 거의 모든 JS UI 라이브러리와 프레임워크의 과도한 설계, 복잡성, 의존성 문제로 인한 끝없는 좌절감 끝에 제작.

### [Electrobun v1](https://blackboard.sh/blog/electrobun-v1/)

- 크로스 플랫폼 데스크탑 앱 Electrobun v1 릴리스
- 일렉트론의 DX는 불편했고 Tauri 는 Rust가 취향이 아니었고, Bun은 기다려야 해서 직접 제작.

### [fetch-network-simulator](https://github.com/thisiskps/fetch-network-simulator)

- 개발 중 API Request/Response 동작 시뮬레이트 하는 도구.
- global fetch를 인터셉트해서 실제 환경의 불안정성 시뮬레이션.
    - Latency, Packet loss, Automatic retry, stale or out of order response, Burst control, Bandwidth thorttling

### [board-infinite-list](https://github.com/suhaotian/broad-infinite-list)

- 고성능 양방향 인피니트 스크롤 컴포넌트.
- React, Vue, Expo 지원. gzip 1.94kb

# ETC

### [Web MCP is available for early preview](https://developer.chrome.com/blog/webmcp-epp)

- 브라우저 에이전트가 유저를 대신하여 작업을 수행하도록 하는 API 제공
- HTML 폼에 직접 정의할 수 있는 표준 동작 수행
- JS실행이 필요한 복잡하고 동적인 상호작용 수행

### Release

- [biome v2.4](https://biomejs.dev/blog/biome-v2-4/)
    - js파일 내의 css-in-js, graphql 등 린트 가능 (`experimentalEmbeddedSnippetsEnabled`)