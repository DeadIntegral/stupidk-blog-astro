---
title: dev-weekly 2025-06-14
date: "2025-06-14T23:12:00.000Z"
description: "dev-weekly 2025-06-14"
tags: ["css", "node", "javascript", "react", "browser"]
---

# Javascript

### [Partial Keyframes](https://www.joshwcomeau.com/animation/partial-keyframes/)

- `@keyframe` 을 사용할 대 from을 입력하지 않으면 번들 사이즈 감소 뿐 아니라 시작값을 컨텍스트에서 상속받음.
    - e.g. opacity 0.6 인 것에서 to 0을 적용하면 현상태에서부터 애니메이션 적용
- 반대도 성립. to를 생략하고 필요한 곳 마다 다른값을 입력하면 해당 값으로 애니메이션.
- e.g. 2개의 애니메이션을 넣고, 하나는 초기값을 하나는 from, to를 넣어 최초 값 이후로는 하나의 애니메이션이 반복되도록 설정. (iOS17 이상에서 동작)
    
    ```html
    <style>
      @keyframes twinkle {
        from { opacity: 0.25; }
        to { opacity: 0.75; }
      }
      @keyframes fadeFromTransparent { from { opacity: 0; } }
      .ball {
        animation:
          twinkle 250ms alternate infinite,
          fadeFromTransparent 2000ms;
      }
    </style>
    ```
    

### [The State of React and the Community in 2025](https://blog.isquaredsoftware.com/2025/06/react-community-2025/)

- redux 메인테이너 겸 리액트 커뮤니티 핵심 구성원이 설명하는 리액트 발전 과정, 팀의 주요 목표, 사용 패턴.
- 리액트 팀 방향성에 대한 동기와 이유에 대한 FUD(불안, 두려움, 의심)에 대해서.
- RSC에 대한 vercel과의 오해 해명.
    - React팀이 향후 React 앱을 개발하는 방식에 비전을 제시한 것.
    - React 코어의 일부가 Vercel로 이전하여 React의 비전에 동참하도록 설득한것에 더 가까움.
- 리액트 팀이 문서에 프레임워크와 실제 사용 사례에 대해 충분히 고려하지 않고 작성한 부분

### [Announcing Oxlint 1.0](https://voidzero.dev/posts/announcing-oxlint-1-stable)

- zero config 제공. eslint를 사용중이었으면 마이그레이션도 제공.
    - eslint-plugin-oxlint 를 통해 두 린트가 같이 사용되는 동안 중복방지 가능.
- 시멘틱 버저닝 준수.
- VSCode, IntelliJ, Zed 등 에디터 인티그레이션 제공

### [Suppressions of Suppressions](https://overreacted.io/suppressions-of-suppressions/)

- 규칙이 틀릴수도 있고 불필요하게 엄격할수도 있음. 하지만 사람들이 규칙을 숨기는데 익숙해지면 문제가 생길 수 있음.
- 모든 suppressions 를 금지할수는 없지만, 린트 숨기는걸 금지하는 린트 설정이 가능. 오픈 소스 커뮤니티에도 `eslint-plugin-eslint-comments/no-restricted-disable` 가 있고 페이스북에서도 비슷한 린트 규칙이 있었음.
    - e.g. `/*eslint eslint-comments/no-restricted-disable: [error, no-undef, no-unused-vars]*/`

# Nodejs

### [HMR natively in Node.js (technical write up)](https://immaculata.dev/blog/native-nodejs-hmr.html)

- `--watch` 플래그처럼 전체 상태를 버리지 않고, 모듈 훅을 활용해 변경된 모듈만 리로딩하는 네이티브 HMR 구현
- `FileTree`로 파일 트리를 메모리에 유지하고, 버전 쿼리(`?ver=…`)를 붙여 캐시 무효화
- 모듈 간 의존 트리를 자동으로 추적해, 종속 모듈 변경 시 부모 모듈 버전도 같이 업데이트되도록 재귀로 동작.

### [Orange ORM](https://orange-orm.io/)

- Nodejs, Bun, Deno를 지원하는 객체 관계형 맵퍼.

### [npmgraph: **Explore npm modules and dependencies**](https://npmgraph.js.org/)

- npm 패키지의 그래프를 시각화하고, 종속성을 선택하면 해당 패키지의 타임라인, 번들사이즈 등을 보여주는 서비스

# ETC

### [News from WWDC25:WebKit in Safari 26 beta](https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/)

- 26년을 맞이해 macOS, iOS, iPadOS, visionOS, watchOS, safari 까지 26으로 통일한 번호 사용
- 인터페이스에 아이콘이 있는 곳에서 SVG 지원
- 매니페스트 없이도 사이트를 iOS, iPadOS 에서 웹앱으로 제공 가능
- HDR 이미지 지원
- WebGPU에 대한 지원 추가
- anchor positioning, scroll-animation, text-wrap: pretty 지원. absolute position 에서 align-self, justify-self 지원
- WebRTC, Web Inspector 업데이트.

### Release

- [jest 30](https://jestjs.io/blog/2025/06/04/jest-30)
- [pnpm 10.12](https://socket.dev/blog/pnpm-introduces-global-virtual-store-and-expanded-version-catalogs)
- [deno v2.3.6](https://github.com/denoland/deno/releases/tag/v2.3.6)