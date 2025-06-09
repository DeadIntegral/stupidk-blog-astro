---
title: dev-weekly 2025-05-31
date: "2025-05-31T21:54:00.000Z"
description: "dev-weekly 2025-05-31"
tags: ["node","css", "javascript", "chrome"]
---

# Nodejs

### [Node.js TSC Declines to Endorse Feature Bounty Program](https://socket.dev/blog/node-js-tsc-declines-to-endorse-feature-bounty-program)

- nodejs에 공개 바운티 프로그램이 제안되었으나 거부.
- 사용자들은 사용자 중심 기능에 돈을 지불할 가능성이 높지만, 메인테이너들은 이미 쌓이고 있는 기술 부채를 우선시하고 싶을 수 있음.
- 품질 기준이 낮아질 수 있고, 반대 의견이 무시되거나 협력적인 의사 결정이 침식될 수 있음.
- 사람들이 자금을 지원하고 싶다면 자유롭게 할 수 있지만, 프로젝트 자체가 매커니즘을 관리해서는 안됨.

# Javascript

### [Cap: A modern, lightning-quick PoW captcha](https://capjs.js.org/)

- SHA-256을 사용하는 가벼운 캡차 얼터네이티브.

### [JavaScript's upcoming Temporal API and what problems it will solve](https://waspdev.com/articles/2025-05-24/temporal-api)

- JS Date객체의 문제점들
- Temporal의 기능들 예시와 함께 소개

### [Wake up, Remix!](https://remix.run/blog/wake-up-remix)

- React Router 7이 너무 잘나옴. 모든 Route가 server route라면 React Router 7은 이미 Remix가 지향 했던 방향과 매우 유사.
- 때문에 Remix는 새로운 길을 모색했고, 단순함, 명확성, 성능에 집중한 새로운 프레임워크 가능성을 정의. 이를 위해서는 제어할 수 없는 추상화 계층에 의존하지 않고, 풀스택을 소유해야함. React종속성을 제거하고 Preact를 포크하여 시작.
- 아직 프리뷰가 준비되진 않았지만 Principle 소개
    - Model-First Development, Build on Web API, Religiously Runtime, Avoid Dependencies(종속성 제로가 목표), Demand Composition, Distribute Cohesively

### [Your React Meta-Framework Feels Broken, Here's Why](https://rwsdk.com/blog/your-react-meta-framework-feels-broken)

- RedwoodSDK 소개
- 모던 프레임워크는 플랫폼 뿐 아니라 유저의 코드까지 추상화. 함수를 작성하는게 아니라 빌드에 포함된 매크로일 뿐. 이건 DX가 아니라 환상. 관용적으로 쓰일 뿐.
- RedwoodSDK 는 커스텀 신택스도 없고, 숨겨놓은 변형도 없고, 매직도 없음. 웹에 어긋나지 않고 웹과 호환되는 것이 필요.

# ETC

### [HTML5 Elements You Didn't Know You Need](https://dev.to/maxprilutskiy/html5-elements-you-didnt-know-you-need-gan)

- JS 종속성을 줄이고 접근성을 개선하고 HTML을 보다 의미있게 만드는 엘리먼트들
- dialog, details, datalist, meter, output, mark, time, figure

### [Firefox Release Notes 139.0](https://www.mozilla.org/en-US/firefox/139.0/releasenotes/)

- link preview 실험 지원
- HTTP3 업로드 성능 개선
- Temporal 기본 활성화, 접혀있는 details 도 검색 가능

### Release

- [multer v2.0.0](https://github.com/expressjs/multer/releases/tag/v2.0.0)
- [commander.js v14.0.0](https://github.com/tj/commander.js/releases/tag/v14.0.0)
- [Docusaurus 3.8](https://docusaurus.io/blog/releases/3.8)
- [Announcing Angular v20](https://blog.angular.dev/announcing-angular-v20-b5c9c06cf301)
- [ink v6.0.0](https://github.com/vadimdemedes/ink/releases/tag/v6.0.0)