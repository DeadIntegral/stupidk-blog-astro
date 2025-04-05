---
title: dev-weekly 2025-04-05
date: "2025-04-05T18:01:00.000Z"
description: "dev-weekly 2025-04-05"
tags: ["javascript", "css", "node"]
---

# CSS

### [Carousels with CSS](https://developer.chrome.com/blog/carousels-with-css?hl=ko)

- CSS로 캐러셀 만들기 feat.CSS Overflow5 (크롬135부터 지원)

### [Cowardly Defaults and Courageous Overrides with Modern CSS](https://cloudfour.com/thinks/cowardly-defaults-and-courageous-overrides-with-modern-css/)

- 유틸리티 CSS 를 사용할 때 지금까지는 property간의 의존성 문제가 존재했음.
    - e.g. border-width를 변경할 땐 border가 있는 곳에만 작동
- 유틸리티 간 충돌에 대해 과거엔 특이성을 높여 해결했으나 반복이 많고 유지보수가 어려웠지만, 이제  `:where` 구문을 이용해 조건부 스타일 지정 가능

### [Item Flow, Part 1:A new unified concept for layout](https://webkit.org/blog/16587/item-flow-part-1-a-new-unified-concept-for-layout/)

- Masonry 레이아웃 패턴은 아직까지도 JS로 구현됨.
- 2020년 모질라에서 CSS로 처음 구현 시작했던걸 애플 Webkit에서 계승. grid를 사용할지 새로운 피쳐를 만들지 많은 논쟁끝에 CSS Working Group에서 Item Flow 속성이라는 통합 시스템을 만들기로 결정.
- item-flow의 동작에 대한 설명

# Javascript

### [Bare: ActuallyRun Javascript Everywhere](https://bare.pears.com/)

- V8, libuv를 사용하는 모듈식 JS 런타임
- ESM, CommonJS 상호운용지원, 네이티브 에드온 지원, 모바일에 쉽게 임베드 가능

# Node

### [Express@5.1.0: Now the Default on npm with LTS Timeline](https://expressjs.com/2025/03/31/v5-1-latest-release.html)

- express v5는 24년9월에 릴리스 했지만 npm에 lastest로 퍼블리시되지 않음.
- 문서, 마이그레이션, 생태계 호환성 등 다양한 문제 때문.
- 지금은 codemod 제공(하지만 모든게 자동화 가능하진 않고 개발자의 수동 수정 필요. e.g. Path Route Matching syntax)

# ETC

### Release

- [zx v8.5.0](https://github.com/google/zx/releases/tag/8.5.0)
- [fastify v5.2.2](https://github.com/fastify/fastify/releases/tag/v5.2.2)
- [babel v7.27.0](https://babeljs.io/blog/2025/03/24/7.27.0)
- [React 19.1.0](https://github.com/facebook/react/releases/tag/v19.1.0)
- [astro 5.6](https://astro.build/blog/astro-560/)
- [ember 6.3](https://blog.emberjs.com/ember-released-6-3/)
- [Turborepo 2.5](https://turbo.build/blog/turbo-2-5)
- [bun v1.2.8](https://bun.sh/blog/bun-v1.2.8)