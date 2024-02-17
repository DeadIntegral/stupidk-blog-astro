---
title: dev-weekly 2024-02-17
date: "2024-02-17T20:00:00.000Z"
description: "dev-weekly 2024-02-17"
tags: ["javascript", "css"]
---

# CSS

### **[CSS is Logical](https://geoffgraham.me/css-is-logical)**

- CSS를 이해하는데 도움되는 명제들의 나열
- e.g. 블록 및 인라인 방향은 writing mode를 기준으로 합니다.

### **[CSS Neural Network (number detection)](https://codepen.io/bali_balo/pen/gOqEmgG)**

- HTML, CSS만 사용하여 만든 숫자 감지하는 뉴럴네트워크 샘플 페이지.
- [https://dev.to/grahamthedev/pure-css-neural-network-aiits-easier-that-you-think-f02](https://dev.to/grahamthedev/pure-css-neural-network-aiits-easier-that-you-think-f02)

# Javascript

### **[In its tantrum with Europe, Apple broke web apps in iOS 17 beta, still hasn't fixed them](https://www.theregister.com/2024/02/08/apple_web_apps_eu/)**

- iOS 17.4 두 번째 베타에서 PWA는 스탠드얼론 앱에서 브라우저에서 열리는 것으로 강등
- 글 작성 시점인 세번째 베타에서도 여전히 고장난 상태.

### **[React Labs: What We've Been Working On – February 2024](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024)**

- 리액트 랩스 작업 중간 공유
- 리액트 컴파일러
    - 프로덕션 환경에서 인스타그램 지원중.
    - useMemo, useCallback, memo등은 절충안
- 액션 - 클라이언트 전용 애플리케이션의 데이터 처리도 지원
- 리액트 카나리 소개
    - Directives, Document Metadata, Asset Loading, Actions
- 문서 메타데이터 등은 리액트 19에서 지원할 것. 여기엔 웹 컴포넌트 지원 등도 포함.
- 연구중인 기능의 이름을 Offscreen에서 Activity로 변경

### **[example-react-todo-google-sheets](https://github.com/apicodev/example-react-todo-google-sheets)**

- 클라이언트는 리액트, 서버는 구글 시트로 사용한 투두 앱 예제

# ETC

### **[어떤 캐시가 일을 더 잘합니까? — FIFO가 LRU보다 낫습니다요](https://medium.com/rate-labs/%EC%96%B4%EB%96%A4-%EC%86%8C%EA%B0%80-%EC%9D%BC%EC%9D%84-%EB%8D%94-%EC%9E%98%ED%95%A9%EB%8B%88%EA%B9%8C-fifo%EA%B0%80-lru%EB%B3%B4%EB%8B%A4-%EB%82%AB%EC%8A%B5%EB%8B%88%EB%8B%A4%EC%9A%94-1a49b9060ce4)**

- 소프트웨어 캐시에 대한 연구 동향

### **[개발자가 "No"라고 말할 때 물어봐야 할 4가지 질문](https://news.hada.io/topic?id=13333)**

- 개발자가 No라고 할 때 상황을 타개하도록 돕는 질문들
- 엔지니어 입장에서는 스스로에게 하기 좋은 질문들

### **[The TC39 Process](https://tc39.es/process-document/)**

- TC39 프로세스에 스테이지 2.7 추가
- 2.7 - 제안이 승인되었고 검증중. 솔루션이 완성되었으나 테스트, 구현, 사용 경험을 통한 피드백 없이는 더이상의 작업 불가. 테스트, 구현, 사용경험으로 도출된 사항 외에는 제안 변경 요청 안함

### **Release**

- [hono v4.0.0](https://github.com/honojs/hono/releases/tag/v4.0.0)
- [jointjs 4](https://www.jointjs.com/blog/introducing-version-4)
- [astro 4.4.0](https://astro.build/blog/astro-440/)
- [angular 17.2](https://blog.angular.io/angular-v17-2-is-now-available-596cbe96242d)