---
title: dev-weekly 2026-05-09
date: "2026-05-09T17:54:00+09:00"
description: "dev-weekly 2026-05-09"
tags: ["javascript", "node", "remix", "rolldown", "bundler", "security", "browser", "astro"]
---

# Javascript

### [Remix 3 Beta Preview](https://remix.run/blog/remix-3-beta-preview)

- Remix 3는 React 기반 메타프레임워크에서 벗어나 라우팅, 인증, 폼, DB, UI 를 포함한 풀스택 웹 프레임워크
- Unbundling - 런타임이 진실의 원천. 번들러 의존성 줄이고 AI 에이전트와 사람이 모두 이해하기 쉬운 개발 경험이 목표

### [Trustworthy JavaScript for the Open Web](https://hacks.mozilla.org/2026/05/trustworthy-javascript-for-the-open-web/)

- Web Application Integrity, Consistency and Transparency (WAICT) 는 웹 플랫폼에 무결성, 일관성, 투명성을 보장.
- 클라이언트 코드를 암호화하여 메니페스트와 연결시킬 수 있고, 공개적으로 기록되지 않은 코드를 전송한다면 브라우저는 해당 코드를 거부.
- 파이어폭스 나이틀리에서 사용해볼 수 있으며, [https://waict.dev](https://waict.dev/) 에서 테스트 가능.

### [Announcing Rolldown 1.0](https://voidzero.dev/posts/announcing-rolldown-1-0)

- 주요 목표 중 하나는 vite의 2-번들러 구조 통합. 두 개의 변환 파이프라인, 플러그인 시스템 등은 비트의 향후 발전을 저해하는 요소.
- RC 이후 개선 - 버그수정, Watch mode, Native MagicString
- 다음으로 full bundle mode와 lazy barrel optimization을 통해 더욱 개선할 것.

# Nodejs

### [Node.js 26.0.0 (Current)](https://nodejs.org/en/blog/release/v26.0.0)

- Temporal API 기본 활성화. V8 14.6 적용, Undici 8.0으로 업데이트.
- 10월에 LTS로 전환 예정

### [Node.js 26.1.0 (Current)](https://nodejs.org/en/blog/release/v26.1.0)

- 실험적인 node:ffi 모듈. 동적 라이브러리를 로드하고 JS에서 네이티브 심볼을 호출하기 위한 모듈
    - `--experimental-ffi` 플래그를 통해 접근 가능
    - ffi(Foreign Function Interface) 는 다른 언어로 작성된 라이브러리와 직접 연동할 수 있는 매커니즘.

### [Node.js 20 EOL](https://nodejs.org/en/about/eol)

- 이제 모든 LTS Node 릴리스에서 플래그 없이 TS 실행 가능

# ETC

### [Open web vs AI: what can W3C do?](https://hidde.blog/web-ai-breakout/)

- W3C Advisory Committee meeting 에서 오픈 웹에 대한 위협들에 어떻게 대응해야 하는가 세션 내용 발췌
- 웹은 개방형 표준 덕분에 성공했지만 모든 사람에는 LLM 크롤러도 포함. 이들의 접속 행위는 ddos와 유사하고 콘텐츠는 LLM과 AI 에이전트에게 소비됨.
- 웹을 보호할 필요가 없다는 주장 역시 존재. 검색 엔진들은 항상 웹에서 정보를 수집 해 옴.

### [Learnings from conducting ~1,000 interviews at Amazon](https://newsletter.pragmaticengineer.com/p/learnings-from-conducting-1000-interviews)

- 기술면접과 행동면접behavioral interviews이 채용 결정에 미치는 영향
- 면접은 시험이 아니라 이 사람과 함께 일하고 싶은가를 판단하는 오디션과 유사
- 기업이 적합성 신호를 감지하는 방법과 부적합 유형
- [https://news.hada.io/topic?id=29141](https://news.hada.io/topic?id=29141)

### Release

- [pm2 v7.0.0](https://github.com/Unitech/pm2/releases/tag/v7.0.0)
    - Bun 런타임 지원
- [Astro v7 Alpha](https://astro.build/blog/astro-620/#astro-v7-alpha)
- [electron v41.5.0](https://github.com/electron/electron/releases/tag/v41.5.0)
- [ember 6.12](https://blog.emberjs.com/ember-released-6-12/)
- [animejs v4.4.0](https://github.com/juliangarnier/anime/releases/tag/v4.4.0)