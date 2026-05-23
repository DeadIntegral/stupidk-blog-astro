---
title: dev-weekly 2026-05-23
date: "2026-05-23T21:31:00.000Z"
description: "dev-weekly 2026-05-23"
tags: ["css", "javascript", "nodejs"]
---

# CSS

### [600+ million people write right-to-left: 2 fixes your app needs](https://evilmartians.com/chronicles/600-million-people-write-right-to-left-2-fixes-your-app-needs)

- 다국어 지원 중 html rtl이라고 하더라도 브라우저 언어와 다른 언어로 사용자가 입력 시 방향이 다를 수 있음. input에 `dir="auto"`를 넣으면 처음 입력한 언어에 맞는 방향으로 입력
- rtl전환 중 아이콘이 회전하는 케이스 존재. CSS transform: scaleX(-1) 와 같은것을 조건부로 적용
- flex box의 direction row 역시 반대 방향으로 표시. 읽기 방향과 상관없이 시각적 순서가 유지되어야 한다면 ltr 명시적으로 설정 해야함.

### [Gap decorations: Now available in Chromium](https://developer.chrome.com/blog/gap-decorations-stable?hl=en)

- grid, flex, multi-column layout 사이의 간격을 테두리나 유사 엘리먼트를 사용하지 않고 gap 을 스타일 가능.
- 기존의 새로운 엘리먼트를 사용하는 방식은 마크업 수정이 필요할 수 있고, 접근성 트리에 불필요한 엘리먼트가 표시되고 관리가 어려고, 성능에 악영향 미침.
- 교차점에 대한 처리, 선의 굵기, 여백, 애니메이션 등 제어 가능.

# Javascript

### [phantom-ui: Structure-aware skeleton loader](https://github.com/Aejkatappaja/phantom-ui)

- 모든 프레임워크에서 사용 가능한 웹 컴포넌트. 실제 컴포넌트를 보이지 않는 텍스트로 렌더링하고, 모든 leaf 엘리먼트의 크기를 측정(getBoundingClientRect)한 뒤 동일한 좌에 애니메이션 블록 오버레이.

# Nodejs

### [A New Look for Express](https://expressjs.com/en/blog/2026-05-18-a-new-look-for-express)

- Express 문서 재작성. Jekyll에서 Astro로 전환. 특정 UI 프레임워크에 얽매이지 앟는 컴포넌트 모델 제공.
- 버전 관리 기능 개선, AI기반 검색(Orama), llms.txt 지원 기능 강화

### [Staged publishing for npm packages](https://docs.npmjs.com/staged-publishing)

- `npm stage publish` 를 하면 스테이징에 올라가고 패키지 관리자가 검토하고 명시적으로 승인해야 사용 가능해짐.

### [Axios to WHATWG Fetch](https://nodejs.org/en/blog/migrations/axios-to-fetch)

- Axios를 WHATWG Fetch API로 마이그레이션하는 Codemod
- 네이티브 지원이라 유지 관리 부담이 없고, 성능이 조고, 웹 표준 엄격히 준수하고, 종속성과 관련된 잠재적 취약점 제거되어 보안 강화.

# ETC

### [15 updates from Google I/O 2026: Powering the agentic web with new capabilities, tools, and features in Chrome](https://developer.chrome.com/blog/chrome-at-io26?hl=en)

- 구글 IO 2026에서 에이전트 웹 시대 강조하며 WebMCP, Gemini in Chome 등 기능 공개
- 브라우저 내장 AI, Dev tools AI 방향 제시

### [webcompat.dev](https://webcompat.dev/)

- 웹 호환성 도구와 리소스 간 연결 관계를 시각적으로 표현한 지도.

### Release

- [angular v22.0.0-rc.0](https://github.com/angular/angular/releases/tag/v22.0.0-rc.0)
- [relay v21.0.0](https://github.com/facebook/relay/releases/tag/v21.0.0)
    - 이제 자체 d.ts 제공하여 @types/relay-runtime 더이상 필요하지 않음.
- [rolldown v1.0.1](https://github.com/rolldown/rolldown/releases/tag/v1.0.1)
- [react-redux v9.3.0](https://github.com/reduxjs/react-redux/releases/tag/v9.3.0)
    - [redux-toolkit v2.12.0](https://github.com/reduxjs/redux-toolkit/releases/tag/v2.12.0)