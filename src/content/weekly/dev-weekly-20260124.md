---
title: dev-weekly 2026-01-24
date: "2026-01-24T20:58:00.000Z"
description: "dev-weekly 2026-01-24"
tags: ["javascript", "nodejs"]
---

# Nodejs

### [Announcing Mastra 1.0!](https://mastra.ai/blog/announcing-mastra-1)

- 25년 11월 베타 릴리스 이후 94개의 버그수정과 신기능들과 함께 출시
- 서버 어댑터를 사용하면 에이전트, 워크플로, MCP 서버를 이미 실행중인 서버에서 HTTP 엔드포인트로 자동 노출 가능
- 컴포짓 스토리지, AI SDK v6 지원
- [https://mastra.ai/guides/migrations/upgrade-to-v1/overview](https://mastra.ai/guides/migrations/upgrade-to-v1/overview)

### [Dynamic Configuration in Node.js: Beyond Environment Variables](https://replane.dev/blog/dynamic-configuration-nodejs/)

- Static Config의 문제와 Dynamic Config의 특징
- Nodejs에서 Dynamic Config를 사용하는 방법들과 주의사항 및 적절한 유즈 케이스

# Javascript

### [jQuery 4.0.0](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)

- IE 11미만 지원 종료. IE11 지원종료는 5에서 할 예정.
- Trusted Types지원, ESM으로 마이그레이션, 디프리케이트 API 제거.
- 포커스 이벤트 순서 W3C 과 일치. 과거엔 브라우저 스펙 따라갔음. W3C 를 지키던 브라우저는 IE 뿐.
- 슬림 빌드 - Defered, Callback 제거
- jQuery 20주년

### [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)

- 이미지를 ASCII 문자로 렌더링하기
- 이미지를 일정 크기의 그리드로 분할. 각 셀의 중심 픽셀의 밝기를 샘플링. 아스키 문자 중 사용할 것 몇가지를 밀도 단위로 정렬하고, 밝기에 맵핑.
- 슈퍼샘플링을 통해 보정할 수 있지만 그래도 부족. 아스키 문자의 모양을 정량화
    - 아스키 문자를 정량화 하기 위한 6차원 공간으로 샘플링 써클 만들기
- 문자만으로는 경계가 선명하지 않음. 명암 대비 만들기 - 정규화된 샘플링 벡터에 지수 적용
- `!` 를 통한 계단식 패턴이 나오는 케이스 - 셀 경계 외부에 배치되는 외부 샘플링 써클을 지정해 “외부 샘플링 벡터” 만들기
- 문자 조회 성능 향상을 위한 k-d tree
- 샘플 수집 성능 향상을 위한 GPU 가속

### [localspace: First Stable Release](https://github.com/unadlib/localspace/releases/tag/v1.0.0)

- indexedDB, localStorage 등을 일관된 API 로 통합하는 라이브러리

# ETC

### [Astro is joining Cloudflare](https://blog.cloudflare.com/astro-joins-cloudflare/)

- Astro 의 모든 구성원은 이제 Cloudflare 소속. 앞으로도 MIT 라이선스 유지될 것.

### [Browser Score](https://browserscore.dev/)

- 접속한 브라우저의 W3C, W3 Draft 기능 지원을 스코어링 하고 시각화해서 표현

### Release

- [electron v40](https://www.electronjs.org/blog/electron-40-0)
- [React Native Windows v0.81 is here!!](https://devblogs.microsoft.com/react-native/%f0%9f%9a%80react-native-windows-v0-81-is-here/)
    - Fabric 아키텍쳐 디폴트 활성화
    - 헤르메스 디버거 지원
- [prettier 3.8](https://prettier.io/blog/2026/01/14/3.8.0)
    - angular v21.1 지원
- [Jasmine v6.0](https://github.com/jasmine/jasmine/blob/main/release_notes/6.0.0.md)