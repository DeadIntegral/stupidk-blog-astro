---
title: dev-weekly 2023-10-21
date: "2023-10-21T13:10:00.000Z"
description: "dev-weekly 2023-10-21"
tags: ["javascript", "CSS", "node", "unicode"]
---
# CSS

### **[CSS Findings From Photoshop Web Version](https://ishadeed.com/article/photoshop-web-css/)**

- 포토샵 웹 버전 CSS 분석글
- 앱처럼 보이기 위해 body에서 position fixed, overflow hidden
- 대부분의 영역은 flexbox, 레이어 프로퍼티 등 일부 영역은 그리드.
    - 레이어 영역의 indent는 calc(n * var(—변수))
- overscroll-behavior: contain 를 사용한 본문 콘텐츠의 스크롤 방지

### **[The 6 Must-Know Rules of Margin Collapsing in CSS](https://medium.com/@RitikaAgrawal08/the-6-must-know-rules-of-margin-collapsing-in-css-56968836827d)**

- 마진이 병합되거나 병합되지 안는 케이스들
    - inline은 마진 병합 없음. ex) inline-flex, inline-grid는 마진 병합 없음
    - writing-mode 에 따라 병합되는 방향도 변경
    - 부모와 자식간 마진 병합

# Node

### **[Node.js 21 Available Now!](https://openjsf.org/announcement/2023/10/17/node-js-21-available-now/)**

- V8 engine 11.8 로 업데이트
- WebStream제공

### **[Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop)**

- NodeJS의 디자인과 현명하게 사용하기 위한 애플리케이션 구성에 대한 가이드
- NodeJS는 이벤트 기반 아키텍쳐. 오케스트레이션을 위한 이벤트 루프와 비용이 많이 드는 작업을 위한 워커 풀 존재.
    - 이벤트 루프는 이벤트에 등록된 JS 콜백을 실행하고 네트워크I/O와 같은 논블록킹 비동기 요청 처리
    - libuv에서 구현. 비용이 많이 드는 작업 처리. IO집약, CPU 집약 작업들.
- 이벤트 루프는 실제 큐를 유지하지 않고, epoll, kqueue, IOCP 를 사용하여 운영체제 모니터링
- NodeJS는 소수의 스레드로 많은 클라이언트를 처리하기 때문에 스레드가 블록되면 보류중인 클라이언트 요청은 전달되지 않을 수 있음. 때문에 공정한 일정을 보장해야함.
- 이벤트 루프와 워커 풀에 대한공정한 일정을 보장하는 방법
    - 이벤트 루프 차단하지 않기 - REDOS(취약한 정규식), JSON DOS
    - 이벤트 루프를 차단하지 않고 복잡한 계산

# Javascript

### **[Astro 3.3: Picture component](https://astro.build/blog/astro-330/)**

- Picture 컴포넌트 제공.
    - 특정 확장자의 이미지를 원하는 포맷 이름만 기입하면 해당 포맷들로 제공하고, 최적의 이미지로 제공
- 구문강조 라이브러리를 shiki 에서 ESM에 포커스된 shikiji 로 변경
- npm 출처 증명(provenance attestations) 대응

### **[Ecma TC39 “ECMAScript” initiates a new task group to standardize source maps](https://www.ecma-international.org/news/ecma-tc39-ecmascript-initiates-a-new-task-group-to-standardize-source-maps/)**

- 소스 맵을 표준화하기 위한 새로운 워킹 그룹(TC39-TG4) 시작
- 앞으로 계획
    - 부족한 부분을 파악하여 현재 스펙에 완전성, 명확성 더하기
    - 소스 맵 디버거, 제너레이터, 도구가 업데이트된 스펙을 준수하도록 돕기
    - 함수, 변수 이름 전달, 소스 파일, 범위 정보를 빠르게 식별하기 위한 디버그 ID 등 오랜시간 요청된 기능 추가

### **[js13kGames 2023 winners](https://github.blog/2023-10-13-js13k-2023-winners/)**

- JS 13KB로 HTMl5 게임 만드는 대회 2023년 수상작

### **[Lit Launch Day: Lit 3.0, Labs graduations, a compiler and more!](https://lit.dev/blog/2023-10-10-lit-3.0/)**

- IE11 지원 중단, 표준 데코레이터 지원
- 새로운 컴파일러를 통한 렌더링 성능 향상
- Preact signal 통합
- 패키지 세트 `@lit/react`, `@lit/task`, `@lit/context` 완성

### **[The nuances of base64 encoding strings in JavaScript](https://web.dev/articles/base64-encoding)**

- JS 의 base64 이슈들
- JS는 문자열을 UTF-16으로 처리하지만 btoa는 각 문자가 단일 바이트에 맵핑되는 이슈
- `new TextEncoder()` 와 `Uint8Array` 을 사용한 해결.
- UTF-16의 최대값은 65535인데 더 높은 숫자를 사용하는 문자(이모지) 존재.
- 이러한 서로게이트는 `encodeURIComponent` 를 사용하여 처리

### **[New Angular 17 feature: deferred loading](https://www.angularaddicts.com/p/angular-17-feature-deferred-loading-with-signals)**

- 앵귤러 17의 새로운 기능 `@defer` 소개
- 모든 컴포넌트, 지시문, 파이프라인도 지연 로딩 가능.

### Release

- [TanStack Query v5](https://tanstack.com/blog/announcing-tanstack-query-v5)
- [Storybook 7.5](https://storybook.js.org/blog/storybook-7-5/)
- [rockpack 4.0.0](https://github.com/AlexSergey/rockpack/releases/tag/4.0.0)
- [bun 1.0.6](https://bun.sh/blog/bun-v1.0.6)
- [GraphQL Yoga 5.0](https://github.com/dotansimha/graphql-yoga/releases/tag/release-1697465646824)

# ETC

### **[What's New in Unicode 15.1 & Emoji 15.1](https://blog.emojipedia.org/whats-new-in-unicode-15-1-and-emoji-15-1/)**

- 유니코드 컨소시엄에서 Emoji 15.1 에서 118개의 새로운 이모지 승인
- 새로운 6가지 이모지, 4가지 가족 이모지. 108개의 새로운 방향 지정 사람 이모지.
- 15.1의 118개의 이모지 모두 ZWJ(zero-width joiner) 시퀀스
    - 기존의 이모지 문자 또는 시퀀스를 결합하여 새로운 고유한 이모지 디자인으로 표현된다는 뜻
- 유니코드 15.1은 627자가 추가되어 총 149,813자 제공

### **[Table of Contents: The Ultimate Design Guide](https://www.nngroup.com/articles/table-of-contents/)**

- 닐슨 노먼 그룹의 목차 가이드
- 목차 배치 고려 사항
    - Rail vs Body, Sticky vs non Sticky, 페이지 상단 vs 텍스트 본문
- 스타일링 고려사항
    - 수직, 수평, 멀티컬럼 레이아웃. 링크시각화. 스무스 스크롤.
- 베스트 프랙티스
    - 명확한 라벨, 링크 라벨 불일치 방지, 스캔 가능한 제목, 목차에 외부 링크 쓰지않기, 콘텐츠 제목 스킵하지 않기, 맨 위로 이동하는 링크, 목차 일관성 보장