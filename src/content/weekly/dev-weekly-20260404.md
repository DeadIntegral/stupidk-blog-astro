---
title: dev-weekly 2026-04-04
date: "2026-04-04T22:31:00.000Z"
description: "dev-weekly 2026-04-04"
tags: ["javascript"]
---

# Javascript

### [axios Compromised on npm - Malicious Versions Drop Remote Access Trojan](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)

- 관리자 계정이 탈취되어 1.14.1, 0.30.4 버전에 악성코드 포함하여 릴리스
- 어디에도 임포트 되지 않는 plain-crypto-js@4.2.1 를 삽입. 이 패키지는 트로이목마 설치, 실행 후 스스로를 삭제하고 package.json 을 깨끗한 가짜 파일로 대체. 지금까지 기록된 공급망 공격 중 가장 정교한 공격 중 하나.
- 내가 영향 받았는지 확인하는 방법, 감염이 발견된 영역 복구하는 방법 등 제공

### [Your options for preloading images with JavaScript](https://macarthur.me/posts/preloading-images/)

- `new Image` 와 서버의 cache control 헤더
- `link rel=”preload”`, hidden div, Cache API, fetch() 등을 사용한 이미지 프리로드와 장단점

### [Pretext: multiline text measurement and layout](https://simonwillison.net/2026/Mar/29/pretext/)

- React의 코어개발자이자 react-motion을 만든 cheng lou가 만든 라이브러리
- DOM을 건드리지 않고 줄바꿈이 적용된 텍스트 단락의 높이 계산 문제 해결
- 오프스크린 캔버스를 사용하여 세그먼트 크기 측정 및 캐시.
- 클로드 코드와 코덱스에게 브라우저의 정답을 보여주고 반복 작업을 수행시켜 달성.

### [Signals, the push-pull based algorithm](https://willybrauner.com/journal/signal-the-push-pull-based-algorithm)

- signals의 동작 원리
- 기존 구독 모델과 push-pull 기반 알고리즘을 통한 시그널의 차이

# ETC

### [Magic Link Pitfalls](https://etodd.io/2026/03/22/magic-link-pitfalls/)

- 매직링크 주의사항 소개
- 어떤 매직 링크는 클릭전에 이미 사용중. 일부 프로그램이 링크 미리보기를 표시하기 위해 GET요청 보내기 대문에.

### [cq: Stack Overflow for Agents](https://blog.mozilla.ai/cq-stack-overflow-for-agents/)

- Matriphagy 거미가 그러하듯 웹 크롤러(초기 에이전트)가 웹의 지식을 소비하고, 지식이 LLM을 탄생시키고 LLM이 커뮤니티를 갉아먹음.
- 라디오에서 CQ는 어떤 방송국이든 응답해달라는 뜻. 에이전트들이 지식을 다른 에이전트와 공유하길 바람. 에이전트들을 위한 스택 오버플로우.

### Release

- [Transformers.js v4](https://github.com/huggingface/transformers.js/releases/tag/4.0.0)
    - cpp로 새롭게 작성한 WebGPU 도입.
    - pnpm 워크스페이스를 사용하여 모노레포로 전환.
- [Astro 6.1](https://astro.build/blog/astro-610/)
- [ky v2.0.0-0 pre-release](https://github.com/sindresorhus/ky/releases/tag/v2.0.0-0)
- [Got v15.0.0](https://github.com/sindresorhus/got/releases/tag/v15.0.0)
- [Announcing Babylon.js 9.0](https://blogs.windows.com/windowsdeveloper/2026/03/26/announcing-babylon-js-9-0/)