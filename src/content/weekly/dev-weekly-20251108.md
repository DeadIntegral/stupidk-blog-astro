---
title: dev-weekly 2025-11-08
date: "2025-11-08T20:25:00.000Z"
description: "dev-weekly 2025-11-08"
tags: ["javascript", "bun", "css", "video", "animation"]
---

# CSS

### [Use Cases for Field Sizing](https://ishadeed.com/article/field-sizing/)

- `field-sizing: content;` select, input 등의 크기를 텍스트에 맞춰주는 새로운 프로퍼티
- 크롬, 엣지 123부터 지원, 파이어폭스, 사파리 지원 안함

### [High-Performance Syntax Highlighting with CSS Highlights API](https://pavi2410.com/blog/high-performance-syntax-highlighting-with-css-highlights-api/)

- 과거의 JS기반 신택스 하이라이터들은 <span></span>으로 감싸고 스타일을 입히는 형태. DOM 노드가 늘어나서 오버헤드가 발생. CSS Highlights API는 DOM 변형 없음.

# Nodejs

### [Vercel now supports the Bun Runtime](https://bun.com/blog/vercel-adds-native-bun-support)

- `vercel.json` 에 `"bunVersion": "1.x"` 추가하면 bun runtime 사용 가능

# Javascript

### [The Inner Workings of JavaScript Source Maps](https://www.polarsignals.com/blog/posts/2025/11/04/javascript-source-maps-internals)

- 소스맵은 JSON 포맷. 필드 중 mappings 라는게 있고, 여기가 소스맵의 핵심. VLQ 인코딩을 사용하여 토큰과 원본 소스 파일 위치간 실제 위치 매핑
    - 원본 소스 파일의 경로와 이름, 소스 파일의 정확한 줄과 열, 원본 변수/함수 이름을 추적.
    - 매핑 문자열은 쉼표와 세미콜론으로 구성된 일련의 세그먼트.
- 각 세그먼트는 생성된 파일 위치에서 원본 파일 위치로의 매핑
    - 1 value - 어떤 소스에도 매핑 안함(e.g. webpack에서 생성한 코드)
    - 4 value - 생성된 파일 위치를 소스 파일 위치로 매핑
    - 5 value - 4와 동일하며 변수/함수의 원래 이름에 대한 참조 추가
    - 세그먼트는 파일의 열만 있고 줄 번호는 없음. 줄 번호는 `;` 으로 결정.

### [Video.js gets a reboot: Introducing Video.js v10](https://www.mux.com/blog/videojs)

- Videojs 재작성. 모놀리식 아키텍처를 해체하여 UI와 미디어 렌더러 분리. 트리셰이킹, 인텔리전트 코드 스플릿 지원
- 번들크기 70~80% 감소.

# ETC

### [Your URL Is Your State](https://alfy.blog/2025/10/31/your-url-is-your-state.html)

- URL은 상태를 저장하는 컨테이너. 인터페이스이며 UX의 일부.
    - 다른 사람에게 공유 가능하고, 북마크 가능하며, 뒤로가기가 동작하고, 딥링킹 가능
- primejs, github, google map, figma 등 URL 잘 활용한 사례 소개

### [New to the web platform in October](https://web.dev/blog/web-platform-10-2025?hl=en)

- SPA를 위한 view transition API - FF 144 에서 지원. 모든 모던 브라우저에서 사용 가능

### [How To Throttle Specific Requests In Chrome DevTools](https://www.debugbear.com/blog/chrome-devtools-throttle-individual-request)

- Chrome Canary에서 특정 요청이나 도메인 단위로 네트워크 제한 기능 제공
- 고정시간 만큼 딜레이 가능 e.g. 폰트 2초 후 로딩

### [The Web Animation Performance Tier List](https://motion.dev/blog/web-animation-performance-tier-list)

- 애니메이션 성능 등급을 목록을 작성하여 어떤걸 피해야 하는지 설명
- 렌더 파이프라인과 스레드
- S티어 - only 컴포짓 스레드, A티어 - 메인 스레드에서 실행하지만 컴포지터 트리거, B티어 - DOM 측정이 필요하지만 이후 A or S 애니메이션으로 실행, C - 트리거 페인트
- CSS, WAAPI (혹은 이걸 사용하는 도구. e.g. motion)는 메인 스레드가 바빠도 부드럽게 유지.
- rAF기반 도구(e.g. GASP)는 메인스레드에서 실행
- 하드웨어 가속 애니메이션의 장점은 스타일을 다시 계산하지 않고도 시각적 요소 업데이트 가능
- 컴포지터 애니메이션 엔진은 스펙 완벽할 필요 없음. 지원하지 않는 기능 메인스레드로 처리.
    - 사파리이의 경우 전용 컴포지터 엔진 없고 코어 에니메이션이 지원하지 않는 기능은 하드웨어 가속 안됨
- transform, opacity를 레이어가 아닌 곳에서 사용하면 paint 트리거 할 수 있음.
- CSS variable은 트리 내의 다양한 요소에 상속됨. 이 값을 변경하면 전체 트리에서 값이 무효화되어 전체를 재계산.

### Release

- [electron 39](https://www.electronjs.org/blog/electron-39-0)
- [storybook 10](https://storybook.js.org/blog/storybook-10/)
    - esm-only로 변경. 설치 용량 29% 감소.
- [Turborepo 2.6](https://turborepo.com/blog/turbo-2-6)
- [Perspective v4.0.0](https://github.com/perspective-dev/perspective/releases/tag/v4.0.0)
- [marked v17.0.0](https://github.com/markedjs/marked/releases/tag/v17.0.0)