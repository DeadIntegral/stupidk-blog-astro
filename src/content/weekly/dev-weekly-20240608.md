---
title: dev-weekly 2024-06-08
date: "2024-06-08T12:10:00.000Z"
description: "dev-weekly 2024-06-08"
tags: ["javascript", "node"]
---
# Node

### **[Node.js Performance Hooks: Mastering the Mental Model](https://pavel-romanov.com/nodejs-performance-hooks-mastering-the-mental-model)**

- 타임스탬프간의 비교가 아니라 perf hook 내장 모듈을 사용하는 이유
- wall clock 과 monotonic clock (perf hook은 monotonic clock을 사용)
- PerformanceObserver 사용법
- [https://w3c.github.io/hr-time/#dfn-monotonic-clock](https://w3c.github.io/hr-time/#dfn-monotonic-clock)

# Javascript

### **[How Deep is Your DOM?](https://frontendatscale.com/blog/how-deep-is-your-dom/)**

- 플랫한 엘리먼트와 중첩된 엘리먼트의 성능 비교
- 엘리먼트가 500개 일 때 플랫한건 56ms, 중첩된건 102ms. 실제 사이트에는 영향이 없어보이는 숫자지만 css, js가 추가되면 결과가 달라짐

### **[Turborepo 2.0](https://turbo.build/blog/turbo-2-0)**

- 새로운 터미널 UI. 태스크마다의 로그 확인 가능
- watch mode 추가 (소스 코드 변경 시 작업 다시 실행)
- 새로운 문서. 터보레포와 인테그레이션하는 가이드, 보다 명확한 아키텍처, 향상된 검색

### **[Brisk VS Code extension 5 minute Development Speedrun](https://github.com/brisktest/brisk-extension/blob/main/WALKTHROUGH.md)**

- VSCode 확장 프로그램 만들기
- 환경셋팅부터 게시하기까지의 트러블슈팅

### **[KaTex](https://katex.org/)**

- 종속성 없고 빠른 웹을 위한 수식 입력기
- Server side rendering 지원

# ETC

### **[Experimenting with local alt text generation in Firefox Nightly](https://hacks.mozilla.org/2024/05/experimenting-with-local-alt-text-generation-in-firefox-nightly/)**

- Transformer 기반 기계 학습 모델을 사용하여 로컬 환경에서 이미지를 추론하여 설명하는 실험
- 번역은 [https://browser.mt/](https://browser.mt/) 를 사용하고 런타임은 WASM으로 컴파일
- pdfjs에서 alt text 생성

### **[INP test your knowledge](https://web.dev/articles/inp#test_your_knowledge)**

- Gemini 1.5가 생성하고 인간이 검토한 INP 지식 테스트

### **Release**

- [eslint v9.4.0](https://eslint.org/blog/2024/05/eslint-v9.4.0-released/)
- [Docusaurus v3.4](https://docusaurus.io/blog/releases/3.4)
- [prettier v3.3.0](https://prettier.io/blog/2024/06/01/3.3.0.html)
- [biomejs v1.8.0](https://github.com/biomejs/biome/releases/tag/cli%2Fv1.8.0)
- [ember v5.9.0](https://github.com/emberjs/ember.js/releases/tag/v5.9.0)