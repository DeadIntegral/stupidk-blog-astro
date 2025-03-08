---
title: dev-weekly 2025-03-08
date: "2025-03-08T12:19:00.000Z"
description: "dev-weekly 2025-03-08"
tags: ["javascript", "node", "ai", "browser"]
---

# CSS

### [Functions in CSS?!](https://css-tricks.com/functions-in-css/)

- css에 function 추가 예정. 크롬 카나리에서 사용 가능
    
    ```css
    @function --intrinsic-container(--inline-margin: 1rem, --max-width: 60ch) {
      result: min(100% - var(--inline-margin), var(--max-width));
    }
    ```
    
- 스펙에 따라 얼리 리턴 불가능

# Node

### [Node just added TypeScript support. What does that mean for Deno?](https://deno.com/blog/typescript-in-node-vs-deno)

- Nodejs에서 TS 지원은 되지만 여전히 타입 체크, JSX/TSX 는 외부 도구 필요
- Deno는 완전히 통합된 TS 툴체인을 갖춘 단일 실행 파일로 제공
    - zero config, CI에서 deno check, LSP를 통한 에디터에서의 즉각적인 피드백과 린팅
    - TS모듈을 직접 배포하여 변환, d.ts 필요 없음

# Javascript

### [Announcing TypeScript 5.8](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/)

- 5.8 베타 이후 변경사항 - 조건부 리턴 타입을 가진 함수 검사방법에 대해 일부 작업 철회. 몇 가지 제한사항 및 변경사항을 바탕으로 5.9 에서 출시할 계획.

### [Truth, Lies and Progress Bars](https://cloudfour.com/thinks/truth-lies-and-progress-bars/)

- progress bar는 계산되는게 아니라 일정 시간마다 진행되다가 완료되면 다 채우는 형태
- 거짓말이지만 없다면 사용자는 중단되거나 충돌했을까 걱정하고 불필요하게 작업을 취소할 수 있음.
- 전체 양을 모르더라도 지금 얼마나 했는지 표시해주면 사용자는 진행상황 확인 가능

### [Lynx: Unlock Native for More](https://lynxjs.org/blog/lynx-unlock-native-for-more)

- 웹 기술을 활용하여 네이티브, 웹 등 크로스 플랫폼 개발을 지원하는 오픈소스
- Instant First-Frame Rendering (IFR)과 Main-Thread Scripting (MTS) 아키텍쳐.
    - 사용자 스크립팅을 정적으로 강제로 분할. 메인스레드와 백그라운드 런타임

# ETC

### [Our Favorite DevTools Features of 2025](https://www.debugbear.com/blog/favourite-devtools-features-in-2025)

- Optimize DOM size 기능 추가.
- Performance 패널에서 3rd party 필터링 가능
- Privacy and Security 패널에서 3rd party 쿠키 차단 등 시뮬레이션 가능
- CPU 쓰로틀 Mid-tier, Low-tier Mobile Device 표시를 추가
- 퍼포먼스 패널의 각 영역을 AI 어시스턴트가 개선 제안
- Element 패널의 DOM에서 스크롤 있는 엘리먼트는 옆에 뱃지로 표시

### Release

- [eletron 35.0](https://www.electronjs.org/blog/electron-35-0)
- [cropperjs v2.0.0](https://github.com/fengyuanchen/cropperjs/blob/main/CHANGELOG.md)
- [perspective v3.4.0](https://github.com/finos/perspective/releases/tag/v3.4.0)