---
title: dev-weekly 2023-12-09
date: "2023-12-09T18:38:00.000Z"
description: "dev-weekly 2023-12-09"
tags: ["javascript", "CSS", "node", "a11y", "v8"]
---
# CSS

### **[Introducing StyleX](https://stylexjs.com/blog/introducing-stylex/)**

- CSS in JS 경험을 컴파일 타임 툴을 활용하여 정적 CSS의 성능, 확장성과 연결한 스타일링 시스템. (컴파일러 기반 css in js 라이브러리가 아님)
- Facebook, WhatsApp, Instragram, Workplace, Threads를 포함하여 메타의 주요 제품에서 이미 사용중인 도구를 이번에 공개한 것.

### **[How to use Chrome’s accessibility tree](https://blog.pope.tech/2023/11/27/how-to-use-chromes-accessibility-tree)**

- DOM과 접근성 트리
- 크롬 개발자 도구로 접근성 트리 확인하기

### **[CSS Loader](https://css-loaders.com/)**

- 하나의 요소와 CSS만으로 만들어진 로더 모음

### **[Pure CSS Video Part 1: Solar Sojourn](https://codepen.io/ivorjetski/pen/JjxNEWp)**

- CSS만 사용하여 만든 애니메이션

# Node

### **[Node.js 16 deprecation](https://vercel.com/changelog/node-js-16-deprecation)**

- vercel은 2024년 2월 6일부터 nodejs16 지원 중단.

### **[Got v14.0.0](https://github.com/sindresorhus/got/releases/tag/v14.0.0)**

- 최소지원버전 node.js 20. node18을 사용해야 한다면 got 13사용할 것.

### **[Examples of Great URL Design](https://blog.jim-nielsen.com/2023/examples-of-great-urls/)**

- 스택오버플로 - `/questions/:id/:slug` id가 실제 아티클이고 slug는 사람이 알아볼 수 있는 텍스트
- 깃헙 `/:owner/:project/compare/ref1...ref2` , npm 도 마찬가지. 검색해볼 필요 없이 직접 접근 가능.

### **[Astro 4.0](https://astro.build/blog/astro-4/)**

- Asto Dev Toolbar. 개발 시 페이지 검사, 접근성 문제 파악 등 다양한 도구를 갖춘 툴바.
- i18n 라우팅. SSR에서도 사용자 언어를 감지하여 리디렉션 가능
- 인크리멘탈 콘텐츠 캐싱 실험적 지원
- 새로운 View  Transition API - hover 시 프리로드. 각 링크에 대해 프리페칭 활성화 여부 컨트롤 가능
- 로그 리디자인 - 불필요한 로그 제거, 더 간결한 오류, 스택 트레이스 개선.
- 문서 리디자인 - [docs.astro.build](http://docs.astro.build) 는 asto 공식 문서 템플릿인 Starlight로 작동.

### Release

- [ava v6.0.0](https://github.com/avajs/ava/releases/tag/v6.0.0)
- [undici v6.0.0](https://github.com/nodejs/undici/releases/tag/v6.0.0)
- [fresh 1.6](https://deno.com/blog/fresh-1.6)
- [react native 0.73](https://reactnative.dev/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks)
- [redux-toolkit v2.0.0](https://github.com/reduxjs/redux-toolkit/releases/tag/v2.0.0)
- [youtube.js v8.0.0](https://github.com/LuanRT/YouTube.js/releases/tag/v8.0.0)

# Javascript

### **[Ecosystem 2023 Recap](https://www.electronjs.org/blog/ecosystem-2023-eoy-recap)**

- 일렉트론 생태계 2023 요약
- 일렉트론 포지 7 - 구글 클라우드 스토리지에 직접 게시 지원, ESM 지원.
- 스태틱 스토리지 오토 업데이트 향상
- 패키지들 `@electron/` 으로 통합. 앞으로 만드는 패키지도 네임스페이스 유지할 것.
- `@electron/windows-sign` 패키지. 2023년 6월 1일부터 윈도우 코드 서명이 요구되었고 이를 지원하기 위해 개발.

### **[Advanced usage patterns for taking page element screenshots with Playwright](https://lirantal.com/blog/advanced-usage-patterns-for-taking-page-element-screenshots-with-playwright/)**

- playwright에서 스크린샷 찍을 때 `addScriptTag` 를 사용하여 돔 조작하기.
- 캡쳐한 이미지를 sharp를 이용하여 편집하기.

### **[Care beyond code: 7 best design practices for frontend developers](https://evilmartians.com/chronicles/care-beyond-code-7-best-design-practices-for-frontend-developers)**

- FE가 관심가져야 하는 디자인 영역들
    - 레이아웃 리뷰 할 때 기술적 한계와 기능을 고려하여 비용에 대해 논의하기(대안제시)
    - 디자인 시스템을 사용하여 일관성 유지
    - 사용자 시나리오 검증 및 사용 편의성 고려하기.
    - 모든 인터페이스 상태 고려하기. 서버에 에러가 나거나 지연 발생 등에 대해서.
    - 계층 구조와 그룹화 요소 확인하기
    - 대비가 눈에 띄는지 확인하기
    - 정렬이 일관되어있는지 확인하기

### **[design2code](https://github.com/mostafasadeghi97/design2code)**

- pix2code처럼 디자인을 넣으면 코드로 만들어주는 도구
- 스케치, 와이어프레임, 피그마, XD 등을 지원한다고 주장.

### **[Let’s learn how modern JavaScript frameworks work by building one](https://nolanlawson.com/2023/12/02/lets-learn-how-modern-javascript-frameworks-work-by-building-one/)**

- 모던 프레임워크는 DOM 업데이트를 위해 reactive, DOM 렌더링을 위해 template 클론 사용.
- React는 reactive하지 않다고 하는 말은, push-based 모델이 아니라 pull based 모델을 뜻함.
- `template.content.cloneNode(true)` 의 성능이 좋다는걸 알게되어 사용하기 시작.
- reactive와 template 만들어보기(step by step), 이 두가지를 합쳐서 모던 프레임워크 만들어보기

### **[TSDiagram](https://tsdiagram.com/)**

- 타입을 입력하면 실시간으로 다이어그램으로 변환해주는 도구

# ETC

### **[World Wide Web Consortium](https://w3c.social/@w3c/111534700276754588)**

- w3c는 앞으로 X/Tweeter에서 활동하지 않을것이며 모든 팔로워는 Mastodon안내한다고 게시.
- w3c관련 모든 계정도 같은 조치를 취하도록 권장.

### **[Maglev - V8’s Fastest Optimizing JIT](https://v8.dev/blog/maglev)**

- 2021년 V8에는 인터프리터인 ignition과 컴파일러인 Turbofan이라는 두 가지 주요 실행 계층 존재.
    - 실행 속도와 컴파일 시간에서 둘의 차이가 커서 Sparkplug라는 새로운 baseline JIT 도입
- Maglev 는 심플한 SSA 기반 JIT 컴파일러
- Sparkplug와 Turbofan 사이에 Maglev를 두면 벤치마크 눈에 띄게 향상.