---
title: dev-weekly 2026-04-25
date: "2026-04-25T20:20:00.000Z"
description: "dev-weekly 2026-04-25"
tags: ["javascript", "nodejs", "css"]
---

# CSS

### [Building a UI Without Breakpoints](https://frontendmasters.com/blog/building-a-ui-without-breakpoints/)

- 뷰포트 브레이크 포인트 대신 컨테이너 쿼리를 통한 반응형이 더 좋은 이유
- 반응형 디자인은 브레이크 포인트 조율에서 의도 기반 시스템(intent driven system)으로 이동중. 최적화가 아니라 마인드셋 변경.

### [font-family Doesn’t Fall Back the Way You Think](https://csswizardry.com/2026/04/font-family-doesnt-fall-back-the-way-you-think/)

- font-family는 가장 가까운 조상의 값을 폴백으로 사용하지 않고, 그 자체의 값만 사용

### [Details that make interfaces feel better](https://jakub.kr/writing/details-that-make-interfaces-feel-better)

- 좋은 인터페이스는 작은 것들이 쌓여서 발현. 더 나은 인터페이스를 위한 skill 제공
- text-wrap, border-radius 내부 외부 계산, 아이콘 애니메이션, tarbular number 등
- optically 하게 정렬하지 말고 geometrically 하게 정렬하기 - e.g. 버튼 우측에 아이콘이 있다면 우측에 padding 더 적게 사용하기
- 이미지에 아웃라인 만들기

### [box-shadow is no alternative to outline](https://matuzo.at/blog/2026/box-shadow-no-alternative-to-outline)

- 포커스 버튼(focus-visible)에 outline: none 을 넣고 box-shadow 를 쓰는건 기본 색상 모드에서는 괜찮지만 forced 에서는 그림자가 사라짐. 아웃라인을 없애지 말고 tranparent로 둘 것.

# Javascript

### [The Vertical Codebase](https://tkdodo.eu/blog/the-vertical-codebase)

- 코드베이스를 components, hooks, types, utils와 같은 수평이 아니라 수직으로 분할하고 응집성을 높이라는 글

### [HyperFrames: lets AI agents compose videos by writing HTML, CSS & JS](https://hyperframes.heygen.com/)

- HTML 기반 비디오 컴포지션을 생성, 프리뷰 렌더링 할 수 있는 오픈소스 비디오 렌더링 프레임워크.
- 결정적으로 비디오 생성(CICD에서 영상이 달라지지 않음)

# Nodejs

### [aube: A new dawn for node installs](https://aube.en.dev/)

- 기존 JS, TS 프로젝트에 바로 통합 가능한 nodejs 패키지 매니저.
- lock 파일 마이그레이션이 필요하지 않음.

# ETC

### [Firefox 150 release notes for developers (Stable)](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/150)

- 네트워크 패널에서 요청이 리디렉션 되었을 때 응답 데이터 없는 이유를 구체적인 메시지로 표기
- `light-dark()` 함수가 이제 image값도 처리. 미디어 기반 pseudo-class 지원.

### [Docmd: Markdown to production docs. One command. Zero config.](https://docmd.io/)

- 풀 텍스트 퍼지 검색 내장. 테마, 다국어 지원 등 제공

### Release

- [fable v5.0.0](https://github.com/fable-compiler/Fable/releases/tag/5.0.0)
- [uuid v14.0.0](https://github.com/uuidjs/uuid/releases/tag/v14.0.0)
- [bun v1.3.13](https://bun.com/blog/bun-v1.3.13)
- [knip v6.6.0](https://github.com/webpro-nl/knip/releases/tag/knip%406.6.0)
- [typescript 7.0 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/)
- [playwright v1.59.0](https://github.com/microsoft/playwright/releases/tag/v1.59.0)