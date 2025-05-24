---
title: dev-weekly 2025-05-24
date: "2025-05-24T23:41:00.000Z"
description: "dev-weekly 2025-05-24"
tags: ["node","css", "javascript", "chrome"]
---

# CSS

### [CSS snippets](https://adactio.com/journal/21896)

- CSS snippets은 CSS reset이 아니라, user agent style에서 한 단계 높은 수준의 개선 사항에 대한 것.
- max-inline-size, margin-inline같은것을 이용한 정렬, 링크의 포커스 링, 타이포그래피, text-wrap… 등.
- 이와같은 것들을 오버라이드 하기 쉽도록 별도의 cascade layer에 넣기 e.g. `@layer core {...}`

### [Use CSS reading-flow for logical sequential focus navigation](https://developer.chrome.com/blog/reading-flow?hl=en)

- chrome 137부터 reading-flow, reading-order 제공. flex, grid 이후 DOM 트리와 시각적 순서가 일치하지 않는 상황이 쉽게 발생 중. 접근성 도구에 노출되는 순서와 포커스 받는 방식 제어.
- e.g. `reading-flow: flex-visual;`, `reading-flow: flex-flow;`, `reading-flow: grid-columns;`

# Javascript

### [Announcing TypeScript Native Previews](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/)

- npm에서 네이티브 TS 컴파일러(go + 공유 메모리 병렬 처리 및 동시성) 사용 가능
- `npm install -D @typescript/native-preview` 로 설치 가능
    - tsgo 라는 실행파일 제공. e.g. `npx tsgo --project ./src/tsconfig.json`

### [A Brief History of JavaScript](https://deno.com/blog/history-of-javascript)

- JS 30주년을 기념하여 작성된 JS 역사의 중요 순간들

# Node

### [Reports of Deno's Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated)

- Deno에 대한 비판에 대하여 - 일부는 타당하지만 잘못된 부분 바로잡기
    - Deno 2 출시 후 월간 활성 사용자 지표 2배 이상 증가.
- Deno Deploy 리전 축소는, 비용 때문이기도 하지만 실제 사용 행태를 봤을 때  트래픽 급증 시 근처의 콜드 리전에서 실행하는 것 보다 멀리 떨어진 더 큰 리전으로 라우팅하는 경우가 많음.
- Deno는 더이상 단순 런타임이 아님. 다른 런타임과 기능 동등성을 추구하는게 아니라, 응집력 있는 시스템을 구축 중.

# ETC

### [MCP is the coming of Web 2.0 2.0](https://www.anildash.com//2025/05/20/mcp-web20-20/)

- Web 2.0의 개념이 원래 사용자 중심의 참여와 콘텐츠 생성의 가능성을 열어주었다는 점에서 긍정적이었는데, 시간이 지나면서 점차 왜곡.
- MCP는 모든 다른 플랫폼이 모든 목적에 맞게 프로그래밍 가능하게 될 것이라는 희망. Web 2.0의 취지와 유사. 본래의 구조로 되돌아갈수도 있음.

### [What's new in DevTools, Chrome 137](https://developer.chrome.com/blog/new-in-devtools-137?hl=en)

- gemini를 사용하여 워크스페이스의 CSS 수정하기. Continue를 통해 변경 사항을 싨시간으로 테스트하고 워크스페이스에 적용 가능
- performance탭에 gemini연동
    - 페이즈에 따른 LCP, Render Blocking Request, 레이아웃 시프트 원인 등 분석 가능
    - 퍼포먼스 결과에서 각 필드 gemini를 통해 레이블 생성 가능
- gemini와의 채팅에 스크린샷 캡처 및 제출 가능
- 중복된 JS 모듈, 레거시 JS 등 네트워크 트레이싱에서 강조 표시

### [6 Ways Slack, Notion, and VSCode Improved Electron App Performance](https://palette.dev/blog/improving-performance-of-electron-apps)

- 일렉트론 앱 성능 개선하기

### Release

- [zod v4](https://zod.dev/v4)
- [astro 5.8](https://astro.build/blog/astro-580/)