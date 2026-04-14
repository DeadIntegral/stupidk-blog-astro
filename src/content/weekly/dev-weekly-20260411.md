---
title: dev-weekly 2026-04-11
date: "2026-04-11T21:24:00.000Z"
description: "dev-weekly 2026-04-11"
tags: ["javascript", "nodejs"]
---
# 20260411

# Javascript

### [[RFC] JSIR: A High-Level IR for JavaScript](https://discourse.llvm.org/t/rfc-jsir-a-high-level-ir-for-javascript/90456)

- Rust, Swift 같은 언어의 컴파일러는 LLVM IR로 바로 내려가지 않고 언어별 고수준 IR 을 먼저 만들고 분석/최적화 수행
- JS 생태계는 AST 기반이지만 이것만으론 제어 흐름, 데이터 흐름 분석 등이 어려움.
- 오픈소스 이면서 ESTree 와 1:1 대응에 가까운 IR을 만드는 것이 목표. 소스 코드의 의미를 그대로 유지하기.
- AST처럼 생겼지만 IR처럼 쓸 수 있도록 하기 위한 도구

### [Post Mortem: axios npm supply chain compromise](https://github.com/axios/axios/issues/10636)

- axios 공급망 공격 영향, 사후대응, 어택 타임라인, 교훈 등

### [boneyard: Auto generated skeleton loading framework](https://github.com/0xGF/boneyard)

- [https://boneyard.vercel.app/overview](https://boneyard.vercel.app/overview)
- 실제 렌더링된 콘텐츠에서 추출하여 스켈레톤을 만들어주는 도구

# Nodejs

### [Security Bug Bounty Program Paused Due to Loss of Funding](https://nodejs.org/en/blog/announcements/discontinuing-security-bug-bounties)

- Nodejs 는 자원봉사자들에 의해 운영되는 오픈소스이기 때문에 자체적으로 취약점 보상 프로그램을 유지할 예산 없음. 버그 바운티 일시 중단.
- 보안 보고 시스템은 변경되지 않음. 여전히 헌신할 것.

# ETC

### [Announcing JetStream 3.0](https://browserbench.org/announcements/jetstream3/)

- Speedometer와 동일한 합의 기반의 오픈 거버넌스 모델을 따르고, 공유 저장소에서 개발
- 벤치마크 러너와 방법론 개선 - WASM 점수 계산 방식이 JS 워크로드와 일관성 유지
- JS, WASM실행만 제공하는 최소 환경인 엔진 셸에서 실행하기 때문에 장치 에뮬레이터 및 제한된 시스템에서도 쉽게 실행 가능

### [Email address obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/)

- 스팸 발송자로부터 이메일 주소를 숨기는 방법들 및 효과(통계) 소개
- HTML Entities - 95% 차단, HTML Comment (메일주소 중간에 삽입) - 99% 차단, HTML SVG: svg text로 메일 작성 - 100% 차단, …
- 라이브러리를 이용한 방법, 각 방법별 사용성에 대한 코멘트 제공

### [MonoSketch [*]: Unleash your ideas with ASCII](https://monosketch.io/)

- ASCII 스케치 및 다이어그램 작성 앱
- [https://github.com/tuanchauict/MonoSketch](https://github.com/tuanchauict/MonoSketch)

### Release

- [eslint v10.2.0](https://eslint.org/blog/2026/04/eslint-v10.2.0-released/)
- [marked v18.0.0](https://github.com/markedjs/marked/releases/tag/v18.0.0)
- [ink v7.0.0](https://github.com/vadimdemedes/ink/releases/tag/v7.0.0)
- [axios v1.15.0](https://github.com/axios/axios/releases/tag/v1.15.0)
- [undici v8.0.0](https://github.com/nodejs/undici/releases/tag/v8.0.0)