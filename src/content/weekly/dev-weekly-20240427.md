---
title: dev-weekly 2024-04-27
date: "2024-04-27T15:00:00.000Z"
description: "dev-weekly 2024-04-27"
tags: ["javascript", "node", "css"]
---

# CSS

### **[The Ultimate Collection of CSS-only Shapes](https://css-shape.com/)**

- CSS만 사용해서 만든 shape 모음.

### **[The align-content property for block layouts is now part of Baseline](https://web.dev/blog/align-content-block)**

- 이제 모든 메이저 브라우저에서 block 세로 정렬을 위해 align-content 사용 가능.

# Node

### **[Node.js 22 Available Now](https://openjsf.org/blog/nodejs-22-available)**

- V8 v12.4 적용
- 동기식 esm graphs require 실험적 플래그로 지원.

### **[Node.js task runner](https://polar.sh/anonrig/posts/node-js-task-runner)**

- 이제 `npm run test` 대신 `node —run test` 사용 가능. cpp로 재작성했고 200ms를 20ms로 단축.

### **[Building an npm package compatible with ESM and CJS in 2024](https://snyk.io/blog/building-npm-package-compatible-with-esm-and-cjs-2024/)**

- ESM, CJS 모두 만족하는 nodejs 패키지 만들기
- `type: module` 을 피해야 하는 이유

# Javascript

### **[The Front End Developer/Engineer Handbook 2024](https://frontendmasters.com/guides/front-end-handbook/2024/)**

- 웹 개발 환경에 대한 가이드.
- 업무분야 개요, 포커스 영역, 학습을 위한 리소스, 프론트 환경의 펀더멘탈, 핵심 역량, 기타역량 및 패러다임 등에 대해 정리.

### **[Detect JavaScript Support in CSS](https://ryanmulligan.dev/blog/detect-js-support-in-css/)**

- 사용자 브라우저에서 JavaScript를 사용할 수 있는지 에 따른 미디어 쿼리 `@media (scripting: none)`
- 브라우저 확장에서 스크립트를 차단하면 감지 못하는 문제

### **[HTML attributes vs DOM properties](https://jakearchibald.com/2024/attributes-vs-properties/)**

- 프레임워크 덕분에 차이를 개발자들이 감소. 대부분의 경우 구별이 중요치 않음.
- 어트리뷰트만 직렬화, 때문에 항상 스트링. (프로퍼티는 객체 가능)
- 어트리뷰트가 프로퍼티를 반영(reflection)하는 경우 어트리뷰트는 데이터의 소스
    - e.g. defaultValue 수정하면 value 프로퍼티, 어트리뷰트 둘 다 변경
- 리액트에선 커스텀 엘리먼트가 작동하지 않음. 프로퍼티는 사전에 리액트에서 정의한 것만 허용 ⇒ react 19에서 변경

# ETC

### **[F-Shape Pattern And How Users Read](https://www.smashingmagazine.com/2024/04/f-shape-pattern-how-users-read/)**

- 유저가 웹에서 정보를 스캔하는 방식 소개(다양한 패턴들)
- 사용자는 페이지의 왼쪽 절반을 보는데 80%시간을 사용.
- 구조화된 스캔을 위해 제목, 부제목 추가하기 등 개선을 위한 가이드

### **Release**

- [Electron v30.0](https://www.electronjs.org/blog/electron-30-0)
- [hexo v7.2.0](https://hexo.io/news/2024/04/17/hexo-7-2-0-released)
- [pnpm v9.0.0](https://github.com/pnpm/pnpm/releases/tag/v9.0.0)
- [React Native 0.74 - Yoga 3.0, Bridgeless New Architecture, and more](https://reactnative.dev/blog/2024/04/22/release-0.74)
- [Ember v5.8.0](https://blog.emberjs.com/ember-released-5-8/)
- [swc v1.5.0](https://github.com/swc-project/swc/releases/tag/v1.5.0)
- [knip v5.10.0](https://github.com/webpro/knip/releases/tag/5.10.0)
- [Ionic v8](https://ionic.io/blog/ionic-8-is-here)