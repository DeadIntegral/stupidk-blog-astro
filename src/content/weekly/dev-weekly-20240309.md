---
title: dev-weekly 2024-03-09
date: "2024-03-09T19:00:00.000Z"
description: "dev-weekly 2024-03-09"
tags: ["javascript", "node"]
---
# Node

### **[Introducing JSR - the JavaScript Registry](https://deno.com/blog/jsr_open_beta)**

- TS에 최적화되어 있으며 ESM만 지원.
- deno, npm 기반 프로젝트에서 작동하고 무료이며 오픈소스.
    
    ```
    # deno
    deno add @luca/flag
    
    # npm (and npm-like systems)
    npx jsr add @luca/flag
    ```
    
- TS 패키지를 빌드 없이 바로 퍼블리시 가능
- 패키지 퍼블리시하는 방법과 사용하는 방법, 깃헙에서 퍼블리시하는 방법

# Javascript

### **[PixiJS v8 Launches!](https://pixijs.com/blog/pixi-v8-launches)**

- 향후 10년을 바라보며 설계
- 기존 WebGL 렌더러의 추가 기능이 아니라 핵심 패러다임으로 WebGPU를 통합
- 최신 JS 활용. 재설계 및 오버엔지니어링 제거
- 성능향상 - CPU, GPU 연산 모두 개선
- lerna 제거. 하나의 import root가 있는 하나의 패키지 (트리쉐이킹 향상)

### **[JavaScript Bloat in 2024](https://tonsky.me/blog/js-bloat/)**

- 2024년 유명 서비스들의 JS 리소스 사이즈 비교
- 위키피디아 3MB, Zoom 6MB, Vercel 6MB, Gitlab 13MB
- Medium 3MB, Quora 4.5MB, Pinterest 10MB
- Airbnb 7MB, Booking.com 12MB, google 9MB, chatGPT 7MB, Gmail 20MB
- 성능에 정말 관심있는 pornhub는 1.4MB, jQuery 0.1MB

### **[Eloquent JavaScript 4th edition (2024)](https://eloquentjavascript.net/)**

- Eloquent Javascript 2024년 버전.
- 중간중간 repl로 코드를 실습해볼 수 있는 전자책.

### **[Million Lint is in public beta](https://million.dev/blog/lint)**

- React 웹 사이트를 빠르게 유지하는 VSCode 익스텐션.
- 컴포넌트를 n번 렌더링했을 때 시간을 측정하여 코드 옆에 표시.
- 정적 분석과 런타임 측정의 장점을 모두 얻기 위해 만든 동적 분석 도구.

### **[Ultimate Guide to Visual Testing with Playwright](https://www.browsercat.com/post/ultimate-guide-visual-testing-playwright)**

- playwright를 통한 비쥬얼 테스팅 가이드
- 설치, 환경 구성 에서 시작하여 CICD 와의 인터그레이션까지 가이드

# ETC

### **Release**

- [bun v1.0.30](https://bun.sh/blog/bun-v1.0.30)
- [nvm-desktop v3.2.0](https://github.com/1111mp/nvm-desktop/releases/tag/v3.2.0)
- [undici v6.7.0](https://github.com/nodejs/undici/releases/tag/v6.7.0)
- [safari 17.4](https://webkit.org/blog/15063/webkit-features-in-safari-17-4/)
- [Announcing TypeScript 5.4](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/)
- [partytown v0.10.0](https://github.com/BuilderIO/partytown/releases/tag/v0.10.0)