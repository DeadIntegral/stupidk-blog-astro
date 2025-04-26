---
title: dev-weekly 2025-04-26
date: "2025-04-26T23:40:00.000Z"
description: "dev-weekly 2025-04-26"
tags: ["frontend", "node"]
---

# Node

### [Dependency-free Command-Line Apps powered by Node.js core modules](https://lirantal.com/blog/dependency-free-command-line-apps-powered-by-node-js-core-modules)

- 커맨드라인 도구 의존성 대체하기
- 스타일 - chalk대신 `const { styleText } = require('node:util')`
- 아규먼트 파싱  - commander.js 대신 `const { parseArgs } = require('node:util');`
- 디버그 - `require('node:util').debuglog('myapp')`

### [Optimizing Node.js Performance: V8 Memory Management & GC Tuning](https://blog.platformatic.dev/optimizing-nodejs-performance-v8-memory-management-and-gc-tuning)

- nodejs 개발자들이 흔히 관찰하는 것은 앱의 메모리 사용량의 지속적인 증가. 높은 Resident Set Size(RSS)가 반드시 메모리 누수인것은 아님.
- V8 GC에 대하여
    - V8의 GC는 generational hypothesis 기반. 대부분의 객체는 생성 즉시 가비지가 되고, 그렇지 않으면 훨씬 오래 생존. V8은 이를 New Space, Old Space로 구분
    - 모든 객체는 처음엔 New Space에 할당, Scavenge(Minor GC) 라는 알고리즘을 통해 최적화. 두 번 이상의 인터벌을 거친 객체는 승격되어 Old Space로 이전. 이때부턴 Mark and Sweep(Major GC) 알고리즘 사용
    - 임시 객체 할당 빈도가 높은 앱에서는 할당 속도가 Scavenge 처리 속도를 크게 앞지를 수 있고, Scavenge 주기동안 존재할 수 있고, 잘못 분류되어 Old Space로 승격.
    - 이를 해결하기 위해 `--max-semi-space-size` 플래그로 Young Generation의 크기를 조정 가능.
- Nodejs 22부터는(최신 V8부터는) semi-space의 크기가 동적으로 설정하는 휴리스틱 도입.
- fyi. 복잡한 리액트 웹사이트는 페이지 하나를 렌더링하는데 3천개의 객체 할당, 약 5~10MB 메모리 사용. 이 경우 semi-space를 64MB로 사용하거나 Young Generation을 128MB로 설정하는걸 권장

# Frontend

### [Building An Offline-Friendly Image Upload System](https://www.smashingmagazine.com/2025/04/building-offline-friendly-image-upload-system/)

- Service Worker, Background Sync API(Chrome only) 등을 사용하여 불안정한 네트워크에서 이미지 업로드 하기
- 네트워크 연결이 안되면 IndexedDB에 저장, 연결되면 처리

### [Next steps for Privacy Sandbox and tracking protections in Chrome](https://privacysandbox.com/news/privacy-sandbox-next-steps/)

- Chrome에서 사용자에게 써드 파티 쿠키 선택권을 제공하는 현재 방식을 유지하기로 결정

### [TLS Certificate Lifetimes Will Officially Reduce to 47 Days](https://www.digicert.com/blog/tls-certificate-lifetimes-will-officially-reduce-to-47-days)

- TLS 인증서 수명 변경. 앞으로 398일, 26년 3월15일 부터 200일, 27년부터 100일, 29년부터 47일(한달 반 + 여유시간 1일)
- 인증서 정보는 시간의 흐름에 따라 신뢰성 감소, 재검증으로만 완화 가능

### [Why you need to know your site's performance plateau (and how to find it)](https://www.speedcurve.com/blog/web-performance-plateau/)

- 성능 최적화의 한계 - Performance Plateau. 웹 사이트의 렌더링 지표(e.g. LCP)를 개선해도 비즈니스 지표(e.g. 이탈율, 전환율)에 더이상 긍정적인 영향을 미치지 않는 지점

### [How to write error messages that actually help users rather than frustrate them](https://piccalil.li/blog/how-to-write-error-messages-that-actually-help-users-rather-than-frustrate-them/)

- 에러 메시지를 사용자에게 도움이 되는 방향으로 작성하기 위한 가이드
- 사용자 중심의 언어 사용, 능동태 사용, 에러 타입에 따른 메시지 제공, 일관된 패턴 사용하기 등
    - e.g. 입력이 잘못되었어요 ⇒ 우리가 메일로 보낸 6자리 코드를 입력해주세요
    - e.g. 결제 실패 ⇒ 카드 정보가 정확한지 확인하거나 다른 결제 방법을 시도하세요

### [React Labs: View Transitions, Activity, and more](https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more)

- 이제 react@experimental 에서 `<ViewTransition>`, `<Activity>` 사용 가능

# ETC

### Release

- [pnpm v10.9.0](https://github.com/pnpm/pnpm/releases/tag/v10.9.0) - JSR 지원