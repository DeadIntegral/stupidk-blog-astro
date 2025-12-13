---
title: dev-weekly 2025-12-13
date: "2025-12-13T20:11:00.000Z"
description: "dev-weekly 2025-12-13"
tags: ["nodejs", "javascript"]
---

# Nodejs

### [How We Made @platformatic/kafka 223% Faster (And What We Learned Along the Way)](https://blog.platformatic.dev/how-we-made-platformatickafka-223-faster-and-what-we-learned-along-the-way)

- 순수 JS 구현이 어떻게 librdkafka 보다 더 나은 성능을 보일 수 있는지는 여러 아키텍처 결정이 누적된 효과
    - 모든 버퍼 할당, 복사는 GC부담 증가. 가능한 버퍼 슬라이스, 뷰를 이용
    - 애플리케이션 코드와 네트워크 프로토콜 사이 추상화 레이어 없음.
    - 논블로킹 이벤트 루프 사용
    - 핫 패스 최적화 - CRC32C 체크섬, murmur2 파티션 해싱, variant 인코딩 같이 모든 메시지에 수행되는 작업 최적화. CRC32C는 Rust native 사용.

### [ts-exec: Execute TypeScript on Node using SWC](https://github.com/poppinss/ts-exec)

- tsx는 개발환경에서 확장자없이 import 해도 정상 동작하는 패턴 허용. 빌드하면 파일 경로가 실행환경에서 동작안하는 이슈 존재. 이를 해결하려고 만든 SWC 기반 jit compiler

# Javascript

### [New npm package for automatic recovery of broken streaming markdown](https://vercel.com/changelog/new-npm-package-for-automatic-recovery-of-broken-streaming-markdown)

- AI 모델은 마크다운을 스트리밍처리 하는데 불완전한 구문이 생성되어 렌더링 중단.
- Remend는 종료되지 않은 마크다운 블록을 감지하고 완성하여 출력 보장.

### [Making complex web apps faster](https://blogs.windows.com/msedgedev/2025/12/09/making-complex-web-apps-faster/)

- 엣지에 Delayed Message Timing API 추가.
    - PerformanceObserver 의 타입 중 하나로 `delayed-message` 추가.
- postMessage가 지연되는 경우들. Long task, 유저 인터랙션, 네트워크 처리, 네비게이션, 로딩, 직렬화/역직렬화 오버헤드 등 에 대해 얼마나 메시지가 지연되었는지 상세 정보 제공.

### [Did you know your browser has two accessibility trees?](https://www.maxdesign.com.au/articles/two-trees.html)

- DOM mutation → AXEvent → A11y tree → OS A11y API → Screen reader 모델은 맞지만, 크롬에는 블링크에 숨겨진 내부 트리, 일반적으로 상호작용하는 퍼블릭 플랫폼 중립 트리 2가지가 존재.
- Blink AX Tree (internal engine tree)
    - Blink의 일부로, 렌더러 프로세스 내에 존재하고, 렌더러가 샌드박스되어 있기 때문에 Blink 외부로 노출되지 않고 보조 기술로도 접근 불가.
- BrowserAccessibility Tree (platform-neutral browser tree)
    - 브라우저 프로세스에 존재하고, Blink에서 보낸 직렬화된 AXNodeData를 통해 업데이트
    - 플랫폼별 래퍼 객체(Win, cocoa, ATK, Adroid)를 저장하고 OS a11y API와 통신할 권한을 소유.

### [sonda: Universal visualizer and analyzer for JavaScript and CSS](https://github.com/filipsobol/sonda)

- 대부분의 번들러, 프레임웤을 호환하는 애널라이저. 소스맵을 분석하고, 트리쉐이킹 및 미니파이 후 모듈의 크기를 표시함으로써 보다 정확한 리포트 생성.
    - vite, rollup, rolldown, esbuild, webpack, rspack 지원
    - nextjs, nust, astro, sveltekit, angular cli 지원

# ETC

### [When a video codec wins an Emmy](https://blog.mozilla.org/en/mozilla/av1-video-codec-wins-emmy/)

- AV1 코덱이 텔레비전 아카데미로부터 테크놀로지 & 엔지니어링 에미상 수상
- 2010년대 비디오 코덱은 비싸고 예측 불가능한 수수료가 붙는 폐쇄형 라이선스 시스템 위에 구축. 이를 해결하기 위해 모질라가 다른 기술 리더들과 Alliance for Open Media(AOM) 결성 후 구글의 VP9, 모질라의 Daala, 시스코의 Thor를 기반으로 한 차세대 코덱 개발. 이것이 AV1

### Release

- [pnpm 10.25](https://pnpm.io/blog/releases/10.25)
- [prettier 3.7](https://prettier.io/blog/2025/11/27/3.7.0)
- [deno 2.6](https://deno.com/blog/v2.6)
    - npx와 같은일을 하는 새로운 패키지 도구 dx 도입