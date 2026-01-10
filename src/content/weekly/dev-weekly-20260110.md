---
title: dev-weekly 2026-01-10
date: "2026-01-10T19:57:00.000Z"
description: "dev-weekly 2026-01-10"
tags: ["javascript", "nodejs", "bun"]
---

# Javascript

### [2025 JavaScript Rising Stars](https://risingstars.js.org/2025/en)

- n8n 압도적 1위. 1년만에 112k 스타 획득.
- backend/fullstack 부문 Motia 1위. API, background job, Queue, Workflow, AI agent를 하나의 시스템으로 통합
- tooling 부문 Bun 1위.
- 10년만에 Mobile부문에서 RN, Expo가 상위권에서 밀리고, Valdi, Lynx가 그 자리 차지.

### [MQuickjs: Public repository of the Micro QuickJS Javascript Engine](https://github.com/bellard/mquickjs)

- 임베디드 시스템을 대상으로 하는 자바스크립트 엔진. 10KB의 RAM만으로 컴파일 하고 실행 가능.
- 전체 엔진은 C 라이브러리를 포함해 100KB의 ROM을 필요로 하고 성능은 QuickJS 와 유사.

# Nodejs

### [Build a dinosaur runner game with Deno, pt. 1](https://deno.com/blog/build-a-game-with-deno-1)

- Deno로 공룡 러너 게임 만들고 deno deploy에 배포하기

### [require(esm) in Node.js: from experiment to stability](https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/)

- require(esm) 을 실험 단계에서 안정화 단계로 발전해 온 과정 되짚어보는 글
- require(esm)으로 인해 ESM 마이그레이션이 지연될까 우려했지만 패키지 관리자들의 피드백 결과 오히려 가속할 것이라는 기대.
- top level await 이슈는 영향력이 큰 5천개 패키지를 조사해본 결과, 상당수가 CommonJS로 실행되어 사용할 수 없거나 사용되지 않았고, ESM Only 중 6개 패키지만 사용. 이 또한 대체 가능하고 필수적인 케이스는 1개.
- 기술결정을 내리는데 도움이 되는 패키지 관리자들의 피드백

# ETC

### [State of HTML 2025](https://2025.stateofhtml.com/en-US/)

- 종종 AI기반 API나, 3D/XR,AR, 디바이스 API 같은 화려한 기능들이 개발자들의 관심을 끌 것이라고 기대하지만, 해가 갈수록 주목받는 것은 평범한 것들. 드롭다운, 콤보박스, 팝오버, 다이얼로그 등. 내장 UI는 커스텀이 불가능해서 다시 만들어야 했음.

### Release

- [pnpm 10.27](https://pnpm.io/blog/releases/10.27)
- [ink v6.6.0](https://github.com/vadimdemedes/ink)
- [jsPDF v4.0.0](https://github.com/parallax/jsPDF/releases/tag/v4.0.0)
- [fabric 7](https://github.com/fabricjs/fabric.js/releases)