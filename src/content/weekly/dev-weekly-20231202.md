---
title: dev-weekly 2023-12-02
date: "2023-12-02T11:10:00.000Z"
description: "dev-weekly 2023-12-02"
tags: ["javascript", "CSS", "node", "WASM"]
---
# CSS

### **[A Few Ways CSS Is Easier To Write In 2023](https://www.smashingmagazine.com/2023/11/few-ways-css-easier-write-2023/)**

- 전통적인 방식의 CSS를 보다 쉬운 방식으로 재구성
- list-style-type: none 쓰면 접근성 때문에 `role="list"` 를 사용하는데 `list-style-type:""` 같은 방식 소개

### **[Preventing Scroll “Bounce” with CSS](https://css-irl.info/preventing-overscroll-bounce-with-css/)**

- 스크롤 최상단, 하단에서 발생하는 bounce 동작 `overscroll-behavior` 프로퍼티로 제어

### **[CSS Animations with No-Code](https://cssanimotion.pages.dev/)**

- CSS 애니메이션 만드는 도구
- 키프레임단위로 수정이 가능하고, 내장 easing 29가지 구성

### **[Glide To Reveal Secret Code](https://codepen.io/jh3y/pen/JjxPKXz)**

- html, css만 사용하여 만든 시크릿 코드 애니메이션
- blur 된 점만 보이다가 hover하면 해당 영역만 정확한 숫자가 나오고 나머진 blur처리된 숫자를 표시

# Node

### **[NODE.JS MONTHLY DOWNLOADS](https://nodedownloads.nodeland.dev/)**

- NodeJS TSC 멤버인 Matteo Collina 가 만든 Nodejs 다운로드 통계 시각화
- [https://storage.googleapis.com/access-logs-summaries-nodejs/index.html](https://storage.googleapis.com/access-logs-summaries-nodejs/index.html)

### **[Announcing Deno Cron](https://deno.com/blog/cron)**

- Deno 1.38부터 사용가능. *nix 크론과 달리 중복실행되지 않음
- 웹 서버나 지속적인 요청 없이도 크론을 실행하고 격리 상태 유지
- 새 프로덕션 배포가 발생하면 글로벌 크론 스케쥴러가 프로젝트의 최신 크론 정의로 업데이트되고 기존 크론, 새 크론, 삭제된 크론 업데이트

# Javascript

### **[Psychology of Speed: A Guide to Perceived Performance](https://calibreapp.com/blog/perceived-performance)**

- 인지 성능이란 무엇이고, 사람들이 시각과 속도를 인지하는 방법
- 인지 성능을 향상시키기 위한 가이드
    - 1초 미만의 대기시간은 로더 제거, 1~2초는 로딩 스피너 혹은 스켈레톤, 2~10초는 타임 인디케이터 등
    - 항상 유저가 할 것을 제공하기 (로딩 메시지, 스크린 밖은 지연 로드, 긴 시간이 걸리는 작업은 백그라운드로 처리하여 유저의 인터랙션 방해하지 않기)

### **[Astro 4.0 Beta Release](https://astro.build/blog/astro-4-beta/)**

- 내부 빌드 도구인 Vite 최신화를 위해 Astro 4 출시. 4에선 Vite5 사용.

### **[Track Frontend JavaScript exceptions with Playwright fixtures](https://www.checklyhq.com/blog/track-frontend-javascript-exceptions-with-playwright/)**

- Playwright 테스트에서 JS Exception 구독하기
- Test fixture는 테스트 사이에 격리된 객체. 플레이라이트를 커스텀하여 추가, 재정의, 확장 가능

### **[FullCalendar](https://fullcalendar.io/)**

- 구글 캘린더와 같은 기능을 제공하는 오픈소스.
- React, Angular, Vue 지원

# ETC

### **[(OK)LCH implementation is not according to spec](https://bugzilla.mozilla.org/show_bug.cgi?id=1847421)**

- 모든 브라우저가 OKLCH 잘못구현.
- 색상의 밝기가 0, 1 이면 흰색과 검은색이 되어야 하는데 그렇지 않음.

### **[Wasm By Example](https://wasmbyexample.dev/home.en-us.html)**

- WASM 에 대한 기본 개념과 예제 소개
- Rust, AssemblyScript, Emscripten, TinyGo 예제 제공

### Release

- [jsdom v23.0.0](https://github.com/jsdom/jsdom/releases/tag/23.0.0)
- [jotai v2.6.0](https://github.com/pmndrs/jotai/releases/tag/v2.6.0)
- [keras 3.0](https://keras.io/keras_3/)