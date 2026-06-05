---
title: dev-weekly 2026-05-16
date: "2026-05-16T21:31:00+09:00"
description: "dev-weekly 2026-05-16"
tags: ["javascript", "node", "compiler", "v8", "pwa", "devtools", "http", "browser"]
---

# Javascript

### [Bluejs: JavaScript that compilesto native binaries.](https://bluejs.dev/)

- JS코드를 Cpp 로 컴파일한 후 네이티브 바이너리로 링크. 네이티브 GUI, 파일 시스템, HTTP 서버를 지원하고 런타임에 Eletron, Nodejs 사용안함.
- bluejs 사이트는 2.2MiB 바이너리로 제공 가능.
- 옵셔널 임베디드 QuickJS는 esbuild 제공, Blue.callAot(), Blue.callIsland()라는 경량 브릿지로 통신

### [Soon We Can Finally Banish JavaScript to the ShadowRealm](https://css-tricks.com/soon-we-can-finally-banish-javascript-to-the-shadowrealm/)

- 독립적인 컨텍스트를 갖는 ShadowRealm에 대한 소개
- tc39 프로포절 stage 2.7 에 도달
- ShadowRealm은 무결성 경계. 외부 객체에 간섭할 수 없지만 내부에서 수행된 연산 결과를 호스트에서 갖다 사용은 가능.

# Nodejs

### [MASTER THENODE.JSINTERNALS](https://www.thenodebook.com/)

- nodejs 심층 가이드. 이벤트루프 내부 구조, v8 작동 방식, 버퍼, 스트림, 파일 시스템, 프로세스와 OS, 비동기, 펀더멘탈 등 고급 주제를 책.
- 온라인 무료 [https://www.thenodebook.com/node-arch/what-is-nodejs](https://www.thenodebook.com/node-arch/what-is-nodejs)

# ETC

### [Install web apps with the new HTML install element](https://developer.chrome.com/blog/install-element-ot?hl=en)

- MS Edge팀과 크롬 팀이 협력하여 <install> 요소 추가. 신뢰할 수 있는 웹 앱 설치 버튼을 추가하는 엘리먼트.
- installurl 어트리뷰트를 사용하여 다른 url 웹 앱 설치도 가능.

### [devtools: how to query through the shadow DOM](https://remysharp.com/2026/05/01/devtools-how-to-query-through-the-shadow-dom)

- 개발자도구에서 $() 는 querySelector, $$()는 querySelectorAll인 것 처럼 $$$()는 섀도우 돔 접근 가능.
- $$$역시 두 번째 인자를 받기 때문에 `$$$('div', $0)`도 유효
- fyi. $$$ 는 파이어폭스 개발자 도구에서만 동작

### [Better Browser Caching with No-Vary-Search](https://csswizardry.com/2026/05/better-browser-caching-with-no-vary-search/)

- 서치 파라미터에 대한 캐싱 컨트롤.
    - e.g. utm_source 가 달라져서 캐시 미스가 되는 케이스 방지 가능. `No-Vary-Search: params=("utm_source")`
    - e.g. 특정 파라미터를 제외한 전부 무시도 가능. `No-Vary-Search: params, except=("colour" "size")`
    - 파라미터 순서는 무시. 지시문 결합 가능.
- 저자는 마케팅에서 새로운 utm 추가할 수 있으니 사용하는것 제외한 나머지 무시하는것 제안.
- 현재 크롬, 오페라 등에서 지원.

### [visual-explainer: An agent skill that turns complex terminal output into styled HTML pages you actually want to read.](https://github.com/nicobailon/visual-explainer)

- 다이어그램, 차이점, 데이터 테이블, 프로젝트 요약을 위한 HTML 페이지, 슬라이드 자료를 생성하는 에이전트 스킬

### Release

- [Astro v6.3](https://astro.build/blog/astro-630/)
- [synckpack v15.0.0](https://github.com/JamieMason/syncpack/releases/tag/15.0.0)
- [Bun v.1.3.14](https://bun.com/blog/bun-v1.3.14)
- [pnpm v11.1](https://pnpm.io/blog/releases/11.1)