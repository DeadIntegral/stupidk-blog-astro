---
title: dev-weekly 2026-07-11
date: "2026-07-11T20:40:00+09:00"
description: "통합 툴체인 Vite+ 베타, Async Clipboard API의 선택적 포맷 읽기, npm 12의 설치 보안 강화, AI로 Bun을 Rust로 재작성한 이야기, 사이트의 에이전트 친화도를 재는 Lighthouse까지 이번 주 개발 소식."
tags: ["vite", "bun", "rust", "ai", "npm", "security", "react", "clipboard"]
---

# Javascript

### [Announcing Vite+ Beta](https://voidzero.dev/posts/announcing-vite-plus-beta)

- 웹 개발 통합 툴체인 vite+ Beta에선 런타임, 패키지 매니저, 태스크 러너를 하나의 일관된 워크플로로 묶고 프레임워크 제약 없음.
- 아직 1.0은 아니며 리모트 캐싱, Gitlab CICD, Homebrew 배포 등을 목표로 개발 중.

### [Selective format read: A better default for the Async Clipboard API](https://developer.chrome.com/blog/selective-format-read?hl=en)

- `navigator.clipboard.read()`는 시스템 클립보드에서 사용 가능한 모든 데이터 포맷을 가져와서 정제. 때문에 시간이 소요되고 메모리에 전체를 저장.
- 크롬, 엣지 149버전부터 ClipboardItem 객체들은 클립보드에 저장된 내용만을 나타낼 뿐, 데이터 직접 접근 불가. 특정 포맷의 데이터는 `ClipboardItem.getType(mimeType)`을 호출할 때만 읽고 자동 캐싱 지원.

### [OverflowGuard: Build around content,not breakpoints.](https://overflowguard.dev/)

- 콘텐츠가 공간에 맞지 않는것을 감지하는 React Component. 미디어 쿼리, 컨테이너 쿼리, 특별한 숫자도 사용하지 않음.
- 사용 예시 - 콘텐츠가 공간에 맞지 않을 경우 버튼이 아이콘으로 변경, 메뉴를 햄버거 버튼으로 축소 등

### [µJS: Make your website feel like a single-page app — without JavaScript](https://mujs.org/)

- SPA가 아닌 기존 웹사이트는 클릭할 때 마다 페이지 전체를 새로고침. µJS는 링크 클릭, 폼 제출을 가로채서 백그라운드에서 새로운 페이지를 가져오고 변경된 부분만 교체. SPA처럼 즉각적인 탐색 가능.
- 별도 프레임워크나 빌드 단계, 서버 수정 없이 스크립트 태그 하나와 `mu.init` 호출이면 완료.

# Nodejs

[npm install-time security and GAT bypass2fa deprecation](https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation/)

- npm12부터 다음과 같은 보안조치 시행
    - `allowScripts` default off
    - `—allow-git` defaults none
    - `--allow-remote` default none

### [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust)

- Bun을 Rust로 포팅하기까지의 서사.
- AI로 어떻게 포팅하게 만들 것인가 전략과 전술. 구현자와 검토자 역할 분리. 작업 시작 전 포팅방법에 대해 AI 와 논의하고 문서로 정리.
- Claude Fable 5 프리뷰 버전 사용, 64개의 클로드 병렬 사용.

# AI

### [A developer toolkit to make your website agent-ready](https://developer.chrome.com/blog/agent-ready-toolkit?hl=en)

- lighthouse Chrome m150부터 사이트가 에이전트 친화적인지 평가 제공. 접근성, 안정성, WebMCP통합 점검.

# ETC

### Release

- [webpack-dev-server v6.0.0](https://github.com/webpack/webpack-dev-server/releases/tag/v6.0.0)
- [dependency-cruiser v18.0.0](https://github.com/sverweij/dependency-cruiser/releases/tag/v18.0.0)
- [Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)