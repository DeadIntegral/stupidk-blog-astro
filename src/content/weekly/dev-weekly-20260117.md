---
title: dev-weekly 2026-01-17
date: "2026-01-17T18:02:00.000Z"
description: "dev-weekly 2026-01-17"
tags: ["javascript", "nodejs"]
---
# 20260117

# CSS

### [Using 100vw is now scrollbar-aware (in Chrome 145+, under the right conditions)](https://www.bram.us/2026/01/15/100vw-horizontal-overflow-no-more)

- 크롬 145부터 vw, vh에서 스크롤바 계산
- CSS working 그룹에서 이 문제를 해결하기 위해 루트 엘리먼트에 `scrollbar-gutter: stable` 넣는것도 고려.

# Javascript

### [Stop turning everything into arrays (and do less work instead)](https://allthingssmitty.com/2026/01/12/stop-turning-everything-into-arrays-and-do-less-work-instead/)

- array대신 Iterator helper를 사용해서 연산 줄이기

### [How to Steal Any React Component](https://fant.io/react/)

- 브라우저에서 React를 보면 메모리에 DOM과 React Fiber 두 개의 트리가 존재.
- 이 중 Fiber는 React Component가 어떤 DOM Element를 생성했는지, 어떤 props를 전달했는지, 컴포넌트의 훅의 상태 등을 알고 있고 React Dev tool도 내부적으로 이 기능 사용중.
- LLM에게 props 예시와 HTML 출력 결과를 주고 컴포넌트를 재현하는 React를 만들라고 시킨 뒤 검증하는 형태로 리액트 컴포넌트 훔치기 가능
    - 트리의 맨 아래부터 의존성 순서대로 컴포넌트를 처리해야함.
    - 애니메이션의 경우 스냅샷과 일치하지 않을것이라서 실패 가능.

### [Memlab 2.0](https://facebook.github.io/memlab/)

- JS용 메모리 테스트 프레임워크. 메모리 릭을 찾고 힙 스냅샷 분석.

# Nodejs

### [package-examples](https://nodejs.github.io/package-examples/)

- 오피셜 nodejs package 가이드

# ETC

### [Not All Browser APIs Are "Web" APIs](https://polypane.app/blog/not-all-browser-apis-are-web-apis/)

- geolocationAPI, Speech API, Passkeys, Payment Reqeust API, Web Push, AI API, DRM 등 다양한 API들이 인터페이스만 제공되고 실제로는 브라우저 벤더사의 서버를 통함.
- 성능 저하를 고려해서 설계하고, 개인 정보 보호를 투명하게 공개하고, 벤더 종속성 고려하라는 아티클

### [Chromium JPEG XL 지원](https://chromium-review.googlesource.com/c/chromium/src/+/7184969)

- `chrome://flags/#enable-jxl-image-format` 플래그를 통해 사용 가능

### Release

- [bun v1.3.6](https://bun.com/blog/bun-v1.3.6)
- [firefox 147](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/147)