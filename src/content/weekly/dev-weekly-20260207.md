---
title: dev-weekly 2026-02-07
date: "2026-02-07T22:46:00.000Z"
description: "dev-weekly 2026-02-07"
tags: ["javascript", "nodejs", "css"]
---

# CSS

### [Performance-Optimized Video Embeds with Zero JavaScript](https://frontendmasters.com/blog/performance-optimized-video-embeds-with-zero-javascript/)

- `<details>`, `<summary>` 를 사용해 JS 없이 비디오 지연 로딩
- details 를 펼치면 `[open]` 이 생김. e.g. `&[open] { .video-summary { visibility: hidden } }`

# Nodejs

### [Chalk to Node.js util styleText](https://nodejs.org/en/blog/migrations/chalk-to-styletext)

- chalk 메서드 호출을 Nodejs 네이티브 스타일링으로 변환하고 chalk 패키지를 제거하는 codemod 제공
- `npx codemod @nodejs/chalk-to-util-styletext`

# Javascript

### [Explicit resource management in JavaScript](https://allthingssmitty.com/2026/02/02/explicit-resource-management-in-javascript/)

- 명시적 리소스 관리를 위한 `using` 소개.
- 크롬 123, 파이어폭스 119부터 사용 가능. 사파리 미지원.

### [7 learnings from Anders Hejlsberg: The architect behind C# and TypeScript](https://github.blog/developer-skills/programming-languages-and-frameworks/7-learnings-from-anders-hejlsberg-the-architect-behind-c-and-typescript/)

- 터보 파스칼, 델파이의 창시자이자 C# 리드 아키텍트, TS의 설계자와의 인터뷰
- 확장 가능한 소프트웨어란 개인적인 선호를 내려놓는 일. C#은 이론적인 순수함이 아니라 많은 사람들이 효과적으로 사용할 수 있도록 한 언어.
- TS가 JS를 대체하는 대신 확장 한 이유는 생태계 버리라고 하는것이 비현실적이기 때문. 기존 워크플로에 대한 존중.
- 언어 포팅 목표는 의미론적 충실도 유지. Rust는 오너십 제약과 순환참조 데이터 구조 때문에 상당량의 재설계 필요. Go는 GC와 구조적 유사성 때문에 채택.
- AI 드리브 워크플로에서는 생성보다 기반이 중요. 도구의 가치는 창의성이 아니라 정확성과 제약.

# ETC

### [Throttle individual network requests](https://developer.chrome.com/blog/throttle-individual-network-requests?hl=en)

- 크롬 브라우저 네트워크 탭에서 개별 요청마다 `request condition` 조절 가능
    - e.g. 특정 api 만 요청 속도 제한 설정 가능

### [nanoclaw: A lightweight alternative to Clawdbot / OpenClaw](https://github.com/gavrielc/nanoclaw)

- Clawdbot, OpenClaw의 경량 대안으로, 보안을 위해 Apple container 혹은 Docker 에서 실행

### Release

- [gatsby v5.16](https://www.gatsbyjs.com/docs/reference/release-notes/v5.16/)
    - react 19, nodejs 24 지원
- [babel v7.29.0](https://babeljs.io/blog/2026/01/31/7.29.0)
    - babel 7 마지막 마이너 릴리스. babel 8 rc 출시
- [bun v1.3.8](https://bun.com/blog/bun-v1.3.8) - markdown 파서 추가
- [lexical v0.40.0](https://github.com/facebook/lexical/releases/tag/v0.40.0)
- [knip v5.83.1](https://github.com/webpro-nl/knip/releases/tag/knip%405.83.1)