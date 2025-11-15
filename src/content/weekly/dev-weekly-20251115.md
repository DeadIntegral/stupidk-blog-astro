---
title: dev-weekly 2025-11-15
date: "2025-11-15T20:25:00.000Z"
description: "dev-weekly 2025-11-15"
tags: ["javascript"]
---

# Javascript

### [GitHub no longer uses toasts](https://primer.style/accessibility/toasts/)

- 깃헙은 접근성, 사용성 문제로 더이상 토스트 사용 안함.
- 디스플레이가 커져서 사용자의 시야 바깥에 존재할 수 있음. 토스트 위치가 트리거한 UI 로부터 멀이 떨어질 수 있고, 이는 게슈탈트 지각 원리에 위배.
- 주의가 산만해지거나 읽히지 않을 수 있음.
- 기본 콘텐츠를 가릴 수 있음.
- 다시 확인이 어려움.

### [Umami v3](https://umami.is/blog/umami-v3)

- GA와 같은 솔루션의 셀프 호스팅 대안 Umami 3 릴리스
- 쿼리 스트링을 통해 애플리케이션 모든곳에 필터 적용 가능
- 추적 도구 링크, 픽셀 도입
- MySQL 지원 종료. PostgreSQL만 지원.

### [JavaScript Engines Zoo](https://ivankra.github.io/javascript-zoo/)

- JS엔진 비교 테이블.
- 코드라인, 언어, 바이너리 크기, 기여자 수, Org, 라이센스, etc 제공

### [Electron vs. Tauri by dolthub](https://www.dolthub.com/blog/2025-11-13-electron-vs-tauri/)

- UI 렌더링 방식 차이. 일렉트론은 표준화된 환경을 제공하여 실행 플랫폼과 독립적. 타우리는 WRY를 사용하고 이는 웹뷰에 대한 크로스 플랫폼 인터페이스 제공
- 일렉트론은 nodejs API 사용, 타우리는 Rust 레이어와 상호작용할 수 있는 JS API 제공.
- 타우리로 전체 기능 복제를 했지만 전환 보류 중.
    - Windows에서 .appx, .msix 지원 부족.
    - MacOS 유니버설 바이너리 이슈

# ETC

### [FileMock: Free Test File Generator](https://filemock.com/)

- 용량, 재생시간, 확장자 등을 입력하면 해당 용량의 샘플 파일을 만들어주는 도구
- Video, Audio, Image, Document 지원

### [Valdi: Cross Platform UI Framework](https://github.com/Snapchat/Valdi)

- 스냅챗에서 생산성 대 런타임 성능을 해결하기 위해 설계한 크로스 플랫폼 도구
- 선언형 TS로 한번 작성하면 iOS, Android, MacOS의 네이티브 뷰로 컴파일. (웹뷰, JS브릿지 사용안함)

### [the last couple years in v8's garbage collector](https://wingolog.org/archives/2025/11/13/the-last-couple-years-in-v8s-garbage-collector)

- 지난 5년간 V8 GC 변경사항
    - 샌드박싱 - 사용자가 메모리 어디에나 쓰기 권한이 있더라도, 힙 바깥과는 격리하는것 목표
    - Oilpan - Oilpan에서 Generation GC를 돌리기 위한 시도들
    - 멀티스레드 - WASM은 JS GC를 사용하는데 멀티 스레딩. 이에 대한 지원 작업.

### Release

- [pnpm 10.21](https://pnpm.io/blog/releases/10.21) - `engines.runtime` 필드에 nodejs 런타임을 선언하면 의존성에 필요한 nodejs버전 설치
- [fastify v5.6.2](https://github.com/fastify/fastify/releases/tag/v5.6.2)
- [bun v1.3.2](https://bun.com/blog/bun-v1.3.2)
- [esbuild v0.27.0](https://github.com/evanw/esbuild/releases/tag/v0.27.0)
    - 의도적으로 이전버전과 호환안되는 내용 포함.
- [ink v6.5.0](https://github.com/vadimdemedes/ink/releases/tag/v6.5.0)