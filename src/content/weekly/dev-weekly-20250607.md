---
title: dev-weekly 2025-06-07
date: "2025-06-07T16:55:00.000Z"
description: "dev-weekly 2025-06-07"
tags: ["node", "javascript"]
---

# NodeJs

### [OpenJS Foundation Is Now a CNA for 40+ JavaScript Projects Under Its Umbrella](https://socket.dev/blog/openjs-foundation-is-now-a-cna)

- OpenJS 파운데이션은 ESLint, Fastify, Electron, Express, Webpack등 40개 프로젝트에 취약점에 대한 CVE 식별자를 할당할 수 있게되었으며 공개 책임은 각각의 메인테이너에게 존재

### [qnm: cli utility for querying the node_modules directory](https://github.com/ranyitz/qnm)

- npm, yarn 모두 지원하며 Fuzzy search 지원.

# Frontend

### [WebStatus.dev: Now with more data, deeper insights, and a clearer path to Baseline](https://web.dev/blog/web-platform-dashboard-evolution?hl=en)

- 이제 대시보드에서 거의 100%에 달하는 1000개 이상의 기능을 확인 가능. 지원 여부 뿐 아니라 실제 사용 추세도 확인 가능
- 모바일 브라우저 데이터 통합
- 하나의 브라우저에서만 누락된 스펙 줌인 기능

### [Mini PhotoEditor](https://mini2-photo-editor.netlify.app/)

- 오프라인에서 동작가능한 온라인 이미지 편집기
- [https://github.com/xdadda/mini-photo-editor](https://github.com/xdadda/mini-photo-editor)

### [React Native: Freezing the Legacy Architecture](https://github.com/reactwg/react-native-new-architecture/discussions/290)

- 6월2일부터 레거시 아키텍처 코드베이스 프리징.
- 앞으로의 개발은 새로운 아키텍처로만 진행하며 백포트 하지 안음.

### [Announcing Babel 8 Beta](https://babel.dev/blog/2025/05/30/babel-8-beta)

- Babel 8 마이그레이션 가이드 제공
    - [https://next.babeljs.io/docs/v8-migration/](https://next.babeljs.io/docs/v8-migration/)
- Babel 8은 ESM 만 제공

# ETC

### [IE6, AI, and the future of browsing the Web](https://agenticweb.nearestnabors.com/p/ai-future-web)

- 구글은 W3C와 함께 표준을 개발하는 커뮤니티 계약업체 지원금 삭감. 이는 과거 IE6 과 유사한 방향
- 유저들이 웹 검색 대신 AI 기반 도구를 사용하며 검색 이용률 감소. 사파리도 검색 감소.
- 에이전트 웹의 등장

### [The Ingredients of a Productive Monorepo](https://blog.swgillespie.me/posts/monorepo-ingredients/)

- 모노레포는 조직의 일관성을 위한 도구. 대기업 사례를 따라가도 똑같이 안됨.
- Source Control - git은 모노레포를 위해 만들어진 도구가 아님. 성능 한계를 맞이하면 MS처럼 git을 fork하거나 메타처럼 Mercurial을 fork하거나 구글처럼 Perforce를 고려하게 될 것.
- 빌딩 - 여러 언어를 같이 사용할 수 있도록 돕는 도구인 Bazel같은게 있지만 하나의 언어만 쓰는게 좋음.
- CI - CI 시스템에서 가장 먼저 트리거되는 작업은 변경 사항을 기반으로 다른 작업들을 트리거해야 할지 결정하는 목표 결정자 작업

### Release

- [vitest 3.2](https://vitest.dev/blog/vitest-3-2.html)
- [astro 5.9](https://astro.build/blog/astro-590/)
- [Ionic 8.6](https://ionic.io/blog/announcing-ionic-8-6)
- [Storybook 9](https://storybook.js.org/blog/storybook-9/)