---
title: dev-weekly 2024-11-30
date: "2024-11-30T15:20:00.000Z"
description: "dev-weekly 2024-11-30"
tags: ["javascript", "node", "css"]
---

# CSS

### [Solved by CSS: Donuts Scopes](https://css-tricks.com/solved-by-css-donuts-scopes)

- 부모 컴포넌트의 스타일이 자식에게도 전파되는것을 방지하는 기술
- 전통적인 방식인 `:not`을 활용하는 방법
- `@scope` 를 사용하는 방법 e.g. `@scope (.parent) to (.content) {`

# Node

### [Node.js 22 runtime now available in AWS Lambda](https://aws.amazon.com/ko/blogs/compute/node-js-22-runtime-now-available-in-aws-lambda/)

- AWS 람다에서 Nodejs22 사용가능
- ESM을 require로 사용가능, 플래그 없이 브라우저 호환 WebSocket 지원 등

### [Vite 6.0 is out!](https://vite.dev/blog/announcing-vite6.html)

- nodejs 18, 20, 22+ 지원 (21지원 중단)
- SPA 사용자는 그대로 사용 가능할 것.
- 마이그레이션 가이드 [https://vite.dev/guide/migration](https://vite.dev/guide/migration)

# Javascript

### [A Framework for Evaluating Browser Support](https://www.joshwcomeau.com/css/browser-support/)

- CSS적용은 Graceful degradation, progressive enhancement 방법론을 따르라는 아티클

### [Avoiding False Positives in Node.js Tests](https://blog.appsignal.com/2024/11/20/avoiding-false-positives-in-nodejs-tests.html)

- 종종 테스트를 통과했지만 해당 테스트에 버그가 있을 수 있음. 이러한 false positive 패턴에 대한 소개
- equal() 과 strictEqual() 타입비교 여부 때문에 null과 undefined가 같게 나올 수 있음
- notStrictEqual()과 notDeepEqual() 객체 비교할 때 프로퍼티가 같은지 참조가 같은지.
- 복사 붙여넣기로 인한 오류, 참조 스냅샷이 깨지는 케이스 등 다양한 케이스 소개

# ETC

### [What's next for WebGPU](https://developer.chrome.com/blog/next-for-webgpu)

- WebGPU 마일스톤 0 의 진행상황 논의 및 새로운 기능에 대한 논의
- AI를 위한 주요 기능 - 서브그룹과 서브그룹 매트릭스, Texel 버퍼, UMA 버퍼 맵핑
- 렌더링 알고리즘을 위한 기능 - Bindless, Multidraw indiect, 64비트 알고리즘
- 웹 플랫폼과의 통합을 위한 기능 - 호환성모드, WebXR, Canvas2D

### Release

- [0x v5.8.0](https://github.com/davidmarkclements/0x/releases/tag/v5.8.0) - single-command flamegraph profiling
- [typescript v5.7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-5-7/)