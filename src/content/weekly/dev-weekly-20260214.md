---
title: dev-weekly 2026-02-14
date: "2026-02-14T20:42:00.000Z"
description: "dev-weekly 2026-02-14"
tags: ["javascript", "nodejs", "css"]
---

# CSS

### [A Broken Heart](https://allenpike.com/2026/a-broken-heart/)

- noto color emoji 에서 사용한 하트 이모지가 사파리 26.2 에서 렌더링 느린 버그 (저자는 1600ms)

# Javscript

### [npmx: A New npm Registry Package Browser](https://npmx.dev/)

- 빠르고 현대적인 UI를 통해 향상된 개발자 경험 제공하는것이 목표
- 빠른 검색, 코드 뷰어, 출처, JSR 사용 가능 여부, 취약점 경고 등 다양한 정보 제공
- [https://github.com/npmx-dev/npmx.dev](https://github.com/npmx-dev/npmx.dev)

### [Webpack: **Roadmap 2026 (2026-02-04)**](https://webpack.js.org/blog/2026-04-02-roadmap-2026/)

- 플러그인 없이 CSS module 지원, html-webpack-plugin 코어에 통합 (webpack6)
- universal target 지원 - Node, Web, Bun, Deno 등 다양한 런타임에서 실행될 수 있는 코드 컴파일
- 로더 없이 TS 빌드, 멀티스레딩 API
- 모든 런타임에서 웹팩 동작(현재는 deno 등에서 이슈 존재)
- 정확한 문서 제공 - 타입과 스키마를 기반으로 자동 생성.

### [Debugging with AI: Can It Replace an Experienced Developer?](https://www.developerway.com/posts/debugging-with-ai)

- 클로드 코드에게 디버깅 시키고 사람이 한 것과 비교하여 평가하기
    - 첫 번째 문제: User Page is Broken
    - 두 번째 문제: Double Loaders Problem
    - 세 번째 문제: Weird Redirect Error
- 중요한 것은 어떻게 더 효과적으로 질문할 수 있느냐가 아니라, 언제 질문을 멈추고 스스로 생각해야 하는지 아는 것.

# Nodejs

### [almostnode: **Node.js in your browser**](https://almostnode.dev/)

- 서버 없이 브라우저에서 nodejs 실행
- Virtual Filesystem, 런타임, 패키지 사용, 개발서버, HMR 등 제공

# ETC

### [WCAG 3.0 overview and update 2026](https://abilitynet.org.uk/resources/digital-accessibility/what-expect-wcag-30-web-content-accessibility-guidelines)

- 2.2 까지는 주로 웹 페이지 적용이었다면 3.0 부터는 증강/가상 현실 과 같은 영역을 포함한 보다 광범위한 지원
- 2.2 는 감각 및 신체 장애에 초점을 맞췄다면, 3.0은 이해력, 언어 능력 등에 영향을 주는 인지 등을 포괄
- 2028년 이후 출시될 것. AI 사용 명시해야함.

### Release

- [transformersjs v4](https://huggingface.co/blog/transformersjs-v4)
- [bun v1.3.9](https://bun.sh/blog/bun-v1.3.9)
- [ink v6.7.0](https://github.com/vadimdemedes/ink/releases/tag/v6.7.0)
- [ember v6.10](https://blog.emberjs.com/ember-released-6-10/)
- [ESLint v10.0.0 released](https://eslint.org/blog/2026/02/eslint-v10.0.0-released/)
    - nodejs 21, 23 지원 종료, eslintrc 제거
- [Announcing TypeScript 6.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0-beta/)