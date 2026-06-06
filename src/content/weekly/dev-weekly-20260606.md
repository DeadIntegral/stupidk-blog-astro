---
title: dev-weekly 2026-06-06
date: "2026-06-06T16:30:00.000Z"
description: "dev-weekly 2026-06-06"
tags: ["typescript", "javascript", "ai", "wasm", "node", "vite", "cloudflare", "astro"]
---

# Javascript

### [**Why does tsgo use so much memory?**](https://zackoverflow.dev/writing/why-does-tsgo-use-so-much-memory)

- tsgo는 멀티스레딩 환경에서 스레드별로 타입 체커 생성. 각 타입 체커는 고유한 상태(타입, 심볼)갖고 이는 동기화되지 않고 중복.
- 할당한 타입은 절대 해제되지 않음.

### [Component Party: Web Component JS frameworks overview](https://component-party.dev/)

- JS 프레임워크들 컴포넌트 비교. 프레임워크를 선택하면 각 기능(Reactivity, Templating, Lifecycle)에 대해 선택한 프레임워크들로 구현한 예제 제공

### [replacements.fyi: A web app to render module replacements](https://github.com/e18e/replacements.fyi)

- 패키지를 입력하면 보다 가벼운 유사한 패키지 및 네이티브 코드를 추천해주는 도구

### [How Wasmer used Codex to build a Node.js runtime for the edge](https://openai.com/index/wasmer/)

- Docker 컨테이너 없이 WASM 샌드박스 내에서 node.js 워크로드를 실행 가능.
- Wasmer 팀에서 AI와 코덱스를 사용해 2주만에 JS 런타임(edge.js)을 제작.
- [https://wasmer.io/posts/edgejs-safe-nodejs-using-wasm-sandbox](https://wasmer.io/posts/edgejs-safe-nodejs-using-wasm-sandbox)

# AI

### [Copilot SDK is now generally available](https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/)

- github copilot 에이전트 런타임에 직접 접근 가능
- 6개 언어 지원. nodejs, python, go, .net, rust, java
- copilot free도 사용 가능

### [Code Wiki](https://codewiki.google/)

- 코드 레포지토리를 위한 AI 기반 문서 허브. 개발자가 새로운 코드베이스를 빠르게 이해할 수 있도록 설계.
- 고급 에이전트가 소스 코드를 분석해 자연어 요약, 아키텍처 다이어그램, 핵심 정보 생성. 대화형 채팅 기능 제공

# ETC

### [VoidZero is joining Cloudflare](https://blog.cloudflare.com/voidzero-joins-cloudflare/)

- vite를 vite답게 만드는것들 유지할 것. MIT 라이선스고, 벤더에 구애받지 않을 것.
- 26년 초 Astro가 합류할때도 같은 약속함. 여전히 오픈소스고 어디든 배포 가능. 최우선 목표는 vite가 받아온 신뢰를 유지 하는 것.
- vite 메인테이너 중 일부가 Cloudflare에 합류하더라도 다른 기여와 마찬가지로 공개 기여 프로세스를 거칠 것. 추가되는 기능은 Cloudflare에 특화된 것이 아니어야 함.

### [typescript-tips-everyone-should-know](https://github.com/AllThingsSmitty/typescript-tips-everyone-should-know)

- 안전성, 가독성, 유지보수성, DX를 향상시키는 실용적인 TS 패턴 모음.
- e.g.
    - 오버 어노테이션을 피하고 추론 가능하게 하기
    - as 대신 satisfies 사용하기

### Release

- [date-fns v4.4](https://github.com/date-fns/date-fns/releases/tag/v4.4.0)
- [Ember 7.0 Released](https://blog.emberjs.com/ember-released-7-0/)
- [astro v6.4](https://astro.build/blog/astro-640/)