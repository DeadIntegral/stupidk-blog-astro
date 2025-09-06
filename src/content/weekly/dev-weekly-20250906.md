---
title: dev-weekly 2025-09-06
date: "2025-09-06T21:30:00.000Z"
description: "dev-weekly 2025-09-06"
tags: ["javascript", "browser", "chrome"]
---

# Javascript

### [OverType: transparent textarea over rendered markdown](https://overtype.dev/)

- 심플한 (VDOM, ContentEditable없는) 마크다운 에디터
- npm, build, config 없음. cdn 스크립트 삽입 후 사용 (84kb)
    
    ```css
    <script src="https://unpkg.com/overtype"></script>
    <div class="editor"></div>
    new OverType(".editor");
    ```
    

### [Mediabunny: Complete media toolkit](https://mediabunny.dev/)

- 비디오/오디오 파일 읽기, 쓰기, 변환하며 브라우저와 nodejs모두 지원하는 라이브러리.
- 높은 성능, 작은 번들, 트리쉐이킹 지원

# ETC

### [Google Chrome at 17 - A history of our browser](https://addyosmani.com/blog/chrome-17th/)

- 크롬 출시(2008)부터 지금까지를 돌아보며 속도, 보안, 안정성 등 지금까지 해온 노력 회고 및 앞으로의 방향성
- 크롬 브라우저 개선 뿐 아니라 베이스라인, interop과 같은 웹 생태계를 위한 노력들

### Release

- [Angular Summer Update 2025](https://blog.angular.dev/angular-summer-update-2025-1987592a0b42)
    - Zoneless API 지원 - Angular 20.2 부터 zoneless 안정화
    - LLM 코드 생성을 돕는 MCP 서버
    - TS 5.9 지원
- [Electron v38.0.0](https://github.com/electron/electron/releases/tag/v38.0.0)
- [Ember 6.6](https://blog.emberjs.com/ember-released-6-6/)
- [redux-toolkit v2.9.0](https://github.com/reduxjs/redux-toolkit/releases/tag/v2.9.0)
- [grpc web v2.0.0](https://github.com/grpc/grpc-web/releases/tag/2.0.0)