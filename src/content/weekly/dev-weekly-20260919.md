---
title: dev-weekly 2026-09-19
date: "2026-09-19T17:01:00+09:00"
description: "아이콘과 레이블을 정렬하는 CSS 기법, border-image 애니메이션, StyleX 심층 분석, 브라우저 API 타입을 확장하는 modern-web-types, Shopify의 네이티브 모바일 전환까지 이번 주 개발 소식."
tags: ["css", "javascript", "typescript", "animation", "react", "devtools", "ai", "react-native"]
---

# CSS

### [Better Icon and Label Alignment](https://ishadeed.com/article/aligning-list-icons/)

- 문장 첫 줄 세로 가운데 위치에 아이콘 지정하는 방법
- `lh` 를 사용하는 방법, 가상 요소를 사용하는 방법

### [Animating CSS border-image](https://css-tricks.com/animating-css-border-image/)

- border-image 를 사용해 border에 애니메이션을 만들고, radius 대응하는법.
- css mask 등 다른 기법으로도 가능하지만, border-image를 사용하면 매우 효율적이고 border-image-slice와 같은 기능 있음.

### [A deep dive into StyleX](https://flaviocopes.com/stylex/)

- 생성된 css 순서가 아니라 stylex.props()에 넣은 프롭 순서에 따라 스타일링 적용.
- `stylex.create({})` 는 객체로 생성되어 `keyof typeof` 로 타입 배리언트 추출 가능.
- 프로퍼티 안에 hover, active, disabled, 미디어쿼리 등 선언
- 컴포넌트가 받을 수 있는 prop 제한 가능.
- ai agent에게 제한된 범위의 적절한 선택지를 제공할 수 있다는 강점.

# Javascript

### [Trusted front-end quality rules for humans and AI agents](https://frontendchecklist.io/)

- 모던 웹 개발을 위한 체크리스트. 성능, 개인정보, 보안, SEO, 접근성, 다국어

### [neat-annotations](https://neat-annotations.syabro.com/)

- 텍스트에 손글씨 주석을 표현하는 라이브러리

### [Modern Web Types](https://philipwalton.com/articles/modern-web-types/)

- TS는 두개 이상의 브라우저 엔진에서 구현된 API 만 추가하는 정책 존재.
- `modern-web-types` 은 TS의 `DOM`, `WebWorker` 을 대체할 수 있는 라이브러리로 한 개 이상 엔진을 정책으로 가짐.

### [Fallow: codebase intelligence for TypeScript and JavaScript.](https://docs.fallow.tools/)

- 사용하지 않는 코드, 중복 코드, 복잡성, 아키텍쳐 변화, 디자인 시스템 일관성 등 코드와 스타일에 대한 정적 분석 도구.

# ETC

### [PageRage: Break any page](https://page-rage.com/)

- 페이지를 부수는 게임.
- 브라우저 익스텐션 제공.

### [Native is now the future of mobile at Shopify](https://shopify.engineering/back-to-native)

- AI로 인해 기술 선택 비용 구조가 달라졌고 shopify는 RN을 네이티브 모바일로 전환 예정.
- Shop은 이미 12주만에 네이티브 앱으로 다시 만들었고, 다른 앱들도 다시 만들 예정.
- 이를 위해 작은 단위를 반복할 Helix 라는 시스템 개발.

### Release

- [jsdom v30.0.1](https://github.com/jsdom/jsdom/releases/tag/v30.1.0)
- [ocliff v6.0.0](https://github.com/oclif/oclif/releases/tag/6.0.0)
- [React v19.3.0](https://react.dev/blog/2026/09/09/react-19-3)
- [react-router v.8.4.0](https://reactrouter.com/changelog#v840)
- [vite v8.3.0](https://github.com/vitejs/vite/releases/tag/v8.3.0)
- [zod v4.6](https://zod.dev/blog/zod-4-6)
- [React DevTools v8.0.0](https://github.com/react/react/blob/main/packages/react-devtools/CHANGELOG.md#800)
