---
title: dev-weekly 2026-10-03
date: "2026-10-03T20:43:00+09:00"
description: "CSS로 엘리먼트 충돌 감지하기, GitHub의 CSS Modules 전환과 성능 개선, Vite+ 1.0, HDR 이미지 효과, V8의 null 프로토타입 객체 최적화, AI 시대의 엔지니어링까지 이번 주 개발 소식."
tags: ["css", "javascript", "node", "vite", "performance", "v8", "ai", "accessibility"]
---

# CSS

### [Detect when elements overlap with CSS](https://ishadeed.com/article/css-detect-overlap/)

- anchor positioning과 timeline scope를 사용해 CSS만으로 엘리먼트 충돌 감지하기

### [Improving site performance by shipping more CSS](https://github.blog/engineering/architecture-optimization/improving-site-performance-by-shipping-more-css/)

- 깃헙은 Primer 사용중. 깃헙의 모든 css in js를 css module로 마이그레이션. 서버 레더링 시간은 55% 감소, 컴포넌트 초기화 시간은 25% 감소.
- 결과적으로 CSS 파일 전송은 늘었지만 JS, SSR 런타임 비용 감소로 전체 사이트 성능 향상.

# Javascript

### [Announcing Vite+ 1.0](https://voidzero.dev/posts/announcing-vite-plus-1-0)

- vite+ 1.0 릴리스. 웹 개발 도구들을 vp 하나로 통합
- vite+는 웹개발을 위한 단일 진입점. 프레임워크에 구애받지 않고 Vite를 사용하지 않아도 사용할 수 있음.
- vp run 캐시로 CI 최적화 제공, `vp migrate` 제공.

### [Make your logo brighter than white.](https://www.soverybright.com/)

- JPEG에 HDR gain map을 추가해 최대 #FFFFFF 보다 7.5배 밝게 만드는 라이브러리.
- `background-clip: text` 를 통해 텍스트 HDR 효과 생성 가능(HDR 이미지를 배경으로 설정)

# Nodejs

### [Optimizing objects with null prototypes](https://adventures.nodeland.dev/archive/optimizing-objects-with-null-prototypes/)

- V8 에서 `{ __proto__: null }`, `Object.create(null)`로 만든 객체는 생성 시점부터 "dictionary mode"라서 일반 객체보다 프로퍼티 접근이 느림. 반복해서 접근해도 hidden class 기반의 fast mode로 전환 안됨.
- `Object.setPrototypeOf({ ... }, null)`는 fast mode를 유지. WebStreams 내부의 null-prototype 객체를 class나 `Object.setPrototypeOf` 방식으로 바꾸자 일부 벤치마크에서 처리량이 2배 이상 향상.
- null prototype을 피하라는게 아니라 매우 빈번한 hot path에 있을 때는 최적화 가능하다는걸 설명.

# AI

### [Coding is NOT solved](https://blog.alexewerlof.com/p/coding-is-not-solved)

- AI 가 코드 생성 비용은 낮췄지만, 유지보수, 신뢰성, 보안, 비기능 요구사항(NFR)은 해결 안됨.
- LLM 은 확률적으로 동작하기 때문에 논리적 정확성이 필요한 코드에서는 피드백 루프같은 엔지니어링 장치가 여전히 필요.
- AI 생성 코드를 얼마나 깊게 이해하고 검증할지 시스템의 위험도, 규모, 격리 수준, 관측 가능성에 따라 달라져야 함. AI 를 과하게 사용하면 인지부채가 증가.
- 엔지니어링은 코드를 작성하는 일이 아니라 문제를 이해하고 해결책을 설계하고 결과에 책임지는 일.
- [https://news.hada.io/topic?id=34435](https://news.hada.io/topic?id=34435)

# ETC

### [Interface Cheat Sheet](https://interfaces.dev/cheat-sheet)

- UI 가이드 치트 시트. 레이아웃, 폰트, 애니메이션, 정렬, 디자인 토큰, 접근성 등 전방위적인 팁 모음.

### Release

- [MSW v3.0.0](https://github.com/mswjs/msw/releases/tag/v3.0.0) - ESM only
- [Mermaid v12.0.0](https://github.com/mermaid-js/mermaid/releases/tag/mermaid%4012.0.0) - 최소지원버전 ES2024, Safari 17.4, Node22.12
