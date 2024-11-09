---
title: dev-weekly 2024-11-09
date: "2024-11-09T19:08:00.000Z"
description: "dev-weekly 2024-11-09"
tags: ["javascript", "node", "css"]
---

# CSS

### [What’s the deal with WebKit Font Smoothing?](https://dbushell.com/2024/11/05/webkit-font-smoothing/)

- `-webkit-font-smoothing: antialiased;` 에 대한 고찰
- macOS 에서만 작동하고 모서리가 흐릿해짐

# Node

### [@wasmer/sdk adds Node.js and Bun support](https://wasmer.io/posts/wasmer-js-sdk-now-supports-node-and-bun)

- nodejs에 wasmer/sdk 내장
- JS Worker란 무엇이고 nodejs thread(worker)의 차이. 이 간격을 줄여주는 web-worker package를 통해 `@wasmer/sdk` 출시

### [NPM Chart](https://npm.chart.dev/)

- npm 패키지의 주간, 월간 다운로드 차트. 시작 날짜 지정 가능.
- 현재 선택한 패키지 차트 다운로드, 링크 공유 가능
- [https://github.com/atinux/npm-chart](https://github.com/atinux/npm-chart)

### [npmpackage.info](https://npmpackage.info/)

- npm 패키지의 정보 대시보드 제공
- 번들사이즈, PR, 이슈, 커밋, npm 다운로드, 디펜던시 등 제공

# Javascript

### [Announcing Rspack 1.1](https://rspack.dev/blog/announcing-1-1)

- v1.0 보다 10% 성능 향상, HMR 성능 향상
- 모든 구성 옵션에 JSDoc 추가

# ETC

### [Mozilla Foundation lays off 30% staff, drops advocacy division](https://techcrunch.com/2024/11/05/mozilla-foundation-lays-off-30-staff-drops-advocacy-division/)

- 모질라의 비영리 부서 모질라 파운데이션 30% 직원 해고
- [https://www.mozilla.org/en-US/about/governance/organizations/](https://www.mozilla.org/en-US/about/governance/organizations/) 모질라의 조직구조
    - 브라우저 등 소프트웨어 개발하는 모질라 코퍼레이션, 기업 지배 구조를 감독하고 브라우저 제조 업체의 정책을 설정하는 모질라 파운데이션.

### [First Public Working Draft: Web Audio API 1.1](https://www.w3.org/news/2024/first-public-working-draft-web-audio-api-1-1/)

- 웹 애플리케이션에서 오디오를 처리하고 합성하기 위한 고급 웹 API
- 실제 처리는 주로 기본 구현(최적화된 어셈블리, C, CPP)에서 이뤄지지만 직접 스크립트 처리 및 합성도 지원

### Release

- [fastify v.5.1.0](https://github.com/fastify/fastify/releases/tag/v5.1.0)
- [mermaid v11.4.0](https://github.com/mermaid-js/mermaid/releases/tag/mermaid%4011.4.0)
- [docusaurus v3.6.0](https://docusaurus.io/blog/releases/3.6)