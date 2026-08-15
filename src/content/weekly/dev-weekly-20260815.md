---
title: dev-weekly 2026-08-15
date: "2026-08-15T17:08:00+09:00"
description: "paint-order로 텍스트 stroke를 제대로 그리는 법, AI를 위한 브라우저 Kitesurf, DOM으로 TUI를 그리는 termdom, 밀려드는 AI 취약점 보고서 분류법까지 이번 주 개발 소식."
tags: ["css", "typography", "ai", "browser", "workers", "v8", "security", "node"]
---

# CSS

### [Improved CSS Text-Stroke](https://tylersticka.com/journal/improved-css-text-stroke/)

- CSS를 통해 텍스트에 outer stroke를 주기 위해 -webkit-text-stroke 같은 프로퍼티들을 사용했으나 이러한 프로퍼티들은 항상 아웃라인을 가운데 정렬하기 때문에 본문 텍스트를 침범.
- variable font의 경우 문제는 더 심각했으나 point-order 를 사용하여 명시적으로 배치 가능.

```jsx
.example {
  paint-order: stroke fill;
  -webkit-text-stroke: 0.125em white;
}
```

# Javascript

### [Introducing Kitesurf: The agent-first browser that runs in V8 isolates on Cloudflare Workers](https://blog.cloudflare.com/kitesurf/)

- 기존의 브라우저는 인간을 위한 도구. AI를 위한 브라우저 개발.
    - 탭, 테마, 브라우저 익스텐션 관심없음. 토큰 수, 컨텍스트 윈도우, 확장성, 성능, 비용에 관심
    - 시각적 완벽함이나 60fps 스클롤 필수 아님.
- 어떤 오류가 발생하더라도 빈 프레임이나 누락된 요소로 처리하고 세션 종료되지 않도록 함.
- 현재 Browser Run 에서 베타 기간 동안 무료 이용 가능하지만 계정별 횟수 제한 존재.
- 준비가 되는대로 오픈소스로 공개할 예정.
- [playground](https://kitesurf.cloudflare.app/) 제공

### [Hucre: Zero-dependency spreadsheet engine](https://github.com/productdevbook/hucre)

- 의존성 없는 스프레드 시트 라이브러리. xlsx, csv, ods, json, ndjson, xml 지원.
- 스키마 유효성 검사, 스트리이밍, 라운드트립 데이터 보존 기능 제공.
- 번들사이즈: 트리쉐이킹이 제공되기 때문에 4~129KB

### [termdom](https://termdom.org/)

- HTML, CSS, DOM을 사용하여 TUI 를 표시하는 라이브러리. 실제 DOM 노드를 터미널에 그리고 노드가 변경되면 화면을 다시 그림.

# ETC

### [Triaging the AI Horde](https://adventures.nodeland.dev/archive/triaging-the-ai-horde/)

- nodejs 커미티의 일원인 matteo collina의 AI horde 분류 방법
- VM에서 실행되는 에이전트와 페어링으로 진행. HackerOne에서 보고서를 가져와서 확장 프로그램이 설치된 Pi, Sol, Grok, Claude code등과 함께 공방을 거침. 상대 AI 가 장황한 설명을 늘어놓을때까지 이의제기.

### Release

- [pnpm 12](https://pnpm.io/blog/whats-different-in-pnpm-12)
- [deno 2.9.5](https://github.com/denoland/deno/releases/tag/v2.9.5) - 실험적인 quickjs 백엔드 추가
- [preact 11.0.0-rc.0](https://github.com/preactjs/preact/releases/tag/11.0.0-rc.0)
- [TanStack Table v9](https://tanstack.com/blog/announcing-tanstack-table-v9)
- [fastify v6.0.0-alpha.0](https://github.com/fastify/fastify/releases/tag/v6.0.0-alpha.0)
- [vitest v5.0.0-rc.1](https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-rc.1)