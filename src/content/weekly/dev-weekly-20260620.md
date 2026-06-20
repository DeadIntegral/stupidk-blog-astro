---
title: dev-weekly 2026-06-20
date: "2026-06-20T22:00:00+09:00"
description: "TypeScript·WASM으로 NumPy를 네이티브 속도까지 끌어올린 사례, npm 설치 스크립트를 노린 공급망 백도어, AI 시대의 복잡성 통제, MDN MCP 서버와 표준 기반 웹 개선까지 이번 주 개발 소식."
tags: ["wasm", "performance", "typescript", "npm", "security", "ai", "mcp", "accessibility"]
---

# Javascript

### Making numpy-ts as fast as native

- Numpy는 사실 C, BLAS/LAPACK, pocketfft와 같은 라이브러리들, 성숙한 메모리 관리 시스템에 의해 처리되어 순수한 수치 연산 성능 측면에서 JS/TS로는 견줄 수 없는 이슈. (15배 성능 차이)
- 순수 TypeScript 기반 NumPy 구현은 NumPy 대비 약 15배 느린 성능. Numpy의 핵심 처리 과정들은 SIMD 방식으로 벡터화 되어 있음.
- 속도가 느린 함수들의 연산 커널을 WASM(Zig)모듈로 분리하여 성능을 약 2배 차이 수준까지 개선
- 성능 병목의 핵심은 JS<>WASM 호출 비용이 아닌 데이터 복사 비용. Numpy의 사용 패턴을 보면 체이닝인데 이를 처리하기 위한 JS 메모리와 WASM 메모리 사이의 반복적인 배열 복사가 전체 성능을 저해
- ndarray 데이터를 WASM 선형 메모리에 직접 저장하는 구조로 변경. 연산 과정에서 데이터 복사 없이 포인터와 메타데이터만 전달하는 방식 채택
- 커스텀 메모리 할당기 및 메모리 관리 체계 구현
- 최종적으로 NumPy와 동급 수준(평균 약 1.11배)의 성능 달성
- "어디서 계산하는가"보다 "데이터가 어디에 존재하는가"가 더 중요

# Node

### A backdoor in a LinkedIn job offer

- 링크드인에서 제대로 동작하지 앟는 PoC 프로젝트를 검토해달라며 깃헙 저장소를 받음. 검토해보니 npm install prepare에 백도어가 존재.
- 해당 레포 커밋 내역을 보고 연락해봤으나 도용된 것. 링크드인 프로필 역시 도용

# AI

### Code is Cheap(er)

- AI 덕분에 코드를 작성하는 비용은 감소했지만, 그 코드를 이해하는 비용은 더 중요해짐.
- 진짜 위험은 AI 가 만들어내는 코드의 양이 아니라, 그로 인해 증가하는 복잡성. AI 시대에 엔지니어의 가치는 코딩 속도가 아니라 복잡성 통제 능력.

### Introducing the MDN MCP server

- MDN mcp 서버 제공.
- MDN MCP 사용 시 달라지는 점 - 브라우저 컴팻의 정확도 상승, 응답 속도 상승(최신 정보를 찾기 위해 파싱해야 해서)

### Improvements to Web for AI Should Benefit All Users

- AI를 위해 웹을 변경할 것이라면, AI만을 위한게 아니라 사람과 접근성 도구를 개선하자는 글.
- 사파리 팀 의견과 동일. AI가 웹사이트를 이해하기 어려운 이유는 웹의 의미 구조가 부족해서로 판단, AI 전용 API(WebMCP) 만들지 말고 HTML, ARIA 같은 공통 표준 개선하자.

# ETC

### Zod-complier

- zod 스키마를 빌드 시점에 오버헤드가 없는 유효성 검사 함수로 컴파일.
- Vite, webpack, esbuild, Rollup 등 지원. Bun은 1.22 이상 버전 필요.
- hoist 플러그인 사용 시 함수 내부에 정의된 스키마도 모듈 범위로 이동 가능.

### Release

- playwright v1.61 - WebStorage API를 통해 패스키를 등록하고 테스트 가능
- biome v2.5 - lint rule 500개 달성
- axios v1.18.0
- Babel v8.0.0 - only ESM, TS 제공