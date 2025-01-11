---
title: dev-weekly 2025-01-11
date: "2025-01-11T17:10:00.000Z"
description: "dev-weekly 2025-01-11"
tags: ["node", "javascript", "vscode"]
---

# Node

### [Node.js Now Supports TypeScript By Default](https://www.totaltypescript.com/typescript-is-coming-to-node-23)

- nodejs v22.6 에서 실험플래그로 지원되던 TS가 v23.6 부터 기본지원으로 변경
- enum, namespace 는 지원하지 않음 (declare namespace는 지원)
- Dr.Axel : [https://2ality.com/2025/01/nodejs-strip-type.html](https://2ality.com/2025/01/nodejs-strip-type.html)

### [1-billion row challenge with Node.js](https://jackyef.com/posts/1brc-nodejs-learnings)

- 1brc(10억줄의 텍스트로 12GB 파일을 처리하는 챌린지)에 대해 nodejs 예제를 30배까지 성능 끌어올리기
- clinic.js flame를 통한 프로파일링, 비싼 V8 API 호출을 줄이거나 제거
- 문자열과 부동소수점을 Byte(Buffer)와 Number로 돌아가도록 변환
- 워커 스레드를 사용하여 병렬 연산

# Javascript

### [Principles Of Web Accessibility](https://github.com/Heydon/principles-of-web-accessibility)

- 웹 접근성에 대한 하이 레벨 가이드 원칙
    
    > 기업들은 접근성 문제를 실제로 해결하는 것보다 접근성 문제를 해결하고 있는 것처럼 보이는 것을 우선시하는 경향이 있습니다. 색상 대비를 평가해야 한다고 말하지만 신성한 브랜드와 관련된 색상에 대해서는 꿈쩍도 하지 않습니다.
    > 

# ETC

### [Start Using Minimap Section Headers in VS Code](https://blog.css-weekly.com/start-using-minimap-section-headers-in-vs-code)

- VSCode에서 미니맵에 텍스트 표시하기
- `MARK: text` 를 사용하는 방법, `#region`, `#endregion` 을 사용하는 방법

### Release

- [zx v8.3.0](https://github.com/google/zx/releases/tag/8.3.0)
- [release-it v18.0.0](https://github.com/release-it/release-it/releases/tag/18.0.0) (current v18.1.1)
- [mercurius v16.0.0](https://github.com/mercurius-js/mercurius/releases/tag/v16.0.0)
- [pnpm v10.0.0](https://github.com/pnpm/pnpm/releases/tag/v10.0.0)
- [tesseract.js v6.0.0](https://github.com/naptha/tesseract.js/releases/tag/v6.0.0)
- [docusaurus v3.7](https://docusaurus.io/blog/releases/3.7) - react 19
- [react-toastify v11.0.0](https://github.com/fkhadra/react-toastify/releases/tag/v11.0.0)