---
title: dev-weekly 2024-07-13
date: "2024-07-13T16:58:00.000Z"
description: "dev-weekly 2024-07-13"
tags: ["css", "node", "javascript"]
---

# CSS

### **[The Magic of Clip Path](https://emilkowal.ski/ui/the-magic-of-clip-path)**

- clip path는 DOM 노드를 특정 모양으로 트리밍하는데 자주 사용되지만 애니메이션에도 좋음 (하드웨어 가속 적용)
- 비교 슬라이더, 텍스트 마스크 효과, 애니메이션, 탭 전환 등 예제

# Node

### **[Moving from express to fastify, pt 1](https://blog.val.town/blog/fastify/)**

- express는 지난 15년동안 수많은 변화속에서도 프로젝트의 기본값으로 자리를 지키고 있음.
- val town은 express로 시작했지만 이제는 fastify로 마이그레이션 중
- fastify를 선택한 이유, @fastify/express를 이용한 점진적 포팅

# Javascript

### **[Script Integrity](https://frontendmasters.com/blog/script-integrity/)**

- 제어하지 못하는 도메인의 리소스를 링크하면 위험. 이에 대한 방지로 브라우저는 integrity 어트리뷰트 제공.
- 변경이 있었다면 브라우저는 해당 스크립트를 실행하지 않음.

### **[YouTube Embeds are Bananas Heavy and it’s Fixable](https://frontendmasters.com/blog/youtube-embeds-are-bananas-heavy-and-its-fixable/)**

- youtube embed 는 1.3MB, 32개의 요청 사용. 또한 임베드를 여러개 하면 같은 양의 리소스 추가 요청.
- lite-youtube-embed를 사용하면 100KB의 리소스
- Shadow DOM 버전, Nextjs 공식 버전 등 다른 얼터네이티브 제시

### **[What's the difference between JavaScript engines and JavaScript runtimes?](https://humanwhocodes.com/blog/2024/03/javascript-engines-runtimes/)**

- JS 엔진과 JS 런타임의 차이
- JS런타임은 ECMAScript 호스트로 JS 엔진을 내장한 프로그램. 웹브라우저는 DOM, Web API를 구현하지만, 서버측 런타임은 파일 시스템 액세스를 구현
- 이벤트 루프는 ECMA-262에는 정의 되어 있지 않고, 때문에 JS엔진에도 구현되어 있지 않음. 웹브라우저는 HTML 사양에 정의된 구현을 사용하고, 서버측 런타임은 자체 구현.

### **[What's coming next for ESLint](https://eslint.org/blog/2024/07/whats-coming-next-for-eslint/)**

- ESLint 9.0 이후의 메이저 변경사항
- 언어 플러그인. 현재 계획은 JS, JSON, Markdown 이렇게 3가지는 공식 플러그인 지원 예정
- 코어 재작성 - 새로운 저장소, 최신 패키지, JS 런타임에 독립적인 코어, 컴포저블 API, 새로운 CLI, 병렬 개발

### **[Sneaky React Memory Leaks: How the React compiler won't save you](https://schiener.io/2024-07-07/react-closures-compiler)**

- 클로저를 통해 리액트에서 메모리 릭 생성, 리액트 컴파일러의 작동 방식
- 리액트 컴파일러가 처리하지 못하는 메모리 릭 만들기

# ETC

### **Release**

- [deno v1.45.0](https://github.com/denoland/deno/releases/tag/v1.45.0)
- [angular v18.1.0](https://github.com/angular/angular/releases/tag/18.1.0)
- [tinybase v5.0](https://tinybase.org/guides/releases/#v5-0)
- [quickjs v1.3.0](https://github.com/sebastianwessel/quickjs/releases/tag/v1.3.0)
- [jotai v2.9.0](https://github.com/pmndrs/jotai/releases/tag/v2.9.0)
- [eruda v3.1.0](https://github.com/liriliri/eruda)