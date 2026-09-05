---
title: dev-weekly 2026-09-05
date: "2026-09-05T20:45:00+09:00"
description: "CSS 기능 지원을 더 정확히 감지하는 named-feature(), 유휴 시간에 링크를 미리 가져오는 Quicklink, AI 시대에 전문성을 유지하는 학습 루프, 브라우저 안에서 이메일 인증을 마치는 API 제안까지 이번 주 개발 소식."
tags: ["css", "javascript", "performance", "visualization", "ai", "browser", "authentication"]
---

# CSS

### [**Feature Detecting “Undetectable” CSS Features with `@supports named-feature()`**](https://www.bram.us/2026/08/27/feature-detecting-undetectable-css-features-with-supports-named-feature/)

- 기존 CSS `Supports` 는 문법적으로 해당 property/value/selector를 지원하는지를 검사.
    - e.g. display: flex와 gap 을 지원한다고 해서 flex gap 이 지원되는건 아님.
- named-feature는 이 부분을 해결
    - e.g. `@supports named-feature(anchor-position-follows-transforms) {`

# Javascript

### [**Quicklink: Faster subsequent page-loads by prefetching in-viewport links during idle time**](https://github.com/GoogleChromeLabs/quicklink)

- 브라우저의 idle 타임에 뷰포트 내의 링크들에 대해서 `<link rel="prefetch">`를 수행해 미리 가져오거나 렌더.
- 느린 인터넷(navigator.connection.effectiveType), 데이터 절약 모드(navigator.connection.saveData)인지를 확인 후 실행

### [Charts made of light particles](https://particlecharts.com/)

- 데이터를 살아있는 입자 구름처럼 시각화하는 차트 라이브러리.
- 의존성 없고, 막대, 선, 버블, 레이더, 파이, 도넛 등 다양한 형태 차트 지원.
- 반응형 디자인, 접근성 지원.

# AI

### [Agentic Skill Decay](https://addyo.substack.com/p/agentic-skill-decay)

- 숙련(Mastery)은 여전히 반복을 통해 얻어짐. AI 에이전트가 개발을 대신해줄수록, 개발자는 의도적으로 학습하지 않으면 전문성을 쌓을 기회를 잃음.
- 작업 완료가 경험 축적이 되는 건 아님. 중요한 것은 얼마나 많은 작업을 끝냈느냐가 아니라, 문제를 직접 추론하고 결과를 통해 자신의 멘탈 모델을 수정했느냐.
- 전문성을 갖추라는건 문제 영역을 충분히 이해하여 무엇이 좋은 결과인지 판단할 수 있어야 한다는 뜻. 요즘에는 취향이라는 개념으로 얘기하기도 함.
- 검증 능력이 전문성의 베이스라인. AI가 만든 문제를 발견하려면 전문성 필요.
- AI를 덜 사용하는게 해결책은 아님. 내 예상과 무엇이 달랐는지 비교하기. 내 멘탈 모델도 업데이트하여 왜 이 해결이 맞는지, 내가 놓친것이 무엇인지 이해하는것 중요. 인간과 시스템이 동시에 학습해야함.
- AI 시대에는 업무와 학습을 의도적으로 연결하는게 필요. 학습 루프를 의식적으로 만들어야함.

# ETC

### [The Email Verification API](https://resend.com/blog/email-verification-api)

- 브라우저 내에서 유저가 OTP, 매직링크 등을 통해 인증하는데 바로 인증할 수 있도록 하는 API 제안(웹사이트를 떠나지 않고 이메일 인증)
- 아직까진 gmail만 지원.
- 잘못 입력하거나 유효하지 않은 것 등의 케이스를 제거해주고 이는 발신자 평판도 보호.
- 사용자가 메일 벤더사에 로그인하면 로그인정보를 브라우저에 저장. 브라우저와 메일 벤더사가 함께 토큰을 만들고 폼의 숨겨진 인풋에 추가. 서버는 메일 주소와 토큰을 받아 토큰 검증.

### Release

- [Remix 3 Release Candidate](https://remix.run/blog/remix-3-release-candidate)
- [Rspack 2.2](https://rspack.rs/blog/announcing-2-2)
- [Cypress 16](https://www.cypress.io/blog/cypress-16-faster-tests-starting-with-http2-support)
- [NestJS v12](https://trilon.io/blog/nestjs-12-is-now-available)
- [Deno v2.9.6](https://github.com/denoland/deno/releases/tag/v2.9.6)
- [Zod 4.5](https://zod.dev/blog/zod-4-5) - 컴파일 지원. 컴파일하면 3~9배 성능 향상. 힙 메모리 9.8배 감소
- [htmx v4.0.0 release](https://four.htmx.org/announcements/2026-08-28-htmx-4.0.0-is-released)
- [cropper.js v2.2.0](https://github.com/fengyuanchen/cropperjs/blob/main/CHANGELOG.md)
- [got 16.0.0](https://github.com/sindresorhus/got/releases/tag/v16.0.0)
- [NPM for Windows V2](https://docs.nvm-windows.com/features/newv2/)
