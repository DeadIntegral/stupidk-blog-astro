---
title: dev-weekly 2026-10-31
date: "2026-10-31T21:08:00+09:00"
description: "TypeScript 7.1 베타, JavaScript·WebGL로 재구현한 GTA.js, React API 호환 TanStack Redact, HTML-in-Canvas, SQL 타입 추론 도구 Reylo와 주요 릴리스까지 이번 주 개발 소식."
tags: ["javascript", "typescript", "react", "webgl", "canvas", "sql", "browser", "performance"]
---

# Javascript

### [Announcing TypeScript 7.1 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-7-1-beta/)

- Abmient Modules에서 import attribute 제공.
    - `import someTheme from "./themes/someCoolTheme.css" with { type: "css" };`
    - 문제 예시) 런타임 환경이 서로 다른 import attribute 지원할 수 있음. 번들러는 .css를 가져올 때 CSS Modules 라는 빌드 타임 기능을 기본 동작으로 사용할 수 있지만, 브라우저에서 지정하면 CSSStyleSheet 객체로 가져오도록 보장 가능.
- WASM 모듈을 실행하지 않고 가져오는 import source 지원
- ECMA 2026과 새로운 JS API 지원
- 컴파일러를 외부 도구에서 활용할 수 있는 새로운 API 제공
- 가상 파일 시스템을 지원해 실제 파일 없이 타입 검사 가능.
- 7.0 대비해서 1.2~1.9배 성능 향상, 메모리 사용량 15~50% 감소

### [GTA.js, a reimplementation of the 1997 Grand Theft Auto engine in JavaScript and WebGL](https://www.bram.us/2026/10/22/gta-js/)

- 1997년작 GTA엔진을 JS와 WebGL로 재구현. 원작과 비교했을 때 물리적 동작, 애니메이션 등에서 차이 있을 수 있지만 임무 에닞ㄴ은 정확. Gemini를 사용해 구현.
- [https://gtajs.wtf/](https://gtajs.wtf/)

### [Introducing TanStack Redact](https://tanstack.com/blog/introducing-tanstack-redact)

- React API 를 호환하는 더 가벼운 번들. TanStack Start, Vite, Vinext, Next.js와의 안정적인 브라우저 통합 제공. App Router, pages Router 모두 지원.
- 브라우저 렌더링이나 로딩 속도는 측정 대상 아님. 스케쥴링상의 절충점 존재. 앱에서 가장 사용량이 많은 화면은 직접 테스트해 보는 것이 좋음.

### [HTML-in-Canvas in Chrome 157: Interactive DOM inside 2D, WebGL, and WebGPU](https://developer.chrome.com/blog/html-in-canvas?hl=en)

- 이전엔 캔버스에서 접근성, 폰트 이슈, 브라우저 기능 손실(Ctrl + F) 등 존재. 혹은 캔버스 위에 HTML 오버레이를 띄울 수 있지만 성능 오버헤드 존재.
- HTML in canvas API 사용하면 canvas 내에 HTML을 배치. 주요 WebGL, 3D 그래픽 라이브러리가 지원 중. Threejs, playCanvas, Babylonjs, pixijs, canvasUI 등.

### [ui sfx: UI sound design,ready to ship](https://uisfx.com/)

- 웹, 모바일, SaaS, 교육, 미디어, 게임 등에 사용할 수 있는 작은 인터페이스 사운드 효과 라이브러리.
- 12가지 종류, 936개의 작은 음악 파일.

# Nodejs

### [Reylo: import .sql files into your TS code](https://reylo.dev/)

- SQL을 작성하면 TS 타입을 자동으로 추론해주는 도구. TS 7.1의 콘텐츠 매퍼를 활용.
- SQL을 별도 파일에 작성하고 TS에서 가져와 사용할 수 있어, ORM 없이 익숙함 SQL 활용 가능.
- 실제 DB 구조를 바탕으로 타입을 추론해서 조회 결과에 맞는 TS 타입을 작성할 필요 없음.

# ETC

### [If IPv4 were land](https://iptrust.co/blog/if-ipv4-were-land)

- IPv4 주소는 36억개 존재. 각 국가별 IP 주소 점유에 따른 지도 그려보기
- 네덜란드는 48배, 한국은 43배, 태국은 39배 커지고, 콩고 민주 공화국은 267배 몽고는 219배 작아짐.

### Release

- [WebKit Features for Safari 27.1](https://webkit.org/blog/18486/webkit-features-for-safari-27-1/)
    - 아이폰 듀오 viewport size, 접이식 스크린용 페이지 제작하기
- [Chrome 156](https://chromestatus.com/release-notes/156)
    - IndexedDB SQLite를 기반으로 재작성
- [bun 1.4.4](https://bun.com/blog/bun-v1.4.4)
- [verdaccio v7.0.0](https://github.com/verdaccio/verdaccio/releases/tag/v7.0.0)
- [Biome v2.6 Support for new languages, JavaScript plugins, better Tailwind integration and the biome inspect command](https://biomejs.dev/blog/biome-v2-6/)
- [oxlint v1.89.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.89.0)
- [opentelemetry-js 3.0](https://github.com/open-telemetry/opentelemetry-js/blob/main/doc/3.x/announcement.md)
