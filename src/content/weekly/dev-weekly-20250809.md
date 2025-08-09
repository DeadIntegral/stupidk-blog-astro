---
title: dev-weekly 2025-08-09
date: "2025-08-09T22:28:00.000Z"
description: "dev-weekly 2025-08-09"
tags: ["node", "javascript"]
---

# Nodejs

### [Deploy Hono backends with zero configuration](https://vercel.com/changelog/deploy-hono-backends-with-zero-configuration)

- vercel 에서 hono 지원

# Javascript

### [How we made JSON.stringify more than twice as fast](https://v8.dev/blog/json-stringify)

- JSON.stringify 는 네트워크 요청에 대한 데이터 시리얼라이징, localStorage 등 웹 전반에 사용되는 함수
- 사이트 이펙트 없는 Fast Path, 문자열 표현 처리, SIMD 를 사용한 직렬화 최적화, double-to-string 알고리즘, 임시 버퍼 최적화 등을 통한 성능 개선
- 모든 케이스에 대한 개선은 아니고, 제한 사항이 존재. 크롬 138부터 사용 가능.

### [Apache ECharts 6 New Features](https://echarts.apache.org/handbook/en/basics/release-note/v6-feature/)

- 새로운 기본 테마 제공, 동적 테마 스위치, 다크 모드 지원
- 새로운 차트 추가 - Chord, Beeswarm
- Scatter Jittering을 통한 밀집된 데이터 분포 표현
- Broken Axis을 통한 큰 차이나는 데이터 같이 표기하기
- Stock Trading Chart - 타임 쉐어링, MACD, 볼륨, 오더북, 뎁스 차트 제공
- 새로운 매트릭스 좌표계
- 커스텀 차트 제공

### [What’s New in ViteLand: July 2025 Recap](https://voidzero.dev/posts/whats-new-jul-2025)

- vite 7 출시. ESM 전용 패키지 제공. 처음으로 주간 다운로드 수 웹팩 넘음.
- rolldown - yarn pnp 지원. 시작 시간 2.1배 단축
- oxlint - type-aware 린팅 추가.
- vitest - visual regression 테스팅 지원

# ETC

### [Github ProfileHeader Generator](https://leviarista.github.io/github-profile-header-generator/)

- 깃헙 헤더 프로필 이미지 생성기

### [AI is a Floor Raiser, not a Ceiling Raiser](https://elroy.bot/blog/2025/07/29/ai-is-a-floor-raiser-not-a-ceiling-raiser.html)

- [https://news.hada.io/topic?id=22293](https://news.hada.io/topic?id=22293)
- 과거 학습 자료는 타겟 유저를 대상으로 제작되었으나, AI는 사용자 수준에 맞출 수 있음.
- AI는 지식 업무의 지평을 넓혔지만, 이 변화가 모두에게 중요한 것은 아님.

### Release

- [typescript 5.9](https://devblogs.microsoft.com/typescript/announcing-typescript-5-9/)
- [pnpm v10.14](https://pnpm.io/blog/releases/10.14)
    - package.json `devEngines.runtime` 에 nodejs, deno, bun 선언하면 자동으로 다운로드하고 고정
- [undici v7.13.0](https://github.com/nodejs/undici/releases/tag/v7.13.0)
- [zx v8.8.0](https://github.com/google/zx/releases/tag/8.8.0)