---
title: dev-weekly 2025-05-03
date: "2025-05-03T17:32:00.000Z"
description: "dev-weekly 2025-05-03"
tags: ["javascript","frontend", "css"]
---

# CSS

### [Anchor Positioning Just Don’t Care About Source Order](https://css-tricks.com/anchor-positioning-just-dont-care-about-source-order/)

- 앵커 포지셔닝은 HTML 엘리먼트 순서에 영향받지 않고 자유롭게 배치 가능. 이에 대한 코드 예시

# Javascript

### [Giving V8 a Heads-Up: Faster JavaScript Startup with Explicit Compile Hints](https://v8.dev/blog/explicit-compile-hints)

- 네트워크에서 로드된 스크립트를 처리할 때 V8은 각 함수에 대해 즉시 컴파일 할지, 지연할지 선택해야함.
- 크롬 136부터 웹 개발자가 선택할 수 있도록 명시적 컴파일 힌트 `//# allFunctionsCalledOnLoad` 제공

# Frontend

### [Storybook 9 is now in beta](https://storybook.js.org/blog/storybook-9-beta/)

- 컴포넌트 테스트(인터랙션, 접근성, 비쥬얼, 커버리지) 제공
- 스토리북 8 과 비교하여 48% 감소
- React Native 공식 지원
- 베타 마이그레이션 지원 `npx storybook@next upgrade`

### [What Does "use client" Do?](https://overreacted.io/what-does-use-client-do/)

- use client, use server는 리액트에 국한된 것이 아닌 모듈 시스템에 대한 것. 서로 다른 런타임을 하나의 코드베이스에서 정의하는 방법
    - 'use client' 클라이언트 함수를 서버로 export
    - 'use server' 서버 함수를 클라이언트로 export
- 기존에도 서버는 클라이언트 스크립트를 렌더링하고, 클라이언트는 서버와 fetch로 통신할 수 있었지만, 이 주석 시스템은 이러한 런타임 간 호출을 더 명시적이고 직접적으로 표현

# ETC

### Release

- [koa v3.0.0](https://github.com/koajs/koa/releases/tag/v3.0.0)
- [electron v36.0.0](https://github.com/electron/electron/releases/tag/v36.0.0)
- [GASP 3.13 release](https://gsap.com/blog/3-13)
    - GASP가 Webflow에 인수. Club GASP 에게만 제공되던 모든 플러그인을 포함하여 완전 무료
- [What's new in Astro - April 2025](https://astro.build/blog/whats-new-april-2025/)
- [deno 2.3](https://deno.com/blog/v2.3)