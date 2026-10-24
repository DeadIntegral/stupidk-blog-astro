---
title: dev-weekly 2026-10-24
date: "2026-10-24T21:01:00+09:00"
description: "TypeScript의 Rust 포트 tsrs 공개, AI 시대 웹 컴포넌트의 미래, Mermaid 다이어그램 렌더러 Pele, JavaScript 코드 변환의 동작 변경 문제, CrUX 소프트 네비게이션 측정과 주요 릴리스까지 이번 주 개발 소식."
tags: ["javascript", "typescript", "rust", "web-components", "mermaid", "performance", "security", "ai"]
---

# Javascript

### [Introducing tsrs: A port of TypeScript to Rust](https://blog.cloudflare.com/typescript-rust-port/)

- Cloudflare, voidZero가 TS 컴파일러 Rust 포트 `tsrs` 공개. 포크가 아니라 언어 동작 최대한 그대로 따라가는 구현. AI를 이용해 upstream 지속적으로 추적할 것. Vinext 에서 쓰던 방식을 TS에도 적용하는 것.
- 초기 벤치마크는 TS 7.0 대비 최대 8배 성능, 메모리 70% 감소. Rust 사용 이유는 WASM 적합성. 브라우저, Workers, IoT와 같은 임베디드 환경 등에서 더 가벼운 전체 툴체인을 실행하려는 목적.
- 지금까지 모든 포트가 실패했지만 AI 를 이용해 upstream TS 변경사항을 지속적으로 추적, 포팅하고 차이를 최소화하는 방식으로 유지할 계획.

### [Do web components have a future if nobody is writing them?](https://nolanlawson.com/2026/10/19/do-web-components-have-a-future-if-nobody-is-writing-them/)

- AI 코딩이 보편화되면서 “재사용 가능한 공통 컴포넌트” 라는 웹 컴포넌트의 핵심 가치가 예전보다 약해짐. 코드 생성 비용이 낮아졌기 때문. 그럼에도 토큰을 투자할 가치가 있는지는 다른 문제.
- 마이크로 프론트엔처럼 강한 격리가 필요하거나 프레임워크 독립적한 복잡한 UI 에는 여전히 의미가 있음.
- 장기적으로 웹 컴포넌트가 널리 쓰이지 않더라도, 섀도우 돔, 슬롯 같은 개념이 웹 플랫폼과 Open UI 설계에 영향을 준 것은 중요한 성과

### [Pele renders Mermaid diagrams to SVG](https://pele.run/)

- 머메이드 다이어그램을 CSS 변수를 사용하여 테마를 적용한 SVG로 렌더링하는 경량 오픈소스 라이브러리
- 머메이드보다 6배 작고 500배 빠름.
- Obsidian에서 다이어그램을 빠르게 렌더링하고 테마와 일치하도록 개발한 오픈 소스 도구.

### [Divergence: formatting a script can turn it into a different program, across 37+ JavaScript processors](https://trustsig.eu/blog/javascript-divergence/)

- JS formatter, minifier, deobuscator가 코드를 정리하는 과정에서 실제 동작까지 바꿔버릴 수 있는 현상을 `divergence` 라고 부르기로 함. 저자는 37개 도구에서 186가지 사례 찾음.
- 이를 악용하면 원본은 테트리스인데 devtools, prettier, esbuild 등으로 처리한 뒤에는 스네이크 게임이 되는 식. (예제 제공) 분석자가 전혀 다른 프로그램을 보게 함.
- LLM 에이전트에게 큰 난독화 코드를 주면 그대로 읽기보다 포맷, AST 변환 후 분석하는 경우가 많아서 AI 기반 리버싱을 속이는데 유용.
- 핵심 원인은 AST 변환, 상수 폴딩, 공백 처리 등이 “겉보기엔 같은 코드” 라고 가정하면서 사이드이펙트나 JS의 미묘한 차이를 놓치는데서 발생.

# ETC

### [lighthouse-md: Turn Lighthouse audits into a fix plan.](https://lighthouse-md.com/)

- google PageSpeed Insight로 url을 분석한 다음 문제가 발생한 항목에 맞춰 수정된 claude.md 파일 다운로드 제공

### [Experimental soft navigation metrics now available in CrUX](https://web.dev/blog/crux-experimental-soft-navs)

- Core Web Vital 측정에 있어서 SPA 서비스의 경우 문서 로드 대신 JS를 사용하여 동적으로 페이지 콘텐츠와 url을 업데이트. 이를 “소프트 네비게이션”이라고 알려짐. 이러한 소프트 네비게이션도 실험적으로 CrUX에서 반영.
- 여러 페이지를 탐색 할 경우 이전 페이지에서 다운로드한 코드를 재사용하기 때문에 점수 상승 예상.
- CrUX API 등을 통해 26년 10월부터 이용 가능. 27년 5월 실험 단계에서 졸업하는 것이 목표.

### Release

- [Astro v7.4](https://astro.build/blog/astro-740/)
- [ReactRouter v8.5.0](https://reactrouter.com/changelog#v850)
- [pretext v1.0.0](https://github.com/chenglou/pretext/releases/tag/v1.0.0)
- [React Native 0.88](https://reactnative.dev/blog/2026/10/19/react-native-0.88)
- [tsup v9.0.0](https://github.com/egoist/tsup/releases/tag/v9.0.0)
