---
title: dev-weekly 2025-08-23
date: "2025-08-23T23:16:00.000Z"
description: "dev-weekly 2025-08-23"
tags: ["css", "nodejs", "javascript"]
---

# CSS

### [CSS Properties](https://nikolai-shabalin.github.io/css-properties/en/)

- 연도별 CSS 프로퍼티별 스펙과 브라우저 서포트 링크 테이블

### [Using the Custom Highlight API](https://frontendmasters.com/blog/using-the-custom-highlight-api/)

- Firefox 140부터 지원 시작하면서 모든 메이저 브라우저에서 지원.
- DOM을 건드리지 않고 브라우저 내장 검색 기능을 활용하여 텍스트 하이라이팅 제공

# Nodejs

### [Node.js v22.18.0 (LTS)](https://nodejs.org/en/blog/release/v22.18.0)

- 추가 구성 없이 (디폴트로) TS 실행 가능

### [npm Adopts OIDC for Trusted Publishing in CI/CD Workflows](https://socket.dev/blog/npm-trusted-publishing)

- CI/CD 워크플로에서 long lived token의 필요성을 없애고 암호화된 단기 자격 증명으로 대체
- github actions, gitlab CI/CD 워크플로 지원

### [Pyodide is a port of CPython to WebAssembly/Emscripten](https://pyodide.org/en/stable/index.html)

- 브라우저에서 micropip으로 파이썬 패키지를 설치하고 실행 가능
- PyPi 에서 사용할 수 있는 순수 파이썬 패키지 모두 지원. C, Cpp, Rust가 확장이 포함된 많은 패키지도 포팅

### [500x faster postMessage(string)](https://bun.com/blog/how-we-made-postMessage-string-500x-faster)

- Bun 1.2.21 에서 postMessage 성능 500배 개선, 최대 메모리 사용량 22배 절약

# Javascript

### [Rspack Introduces Rslint, a TypeScript-First Linter Written in Go](https://socket.dev/blog/rspack-introduces-rslint-a-typescript-first-linter-written-in-go)

- Rstack 의 새 제품 Rslint 소개. go로 작성했고 tsgo로 컴파일.
- eslint 생태계의 문제점 해결이 목표

### [Reflections on the React community](https://leerob.com/reflections)

- React와 OSS(Open Source Software)에 대하여. 상업용 OSS와 리액트의 포지션, RSC와 Vercel 커뮤니티에 대한 입장 등에 대한 회고

### [minecraft-mcp-server](https://github.com/yuniko-software/minecraft-mcp-server)

- Mineplay API로 구동되는 마인크래프트 MCP 서버.
- 1.21.6 이하 버전에서 동작. 싱글 플레이어 LAN에서 localhost:25565로 연결

# ETC

### Release

- [zx v8.8.0](https://github.com/google/zx/releases/tag/8.8.0)
- [quickjs v3.0.0](https://github.com/sebastianwessel/quickjs/releases/tag/v3.0.0)
- [fastify v5.5.0](https://github.com/fastify/fastify/releases/tag/v5.5.0)
- [jQuery 4.0.0 rc1](https://blog.jquery.com/2025/08/11/jquery-4-0-0-release-candidate-1/)
- [nextjs 15.5](https://nextjs.org/blog/next-15-5)
- [biome v2.2.0](https://github.com/biomejs/biome/releases/tag/%40biomejs/biome%402.2.0)
- [react native 0.81](https://reactnative.dev/blog/2025/08/12/react-native-0.81)
    - 안드로이드1 6지원, iOS 실험적 프리컴파일
- [ky v1.9.0](https://github.com/sindresorhus/ky/releases/tag/v1.9.0)