---
title: dev-weekly 2025-03-01
date: "2025-03-01T17:20:00.000Z"
description: "dev-weekly 2025-03-01"
tags: ["javascript", "node", "ai", "browser"]
---

# 20250301

# Node

### [Node v23.8.0 (Current)](http://nodejs.org/en/blog/release/v23.8.0)

- macOS와 Windows에서 시스템 CA 인증서를 사용하도록 하는 `--use-system-ca` 명령어 플래그 추가
- `URLPattern` API가 도입
- `zlib` 모듈에서 zstd지원
- nodejs에서 생성된 스레드에 이름 붙이기 가능

# Javascript

### [The web on mobile](https://adactio.com/journal/21728)

- 과거 모바일 웹과 앱은 기술적인 차이(알림 등)가 있었지만 지금은 웹브라우저에서 모두 지원
- 그럼에도 불구하고 모바일 웹의 경험은 나쁘고 그 이유는 문화적인 문제. 웹을 만드는 사람들이 모바일에 맞는 경험을 제대로 고려하지 않음.

### [Michigan TypeScript Founder Successfully Runs Doom Inside TypeScript's Type System](https://socket.dev/blog/typescript-types-running-doom)

- TS 타입 시스템만으로 Doom 실행.
- 1.25페타 바이트의 타입 시스템을 177테라 바이트로 줄이는데 성공
- 타입 시스템 내부에 컴퓨터 구축 - RAM, Disk space, Call stack, Subroutines, Memory Pointer, Excution context

### [Turbocharging V8 with mutable heap numbers](https://v8.dev/blog/mutable-heap-number)

- JS 파일 시스템 구현인 async-fs에서 성능 병목 현상 발생. 원인은 Math.random()
- Math.random의 두 가지 성능 이슈 - HeapNumber allocation, Floating-point arithmetic 와 해결책

# ETC

### [Comparing local large language models for alt-text generation](https://dri.es/comparing-local-llms-for-alt-text-generation)

- 이미지의 alt 를 채우기 위해 LLM 사용
- 클라우드 LLM(chatGPT, claud) 와 로컬 LLM 10가지를 테스트
- 공정한 평가를 위해 EXIF 제거 후 테스트.
    - 로컬LLM은 할루시네이션 존재. 클라우드는 할루시네이션 없음.

### [More Edge features get a performance boost](https://blogs.windows.com/msedgedev/2025/02/18/more-edge-features-get-a-performance-boost/)

- MS엣지의 브라우저 UI를 WebUI 2.0 으로 마이그레이션 및 번들 최적화로 UI 영역 성능 40% 개선

### [Perplexity teases a web browser called Comet](https://techcrunch.com/2025/02/24/perplexity-teases-a-web-browser-called-comet/)

- Perplexity에서 Comet이라는 브라우저 개발 중

### Release

- [bun v1.2.4](https://bun.sh/blog/bun-v1.2.4)
- [nextjs v15.2](https://nextjs.org/blog/next-15-2)
- [astro 5.4](https://astro.build/blog/astro-540/)
- [Ember 6.2](https://blog.emberjs.com/ember-released-6-2/)
- [React Native 0.78](https://reactnative.dev/blog/2025/02/19/react-native-0.78)
    - React 19 지원
- [react-markdown v10.0.0](https://github.com/remarkjs/react-markdown/releases/tag/10.0.0)