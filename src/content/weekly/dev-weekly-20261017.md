---
title: dev-weekly 2026-10-17
date: "2026-10-17T15:09:00+09:00"
description: "Interop 2027 웹 플랫폼 기능 투표, 폴더블 기기를 위한 웹 API, Node.js·Bun·Deno의 WebSocket 성능 비교, Let’s Encrypt 인증서 유효기간 단축, 브라우저 핑거프린팅과 주요 릴리스까지 이번 주 개발 소식."
tags: ["javascript", "node", "bun", "deno", "websocket", "performance", "browser", "security"]
---

# Javscript

### [2027 Web Platform Feature Ranking](https://interop-rank.fxdx.dev/)

- 관심있는 Interop 2027 제안 사항에 투표하여 랭크를 매기는 서비스.
- 인터롭 과정에서 적절한 제안 사항을 추진하는데도 도움되지만, 제작사(파이어폭스)의 웹 플랫폼 기능 개발 우선순위를 정하는데도 활용

### [What the iPhone Duo means for web development (and Video.js)](https://videojs.org/blog/iphone-duo-web-development)

- 아이폰 듀오 같은 폴더블 기기에서는 Device Posture API와 Viewport Segments API 로 접혔는지 화면이 어떻게 나뉘어졌는지 웹에서 감지 가능.
- 이를 이용하여 넷플릭스 같은 UI 를 웹에서 구현하기 위해 video.js 플레이어 실험 해본 포스트
    - 아이폰 듀오만 대응되고 다른 폴더블 디바이스에서는 넷플릭스처럼 비디오와 컨트롤러 분리 불가

# Nodejs

### [WebSocket servers in JavaScript: Node.js, Bun and Deno in 2026](https://lemire.me/blog/2026/10/10/websocket-servers-in-javascript-node-js-bun-and-deno-in-2026/)

- 과거 Bun websocket이 Nodejs보다 2배 빼르다고 한 벤치마크 오류를 수정하고, AI 의 도움을 받아 C 클라이언트로 다시 측정.
- 단일 핑퐁 테스트는 초당 C  54,000, nodejs, uWebSockets.js 49,000, Deno.serve 40,000, Bun.serve 37,000. ws 패키지로 통일해도 nodejs가 가장 빠름.

# ETC

### [64-Day Certificate Lifetimes Coming Feb 2027](https://letsencrypt.org/2026/10/07/64-day-certs)

- 2027년 2월10일부터 모든 Let’s Encrypt 가입자는 64일 유효기간 인증서로 전환.
- 테스트를 위해 2026년 10월 14일부터 스테이징 환경에서 64일 인증서 발급 예정.
- 갱신이 자동화되어있고 ACME 갱신 정보ARI 를 지원하는 경우 설정 완료

### [Fingerprints are the new cookie](https://royfish.dev/fingerprints-are-the-new-cookies)

- 브라우저들이 쿠키 기반 추적을 제한하지만 크롬은 개인정보보호정책 약함. 기기, 브라우저 특성을 조합한 핑거프린팅 대체 추적 수단이 중요해지는 중.
- 여러 작은 정보를 결합하면 사용자를 꽤 안정적으로 식별 가능.
- 개인 정보 보호 기능을 사용하면 표본이 적어지기 때문에 더욱 특별해짐. 스마트 추적기는 이러한 부분을 감지하고 방해 안받는 신호에 집중.

### Release

- [Bun v1.4.3](https://bun.com/blog/bun-v1.4.3)
    - `bun check` 에 TS 7.0.2 적합성 테스트 100% 통과하는 러스트로 만든 타입검사기 내장. 3~6.4배 성능, 메모리 사용량은 2.2~4.9배 감소
    - JSCore 업그레이드
- [Partytown v1.0.0](https://github.com/QwikDev/partytown/releases#release-v1.0.0)
- [Express v5.3.0](https://github.com/expressjs/express/releases/tag/v5.3.0)
- [Bootstrap 6 Alpha](https://blog.getbootstrap.com/2026/10/08/bootstrap-6-alpha/)
- [Hono v5 RC migrate](https://hono.dev/docs/guides/migrating-to-v5)
- [skia-canvas v4.0.0](https://github.com/samizdatco/skia-canvas/releases/tag/v4.0.0)
- [setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0)
- [happy-dom v21.0.0](https://github.com/capricorn86/happy-dom/releases/tag/v21.0.0)
