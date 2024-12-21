---
title: dev-weekly 2024-12-21
date: "2024-12-21T19:30:00.000Z"
description: "dev-weekly 2024-12-21"
tags: ["node", "css"]
---

# CSS

### [12 Modern CSS One-Line Upgrades](https://moderncss.dev/12-modern-css-one-line-upgrades/)

- Stable Upgrades - aspect-ratio, object-fit, margin-inline
- Stable Enhancements - text-underline-offset, outline-offset, scroll-margin, color-scheme, accent-color, fit-content
- Progressive Enhancements - overscroll-behavior, text-wrap, scrollbar-gutter

### [CSS Grid Generator](https://cssgridgenerator.io/)

- GUI 상에서 레이아웃을 그리면 css grid 코드로 만들어주는 도구

# Node

### [Benchmarking GraphQL solutions in the JS/TS landscape](https://tomekdev.com/posts/benchmarking-graphql-solutions-in-the-js-ts-landscape)

- JS/TS 환경에서 레이어별 graphql 도구들 벤치마킹
- autocannon으로 테스트. JIT을 킨 NodeJS에서 Fastify, Mercurius 가 가장 빠르고, 이는 가장 느린 조합보다 6배 빠름.
    - 스택에 따라 Nodejs, Bun, Deno 각각에서 더 잘 작동함.
- type-graphql을 사용하면 3~5% 의 성능 저하 발생. Pothos는 1% 저하.
- Observability 약 80% 성능 감소. 리졸버 트랙킹을 끄면 13% 감소.
- 전체 벤치마킹 결과 테이블 제공.

# ETC

### [Announcing GitHub Copilot Free](https://github.blog/changelog/2024-12-18-announcing-github-copilot-free/)

- 깃헙 코파일럿 무료 플랜 공개.
- 월 2천개의 코드 자동완성과 50개의 채팅 무료

### Release

- [jerryscript v3.0](https://github.com/jerryscript-project/jerryscript/releases/tag/v3.0.0)