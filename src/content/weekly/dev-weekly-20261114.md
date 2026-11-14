---
title: dev-weekly 2026-11-14
date: "2026-11-14T21:12:00+09:00"
description: "콘솔에서 React 앱을 만드는 Text.js, 코딩 에이전트를 위한 Modern Web Guidance 1.0, 사용자 의도를 해석하는 디시젼 모델 기반 UI와 Playwright·Rolldown·Remix 릴리스 소식을 살펴봅니다."
tags: ["react", "devtools", "ai", "browser", "testing", "bun", "bundler", "remix"]
---

# Javascript

### [Text.js: The Console Framework](https://textjs.org/)

- 브라우저 개발자도구의 콘솔 안에서 렌더링되는 풀스택 React 앱 만드는 프레임워크
- 키보드 입력, 라우팅, 서버 렌더링 등 지원하고 터미널에서도 실행 가능. MCP를 통해 AI agentrk whwkr rksmd.

### [Modern Web Guidance 1.0: The web platform expertise your coding agent is missing](https://developer.chrome.com/blog/modern-web-guidance-v1?hl=en)

- 1.0이 되며 크로스 브라우저 지원 프로젝트로 변경. 크롬, 파이어폭스, 엣지도 지원에 참여하여 호환성 개선하고 기여할 예정.
- 모두가 코딩 에이전트를 사용하는 세상에서 속도는 더이상 경쟁 우위가 아님. 사용성과 사용자 경험 같은 기본적인 요소들을 차별화 하는 것이 중요함.

# AI

### [Building Interfaces That Understand What We Want to Do](https://agustinbarrientos.com/writing/senior-eye/interfaces-that-understand-what-we-want)

- 기존 UI 는 유저가 메뉴 이름, 구조를 학습해야 함. decision model을 사용하면 유저가 본인의 언어로 말하고, 시스템이 기존 옵션으로 해석하게 할 수 있음.
- 생성형 AI 무엇이든 만들어내지만 디시젼 모델은 미리 정의한 선택지 중 하나로 한정 가능. 결과는 비결정적이지만 행동 범위는 개발자가 통제.
- NN그룹의 두 번째 규칙은 사용자의 언어로 말해야 한다는 것. “Transaction history” 같은 표현 대신 “My purchases” 같은 표현을 사용해야함. 디시젼 모델은 레이블을 학습할 필요가 없음.
- 반대로 AI의 판단은 항상 맞지 않기 때문에 confidence threshold와 실패 UX 도 중요. 위험한 행동은 추가 질문이나 확인을 거치게 해야 함.
- 디시젼 모델은 충분히 작기 때문에 로컬 실행도 가능. 크롬157에 Decisions API 실험적 추가 상태.
- 모든 문제에 적합하진 않음. 가능한 행동은 정해져있지만 사용자가 그것을 표현하는 방식이 다양할 때 써야함.

# ETC

### Release

- [playwright v1.65.0](https://github.com/microsoft/playwright/releases/tag/v1.65.0)
    - 이제 테스트 러너 Bun으로 실행
- [rolldown v.1.3.0](https://github.com/rolldown/rolldown/releases/tag/v1.3.0)
- [remix v3.2.0](https://github.com/remix-run/remix/releases/tag/remix%403.2.0)