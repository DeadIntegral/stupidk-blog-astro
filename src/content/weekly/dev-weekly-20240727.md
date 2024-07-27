---
title: dev-weekly 2024-07-27
date: "2024-07-27T15:09:00.000Z"
description: "dev-weekly 2024-07-27"
tags: ["node", "javascript"]
---

# CSS

### **[Anchor Links and How to Make Them Awesome](https://codersblock.com/blog/anchor-links-and-how-to-make-them-awesome/)**

- 특정 위치로 스크롤 하기
- scroll-margin, scroll-padding, anchor style등 함께 사용할 수 있는 옵션 설명
- anchor 태그를 사용한 방법, scrollIntoView 를 사용한 방법

# Node

### **[Fix the bug caused by fast api changes in v22.5.0 and have a post-mortem](https://github.com/nodejs/node/pull/53934)**

- nodejs 22.5.0 fs.closeSync에 V8 Fast API추가로 인해 대부분의 애플리케이션 중단에 대한 포스트모텀

### **[module: add --experimental-strip-types](https://github.com/nodejs/node/pull/53725)**

- node에서 플래그를 설정하여 TS 파일 실행

# Javascript

### **[How to choose the best rendering strategy for your app](https://vercel.com/blog/how-to-choose-the-best-rendering-strategy-for-your-app)**

- SSG, ISR, SSR, CSR, PPR(Partial PreRendering) 의 장단점 비교
- 어떤 렌더링이 적합한지 고려해야 할 요소 설명
- 서비스 종류별 추천하는 렌더링 전략

### **[The Pitfalls of In-App Browsers](https://frontendmasters.com/blog/the-pitfalls-of-in-app-browsers/)**

- 인 앱 브라우저의 단점 - 제한된 기능, 개인 정보 보호 및 보안, 일관되지 않은 UIUX, 나쁜 성능
- 유저 인터랙션을 모니터링하는 메타의 pcm.js, 모든 키보드 입력 모니터링하던 틱톡의 스크립트 와 같은 문제

### **[Astro 4.12: Server Islands](https://astro.build/blog/astro-4120/)**

- Server Islands 실험적 지원
    - 성능과 개인화를 모두 만족시키려는 astro의 아키텍처. React의 Suspesnse와 유사하지만 defered island가 별도의 HTTP 요청으로 렌더링된다는 차이 존재.
- Portability 를 고려하여 설계. 서버 인프라에 의존하지 않고 모든 호스트와 작동.
- [https://astro.build/blog/future-of-astro-server-islands/](https://astro.build/blog/future-of-astro-server-islands/)

# ETC

### **[Readability: The Optimal Line Length](https://baymard.com/blog/line-length-readability)**

- 가독성을 높이기 위한 방법 중 줄 길이 제한.
- 최적의 줄 길이는 약 50~75자 (WCAG 지침은 80자, 한중일 국가는 40자)

### **Release**

- [preact v10.23.0](https://github.com/preactjs/preact/releases/tag/10.23.0)
- [pnpm v9.6.0](https://github.com/pnpm/pnpm/releases/tag/v9.6.0)
- [rollup v4.19.0](https://github.com/rollup/rollup/releases/tag/v4.19.0)
- [jasmine v5.2.0](https://github.com/jasmine/jasmine/blob/main/release_notes/5.2.0.md)