---
title: dev-weekly 2025-10-11
date: "2025-10-11T22:19:00.000Z"
description: "dev-weekly 2025-10-11"
tags: ["javascript", "css", "nodejs", "bun"]
---
# CSS

### [A pragmatic guide to modern CSS colours - part one](https://piccalil.li/blog/a-pragmatic-guide-to-modern-css-colours-part-one)

- CSS 새로운 색상에서 개발자에게 도움이 될만한 내용에 대한 글
- rgb()를 사용해도 알파값 입력 가능. 쉼표 생략하고 작성 가능(단, 쉼표 생략하면 알파값 앞에는 `/` 를 붙여야함)
- hsl() 도 hala()로 쓰지 않아도 됨. 단위도 생략 가능 - e.g. hsl(0 100 50)
- 위 두 변경은 상대색상에서 유용
    - `color: hsl(from #ff0000 h s l / 0.5);` 작성 가능
    - e.g. `background-color: hsl(from var(--color-primary) h s l / 0.75);`
- linear-gradient를 사용할 때 두 색을 지정하면 가운데가 흐릿해지는 이슈. 가운데를 선명하게 하려면 3가지 색상을 사용해야 했는데 oklch를 활용하면 두 가지 색상으로 가능.
    - e.g. `background: linear-gradient(in oklch 90deg, var(--color-1), var(--color-2));`

# Nodejs

### [15 Recent Node.js Features that Replace Popular npm Packages](https://nodesource.com/blog/nodejs-features-replacing-npm-packages)

- npm 패키지를 대신할 신규 빌트인 nodejs 기능들 소개 - 패키지, 대체 가능한 nodejs API 지원 버전, 주의점 등
- fetch(), node:test, node:sqlite, util.styleText(), util.stripVTControlCharacters(), fs.rm({ recursive: true }), crypto.randomUUID(), etc

### [itty.dev: mighty [tiny] libraries](https://itty.dev/)

- 모던 웹 개발을 위한 굉장히 작은 라이브러리.
- itty router는 450~970byte.
- fetcher는 fetch 래퍼로 650byte

# Javascript

### [What's coming in ESLint v10.0.0](https://eslint.org/blog/2025/10/whats-coming-in-eslint-10.0.0/)

- 안정성을 확보하고 커뮤니티 피드백을 수집하기 위해 10은 단계적으로 개발할 예정. v10.0.0-alpha 주요 변경 사항 공유글
- 최소지원버전 nodejs v20.19.0
- eslintrc 완전히 제거. 더이상 사용하지 않는 룰 컨텍스트 멤버 제거
- 현재 작업중인 디렉토리가 아니라 린팅중인 파일에서 룩업 시작하도록 변경
- JSX 참조 추적 활성화
- 25년 11월 출시 예정.

### [Bun 1.3](https://bun.sh/blog/bun-v1.3)

- 풀스택 JS 런타임으로 전환
- Bun.serve() 에 풀스택 dev server 내장
    - react fast refresh를 포함한 HMR 지원.
    - `import.meta.hot` API를 통해 프레임워크에 핫 리로딩 구현 가능
    - `bun build --production` 로 앱 번들링
- mysql client, redis client 내장
- 라우팅, 쿠키, 웹소켓, HTTP 인체공학
    - 웹소켓 RFC 6455를 준수하는 하위 프로토콜 배열 지정 가능
    - 웹소켓 헤더 재정의 가능
    - permessage-deflate 디폴트 활성화
- 단일 실행 파일 풀스택 앱까지 확장 - 코드 서명 지원. 멀티 플랫폼 빌드 가능.
- workspace 에서 Isolated install 디폴트 - npm/yarn의 hoisted install과 달리 각 패키지가 자체적으로 선언한 종속성에만 접근 가능
    - `bun why` 를 통해 해당 패키지가 왜 설치되는지 설명
- 보안 스캐너 API제공, `minimumReleaseAge` 기능 지원.
- nodejs 호환성 개선

### [Introducing the React Foundation](https://react.dev/blog/2025/10/07/introducing-the-react-foundation)

- React는 어느 한 회사의 한계를 넘음. 더 나은 서비스를 제공하기 위해 React, RN 을 Meta에서 React Foundation으로 이전할 것. (Linux Foundation이 후원)
- 창립 기업 멤버는 Amazon, Callstack, Expo, Meta, Microsoft, Software Mansion, Vercel
- React의 기술적 방향은 기여하고 유지하는 사람들이 정해야 함. 어떤 회사나 단체도 과도하게 대표되지 않을 것.

### [What's new in view transitions (2025 update)](https://developer.chrome.com/blog/view-transitions-in-2025?hl=en)

- FF가 10월14일에 144버전을 릴리스하면서 모든 모던 브라우저가 view transition 지원
- React core에서 <ViewTransition> 컴포넌트 지원. `react@canary` 에서 사용 가능.
- 크롬 개발자도구 애니메이션 패널에서 애니메이션을 일시 중지 후 타임라인을 수동제어해서 뷰 트랜지션 디버깅 가능
- 크롬 142부터 ::view-transition의 position이 fixed에서 absolute로 변경

### [Accented: A frontend library for continuous accessibility testing and issue highlighting.](https://accented.dev/)

- axe-core 기반 도구. 접근성 이슈가 있는 엘리먼트 옆에 인터랙티브한 콜아웃 표시. 콜아웃 클릭하면 어떤 수정이 필요한지 가이드.

### [Mastra: typescript AI agent framework](https://mastra.ai/)

- Gatsby 팀에서 만든 프레임워크. $13M 시드 라운드 유치
- AI 애플리케이션과 피쳐를 구축하는데 필요한 프리미티브 제공

# ETC

### [Europe’s cookie law messed up the internet. Brussels wants to fix it.](https://www.politico.eu/article/europe-cookie-law-messed-up-the-internet-brussels-sets-out-to-fix-it/)

- 유럽 연합 집행 위원회는 웹사이트에 쿠키 배너 표시를 강제하는 개인 정보 보호 규정을 완화하려고 함.

### [Winners announced! js13kGames](https://js13kgames.com/2025/blog/winners-announced)

- js13k games 대회 수상작 소개. 올해는 197개 게임 출품.

### Release

- [pino v10.0.0](https://github.com/pinojs/pino/releases/tag/v10.0.0)
- [javet 5.0.0](https://www.caoccao.com/Javet/release_notes/release_notes_5_0.html)
- [Next.js 16 (beta)](https://nextjs.org/blog/next-16-beta)
    - 최소 지원 버전 - nodejs 20.9, typescript 5.1.0, chrome, edge, firefox 111, safari 16.4
- [playwright v1.56.0](https://github.com/microsoft/playwright/releases/tag/v1.56.0)