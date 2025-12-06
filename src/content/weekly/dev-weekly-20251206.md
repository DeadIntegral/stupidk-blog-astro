---
title: dev-weekly 2025-12-06
date: "2025-12-06T23:08:00.000Z"
description: "dev-weekly 2025-12-06"
tags: ["css", "nodejs", "javascript", "bun"]
---

# CSS

### [Anchor Positioning and the Inset-Modified Containing Block](https://www.bram.us/2025/12/02/anchor-positioning-and-the-inset-modified-containing-block-imcb/)

- 앵커 포지션의 IMCB - align self, justify-self 속성을 사용해 IMCB 내에서 앵커 요소 위치 조정

# Nodejs

### [93% Faster Next.js in (your) Kubernetes](https://blog.platformatic.dev/93-faster-nextjs-in-your-kubernetes)

- 클러스터/pm2 사용 시 약 30%의 IPC 오버헤드 발생. single pod을 사용하면 부하 불균형 심화되는 고립된 큐 생성
- nodejs의 이벤트 루프 큐에 들어가면 처리가 시작될 때 가지 거부 할 수 없는 이슈(Early Rejection Problem). 오버로드 발생하면 로드 밸런서가 다른 곳으로 트래픽 라우팅 할 수 있어야 하는데 nodejs의 이벤트 루프는 이를 어렵게 함. SSR에 의존하는 프레임워크는 early 503 response 구현 불가.
- watt의 솔루션은 nodejs 마스터 프로세스 대신, Linux 커널이 SO_REUSEPORT를 통해 직접 부하 분산을 조정하고 조정 오버헤드 없이 Nodejs 앱 실행시키기
- p50 PM2대비 93.6%, single cpu 대비 92.5% 개선, p95 PM2 대비 81.3%, single CPU 대비 76.5% 개선

# Javascript

### [Progress on TypeScript 7 – December 2025](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/)

- `@typescript/native-preview` 의 tsgo 의 유효성 검사는 충분히 안정적. TS 6.0과 별 차이 없음.
- TS 7.0 릴리스 전에 해결 예정인 일시적인 문제지만 주의사항 존재.
- TS 6.0은 JS/TS 코드베이스를 기반으로 하는 마지막 릴리스. 6.0.은 있어도 6.1은 없을 것.

### [Bun is joining Anthropic](https://bun.com/blog/bun-joins-anthropic)

- 앤트로픽에서 Bun 인수. 클로드 코드는 Bun 실행 파일로 제공될 것.

### [Vite 8 Beta: The Rolldown-powered Vite](https://vite.dev/blog/announcing-vite8-beta)

- Rolldown 기반 vite 의 첫 번째 베타 버전 릴리스.
- esbuild와 rollup 대신 rolldown 사용. 두 개의 번들링 파이프라인을 유지 비용, 서로 다른 플러그인 시스템, 번들링 동작 일치시키기 위한 글루코드 등을 해결하기 위한것이 Rolldown
- 마이그레이션 가이드 투 트랙 제공. 한번에 하기, vite7로 마이그레이션 후 하기

### [Oxfmt: Oxc Formatter Alpha](https://oxc.rs/blog/2025-12-01-oxfmt-alpha)

- prettier 의 구성파일 호환 (파일 이름 변경만 해도 동작)
- 베타에서는 css in js, graphql in js, import sort 등 지원 예정

### [How we accidentally made route matching more performant by aiming for correctness](https://tanstack.com/blog/tanstack-router-route-matching-tree-rewrite)

- TanStack Router의 route matching 성능 2만배 향상. segment trie 로 파싱하고 순회하는 형태.
- 정확하게 만들자는 취지였는데 성능향상된 케이스.

# ETC

### [Decreasing Certificate Lifetimes to 45 Days](https://letsencrypt.org/2025/12/02/from-90-to-45.html)

- Lets Encrypt 인증서 유효 기간 단축 예정.
- 인증서 유효기간 90일은 28년까지 45일로. 인증서 발급 권한 재사용 기간 30일은 28년까지 7시간으로.
- DNS-PERSIST-01 검증 방법을 통해 DNS 항목을 한번만 설정하면 DNS 자동 업데이트와 무관하게 인증서 자동 갱신 가능

### [Farewell for now, Chrome.](https://addyosmani.com/blog/farewell-chrome/)

- addy osmani가 14년간 종사한 크롬팀을 떠나며 남긴 글
- 가장 기억에 남는것은 특정 기능이나 출시가 아니라, 팀과 커뮤니티가 만들어가는 방식, 문화.

### Release

- [tinybench v6.0.0](https://github.com/tinylibs/tinybench/releases/tag/v6.0.0)
- [express v5.2.0](https://github.com/expressjs/express/releases/tag/v5.2.0)
- [vercel nodejs 24 support](https://vercel.com/changelog/node-js-24-lts-is-now-generally-available-for-builds-and-functions)
- [voicj.js v3.0.0](https://github.com/larswaechter/voici.js/releases/tag/v3.0.0) - 터미널에서 테이블 그리는 도구
- [chokidar v5.0.0](https://github.com/paulmillr/chokidar/releases/tag/5.0.0) - 패키지를 ESM only로 변경
- [readdrip v5.0.0](https://github.com/paulmillr/readdirp/releases/tag/5.0.0) - ESM only로 변경
- [ESLint v10.0.0-alpha.1](https://eslint.org/blog/2025/11/eslint-v10.0.0-alpha.1-released/)
- [Myna v1.0.0](https://github.com/sayyadirfanali/Myna/releases/tag/v1.0.0) - 프로그래밍을 위해 디자인된 모노스페이스 폰트
- [framework7 v9.0.0](https://github.com/framework7io/framework7/releases/tag/v9.0.0)