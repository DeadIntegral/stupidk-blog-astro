---
title: dev-weekly 2025-04-19
date: "2025-04-19T21:29:00.000Z"
description: "dev-weekly 2025-04-19"
tags: ["javascript", "css", "node"]
---

# Javascript

### [JSX Over The Wire](https://overreacted.io/jsx-over-the-wire/)

- 기존엔 프론트가 API 요청, JSON 데이터 전송, 컴포넌트에 props 전달, 렌더링 되던 구조
- 서버에서 JSON 대신 JSX를 만들어 보내는 방식 (RSC)
- 90년대 html파일에서 시작하여 서버에서 JSX로 뷰모델을 만들어서 보내는 방식에 이르기까지의 개념정립

### [Consensus was achieved to withdraw the Records and Tuples proposal](https://github.com/tc39/proposal-record-tuple/issues/394)

- 2025년 4월14일 TC39에서 Record and Tuples 제안 철회. 이 제안은 스테이지2에 있고 언어에 새로운 기본 요소를 추가하는데 합의를 얻지 못함.

# Node

### [Lexe: Package your Node.js application into a single executable](https://github.com/Ray-D-Song/lexe)

- AWS의 경량 nodejs 런타임 LLRT의 포크. 이를 통해 단일 실행 파일로 패키징하면 8~10MB

# ETC

### [Default styles for h1 elements are changing](https://developer.mozilla.org/en-US/blog/h1-element-styles/)

- 웹브라우저에서 h1 엘리먼트의 기본 스타일이 변경. 계층 구조를 나타낼 때 브라우저 스타일에 의존하지 말 것.
- h1 의 font-size, margin 을 설정하는 것 권장

### [SpiderMonkey Shipping Temporal](https://spidermonkey.dev/blog/2025/04/11/shipping-temporal.html)

- Temporal은 2021년 3월 스테이지 3에 돌입, SpiderMonkey는 구현 시작.
- 이 구현은 모질라 직원이 아닌 André Bargull 라는 개인기여자 한명이 전적으로 구현. 이후 이 사람은 스펙에 대해서도 200개의 문제 제기.
- Firefox 139부터 Temporal 구현을 디폴트 활성화 하며 이를 탑재한 최초의 브라우저. 이는 자원봉사자들이 Firefox와 JS언어 전체에 영향을 미칠 수 있음을 보여줌.

### Release

- [Astro v5.7.0](https://astro.build/blog/astro-570/)
- [redux-toolkit v2.7.0](https://github.com/reduxjs/redux-toolkit/releases/tag/v2.7.0)
- [bun v1.2.10](https://bun.sh/blog/bun-v1.2.10)