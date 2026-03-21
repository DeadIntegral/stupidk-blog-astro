---
title: dev-weekly 2026-03-21
date: "2026-03-21T22:47:00.000Z"
description: "dev-weekly 2026-03-21"
tags: ["javascript", "nodejs", "jpeg"]
---

# Nodejs

### [Petition to Node.js TSC: No AI code in Node.js Core](https://github.com/indutny/no-ai-in-nodejs-core)

- AI 시스템이 생성한 코드가 nodejs 코어에 포함되는것을 제한하자는 청원.

# Javascript

### [Source Maps: Shipping Features Through Standards](https://bloomberg.github.io/js-blog/post/standardizing-source-maps/)

- `mappings`, `lineMaps` 를 통해 연결하던 방법 (리비전 1, 2에서 사용했으나 3에서 교체)
    - 번들 사이즈가 커지면서 문자별 매핑 ID에서 세그먼트 기반 소스 로케이션 엔트리로 변경
    - mappings는 Base64 VLQ사용, lineMaps 제거
    - 인코딩 절대값에서 상대값으로 변경
- 개발자가 직접 개발한 코드는 적은데, 라이브러리 코드가 많아서 디버깅 어려운 이슈.
    - `x_google_ignoreList` 를 만들어서 라이브러리 코드 무시하게 만듦
- 2023년 블룸버그에서 소스 맵 표준화 작업 시작. 23년 10월 TC39 산하 공식 태스크 그룹 생성. ECMA-426 으로 공식 표준화

### [Rewriting a 12-Year-Old JavaScript Library in TypeScript](https://ifandelse.com/blog/rewriting-a-12-year-old-javascript-library-in-typescript/)

- FSM(유한상태머신) 라이브러리 다시 만든 과정
    - 대부분의 FSM 기반 솔루션은 액터 시스템을 필요로 하지 않음
    - 액터와 상태는 분리 가능해야함
    - 지연 입력은 비동기 처리 매커니즘 없이 비동기 문제를 해결

# ETC

### [Monitor and improve your web app’s load performance](https://blogs.windows.com/msedgedev/2026/03/17/monitor-and-improve-your-web-apps-load-performance/)

- 엣지 브라우저의 새로운 기능 Network Efficiency Guardrails 소개
- 이 기능을 사용하면 매우 큰 이미지, 압축되지 않은 리소스, 대용량 데이터 url 등에 대해 브라우저가 문제가 있는 로딩 패턴을 감지하면 정책 위반으로 리포팅.

### [JPEG compression](https://www.sophielwang.com/blog/jpeg)

- JPEG는 인간의 지각 편향과 자연 이미지의 구조를 구조를 활용한 압축방법. 인코딩 전에 기준 좌표계를 변경하여 인간이 가장 잘 인지하는 신호에 집중시키고, 나머지 세부 정보는 시각적 손실도를 크게 저하시키지 않고 제거.
    - 인간 시각은 색차 보다 휘도(밝기)에 더 민감. JPEG은 밝기와 색상을 분리 (R,G,B → Y`,Cb,Cr)
    - 크로마 서브샘플링(색차 채널의 공간 해상도를 낮추는 작업) 후 JPEG는 픽셀 값 저장하지 않음. 대신 Y`, Cb, Cr 채널에 이산 코사인 변환을 사용하여 코사인 파동의 가중 합으로 변환.

### [What's My Just Noticeable Difference?](https://www.keithcirkel.co.uk/whats-my-jnd/)

- 화면에 두 색상이 나오고 그 경계를 클릭하는 테스트.
- [https://www.keithcirkel.co.uk/too-much-color/](https://www.keithcirkel.co.uk/too-much-color/)

### Release

- [bun 1.3.11](https://bun.sh/blog/bun-v1.3.11)
- [nextjs 16.2](https://nextjs.org/blog/next-16-2)
- [electron 41](https://www.electronjs.org/blog/electron-41-0)
- [redwoodSDK v1.0](https://ifandelse.com/blog/rewriting-a-12-year-old-javascript-library-in-typescript/)