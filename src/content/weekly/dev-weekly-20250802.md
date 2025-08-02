---
title: dev-weekly 2025-08-02
date: "2025-08-02T22:37:00.000Z"
description: "dev-weekly 2025-08-02"
tags: ["css", "node", "javascript", "w3c", "chrome", "edge"]
---

# CSS

### [CSS Carousel Gallery](https://chrome.dev/carousel/)

- JS를 사용하지 않은 CSS 캐러셀 갤러리.
- `overscroll-behavior` , `scroll-snap-type` , `anchor-name` 등을 사용했고 때문에 크롬 135이상 지원

### [Creating a scroll-spy with 2 lines of CSS](https://una.im/scroll-target-group/)

- 크롬 140에 추가된 `scroll-target-group` 을 통한 스크롤 추적

### [7.css](https://khang-nd.github.io/7.css/)

- Windows 7 처음 보이는 인터페이스를 구축하기 위한 CSS 프레임워크.
- 98.css, XP.css 의 GUI 백본을 기반으로 구축.

# Nodejs

### [The Node.js Developer's Guide to Unix Domain Sockets: 50% Lower Latency Than TCP loopback](https://nodevibe.substack.com/p/the-nodejs-developers-guide-to-unix)

- TCP loopback은 TCP 핸드셰이크, TCP 윈도잉 및 흐름 제어, IP 패킷 라우팅, 커널 네트워크 버퍼 관리, 유저 커널 컨텍스트 체인지를 거치지만, 유닉스 소켓은 파일 시스템을 통해 작동.
- 비교를 위해 채팅 앱을 만들고 성능비교.
    - 이를 측정하기 위해 나노초 정밀도 타이밍을 제공하는 `process.hrtime.bigint()` 사용

# Javascript

### [The many, many, many JavaScript runtimes of the last decade](https://buttondown.com/whatever_jamie/archive/the-many-many-many-javascript-runtimes-of-the-last-decade/)

- 엣지 컴퓨팅, 마이크로 컨트롤러, 폴리글롯 엔진(다른 언어와 같이 사용되는), 웹뷰, 데스크탑, TV 등 각 환경에서의 JS 런타임의 진화

# ETC

### [Celebrating 20 years of MDN](https://developer.mozilla.org/en-US/blog/mdn-turns-20/)

- MDN 20주년 기념.

### [Vision for W3C](https://www.w3.org/TR/2025/STMT-w3c-vision-20250729/)

- W3C의 사명을 뒷받침하는 가치, W3C가 무엇이고, 무엇을 하고 왜 중요한지, W3C가 하는 운영 및 의사결정을 내리는 원칙을 설명하는 문서

### [Introducing Copilot Mode in Edge: A new way to browse the web](https://blogs.windows.com/msedgedev/2025/07/28/introducing-copilot-mode-in-edge-a-new-way-to-browse-the-web/)

- 엣지 브라우저 코파일럿 모드 출시
- 사용자의 액션을 기다리지 않고 다음에 무엇을 하고 싶은지 예측
- 모든 열려 있는 탭의 전체 맥락을 파악하고, 일부 작업을 처리하라고 지시 가능하고 음성도 지원
- 개인정보보호는 MS의 최우선 과제

### [Customize your performance data with extensibility API](https://developer.chrome.com/docs/devtools/performance/extension?hl=en)

- extensibility API를 사용하여 퍼포먼스탭 패널에 맞춤형 시각화 가능
- 퍼포먼스 패널에 `capture settings` > `Show custom tracks` 가 켜져 있어야 사용자 정의 데이터 표현.

### Release

- [Typescript 5.9 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-9-rc/)
- [axios v1.11.0](https://github.com/axios/axios/releases/tag/v1.11.0)
- [Ionic v8.7](https://ionic.io/blog/announcing-ionic-8-7)
- [storybook v9.1.0](https://github.com/storybookjs/storybook/releases/tag/v9.1.0)