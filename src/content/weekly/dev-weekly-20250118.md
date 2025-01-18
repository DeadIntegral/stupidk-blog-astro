---
title: dev-weekly 2025-01-18
date: "2025-01-18T18:09:00.000Z"
description: "dev-weekly 2025-01-18"
tags: ["css", "javascript", "browser"]
---
# CSS

### [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim?hl=ko)

- chrome 133에 text-box-tirm 도입
- half-leading 이슈를 해결하는 기술

### [A couple CSS tricks for HTML Dialog elements](https://cassidoo.co/post/css-for-dialogs/)

- html dialog 트릭
    
    ```css
    dialog::backdrop { backdrop-filter: blur(2px); }
    body:has(dialog[open]) { overflow: hidden; }
    ```
    

# Javascript

### [Learn Yjs](https://learn.yjs.dev/)

- yjs CRDT 라이브러리를 사용해 실시간 협업 앱 만들기 아티클

### [ECMAScript feature: regular expression pattern modifiers](https://2ality.com/2025/01/regexp-modifiers.html)

- JS 정규표현식 중 일부 플래그(i, m, s)를 식 전체가 아니라 부분적으로 적용 가능하게 하는 기능

### [Five years of React Native at Shopify](https://shopify.engineering/five-years-of-react-native-at-shopify)

- shopify에서 RN으로 전향했던 이유, 레슨런 공유
- 전환은 성공적이었고 5년동안 모든 앱을 마이그레이션.

# ETC

### [Tight Mode: Why Browsers Produce Different Performance Results](https://www.smashingmagazine.com/2025/01/tight-mode-why-browsers-produce-different-performance-results/)

- 브라우저 Tight Mode - fetch priority 를 트리거하는 브라우저간 동작 방식 차이
    - 사파리와 크롬 모두 우선순위를 구분하지만 크롬은 중간에 medium을 만났을 때 같이 요청, 사파리는 모든 high를 요청 후 응답이 끝나면 medium을 요청
    - 크롬은 `<head>`만 보고 판단, 사파리는 `<body>`, `css`등 문서 전체를 확인

### [Double-keyed Caching: How Browser Cache Partitioning Changed the Web](https://addyosmani.com/blog/double-keyed-caching/)

- 2010년대에는 { url: resourceData } 의 형태로 CDN-first CDN-우선 접근 방식(크로스 사이트 캐싱)이었다면, 2020년대에는 동일한 리소스라도 topLevelSite마다 구분하는 double keyed caching(a.k.a cache partioning) 로 변경 (개인정보보호 때문에)
- 캐싱 정책 변화로 인한 영향

### Release

- [bun v1.1.44](https://bun.sh/blog/bun-v1.1.44)
- [Electron v34.0.0](https://www.electronjs.org/blog/electron-34-0)
- [Cypress 14](https://www.cypress.io/blog/cypress-14-is-here-see-whats-new)