---
title: dev-weekly 2026-05-02
date: "2026-05-02T15:25:00.000Z"
description: "dev-weekly 2026-05-02"
tags: ["javascript", "css"]
---

# CSS

### [Scroll-Driven Animations](https://www.joshwcomeau.com/animation/scroll-driven-animations/)

- Josh의 animation timeline API를 사용한 스크롤 바인드에 대한 아티클.
- css variable은 해당 엘리먼트의 자식에서만 사용 가능. 대신 timeline-scope 를 제공.

# Javascript

### [portless: Replace port numbers with stable, named local URLs](https://github.com/vercel-labs/portless)

- 포트 넘버를 지정된 이름으로 변경하는 node 패키지
    
    ```jsx
    "dev": "next dev"                  # as-is http://localhost:3000
    "dev": "portless run next dev"     # to-be https://myapp.localhost
    ```
    

### [Perry: One Codebase. Every Platform](https://www.perryts.com/)

- 하나의 코드를 macOS, iOS, Android, Linux, Windows, watchOS, tvOS, WASM 등 플랫폼에서 동작하는 CLI/GUI로 컴파일. 런타임이 필요하지 않고 네이티브 바이너리만 생성.

### [bwip-js: Barcode Writer in Pure JavaScript](https://github.com/metafloor/bwip-js)

- 라이브러리 postscriptbarcode 를 네이티브 JS로 변환한 것.
- 100가지 이상의 바코드 표준 지원.

# ETC

### [The end of responsive images](https://piccalil.li/blog/the-end-of-responsive-images/)

- srcset, sizes와 같은 반응형 이미지 어트리뷰트를 만든 Mat Marquis의 글.
- sizes의 경우 이미지가 렌더링 되는 시점에 브라우저가 정보를 알지 못해서 사용자의 직접 입력을 받아야 했음. 하지만 이제 loading=lazy가 가능하고 덕분에 sizes에 auto 값 추가. 이 값이 있으면 다른 것들은 무시하고 auto로 동작하고, auto를 지원하지 않는 브라우저는 나머지 부분을 그대로 동작.

### [An update on GitHub availability](https://github.blog/news-insights/company-news/an-update-on-github-availability/)

- 2025년 10월 깃헙의 캐파를 10배로 늘리는 계획을 시작했지만, 26년 2월이 되자 현재 규모보다 30배 더 늘려야 한다는게 분명해짐.
- 애져로의 마이그레이션을 통해 컴퓨팅 성능 확보, 핵심 서비스는 다른 워크로드로 분리, 성능 및 확장성 중요한 코드들 ruby에서 go로 전환 진행, 퍼블릭 클라우드 전환 진행, 멀티 클라우드 준비

### [Datatype: A variable font that turns text into charts.](https://franktisellano.github.io/datatype/)

- Datatype(라이브러리 이름)은 텍스트 표현식을 인라인 차트로 변환하는 OpenType variable font

### Release

- [Announcing Rspack 2.0](https://rspack.rs/blog/announcing-2-0)
- [Fresh 2.3: Zero JS by default, View Transitions, and Temporal support](https://deno.com/blog/fresh-2.3)
- [nanostores v1.3.0](https://github.com/nanostores/nanostores/releases/tag/1.3.0) - 286byte state manager