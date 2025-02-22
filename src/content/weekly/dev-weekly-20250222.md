---
title: dev-weekly 2025-02-22
date: "2025-02-22T21:54:00.000Z"
description: "dev-weekly 2025-02-22"
tags: ["javascript", "deno"]
---

# Node

### [Deno 2.2: OpenTelemetry, Lint Plugins, node:sqlite](https://deno.com/blog/v2.2)

- 로그, 메트릭, 트레이싱을 위한 오픈텔레메트리 내장
- React, Preact를 위한 린트 업데이트
- deno check - JSDoc 존중, 워크스페이스 마다 컴파일러 옵션 설정 가능
- deno lsp 개선 - 자동완성 성능 향상, import관련 개선
- `node:sqlite` 지원, `deno outdated` 개선
- deno 컴파일 성능개선 및 파일 크기 개선
- WebTransport, QUIC 실험적 지원

# Javascript

### [Testing 10 JavaScript Frameworks on Their HTML Defaults](https://meiert.com/en/blog/javascript-framework-html-defaults/)

- 대부분의 사이트가 유효하지 않은 판타지 HTML을 제공하는, HTML 위기의 상당 부분이 JS 프레임워크에 기인한다고 생각
- JS 프레임워크별 HTML 에러 테이블

### [Using the step and pattern attributes to make number inputs more useful](https://piccalil.li/blog/using-the-step-and-pattern-attributes-to-make-number-inputs-more-useful/)

- input 엘리멘트에 step 어트리뷰트 활용하기
- any, 소수(e.g. 0.01), pattern(e.g. `\d{1,2}(\.\d{2})?`) 등

### [Sunsetting Create React App](https://react.dev/blog/2025/02/14/sunsetting-create-react-app)

- 앞으로 Vite, Parcel, RSBuild와 같은 도구로 마이그레이션 권장
- Create React App 에는 활동적인 관리자가 없고, 기존의 문제를 해결하는 도구가 이미 많이 존재.

### [TypeScript 5.8 Ships --erasableSyntaxOnly To Disable Enums](https://www.totaltypescript.com/erasable-syntax-only)

- `erasableSyntaxOnly` 를 사용하면 enum, namespace, class 에서 에러 표시
- 런타임 동작에 영향을 주지 않고 제거할 수 있음을 의미. nodejs 내장 TS 의 스펙을 맞추는 구문.

### [What is Frontend Architecture?](https://ducin.dev/what-is-frontend-architecture)

- 프론트엔드 아키텍쳐란 디렉토리 구조, 라이브러리나 프레임워크와 같은 도구에 대한 것이 아니라 비즈니스 요구 사항과 시스템 요구 사항을 기반으로 한 기술 결정
- 다양한 트레이드 오프에 대한 Architecture driver

# ETC

### [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules)

- Cursor AI 사용환경 개선을 위한 .cursorrules 목록

### Release

- [jsPDF v3.0.0](https://github.com/parallax/jsPDF/releases/tag/v3.0.0)
- [dash.js v5.0.0](https://github.com/Dash-Industry-Forum/dash.js/releases/tag/v5.0.0)