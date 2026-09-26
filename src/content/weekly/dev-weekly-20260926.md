---
title: dev-weekly 2026-09-26
date: "2026-09-26T17:43:00+09:00"
description: "루트 스크롤 컨테이너를 유지하는 CSS 기법, 경량 데스크톱 앱을 만드는 tinyjs, 브라우저 없는 WebGL/WebGPU 테스트, Node.js 업데이트, AI 시대의 소프트웨어 품질까지 이번 주 개발 소식."
tags: ["css", "javascript", "node", "testing", "webgpu", "webgl", "browser", "ai"]
---

# CSS

### [The root scroller and how not to lose it](https://polypane.app/blog/the-root-scroller-and-how-not-to-lose-it/)

- 페이지 전체를 스크롤하는 `루트 스크롤 컨테이너`의 고유한 기능들 - 스크롤 복원, 키보드 스크롤, 모바일 브라우저 UI 등
- 루트 스크롤이 사라지는 주의해야 하는 패턴들과 루트 스크롤 컨테이너 유지를 위한 기법들.

# Javascript

### [tinyjs: Desktop appsin ~6 MB](https://tinyjs.app/)

- 완전한 시스템 권한을 가진 JS 백엔드와 네이티브 웹뷰 윈도만 사용.
- 백엔드는 약 600KB. HTML, CSS, JS 코드는 세 플랫폼에서 약 6MB

### [2.4x Faster Native GPU Testing for Vitest and Jest without a Browser](https://ben3d.ca/blog/native-gpu-testing-for-vitest-and-jest)

- WebGL/WebGPU 테스트를 크롬 없이 nodejs에서 실제 GPU 컨텍스트로 실행하는 vitest-gpu, jest-gpu 소개
- 크롬과 같은 angle, webgpu dawn 구현을 사용해 mock이 아니라 실제 셰이더, 버퍼, 렌더링 결과 검증.
- threejs 사례에서 ci시간 15분에서 6분 미만으로 감소하고 일반 유닛 테스트처럼 gpu 테스트 돌리는것이 목표.

# Nodejs

### [Node.js 26.10.0](https://nodejs.org/en/blog/release/v26.10.0)

- 내장 `util.throttle`, `util.debounce` 추가

### [build: downgrade Intel macOS support to experimental](https://github.com/nodejs/node/pull/65427)

- Nodejs 27부터 인텔맥(x64 macOS) 제공 안함. 실험적 지원만 제공.

# AI

### [“AI, make the website good”](https://www.zachleat.com/web/ai-websites/)

- 이 업계에서는 “개발자들이 소프트웨어를 더 쉽게 만들 수 있게 해준다면, 더 높은 품질의 소프트웨어를 개발할 여력이 생길 것이다” 라는 논리가 있음.
- AI 가 개발 속도와 생산량을 높여도 유저 경험과 소프트웨어 품질이 자동으로 좋아지진 않음. AI 시대일수록 결과물의 품질을 신경쓰는 craftsmanship이 더 중요.

# ETC

### [Why I Stopped Arguing With People](https://wangcong.org/2026-06-30-why-i-stopped-arguing-with-people.html)

- 논쟁 할 수 있는것과 없는 것. 가장 먼저 포기한 것은 옳은 것이 항상 좋은 것은 아니란 것. 옳은 것은 그른것이 있게 되고 순수 선이 아님. 그른 것으로 보이는 사람이 생기게 됨.
- 대부분의 논쟁은 아이디어가 아니라 자존심에 관한 것.
- 다른 사람을 고치는데 에너지를 쏟는 것 보다 직접 만들어 현실의 결과로 증명하는 것이 나음. 도움을 요청받았을 때는 도움.
- 결국 바꿀 수 있는 사람은 자신뿐이고, 늘 겸손하며 피드백을 요청해 스스로 나아지고 발전하는데 집중하는게 나음.
- [https://news.hada.io/topic?id=31029](https://news.hada.io/topic?id=31029)

### Release

- [turborepo v2.11](https://turborepo.dev/blog/2-11)
- [Transformers.js v4.3](https://github.com/huggingface/transformers.js/releases/tag/4.3.0)
- [pnpm 12.7](https://pnpm.io/blog/releases/12.7)
- [eslint v10.11.0](https://eslint.org/blog/2026/09/eslint-v10.11.0-released/)
