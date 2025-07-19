---
title: dev-weekly 2025-07-19
date: "2025-07-19T19:56:00.000Z"
description: "dev-weekly 2025-07-19"
tags: ["css", "node", "javascript", "WASM"]
---

# CSS

### [Scroll-Driven Sticky Heading](https://css-tricks.com/scroll-driven-sticky-heading/)

- 스크롤에 따라 스티키 헤더의 텍스트들이 변하는 애니메이션
- 접근성을 위한 srOnly처리 및 SDA(Scroll Driven Animation)를 지원하지 않으면 정적인 콘텐츠 표시

# Javascript

### [Next.js 15.4](https://nextjs.org/blog/next-15-4)

- 성능, 안정성, 터보팩 호환성 개선
- Next 16 전망

### [I’m more proud of these 128 kilobytes than anything I’ve built since](https://medium.com/@mikehall314/im-more-proud-of-these-128-kilobytes-than-anything-i-ve-built-since-53706cfbdc18)

- 저자가 좋아하는 디자인 정의 중 하나는 “주어진 제약 조건 내에서 주어진 문제를 해결하는 것”
- 아프리카에 웹사이트 제공했던 경험. 통신 상태는 불안정하고, 40%는 피쳐폰, 가로 240px 디스플레이. 제약 조건으로 에셋을 포함한 전체 애플리케이션을 128KB 로 맞추기로 설정.
- 240px 부터 4k 데스크톱까지의 반응성. 오페라 미니 지원 필요.
- 웹 폰트 포기. 프레임워크 프리.
- JPEG 처리를 위해 2배로 크기를 늘리고 퀄리티 0으로 포맷해서 아티팩트 최소화(트레이드 오프)
- SVG가 지원되지 않는 브라우저를 위한 폴백, SVG최적화를 위한 코드 직접 수정.

# Node

### [Upyo: Simple and modern email sending library](https://upyo.org/)

- Nodejs, Deno, Bun, Edge Function 등 다양한 런타임 환경에서 일관된 API 제공하는 이메일 라이브러리
- 의존성 없음. 모의 전송 기능 제공. 오픈 텔레메트리와 통합.
- 프로바이더 독립적. SMTP, Mailgun, SendGrid, Amazon SES 등을 쓰더라도 애플리케이션 코드는 동일하게 유지

### [Laravel + Node.js: PHP in Watt Runtime](https://blog.platformatic.dev/laravel-nodejs-php-in-watt-runtime)

- nodejs 내부에 멀티스레드 php 런타임을 직접 내장하는 Rust 기반 네이티브 모듈 `@platformatic/php-node` 사용
- 새로운 가능성 제시
    - 기존 기능을 유지하면서 php 애플리케이션을 JS로 점진적 마이그레이션

### [How To Create An NPM Package](https://www.totaltypescript.com/how-to-create-an-npm-package)

- NPM 패키지 만들기 전체 프로세스 간략히 설명.
- Git, TS, Prettier, Vitest, Github Actions, Changesets

# ETC

### [Apple's Browser Engine Ban Persists, Even Under the DMA](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/)

- OWA(Open Web Advocacy) 에서는 애플이 EU의 DMA를 준수하지 않는다고 주장.
- EU의 DMA(디지털 시장법)에 따라 애플은 iOS 17.4 부터 EU 내에서 웹킷 외 엔진 사용을 허용.
    - 단, 기존 앱 업데이트 하면 안되고 새로운 앱 으로 다시 만들어야 함. 또한 글로벌 앱은 안되고 EU 지역 전용 앱으로 만들라고 요구.

### [WASM](https://queue.acm.org/detail.cfm?id=3746171)

- WASM은 대규모 C, Cpp 데스크톱 앱을 웹으로 리타겟팅, 파일 포맷 핸들러, per-pixcel 프로세서, SQLite 같은 임베딩 라이브러리를 웹으로 가져오는데 효과적.
- 게임에서는 성공못함.
- 유저 중심 웹 인터페이스에선 JS/TS가 더 적합 feat. GC 이슈
- 클라우드 WASM 분야는 치열하게 경쟁중.

### Release

- [Nats v.3.1.0](https://github.com/nats-io/nats.js/releases/tag/v3.1.0)
- [tiptap v3](https://tiptap.dev/docs/resources/whats-new)