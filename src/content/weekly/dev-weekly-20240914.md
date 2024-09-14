---
title: dev-weekly 2024-09-14
date: "2024-09-14T22:16:00.000Z"
description: "dev-weekly 2024-09-14"
tags: ["css", "node", "javascript", "clipboard"]
---
# CSS

### [The Undeniable Utility Of CSS :has](https://www.joshwcomeau.com/css/has)

- CSS has 사용사례 소개
- 포커싱 처리
    
    ```css
    .bento-card:has(button:focus-visible) {
      outline: 2px solid var(--color-primary);
    }
    ```
    
- 글로벌 감지 - modal 오픈하면 스크롤 숨기기
    
    ```css
    html:has([data-disable-document-scroll="true"]) {
      overflow: hidden;
    }
    ```
    
    - JS없는 dark mode 만들기
- `p:has(+ figure)` , `figure + p` 를 통해 앞뒤를 모두 선택 가능해짐

### [Time Travelling CSS With :target](https://css-tricks.com/time-travelling-css-with-target/)

- 체크박스, 라디오는 CSS만 사용하여 게임을 만드는 유명한 트릭. 사용자 입력에 기반한 다른 요소 해킹도 가능. e.g. :hover, :valid
- `:target` 가상 클래스를 활용하는 방법 - url을 북마크해서 게임 저장 가능, 게임 상태 공유 가능,  브라우저의 히스토리를 통해 게임 컨트롤 가능

# Node

### [Express 5.0](https://github.com/expressjs/express/releases/tag/v5.0.0)

- 최소지원 버전 node18

# Javascript

### [A Complete Guide to Beginning with JavaScript](https://frontendmasters.com/blog/a-complete-guide-to-beginning-with-javascript/)

- JS 에 대한 설명이 아니라 학습을 시작하기 위한 큐레이팅된 리소스를 알려주는 글
- 학습 방향에 대한 지침
- e.g. ECMA 스펙은 JS 엔진을 위한 세부 정보. 프로그래밍이나 JS를 배우기 위한 리소스로 작성되지 않음.

### [Biome v1.9 Anniversary Release](https://biomejs.dev/blog/biome-v1-9/)

- CSS 포매터와 린터가 이제 안정된 것으로 간주되어 디폴트 활성화
- GraphQL도 디폴트로 포맷팅 린팅

# ETC

### [The web's clipboard, and how it stores data of different types](https://alexharri.com/blog/clipboard)

- async Clipboard API와 Clipboard Events API
- 비동기 클립볻드 API의 경우 W3C 클립보드 스펙에선 text/plain, text/html, image/png 3가지 포맷을 지원해야 한다고 명시. 과거에는 더 많은 포맷(e.g. json)을 지원했으나 보안상의 이유로 지원하지 않기로 결정
- 클립보드 이벤트의 경우 쓰기, 읽기에 데이터 포맷 제한 없음. 하지만 유저 에이전트가 트리거하는 copy, paste 이벤트 핸들러에 대해서만 사용할 수 있음
    - 유저 에이전트에 의해 전송됐을때만 isTrusted 가 true.
- 구글은 execCommand를 통해 json 지원, 피그마는 text/html 을 보면 data-metadata와 data-buffer의 두 가지 span이 존재.
    - data-metadata는 base64인코딩, data-buffer는 피그마 CTO였던 에반이 만든 kiwi 메시지 포맷으로 인코딩
- 웹 커스텀 포맷(Pickling) - 2022년부터 크로미움에선 `"web "` 접두사를 붙여 비동기 클립보드 API를 통한 커스텀 포맷 작성 가능.

### ETC

- [Typescript v5.6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-5-6/)
- [create-fastify v5.0.0](https://github.com/fastify/create-fastify/releases/tag/v5.0.0)
- [storybook v8.3.0](https://github.com/storybookjs/storybook/blob/next/CHANGELOG.md#830)
- [relay v18.0.0](https://github.com/facebook/relay/releases/tag/v18.0.0)