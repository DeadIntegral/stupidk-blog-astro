---
title: dev-weekly 2025-10-18
date: "2025-10-18T22:21:00.000Z"
description: "dev-weekly 2025-10-18"
tags: ["javascript", "nodejs"]
---

# Nodejs

### [Bring Python ASGI to Your Node.js Applications](https://blog.platformatic.dev/bring-python-asgi-to-your-nodejs-applications)

- Platformatic Watt 서버에서 파이썬 인터프리터를 내장하고 ASGI 를 지원하는 브릿지 제공
- 네트워크 요청은 성능 병목이 될 수 있음. AI, ML 을 사용하는 속도와 안정성 높은 작업을 위하여
- Rust의 type-safe 브릿지를 통해 JS 이벤트 루프와 파이썬 워커 스레드 간 직접 메모리 공유하는 형태.

# Javascript

### [Lit is Joining the OpenJS Foundation!](https://lit.dev/blog/2025-10-14-openjs/)

- Google의 오픈 소스 프로젝트 Lit 이 OpenJS Foundation의 Impact Project로 이관
- 벤더 중립적인 TSC(기술지원센터)를 만드는 여정의 한 단계

### [The killer feature of Web Components](https://daverupert.com/2025/10/custom-elements-manifest-killer-feature/)

- CEM(Custom Element Manifest)은 컴포넌트 API에 대한 정보를 노출하는 커뮤니티 표준 JSON 포맷
- JSDoc으로 `@cssprop`, `@cssproperty`, `::part()` , `<slot>` 등 제공 가능

### [mirrow.app: SVGs. One file. Zero fuss.](https://mirrow.app/)

- CSS, JS없이 사용 가능한 svg파일 만들어주는 도구
- 디자인, 스타일, 애니메이션을 하나의 파일에서 구현 가능

### [Announcing Vite+](https://voidzero.dev/posts/announcing-vite-plus)

- `vite+`는 npm에서 설치할 수 있는 커맨드 라인 개발자 도구. vite의 드롭인 업그레이드 버전

### [Why typeof null === object](https://pzarycki.com/en/posts/js-null/)

- JS에서 typeof null 이 object인 이유
- 브랜든 아이크가 넷스케이프에서 고용되어 C로 LiveScript 구현. Netscape 1.3에서 데이터 타입을 정의하는 매크로와 메모리 표현의 이슈.
    - 최하위 3개의 비트가 태그로 사용되고 object는 000이어야함. null의 전체 바이너리는 0이라서 object가 됨.

# ETC

### Release

- [got v14.5.0](https://github.com/sindresorhus/got/releases/tag/v14.5.0)
- [React Native 0.82 - A New Era](https://reactnative.dev/blog/2025/10/08/react-native-0.82)
    - HermesV1, React 19.1.1 사용. 이제 레거시 아키텍처 사용 불가.
- [ky v1.12.0](https://github.com/sindresorhus/ky/releases/tag/v1.12.0)