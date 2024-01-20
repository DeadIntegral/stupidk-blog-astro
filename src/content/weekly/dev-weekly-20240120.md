---
title: dev-weekly 2024-01-20
date: "2024-01-20T13:30:00.000Z"
description: "dev-weekly 2024-01-20"
tags: ["javascript", "CSS", "node"]
---

# CSS

### **[CSS-only loader configurators](https://www.loadership.com/)**

- CSS only 로딩 인디케이터 제작 사이트. GUI에서 커스텀하고 코드 제너레이팅.

# Node

### **[npm in Review: A 2023 Retrospective on Growth, Security, and Quirky Facts](https://socket.dev/blog/2023-npm-retrospective)**

- npm 2023년 회고. 2023년 말까지 250만 개 이상의 패키지 출시. 다운로드 횟수는 월 1840억 이상.
- 2023년에 약 천만개의 패키지 버전이 npm 레지스트리에 퍼블리시.
- 의존성 많은 패키지 랭킹, 주간 다운로드 많은 패키지 랭킹, 이름이 가장 긴 패키지, 용량이 가장 큰 패키지, 메인테이너가 많은 패키지 정보 제공.

### **[Node v20.11.0 (LTS)](https://nodejs.org/en/blog/release/v20.11.0)**

- esm기반의 `import.meta.dirname`, `import.meta.filename` 추가.

# Javascript

### **[Top Front-End Tools Of 2023](https://www.smashingmagazine.com/2024/01/top-frontend-tools-2023/)**

- [https://scrollbar.app/](https://scrollbar.app/) GUI로 스크롤 커스텀하고, css를 제너레이트 해주는 서비스
- [https://github.com/bitjson/qr-code](https://github.com/bitjson/qr-code) 애니메이션이 가능하고, 본문에 이미지를 넣을 수 있는 qrcode 웹 컴포넌트

### **[What PWA Can Do Today](https://whatpwacando.today/)**

- PWA로 할 수 있는 것.
- 단, 모두 스테이블 하지는 않고 브라우저 버전에 영향받는 기능도 다수 존재.

### **[console.delight](https://frontendmasters.com/blog/console-delight/)**

- 브라우저 콘솔에서 할 수 있는 것들
    - svg capabilities, css capabilities, JavaScript capabilities 정리.
    - 콘솔에서 이미지를 애니메이션 하거나 링크가 포함된 디자인 하는 예제

### **[The Golden Rule of Assertions](https://www.epicweb.dev/the-golden-rule-of-assertions)**

- 테스트가 언제 실패하는지를 기점으로 테스트에 대한 기준을 설명하는 글.
- 세부구현은 테스트에 포함하지 않기

# ETC

### **[How to use data-nosnippet to block specific content from being used in a Google search snippet [Experiment]](https://www.gsqi.com/marketing-blog/how-to-use-data-nosnippet/)**

- 구글 검색 결과에 표시되지 않기를 원하는 텍스트 제외하기 - `data-nosnippet="true"` 어트리뷰트
- div, span, section만 작동.
- SERP의 변화를 모니터링 할 것. 더 나쁜 텍스트가 스니펫되었을 수 있음.

### **[Money Talks! Formatting Currency in Web Content](https://www.tpgi.com/money-talks-formatting-currency-in-web-content/)**

- 스크린 리더기별 통화 판독
- A$12.34 (호주달러)와 같은 것은 읽지 못하고 두 글자 국가 코드, 세 글자 IBAN 코드가 오는 경우 인식.
- 미국달러인 경우 접두어 생략

### **Release**

- [prettier v3.2.0](https://prettier.io/blog/2024/01/12/3.2.0.html) - jsonc, angular ICU 표현 지원
- [knip v4.0](https://knip.dev/blog/knip-v4)
- [ReScript 11.0](https://rescript-lang.org/blog/release-11-0-0)