---
title: dev-weekly 2024-06-01
date: "2024-06-01T20:48:00.000Z"
description: "dev-weekly 2024-06-01"
tags: ["javascript", "node"]
---

# Node

### **[10 modern Node.js runtime features to start using in 2024](https://snyk.io/blog/10-modern-node-js-runtime-features/)**

- nodejs20 의 새로운 기능 소개
- 네이티브 테스트, 목킹, 테스트 커버리지
- 와치모드 `node --watch --test '**/*.test.js'` 와 같이 사용하여 변경 시 마다 테스트 실행 가능
- 코어팩 - 글로벌 패키지 대신 프로젝트에 정의된 패키지 사용하도록 도와주는 도구
- env로더 `node --env-file=./.env.a --env-file=./.env.b index.js` 와 같이 멀티 env 파일 사용 가능

# Javascript

### **[How we used esbuild to reduce our browser extension build times by 90%](https://blog.1password.com/new-extension-build-system/)**

- 1password의 브라우저 확장 빌드 시간 개선
- 웹팩, 롤업의 플러그인으로 esbuild 사용해본 결과 큰 성능향상
- tsc 성능 개선. fork-ts-checker-webpack-plugin나 esbuild-plugin-typecheck 와 같은 도구를 사용하여 논블록킹 타입체크
- 번들 크기 개선

### **[Astro 4.9](https://astro.build/blog/astro-490/)**

- 실험적 Container API 제공. Astro 바깥에서 Astro 컴포넌트 렌더링 가능.
- astro action에서 React 19 지원
- CSRF, i18n 도메인 지원 실험 기능 안정화

# ETC

### **[W3C unveils 174 new outcomes for WCAG 3.0](https://www.deque.com/blog/w3c-unveils-174-new-outcomes-for-wcag-3-0/)**

- WCAG 3.0에 대한 174개의 새로운 가이드라인
- 비 언어적 단서, 단일 아이디어, 장애정보 보호 포함
- 현재 로드맵은 2026년까지지만 28년 이전에 완료되지 않을 가능성 높음

### **[Stop resizing your browser: improve testing for responsiveness](https://www.jenchan.biz/blog/stop-resizing-your-browser-improve-responsive-testing)**

- 브라우저를 리사이징할 때 발생하는 고려해야 할 것
- resolution pixel, device pixel, css pixel
- 리플로우와 리렌더링, 뷰포트 메타태그

### **Release**

- [rspack v0.7](https://www.rspack.dev/blog/announcing-0-7)
- [storybook 8.1](https://storybook.js.org/blog/storybook-8-1/)
- [deno v1.44](https://deno.com/blog/v1.44)
- [hono v4.4.0](https://github.com/honojs/hono/releases/tag/v4.4.0)