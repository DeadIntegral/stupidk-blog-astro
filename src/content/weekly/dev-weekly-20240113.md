---
title: dev-weekly 2024-01-13
date: "2024-01-13T10:40:00.000Z"
description: "dev-weekly 2024-01-13"
tags: ["javascript", "CSS", "a11y", "node", "Benchmark"]
---
# CSS

### **[How to make external links accessible](https://blog.pope.tech/2024/01/02/how-to-make-external-links-accessible)**

- 외부 링크는 유저에게 선택권을 주기 위해서 현재 탭에서 열려야함. 새 탭에서 열리게 하면 유저의 선택권 박탈.
- 폼 진행 상황을 잃게되는 경우에는 외부 링크가 새 탭에서 열려야 함.
- 현재 페이지의 정보가 여전히 필요하다면 새 탭이나 창도 정당화

# Node

### **[The State of Benchmarking in Node.js](https://www.webpro.nl/articles/the-state-of-benchmarking-in-nodejs)**

- 내 코드에서 사용해볼 코드 예제와 CodeSandbox
- Macro 벤치마크
    - node:perf_hooks 에서 제공하는 기능들과 -performance 플래그. 플래그가 없으면 함수가 래핑되지 않고 오버헤드도 없음.
- Micro 벤치마크
    - console.time, performance.now가 있긴하지만 Benchmark.js 추천
    - 컴파일러 최적화 등 주의사항

# Javascript

### **[How Google perfected the web](https://www.theverge.com/c/23998379/google-search-seo-algorithm-webpage-optimization)**

- 구글 검색 알고리즘이 인터넷의 모습과 기능에 미친 영향
    - 구글에선 빠른 로딩, 대체 텍스트 등을 요구하며 사용자의 경험을 좋게 만들면 된다고 가이드 하지만 명확한 기준은 공개되지 않음.
    - 웹사이트가 구글의 선호도를 자체 고유한 스타일보다 우선시함으로써 웹 디자인이 비슷해짐.
    - 자체 독자층을 구축하는것이 아니라 구글에 콘텐츠를 제공하도록 최적화
    - 2022년 12월 EEAT(경험)를 평가 지침에 추가

### **[Frontend predictions for 2024](https://buttondown.email/whatever_jamie/archive/frontend-predictions-for-2024/)**

- 2023년 동안의 프론트 동향과 2024년 예측

### **[European Union set to revise cookie law, admits cookie banners are annoying](https://www.techspot.com/news/101396-european-union-set-revise-cookie-law-admits-cookie.html)**

- EU의 목적은 사용자가 쿠키를 설정할 수 있게 하는 것.
- 기업들은 쿠키를 거부하기 위하여 여러 플로우를 거치도록 하여 모두 허용을 유도. 쿠키 피로도 완화시키기를 희망.

### **[The Complete Playwright Cheatsheet](https://proxiesapi.com/articles/the-complete-playwright-cheatsheet)**

- 액션 단위로 코드설명을 붙여놓은 playwright cheatsheet

### **[Rspack 0.5](https://www.rspack.dev/blog/announcing-0.5)**

- rspack.HotModuleReplacementPlugin 지원
- default transformation 제거
- v 1.5 federation API와 module federation 지원
- 사용하지 않는 내장 옵션들 제거

### **[zip.js](https://gildas-lormeau.github.io/zip.js/)**

- 멀티 코어 압축, 압축 스트림, zip64, 분할파일, 암호화를 지원하는 압축/압축해제 JS 라이브러리

# ETC

### **[Generate RegEx](https://www.subiregex.com/)**

- 자연어를 넣으면 그에 맞는 정규식을 생성해주고 왜 그렇게 만들었는지 설명해주는 도구
- e.g. korea phone number // ^\+82-\d{2}-\d{3,4}-\d{4}$

### **Release**

- [docusaurus 3.1](https://docusaurus.io/blog/releases/3.1)
- [Astro 4.1](https://astro.build/blog/astro-410/)