---
title: dev-weekly 2023-05-20
date: "2023-05-20T09:00:00+09:00"
description: "dev-weekly 2023-05-20"
tags: ["javascript", "css", "node", "etc"]
---

# CSS

### **[Conditional CSS with :has and :nth-last-child](https://ishadeed.com/article/conditional-css-has-nth-last-child)**

- `nth-last-child` 와 `has` 를 사용하여 엘리먼트 개수에 따른 CSS 정의하기
- example)
    
    ```css
    /* default grid */
    .list {
        --item-size: 200px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--item-size), 1fr));
        gap: 1rem;
    }
    
    /* If the grid has 5+ items, change the --item-size width to 150px */
    .list:has(li:nth-last-child(n + 5)) {
        --item-size: 150px;
    }
    ```
    

### **[What's New in CSS and UI: I/O 2023 Edition](https://developer.chrome.com/blog/whats-new-css-ui-2023/)**

- 크롬에 최근 출시되었거나 곧 출시될 CSS 20가지

# Node

### **[Reducing the cost of string serialization in Node.js core](https://www.yagiz.co/reducing-the-cost-of-string-serialization-in-nodejs-core)**

- Nodejs에서 직렬화 비용을 줄이는 연구. 문제 정의 에서부터 솔루션까지.
- URL parser (ADA)를 예제로 설명

### **[NPM Status](https://status.npmjs.org/)**

- NPM의 가용성에 대해 실시간으로 확인하는 페이지

### **[How to Handle Emojis in Node](https://backend.cafe/how-to-handle-emojis-in-nodejs)**

- nodejs에서 '😊'.length 가 2인 이유
- 이모지란 무엇인가 - `Character modifiers`와 `Combining characters`. `code point`, `code unit`, `surrogate pair`
- nodejs에서는 문자열을 일련의 16비트 유니코드 문자로 간주하여 하나의 코드 단위는 16비트
- 정확한 세그먼트 숫자 세기
    
    ```css
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    [...segmenter.segment('🤌🏼')].length // 1 🎉
    ```
    

# Javascript

### **[Shared autofill across iframes: an initial proposal](https://developer.chrome.com/blog/shared-autofill/)**

- cross origin iframe에서 자동완성 기능 `shared-autofill` 베타 지원
- 사용사례) 결제와 같이 써드 파티에서 로드되는 곳

### **[A simple, modern QR code library](https://github.com/Rich-Harris/headless-qr)**

- 리치해리스가 만든 QRCode 라이브러리.
- [https://github.com/kazuhikoarase/qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) 에서 필요없는 부분 제거

### **[jQuery 3.7.0 Released: Staying in Order](https://blog.jquery.com/2023/05/11/jquery-3-7-0-released-staying-in-order/)**

- Sizzle 엔진 별도의 프로젝트 아니고 jQuery core로 이동.
- 레거시 브라우저의 지원을 끊으면서 append와 같은 메서드들 성능 향상
- IE대응 등. jQuery 5.0 에는 IE 지원 제거

### **[Tech Byte: Meta Backs the OpenJS Foundation](https://thenewstack.io/meta-backs-the-openjs-foundation-for-greater-diversity/)**

- Meta OpenJS 재단에 합류

### **[Messenger Desktop: Faster and Smaller by moving to React Native from Electron](https://developers.facebook.com/blog/post/2023/05/17/messenger-desktop-faster-and-smaller-by-moving-to-react-native-from-electron/)**

- Meta가 메신저 데스크톱을 일렉트론으로 만들면서 가졌던 문제들, 대안 선택 이유
- RN Desktop 선택(성능 향상, 번들 감소)과 이유(코드 재사용 등), RN 의 남은 과제 공유 및 MS와의 협력.

### **[React Server Components, Next.js App Router and examples](https://addyosmani.com/blog/react-server-components-app-router/)**

- RSC, NextjsApp Router 등에 대해 리액트 커뮤니티에서 논의됐던 내용 요약 정리

### Release

- [ember.js 5.0](https://github.com/emberjs/ember.js/releases/tag/v5.0.0)
- **[Jasmine Core 5.0.0 Release](https://github.com/jasmine/jasmine/blob/main/release_notes/5.0.0.md)**
- [transformers.js 2.0](https://github.com/xenova/transformers.js/releases/tag/2.0.0)

# ETC

### **[Introducing Deopt Explorer](https://devblogs.microsoft.com/typescript/introducing-deopt-explorer/)**

- V8에서 생성된 트레이스 로그를 분석할 수 있는 VSCode 확장
- V8 Inline Cache가 Monomorphic, Polymorphic, Megamorphic 을 처리하는 방식과 최적화하는데 도움이 되는 도구인 Deopt Explorer에 대한 사용법
- [https://marketplace.visualstudio.com/items?itemName=rbuckton.deoptexplorer-vscode](https://marketplace.visualstudio.com/items?itemName=rbuckton.deoptexplorer-vscode)

### **[DevTools Tips](https://devtoolstips.org/)**

- 브라우저별 개발자도구 팁들 모음 백 수십가지.

### **[Shaper: A Generative Design Tool for UI Interfaces](https://shaper.design/)**

- 디자인 변형을 탐색하는 대화형 도구. 디자인 토큰을 CSS 변수로 추출 가능.