---
title: dev-weekly 2026-11-21
date: "2026-11-21T19:12:00+09:00"
description: "개발 디스크 정리 도구로 확장한 npkill 1.0, 프레임워크 성능 비교 프로젝트, Kitesurf 오픈소스 전환, Flashwright와 Cross-Origin Storage API 소식을 살펴봅니다."
tags: ["devtools", "performance", "browser", "ai", "workers", "testing", "playwright", "wasm"]
---

# Javascript

### [Launching the framework performance project](https://e18e.dev/blog/launching-the-framework-performance-project)

- 메타 프레임워크의 성능을 측정하는 벤치마크 모음 프로젝트 출시. 각 프레임워크는 자체적인 벤치마크를 갖고 있지만 팀마다 성능 측정 방식과 우선순위가 다름.
- [https://frameworks.e18e.dev/](https://frameworks.e18e.dev/)
- 같은 앱을 여러 프레임워크에서 dev time, run time, CWV 등 다양한 항목 비교

### [The fastest e2e framework](https://flashwright.dev/)

- playwright를 사용하면서 느린 경로만 변경한 독립 포크.
- 애니메이션을 기다리는 대신 바로 클릭하고, 설정 파일을 읽는 동안 worker와 브라우저 실행되고 가장 오래 걸리는 테스트를 먼저 실행하는 등의 성능 영향만 변경.

### [Introducing the Cross-Origin Storage API](https://developer.chrome.com/blog/introducing-cross-origin-storage?hl=en)

- 서로 다른 origind의 사이트가 완전히 동일한 큰 리소스를 각자 다시 다운로드 하지 않고, 브라우저에 한번 저장한 복사본 공유하도록 하는 API
- AI 모델, WASM, 폰트, 게임 엔진 등 여러 사이트에 반복 다운로드되는 문제 타겟. URL이 아니라 암호학적 hash로 식별
- Emscripten, Flutter, WebLLM, Nuxt 등은 실험적 지원중이지만 아직 WICG의 초기 단계 제안.

# Nodejs

### [npkill 1.0: modern development ate your disk](https://zaldih.com/en/post/npkill-1-0-0/)

- npkill 1.0 릴리스. node_modules 뿐 아니라 .next, .venv, __pycache, 테라폼 등 범용 개발 디스크 정리 도구로 확장
- 여러 정리 대상을 profile로 묶음. 경로, 타입, 정규식 등으로 결과를 특정 및 다중선택으로 한번에 지우기 제공

# AI

### [Kitesurf is now open source](https://blog.cloudflare.com/kitesurf-open-source/)

- Workers 기반의 AI 에이전트 스테이트리스 브라우저 Kitesuf 아파치 2.0 라이선스의 오픈소스로 전환
- 브라우저 컨테이너 없이 DOM 렌더. 크롬 개발자 도구 프로토콜도 지원.

# ETC

### [Who shipped first?](https://patrickbrosset.com/lab/who-shipped-first/)

- 각 웹 기능에 대해 어떤 브라우저 엔진이 최초로 제공했는지를 표시하는 큰 테이블.
- 909개의 기능 중 44개는 여러 엔진이 같은 달에 동시 릴리스.

### Release

- [solid v2.0.0](https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0)
- [prettier 3.10](https://prettier.io/blog/2026/11/11/3.10.0)
- [Announcing XState v6 beta](https://stately.ai/blog/2026-11-05-xstate-v6-beta)
- [jQuery 4.1.0, 3.8.0](https://blog.jquery.com/2026/11/17/jquery-4-1-0-and-3-8-0-released-passing-the-torch/)
