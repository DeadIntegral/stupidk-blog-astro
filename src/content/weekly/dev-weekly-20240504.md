---
title: dev-weekly 2024-05-04
date: "2024-05-04T15:00:00.000Z"
description: "dev-weekly 2024-05-04"
tags: ["javascript", "node", "css"]
---
# 2024-05-04

# CSS

### **[An alternative proposal for CSS masonry](https://developer.chrome.com/blog/masonry?hl=en)**

- 웹킷에서 정의한 masonry가 grid 스펙의 일부인 것에 대한 대체 제안.
- grid와 masonry는 작동 방식이 반대. 레이아웃 메서드가 이해되지 않을 것.
- 대안: masonry를 grid 외부에 정의 (display)

### **[Handling The Indentation of a Treeview Component](https://ishadeed.com/article/tree-view-css-indent/)**

- 웹에서 트리뷰를 만들 수 있는 다양한 예제 설명
- 깃헙, 어도비, 피그마, 카본 디자인 시스템에서 구현한 방법

### **[Doom Scroll](https://codepen.io/cobra_winfrey/pen/oNOMRav)**

- only html, css로 만든 DOOM
- `@scroll-timeline` 를 통한 애니메이션

# Node

### **[Native Support for CJS/ESM Interoperability Begins in Node.js 22](https://zacharylee.substack.com/p/native-support-for-cjsesm-interoperability)**

- ESM 으로 export된 함수 require(cjs)로 사용하기
- 실험적 기능. top level await 을 사용하면 await import를 사용해야함

# Javascript

### **[Extension.js](https://extension.js.org/)**

- plug-and-play, zero-config 를 지원하는 브라우저 익스텐션 생성 도구
- TS, WASM, React 등 모던 JavaScript 지원
- [https://github.com/cezaraugusto/extension.js](https://github.com/cezaraugusto/extension.js)

### **[React 19 Beta](https://react.dev/blog/2024/04/25/react-19)**

- 이제 npm 에서 react 19 beta 사용가능
- hook, API 업데이트
    - `useActionState` - 함수(Action)를 받고 새로운 호출할 래핑된 Action과 상태를 반환
    - `useFormStatus` - form에서 세부정도를 드릴링 하지 않고 내게 속한 정보에 액세스
    - `useOptimistic` - 요청이 진행되는 동안 즉시 렌더링되고, 업데이트가 완료되거나 실패하면 자동으로 해당 값으로 전환
    - `use` - 렌더링에서 리소스를 읽을 수 있는 새로운 API
- 함수 컴포넌트의 프롭으로 ref 접근 가능. fowaradRef 제거
- 메타 태그를 렌더링하면 자동으로 head로 호이스팅
- 스타일시트 - 우선순위를 지정하면 주입 순서를 관리하고, 해당 스타일 룰에 의존하는 콘텐츠를 표시하기 전에 로드되는지 확인
- 비동기 스크립트 - 컴포넌트에 넣어도 재배치, 중복제거를 관리할 필요 없게 렌더링
- 리소스 사전 로드 지원

# ETC

### **[jsDelivr May outage postmortem](https://www.jsdelivr.com/blog/jsdelivr-may-outage-postmortem/)**

- 2024년 5월 2일 jsDelivr cdn 5시간 장애에 대한 사후분석

### **Release**

- [React v18.3.0](https://github.com/facebook/react/releases/tag/v18.3.0)
- [Bun v1.1.6](https://bun.sh/blog/bun-v1.1.6)
- [astro v4.7.0](https://astro.build/blog/astro-470/)
- [typescript 5.5 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/)
- [react-pdf 8.0.0](https://github.com/wojtekmaj/react-pdf/releases/tag/v8.0.0)
- [preact v10.21.0](https://github.com/preactjs/preact/releases/tag/10.21.0)