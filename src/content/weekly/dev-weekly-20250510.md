---
title: dev-weekly 2025-05-10
date: "2025-05-10T18:25:00.000Z"
description: "dev-weekly 2025-05-10"
tags: ["node","javascript","frontend", "css"]
---

# CSS

### [Guitar Chords in CSS](https://dev.to/madsstoumann/guitar-chords-in-css-3hk8)

- HTML과 CSS 만으로 기타 코드 다이어그램 그리기

# Node

### [Node v24.0.0 (Current)](https://nodejs.org/en/blog/release/v24.0.0)

- V8 13.6, npm 11, undici 7 등 포함
- AsyncLocalStorage, URL Pattern 지원

### [Why we created another Kafka client for Node.js](https://blog.platformatic.dev/why-we-created-another-kafka-client-for-nodejs)

- kafkajs는 더이상 유지관리되지 않음, node-kafka는 cpp래퍼인데 nodejs와 호환성 문제 존재
- 이 문제를 해결하고자 @platformatic/kafka 제작

### [k6: A modern load testing tool, using Go and JavaScrip](https://github.com/grafana/k6)

- 그라파나 랩스에서 만든 부하 테스트 도구

# Frontend

### [Frontend’s Next Evolution: AI-Powered State Management](https://thenewstack.io/frontends-next-evolution-ai-powered-state-management/)

- 상태 관리의 핵심 과제 중 하나는 의도한 것과 실제 동작 사이의 간극을 메우는 것
- 코드 중심 개발에서 행동 중심 개발로 전환하기

### [WebTUI:  Modular CSS Library that brings the beauty of Terminal UIs to the browser](https://github.com/webtui/webtui)

- 터미널 UI를 웹에 구현하는 라이브러리
- [https://webtui.ironclad.sh/](https://webtui.ironclad.sh/)

### [Vert.sh](https://vert.sh/)

- 클라이언트사이드에서 이미지, 오디오, 문서를 컨버팅하는 오픈소스

# Javascript

### [Migrating A JavaScript Project from Prettier and ESLint to BiomeJS](https://blog.appsignal.com/2025/05/07/migrating-a-javascript-project-from-prettier-and-eslint-to-biomejs.html)

- Biome의 포매터는 Prettier와 마찬가지로 몇 가지 구성 옵션만 지원. 대부분 Prettier와 호환. 하지만 HTML, Markdown, SCSS 등은 지원하지 않으며 Vue, Svelte, Astro는 부분 지원
- 린트는 특정 카테고리로 구성되어있고 전체를 비활성화 하거나 서브셋만 활성화 가능. JS/TS를 넘어 확장되고 CSS도 포함.
- 퍼스트 파티 익스텐션으로 VSCode, IntelliJ, Zed 지원. 써드파티 익스텐션으로 SublimeText, Vim 지원
- 마지막 커밋 이후 변경사항에만 적용되도록 제한 가능

# ETC

### Release

- [vscode v1.100](https://code.visualstudio.com/updates/v1_100)
- [ESLint v9.26.0](https://eslint.org/blog/2025/05/eslint-v9.26.0-released/)
    - MCP Server intergration
- [Relay v19.0.0](https://github.com/facebook/relay/releases/tag/v19.0.0)