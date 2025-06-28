---
title: dev-weekly 2025-06-28
date: "2025-06-28T22:02:00.000Z"
description: "dev-weekly 2025-06-28"
tags: ["css", "node", "javascript", "ai"]
---

# CSS

### [Lightly Poking at the CSS if() Function in Chrome 137](https://css-tricks.com/lightly-poking-at-the-css-if-function-in-chrome-137/)

- 크롬 137에 CSS if 함수 추가. 기존에도 조건문이 있었지만 한 라인으로 여러 조건에 따른 스타일을 지정하고 조건부로 결과 반환하는 방법은 없었음
- e.g.
    
    ```css
    h1 {
      font-size: if(
        media(width >= 1200px): 3rem;
        media(width >= 768px): 2.5rem;
        else: 2rem
      );
    }
    ```
    

# Nodejs

### [Serialization from NodeJS](https://adamfaulkner.github.io/serialization_from_nodejs.html)

- NodeJS에는 JSON보다 성능좋은 직렬화가 다수 존재. 하지만 최적화 필요할 수 있음.
- 주요 최적화 포인트는 GC 최적화, 버퍼 할당
- 직렬화 성능이 중요하면 NodeJS쓰지 말고 Rust같은거 쓰는게 효율적(직렬화 성능 올리는 것 보다 쉬움)

# Javascript

### [Vite 7.0 is out!](https://vite.dev/blog/announcing-vite7.html)

- nodejs 22.12 이상 필요
- default browser target이 `module`에서 `baseline-widely-available` 로 변경. build.target의 디폴트 브라우저 버전 변경
    - 크롬 87 → 107, 엣지 88 → 107, 파이어폭스 78 → 104, 사파리 14 → 16
- vitest 3.2 부터 지원
- [https://vite.dev/guide/migration](https://vite.dev/guide/migration)

# ETC

### [A short history of web bots and bot detection techniques](https://sinja.io/blog/bot-or-not)

- 웹 봇과 탐지 기법의 발전과정
- IP Reputation, 프록시, TCP 핑거프린팅, TLS 핑거프린팅, JS, 헤드리스 브라우저, 새로운 헤드리스(별도 구현이 아닌 크롬 기반), IPC Flooding, 프록시 디텍션, 캡차, 행동분석 까지의 진화과정

### [Browser MCP](https://browsermcp.io/)

- AI앱을 브라우저에 연결하여 자동화 가능

### [Gemini CLI: your open-source AI agent](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)

- Gemini Code Assist [https://codeassist.google](https://codeassist.google/) 와 통합
- [https://github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

### Release

- [hono v4.8.0](https://github.com/honojs/hono/releases/tag/v4.8.0)
- [prettier v3.6.0](https://prettier.io/blog/2025/06/23/3.6.0)
- [marked v16.0.0](https://github.com/markedjs/marked/releases/tag/v16.0.0)