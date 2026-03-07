---
title: dev-weekly 2026-03-07
date: "2026-03-07T21:04:00.000Z"
description: "dev-weekly 2026-03-07"
tags: ["javascript", "nodejs"]
---

# Javascript

### [Bun v1.3.10](https://bun.com/blog/bun-v1.3.10)

- REPL 재작성. 패키지 다운로드 필요없고, 완전한 기능을 갖춘 터미널 UI 포함.
- `--compile --target=browser` 제공 - 번들러에서 제공하는 기능들 제공
- Windows ARM64 지원, 이벤트 루프 성능 향상, JSC 업그레이드 및 다양한 성능 향상
- 배럴 임포트 최적화 - 실제로 사용하는 서브 모듈만 파싱

### [Why is WebAssembly a second-class language on the web?](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/)

- WASM에서는 웹 API 바로 호출 못하기 때문에 러닝커브가 크고 이로 인해 발전 저해. 이는 브라우저의 샌드박스 등과도 관련있는 것으로 앞으로도 쉽지 않음.
- 이를 해소하기 위해 WebAssembly Component model 제안이 수년간 개발되어 옴. 이는 low level WASM 코드 번들로 구현되는 high level API 정의. 브라우저 API에 직접 바인딩하고 스크립트 태그에서 직접 로드하는 기능을 통해 상황을 변화시킬 것이라고 주장.
- [https://www.youtube.com/watch?v=tAACYA1Mwv4](https://www.youtube.com/watch?v=tAACYA1Mwv4)

### [JavaScript DRMs are Stupid and Useless](https://www.therantydev.com/javascript-drms-are-stupid)

- JS DRM에 대하여. 신뢰할 수 있는 환경이 아니기 때문에 복호화된 데이터가 어디 있는지 아는 사람은 막을 수 없음 - PCM Boundary
- 해킹과 방어에 대한 과정
    - `SourceBuffer.prototype.appendBuffer` 를 통한 공격과 `toString()` 을 활용한 방어
    - `HTMLMediaElement.prototype.play` 과 iframe, shadow DOM 을 통한 방어
    - `Object.getOwnPropertyDescriptor`  을 통해 `HTMLMediaElement.prototype` 로 이동하는 방식

# ETC

### [The React Foundation: A New Home for React Hosted by the Linux Foundation](https://react.dev/blog/2026/02/24/the-react-foundation)

- 리액트 파운데이션 출범.
- 리액트 기술 거버넌스는 재단 이사회와 항상 독립적으로 운영될 것. 기술 방향은 리액트에 기여하고 유지 관리하는 사람들이 계속해서 결정할 것. 이를 위해 임시 리더십 위원회 구성

### [The most-seen UI on the Internet? Redesigning Turnstile and Challenge Pages](https://blog.cloudflare.com/the-most-seen-ui-on-the-internet-redesigning-turnstile-and-challenge-pages/)

- 인터넷에서 가장 많이 보이는 UI는 클라우드 플레어 사람입니다 체크박스.
- 하루에 76.7억번 접속. 시각 장애인, 바쁜 사람 등 모두에게 제대로 동작해야함.
- 문구 또한 나이, 정신 및 신체적 능력, 문화적 배경, 기술 수준에 관계없이 모두가 이해 가능하도록 작성해야함.
- 다국어 처리 및 번호체계 등 처리 (서양식 1,2,3 번호체계를 사용하지 않는곳도 존재).

### [Get features faster with Chrome's two-week release cycle](https://developer.chrome.com/blog/chrome-two-week-release?hl=en)

- 26년 9월부터 크롬 릴리스 기간 4주에서 2주로 단축.

### Release

- [expo SDK 55](https://expo.dev/changelog/sdk-55)
- [color-thief v3.0](https://github.com/lokesh/color-thief/releases/tag/v3.0.0)
    - TS로 재작성, 브라우저와 nodejs가 같은 API 사용. 런타임 의존성 없음. 현재 3.3
- [fastify v5.8.0](https://github.com/fastify/fastify/releases/tag/v5.8.0)