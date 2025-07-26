---
title: dev-weekly 2025-07-26
date: "2025-07-26T22:11:00.000Z"
description: "dev-weekly 2025-07-26"
tags: ["node", "javascript"]
---

# Node

### [npq: safely install npm packages by auditing them pre-install stage](https://github.com/lirantal/npq)

- `npx npq install express` 와 같이 사용 가능. 설치 전 audit을  진행하여 안전하게 설치
- [snyk.io](http://snyk.io) 의 DB를 참조하여 공개된 취약점 등을 확인

# Frontend

### [Frontend Performance Checklist](https://crystallize.com/blog/frontend-performance-checklist)

- 퍼포먼스 측정 도구 소개
- HTML, CSS, JS, 이미지 핸들링, 비디오, 폰트, 호스팅 등 에서의 최적화 포인트 소개

### [Responsive video is (almost) easy now](https://www.kooslooijesteijn.net/blog/responsive-video-easy)

- video 에 source를 사용하여 반응형 비디오 사용하기
- 전체 화면 전환처럼 다른 source 파일을 새로 로딩하지 않는 경우 처리하기
- 포스터(프리뷰 이미지)는 모든 뷰포트에 대해 하나의 해상도만 제공 가능한 이슈 처리하기

### [It’s time for modern CSS to kill the SPA](https://www.jonoalderson.com/conjecture/its-time-for-modern-css-to-kill-the-spa/)

- 웹을 앱과 같이 만들기 위해 느리게 만드는 것들이 이제 필요하지 않음
- 브라우저 지원이 좋아진만큼 2018년도 개츠비 데모에 갇히지 말고 2025년 개발을 할 것.

# ETC

### [One simple trick to make your screenshots 80% smaller](https://about.gitlab.com/blog/simple-trick-for-smaller-screenshots/)

- 스크린샷을 캡쳐하면 1600만가지 색상과 투명값을 지원하는 PNG-32 포맷으로 저장. 색상 양자화를 통해 용량 감소 시키는 아티클.

### Release

- [NAPI-RS v3](https://napi.rs/blog/announce-v3)
- [yotubue.js v15.0.0](https://github.com/LuanRT/YouTube.js/releases/tag/v15.0.0)
- [corepack v0.34.0](https://github.com/nodejs/corepack/releases/tag/v0.34.0) - nodejs 18, 23 지원종료
- [undici v7.12.0](https://github.com/nodejs/undici/releases/tag/v7.12.0)
- [firefox 141.0](https://www.firefox.com/en-US/firefox/141.0/releasenotes/)
    - 로컬 AI 모델이 탭 자동정리 기능 추가. 유사한 탭을 식별하여 그룹핑하고 그룹 이름 제안.
- [astro 5.12](https://astro.build/blog/astro-5120/)