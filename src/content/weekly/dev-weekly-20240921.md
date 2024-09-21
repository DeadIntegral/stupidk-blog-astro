---
title: dev-weekly 2024-09-21
date: "2024-09-21T13:45:00.000Z"
description: "dev-weekly 2024-09-21"
tags: ["css", "node", "javascript", "clipboard"]
---

# CSS

### [Selecting Previous Siblings](https://frontendmasters.com/blog/selecting-previous-siblings)

- hover 된 엘리먼트의 이전 요소 선택하기
- 이전 `:has(+ &) {}` ,`:has(+ .card:hover) {}`
- 이전의 이전 `:has(+ * + &) { }`

# Node

### [Fastify v5 is Now Officially Released!](https://openjsf.org/blog/fastifys-growth-and-success)

- fastify 5 릴리스. v4는 25년 6월30일에 리타이어.
- 마이그레이션 가이드 - [https://github.com/fastify/fastify/blob/main/docs/Guides/Migration-Guide-V5.md](https://github.com/fastify/fastify/blob/main/docs/Guides/Migration-Guide-V5.md)

# Javascript

### [Math4Devs](https://math4devs.com/)

- 수학 기호들을 JS로 구현

### [React 19 Cheat Sheet](https://www.epicreact.dev/react-19-cheatsheet)

- Kent C Dodds의 리액트 19 치트 시트.

# ETC

### [WebKit Features in Safari 18.0](https://webkit.org/blog/15865/webkit-features-in-safari-18-0/)

- macOS Sequoia에서 아이폰 미러링 기능 제공
- view transition, style query, transition-behavior, content-visibility 지원
- URL.parse() 실패했을 때 익셉션 대신 null 지원
- passkey, 애플 페이 지원
- JPEG2000 포맷, AppCache 지원 종료

### [The First HTML LSP That Reports Syntax Errors](https://kristoff.it/blog/first-html-lsp/)

- html 유효성체크하는 VSCode 확장, cli 구현

### [Introducing `@bramus/caniuse-cli`, a CLI tool for “Can I Use …”](https://www.bram.us/2024/09/14/introducing-bramus-caniuse-cli-a-cli-tool-for-can-i-use/)

- caniuse cli 패키지 개발. 콘솔에 브라우저 컴팻 출력.

### [Free Public APIs](https://www.freepublicapis.com/)

- 무료 공개 API 모음. 필터, 검색, API health 제공

### Release

- [date-fns v4.0](https://blog.date-fns.org/v40-with-time-zone-support/)
- [astro 5 beta](https://astro.build/blog/astro-5-beta/)