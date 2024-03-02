---
title: dev-weekly 2024-03-02
date: "2024-03-02T11:10:00.000Z"
description: "dev-weekly 2024-03-02"
tags: ["javascript", "css", "node"]
---
# CSS

### **[Scroll-Driven Animations: You want overflow: clip, not overflow: hidden](https://www.bram.us/2024/02/14/scroll-driven-animations-you-want-overflow-clip-not-overflow-hidden)**

- `overflow:hidden` 은 스크롤 컨테이너를 생성하기 때문에 스크롤 애니메이션을 방해. `overflow: clip` 을 사용하면 해결.

# Node

### **[Node.js 2023 Year in An Article](https://blog.rafaelgss.dev/nodejs-2023-year-in-review)**

- 2023년 동안 nodejs의 성과 요약. 23년은 2641커밋.
- 102개의 릴리스. 14, 16, 18, 19로 시작하여 현재는 18(Maintenance), 20(LTS), 21(Current). EOL 버전도 여전히 많이 사용되는중.
- nodejs의 종속성들 - Ada, simdutf, simdjson 추가.
- 성능 향상
    - libuv 1.45.0 을 적용하여 io_uring 활성화로 인한 성능 향상
- 웹사이트 업데이트
- 새로운 기능들
    - Single Executable Apps, Built in .env, WebSocket client, Test runner, …

# Javascript

### **[JSR: What We Know So Far About Deno’s New JavaScript Package Registry](https://socket.dev/blog/jsr-new-javascript-package-registry)**

- JSR은 TS-first 환경.
- JSR에 대한 커뮤니티의 평가들 모음.

### **[PGlite - Postgres in WASM](https://github.com/electric-sql/pglite)**

- 브라우저, Node.js, Bun, Deno에서 실행 가능한 Postgres WASM 패키지 버전

### **[Parcel v2.12.0](https://parceljs.org/blog/v2-12-0/)**

- 매크로 기능 추가. 매크로는 번들에 포함되지 않고 import 해야함.
- REPL 추가 - [https://repl.parceljs.org/](https://repl.parceljs.org/)
- menual shared bundle, 성능 향상.

### **[17 Equations that Changed the World - Rewritten in JavaScript](https://runjs.app/blog/equations-that-changed-the-world-rewritten-in-javascript)**

- 방정식들 설명 및 JS 구현체
- 피타고라스의 정리, 로그, 미적분, 만유인력의 법칙, 복소수, 오일러 다면체 정리, 정규분포, 파동방정식, 푸리에 변환, N-S(나비에 스토크스) 방정식, 맥스웰 방정식, 열역학 제2법칙, 상대성이론, 슈뢰딩거 방정식, 정보 이론, 인구증가에 대한 로지스틱 모델, 블랙 숄즈 모형

# ETC

### **[Open Letter to Tim Cook, Sabotaging Web Apps Is Indefensible](https://letter.open-web-advocacy.org/)**

- DMA에 대한 애플의 대응(iOS, Safari의 PWA 파괴)에 대한 서한. 서명 가능.
- vercel CTO, RxDB, 유럽 의회 의원, google, astro, MIT 등 다양한 사람들의 서명

### **[Designing with Integrity: The Ethical Designer’s Handbook on Dark Patterns](https://raw.studio/blog/designing-with-integrity-the-ethical-designers-handbook-on-dark-patterns/)**

- 다크패턴이란 유저의 최선이 아니라 디자이너의 이익에 부합하는 조치를 위하도록 사용자를 의도적으로 속이거나 조작하는 UI 디자인 선택.
- 다크패턴의 예시들
    - Misdirection, Forced Continuity, Roach Motel, Sneak into Basket, Confirmshaming
- 윤리적 디자이너의 관점

### **Release**

- [Announcing TypeScript 5.4 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4-rc/)
- [Highlights from Git 2.44](https://github.blog/2024-02-23-highlights-from-git-2-44/)
- [deno v1.41](https://deno.com/blog/v1.41)
- [babel v7.24.0](https://babeljs.io/blog/2024/02/28/7.24.0)
- [embla-carousel v8.0.0](https://github.com/davidjerleke/embla-carousel/releases/tag/v8.0.0)
- [jotai v2.7.0](https://github.com/pmndrs/jotai/releases/tag/v2.7.0)