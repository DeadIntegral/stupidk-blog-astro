---
title: dev-weekly 2025-03-29
date: "2025-03-29T15:24:00.000Z"
description: "dev-weekly 2025-03-29"
tags: ["javascript", "css", "node"]
---

# CSS

### [The `<select>` element can now be customized with CSS](https://developer.chrome.com/blog/a-customizable-select?hl=en)

- 크롬 135부터 custom select 지원

# Node

### [Node.js TSC Votes to Stop Distributing Corepack](https://socket.dev/blog/node-js-tsc-votes-to-stop-distributing-corepack)

- Nodejs 기술 위원회에서 Corepack 배포 중단 투표
- 패키지 매니저 간의 격차를 줄이기 위해 도입했었으나 여러가지 문제 제기
    - 많은 개발자와 팀은 corepack을 완전히 무시
    - nodejs 바이너리에 corepack을 포함하는 건 별도 설치 가능한 도구를 불필요한 번들로 묶는 것
    - 패키지 매니저가 nodejs자체를 변경하지 않고 독립적으로 발전할 수 있어야함
- 사용 중단이 아닌 nodejs 배포판에서 제거되는 일. nodejs 24 EOL이 아닌한 유지될 것.

### [Runtime compatibility](https://runtime-compat.unjs.io/)

- nodejs 런타임 호환성 테이블

# Javascript

### [Top Sites: Website Speed Leaderboard](https://calibreapp.com/tools/website-speed-leaderboard)

- 업계를 선도하는 Core Web Vital 성능 지표를 비교해보도록 리더보드 제공
- 글로벌 뱅크 - 1위 KB, 2위 우리, 5위 K Bank. 뮤직 스트리밍 - 1위 멜론, 2위 지니뮤직
- 데이터 원장은 CrUX이고 때문에 디바이스 영향도 존재.

### [War story: the hardest bug I ever debugged](https://www.clientserver.dev/p/war-story-the-hardest-bug-i-ever)

- Google Docs에 있을 때 겪었던 가장 어려운 버그
- Math.abs()의 임수 인풋의 리턴 값이 음수. 크롬팀에 연락, 다시 V8에 연락. V8 최적화 리팩토링 중 누군가의 실수.

### [Next.js Patches Critical Middleware Vulnerability (CVE-2025-29927)](https://socket.dev/blog/next-js-patches-critical-middleware-vulnerability)

- 미들웨어를 우회하기 위해 스푸핑할 수 있는 x-middleware-subrequest 헤더의 오용으로 발생.
- 11.4부터 12, 13, 14, 15 버전까지 영향

### [Incomplete JSON Pretty Printer](https://simonwillison.net/2025/Mar/28/incomplete-json-pretty-printer/)

- 로그파일 이나 어떤 도구들은 예기치 않게 종료되는 JSON을 출력하는데, 이는 프리티 프린트되지 않음.
- 불완전한 JSON도 프리티 포맷팅하는 도구를 바이브 코딩으로 제작.

# ETC

### [MCP Node.js debugger](https://github.com/hyperdrive-eng/mcp-nodejs-debugger)

- Cursor, Claude Code가 nodejs 런타임에 접근할 수 있도록 하는 MCP 서버

### [Best Practices for Cognitive Accessibility in Web Design](https://www.a11y-collective.com/blog/cognitive-accessibility/)

- 웹 디자인에서 인지 접근성 이해하기
- 인지 장애가 웹 사용에 미치는 영향
- 인지 접근성 모범 사례 예시

### Release

- [bun v1.2.6](https://bun.sh/blog/bun-v1.2.6) - node:http 호환성 개선으로 express 성능 향상
- [bun v1.2.7](https://bun.sh/blog/bun-v1.2.7) - bun.Cookie, bun.CookieMap
- [Material UI v7](https://mui.com/blog/material-ui-v7-is-here/)
- [axios 0.30.0](https://github.com/axios/axios/releases/tag/v0.30.0)
- [lexical v0.29.0](https://github.com/facebook/lexical/releases/tag/v0.29.0)
- [Babylon.js v8](https://blogs.windows.com/windowsdeveloper/2025/03/27/announcing-babylon-js-8-0/)