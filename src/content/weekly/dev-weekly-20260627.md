---
title: dev-weekly 2026-06-27
date: "2026-06-27T22:03:00+09:00"
description: "CSS light-dark()와 스타일 쿼리로 만드는 동적 테마, OS 웹뷰를 쓰는 Deno 데스크톱 앱, dialog 요소에 view transition 입히기, Node.js 26.4의 package maps와 봇 남용을 막는 PACT 익명 자격증명까지 이번 주 개발 소식."
tags: ["css", "deno", "view-transitions", "animation", "node", "security"]
---

# CSS

### [Modern CSS theming with light-dark(), contrast-color(), and style queries](https://una.im/modern-css-theming/)

- 동적 테마 시스템 만들기
    - light-dark() 함수는 라이트 테마에서는 첫 번째, 다크 테마에서는 두 번째 값을 반환. 어디서나 재정의 가능.
    - contract-color 결과로 값을 지정하고, 이를 통해 브랜드 색상에서 색조 도출.
    
    ```jsx
    .card {
      --bg: var(--brand-color);
      --contrast-color: contrast-color(var(--bg));
    }
    @container style(--contrast-color: white) {
    ```
    

# Javascript

### [Deno Desktop apps](https://docs.deno.com/runtime/desktop/)

- 웹뷰 백엔드는 OS의 웹뷰를 사용하여 바이너리 크기를 줄이고, Deno의 호환성 레이어를 통해 npm 생태계 활용. 크로스 플랫폼 지원 필요 시 번들로 제공되는 Chromium(CEF) 백엔드 사용 가능
- 프레임워크 자동 감지. 기존 코드변경 없이 사용 가능
- IPC 대신 프로세스 내 바인딩을 사용하여 Deno코드와 웹뷰 간 프로세스 왕복 통신 발생 안함.
- binary diff auto update 제공. 최신 버전의 lastest.json과 bsdiff 패치를 제공하면 런타임이 이르 ㄹ확인하여 적용하거나 실패하면 자동 롤백.

### [Animating The Dialog Element Using View Transitions](https://pqina.nl/blog/animating-the-dialog-element-using-view-transitions/)

- Dialog 에 view-transition으로 애니메이션 구현하기 예제

# Nodejs

### [Node.js 26.4](https://nodeweekly.com/link/187035/154188e1e3)

- package maps 추가 - import 경로를 실제 어디로 연결할지 매핑 테이블로 정의하는 기능
    - [https://nodejs.org/api/packages.html#package-maps](https://nodejs.org/api/packages.html#package-maps)
- `node:vfs` 추가 - fs.readFile을 메모리에만 존재하는 파일을 만들고 읽기 가능. 이 가상 파일을 import도 가능

# ETC

### [Wirewiki](https://www.wirewiki.com/)

- 인터넷 인프라에 대한 무료 퍼블릭 맵
- 도메인, IP 주소, DNS 서버를 검색할 수 있고 그래프로 연결

### [PACT: Anonymous Credentials for the Web](https://hacks.mozilla.org/2026/06/pact-anonymous-credentials-for-the-web/)

- 웹사이트는 악영향을 끼칠 수 있는 봇을 차단하고 싶지만, 구분이 어려움.
- AI의 발전으로 이제 봇이 사람보다 CAPTCHA를 잘 해결. 많은 사이트들이 방문자에게 더욱 많은 정보 입력을 유도해 불편함 초래.
- 최근 몇년의 흐름은 사람인지에 대한 증명에 포커스. 그 솔루션 또한 각 벤더사의 인증을 웹 표준으로 삼는것. 이렇게 되면 벤더사들이 웹 접근 권한을 통제. 신원을 강요하면 웹이 폐쇄적으로 변함.
- 누군인지 대신에 대량 남용을 하기 어렵다는 것만 증명(PACT라는 토큰을 만들어서)하자는 아티클.

### Release

- [TS 7 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-rc/)
- [Vite 8.1](https://vite.dev/blog/announcing-vite8-1)
- [Astro 7](https://astro.build/blog/astro-7/) - `.astro` 컴파일러 러스트로 재작성.
- [nx 23.0.0](https://github.com/nrwl/nx/releases/tag/23.0.0)
- [cookie v2.0.0](https://github.com/jshttp/cookie/releases/tag/v2.0.0) - only ESM