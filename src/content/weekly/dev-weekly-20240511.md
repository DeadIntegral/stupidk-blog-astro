---
title: dev-weekly 2024-05-11
date: "2024-05-11T14:20:00.000Z"
description: "dev-weekly 2024-05-11"
tags: ["javascript", "node"]
---

# Node

### **[5 Node Version Managers Compared – Which is Right for You?](https://pavel-romanov.com/5-node-version-managers-compared-which-is-right-for-you)**

- 노드 버전 매니저들의 장단점 비교
- NVM - WSL 등을 통해 윈도 지원. 현재 쉘의 nodejs 버전 설정.
- N - NVM보다 많은 제약. package.json의 engine 섹션 감지
- FNM - Rust로 작성된 크로스 플랫폼. 현재 폴더에 따라 버전 자동 전환.
- Volta - Rust로 작성된 크로스 플랫폼. pakcage.json에 engine 섹션 사용. 툴체인 관리 가능 (yarn 버전 지정 가능)
- PNPM - nodejs버전 관리 기능도 존재. 단, PNPM을 통해 설치하면 corepack 제공안됨. 버전은 전역적인 관리만 가능.

### **[Node v22.1.0 (Current)](https://nodejs.org/en/blog/release/v22.1.0)**

- `NODE_COMPILE_CACHE` 지정한 디렉토리에 지속되는 온디스크 V8 Code Cache 구현 (모듈 그래프가 변경되지 않으면 컴파일 성능 향상)

### **[Express 5.0 - last push!](https://github.com/expressjs/discussions/issues/233)**

- express 5.0을 릴리스 하는데 필요한 모든 PR, 이슈에 대한 PR
- [https://www.npmjs.com/package/express/v/5.0.0-beta.3](https://www.npmjs.com/package/express/v/5.0.0-beta.3) 사용 가능

# Javascript

### **[The evolution of Figma’s mobile engine: Compiling away our custom programming language](https://www.figma.com/blog/figmas-journey-to-typescript-compiling-away-our-custom-programming-language/)**

- 피그마가 Skew에서 TS로 마이그레이션한 후기
- 코드 베이스 변환 과정 및 문제 해결 과정

### **[Pintora](https://pintorajs.vercel.app/)**

- 브라우저와 노드에서 사용 가능한 텍스트 다이어그램 변환 프로그램
- mermaid와 유사한 방식으로 작동하고, 다이어그램 종류가 다름.

# ETC

### **[Can I email](https://www.caniemail.com/)**

- caniuse와 유사하게 이메일 클라이언트에 대한 컴팻을 보여주는 서비스

### **Release**

- [electron-serve v2.0.0](https://github.com/sindresorhus/electron-serve/releases/tag/v2.0.0)
- [esbuild v0.21.0](https://github.com/evanw/esbuild/releases/tag/v0.21.0)
- [docusaurus v3.3](https://docusaurus.io/blog/releases/3.3)
- [ionic 8.1](https://ionic.io/blog/announcing-ionic-8-1)
- [pnpm v9.1.0](https://github.com/pnpm/pnpm/releases/tag/v9.1.0)
- [bun 1.1.7](https://bun.sh/blog/bun-v1.1.7)
- [headless-ui v2](https://tailwindcss.com/blog/headless-ui-v2)
- [msw v2.3.0](https://github.com/mswjs/msw/releases/tag/v2.3.0)