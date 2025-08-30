---
title: dev-weekly 2025-08-23
date: "2025-08-23T21:12:00.000Z"
description: "dev-weekly 2025-08-23"
tags: ["css", "javascript"]
---

# CSS

### [Obsessing Over Smooth radial-gradient() Disc Edges](https://frontendmasters.com/blog/obsessing-over-smooth-radial-gradient-disc-edges/)

- 엘리먼트의 바운더리를 둥글게 만들 때 가장자리가 부드럽게 표현하기
- `radial-gradient(var(--r), var(--c) 100%, #0000)` 를 사용하면 톱니바퀴처럼 픽셀이 보이는 이슈
- `radial-gradient(var(--r), var(--c) calc(100% - 1px), #0000)` 는 줌 인아웃 전까진 잘 작동
- `@media (resolution: 5x) {}` 을 통한 줌 대응

# Javascript

### [New in ESLint v9.34.0: Multithread Linting](https://eslint.org/blog/2025/08/multithread-linting/)

- 2015년(nodejs에 빌트인 워커 스레드 도입 전)부터 준비해온 멀티스레드 린팅 도입
    - CPU 집약 작업에서의 멀티 스레드 지원
- `--concurrency` 플래그를 통해 사용 가능

### [Speeding up the JavaScript ecosystem - Semver](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-12/)

- semver 패키지 다시 만들기 → 33배 성능 향상

### [Announcing Rspack 1.5](https://rspack.rs/blog/announcing-1-5)

- lazy Barrel(실제 필요할 때만 리졸브)을 도입해 배럴 파일 최적화
- 웹 컨테이너나 특정 플랫폼에 의존하지 않고도 모든 모던 브라우저에서 rspack 직접 실행 가능
- 사용자 정의 Rust 플러그인, 로더를 빌드하고 Rspack의 디폴트 네이티브 바인딩 대체 가능.
- const inline optimization 제공
- 모듈 페더레이션 런타임 호이스팅 - 애플리케이션 시작 전에 MF 런타임 준비됨

# ETC

### [Optimizing PWAs For Different Display Modes](https://www.smashingmagazine.com/2025/08/optimizing-pwas-different-display-modes/)

- PWA에서는 menifest 파일에서 디스플레이 모드를 정의. 이 때 브라우저 컨트롤, 시스템 UI 등에 차이가 발생.
- media query 를 통해 모드 분기하기 e.g. `@media (display-mode: standalone)`

### [Big O notation guide](https://samwho.dev/big-o/)

- 기초 수학 및 알고리즘(Sum, Sort, Search)을 사용하여 개념 설명
- 인터랙션 가능한 요소들을 통해 이해를 돕는 아티클

### Release

- [google spreadsheet v5.0.0](https://github.com/theoephraim/node-google-spreadsheet/releases/tag/v5.0.0)
- [rspack v1.5](https://rspack.rs/blog/announcing-1-5)
    - 배럴 파일 최적화
- [cornerstone3D v4.0.0](https://github.com/cornerstonejs/cornerstone3D/releases/tag/v4.0.0)
    - 인터랙티브 의료 영상 웹 앱 구현 도구
    - 3D 볼륨 렌더링, 슬랩 스크롤 등 제공
- [tiptap v3.3.0](https://github.com/ueberdosis/tiptap/releases/tag/v3.3.0)