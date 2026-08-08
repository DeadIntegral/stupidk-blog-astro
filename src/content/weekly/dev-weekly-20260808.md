---
title: dev-weekly 2026-08-08
date: "2026-08-08T21:07:00+09:00"
description: "CSS @route·@navigation으로 라우트별 전환 스타일링, 메모리 새는 SPA 소크 테스트하기, cdnjs의 Cloudflare Developer Platform 마이그레이션, AI 봇에게만 다른 사이트를 내주는 TIME까지 이번 주 개발 소식."
tags: ["css", "view-transitions", "testing", "playwright", "cloudflare", "react", "npm", "ai"]
---

# CSS

### [Styling the Navigation: Declarative Route and Navigation Matching in CSS](https://www.bram.us/2026/07/30/styling-the-navigation-declarative-route-and-navigation-matching-in-css/)

- 페이지 전환 시 from, to에 따라 다르게 애니메이션을 적용하고 싶지만 스크립트를 넣으면 급격히 복잡.
- CSS `@route`, `@navigation` 을 정의해서 패턴 매칭으로 CSS로 컨트롤 하는 드래프트

# Javascript

### [Your SPA Is Leaking Memory. Soak Test It](https://denodell.com/blog/your-spa-is-leaking-memory-soak-test-it)

- 소크 테스트란 서버에 스크립트를 연결하여 일정 시간 가상 트래픽을 전송하는 것. SPA도 네이티브 앱 처럼 되었기 때문에 소크 테스트가 필요.
- playwright에서 CDP(Chrome DevTools Protocol)를 메모리 메트릭 수집하기.
- `page.clock.runFor()` 를 통한 시간 조작, `page.routeWebSocket()` 을 통한 모킹

### [Dogfooding at scale: migrating cdnjs to Cloudflare’s Developer Platform](https://blog.cloudflare.com/cdnjs-dev-platform-migration/)

- 하루 90억건 요청 - 브라우저가 ESM을 지원하고 번들러도 있지만 LLM이 cdnjs를 선호.
- 지속적인 개선을 위해 서버리스로 마이그레이션. 2020년의 아키텍처와 현재의 아키텍처

### [Open source UI kit for modern document apps](https://www.extend.ai/ui)

- PDF, Docx, Xlsx, CSV 파일 뷰어를 제공하는 리액트 컴포넌트.
- 바운딩 박스 인용, 파일 업로드, 전자 서명 등 기능 제공.

# Nodejs

### [vlt 1.0 & Hosted Package Registries](https://www.vlt.io/blog/1-0)

- npm 대체를 위한 패키지 매니저 제작.
- 디펜던시 그래프에 대해 CSS selector 비슷한 신택스로 질의 가능. 이 디펜던시가 eval을 사용하는가 같은 쿼리도 가능.
- npm registry API와 호환

# AI

[TIME Is Serving AI Bots a Different Website, With Ads Built In](https://www.vincentschmalbach.com/time-serves-ai-bots-a-different-website/)

- 타임지는 사람과 크롤러가 접속했을때는 일반 사이트를 보여주지만, AI bot (보조 크롤러)이 방문하면 광고를 띄움. 사람은 절대 마주치지 않은 마크다운안에 FAQ 를 숨김.

# ETC

### Release

- [Next.js 16.3](https://nextjs.org/blog/next-16-3)
- [mobx v7.0.0](https://github.com/mobxjs/mobx/releases/tag/mobx%407.0.0)
- [vite 8.2](https://github.com/vitejs/vite/blob/v8.2.0/packages/vite/CHANGELOG.md)
- [lerna v10.0.0](https://github.com/lerna/lerna/releases/tag/v10.0.0) - ESM only
- [microdiff v1.6.0](https://github.com/AsyncBanana/microdiff/releases/tag/v1.6.0)
- [ffmpeg-webCLI](https://github.com/tejaswigowda/ffmpeg-webCLI) - WASM을 통해 브라우저 로컬에서 동작.
- [ioredis v6.0.0](https://github.com/redis/ioredis/releases/tag/v6.0.0)