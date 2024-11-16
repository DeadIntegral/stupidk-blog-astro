---
title: dev-weekly 2024-11-16
date: "2024-11-16T16:07:00.000Z"
description: "dev-weekly 2024-11-16"
tags: ["javascript", "node", "css"]
---

# CSS

### [Official CSS Logo](https://github.com/CSS-Next/logo.css)

- 10년 넘게 방패 모양은 CSS 로고로 사용되었지만 3 이라는 숫자가 여전히 남아있었음.
- CSS 전체를 표현할 수 있는 새로운 일반화된 로고

# Node

### [Introducing the vlt Package Manager & Serverless Registry](https://blog.vlt.sh/blog/introducing-vlt-and-vsr)

- NPM의 창시자(Isaac Schlueter)를 비롯한 팀이 만든 새로운 JS 패키지 매니저, 서버리스 레지스트리
- 디펜던시 그래프를 이해하는데 도움이 되는 query selector syntax, export format, GUI 환경 제공

### [Node.js Introduces Never-Ending Support (NES) in Collaboration with HeroDevs](https://openjsf.org/blog/the-openjs-foundation-is-excited-to-share-that-nod)

- Ecosystem Sustaning Program의 일부로 Nodejs의 레거시 버전에 대해 장기지원하는 NES
- HeroDev에서 레거시 Nodejs 버전에 대한 보안 업데이트를 지속적으로 제공하는 파트너십 체결

# Javascript

### [How a BBC navigation bar component broke depending on which external monitor it was on](https://www.joshtumath.uk/posts/2024-11-08-how-a-bbc-navigation-bar-component-broke-depending-on-which-external-monitor-it-was-on/)

- 특수한 환경에서만 BBC 네비게이션 바가 클릭 되지 않는 버그
- 노트북과 연결된 모니터에서만 발생하고, 창을 노트북으로 옮기면 발생하지 않음. 크롬과 파이어폭스에서만 발생하고 사파리는 발생하지 않음. 클릭 시 전달되는 이벤트의 screenX, Y 값이 음수가 되기 때문.

### [Component party](https://component-party.dev/)

- React, Svelte, Vue, Angular, Lit, Solidjs, Qwik 등 다양한 라이브러리의 신택스를 비교해주는 사이트
- state, Styling, Event, Lifecyle, Form등 다양한 영역에서 동일한 일을 하는 컴포넌트 비교

# ETC

### [Pagefind:  fully static search library](https://pagefind.app/)

- 어떠한 인프라도 호스팅 하지 않는 정적 검색 라이브러리
- Hugo, Eleventy, Jekyll, Next, Astro, SvelteKit 등 웹사이트 프레임워크 위에서 실행. 빌드된 정적 파일이 있는 폴더만 필요할 뿐 config 필요하지 않음.

### [Web AI Summit 2024 Recap: Client-Side AI for Developers](https://developers.googleblog.com/en/web-ai-summit-2024-recap/)

- 클라이언트에서 AI를 사용하는 개발자를 위한 서밋

### Release

- [Typescript 5.7RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-7-rc/)
- [Stroybook 8.4](https://storybook.js.org/blog/storybook-8-4/)
- [ember v6.0.0](https://github.com/emberjs/ember.js/releases/tag/v6.0.0-ember-source)
- [marked v15.0.0](https://github.com/markedjs/marked/releases/tag/v15.0.0)