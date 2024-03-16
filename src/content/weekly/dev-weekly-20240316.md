---
title: dev-weekly 2024-03-16
date: "2024-03-16T10:00:00.000Z"
description: "dev-weekly 2024-03-16"
tags: ["javascript", "node", "css", "ai", "github"]
---
# CSS

### **[a global design system](https://bradfrost.com/blog/post/a-global-design-system)**

- 각 조직은 디자인 시스템을 만들어서 개인의 부담을 덜었지만, 개인의 중복 작업이 조직의 중복 작업으로 전환. (조직마다 디자인 시스템 구축)
- top 100 웹사이트 중 완전히 유효한 html 을 제공하는 사이트는 없음
- 타사 라이브러리는 특정 조직의 목표와 미학을 반영.
- 유효한 HTML을 사용하고, 웹 접근성을 준수하고, 국제화를 제공하고… 글로벌 디자인 시스템 제작을 촉진하는 글

# Node

### **[voici.js: A Node.js library for pretty printing your data on the terminal](https://voici.larswaechter.dev/)**

- 터미널에서 데이터 집합을 예쁘게 프린팅하는 TS 패키지

### **[The faster Lambda runtime - NodeJS or LLRT? We benchmarked](https://learnaws.io/blog/node-vs-llrt)**

- AWS LLRT는 러스트로 작성된 경량의 로우 레이턴시 런타임
- Quickjs를 사용하고, buffer, stream, fetch, fs/promise 완전 지원. WinterCG 준수가 목적.
- QuickJS, Hermes, V8(JITless), V8(JIT) 벤치마크 비교.

# Javascript

### **[Announcing Speedometer 3.0: A Shared Browser Benchmark for Web Application Responsiveness](https://browserbench.org/announcements/speedometer3/)**

- 메이저 브라우저 엔진(Blink/V8, Gecko/SpiderMonkey, and WebKit/JavaScriptCore)의 지원을 받아 협업 한 것은 이번이 처음.
- 페인팅 및 비동기 작업과 같이 유저 액션에 반응하여 브라우저가 수행하는 더 많은 작업을 측정하도록 개선, 개발자 도구 개선.
- 실제 웹을 최대한 반영하여 브라우저 벤치마크가 올라가면 사용자에게 혜택이 돌아가도록 하는것이 주요 목표.

### **[WinterJS 1.0](https://wasmer.io/posts/winterjs-v1)**

- 스파이더 몽키 엔진과 Tokio를 사용하는 WinterCG호한 JS 런타임
- Cloudfalre Workers API, Nextjs, Hono, Astro, Remix, Svelte, Gastby, Nuxt 등 호환. RSC 지원.

# ETC

### **[Announcing Visual Copilot 1.0: General Availability, Bring Your Own Components, And More](https://www.builder.io/blog/visual-copilot)**

- AI가 피그마를 보고 코드로 만들어주는 툴. 다른 도구와 다른 점은 기존 코드베이스를 참조해 코드 일관성 보장.
- 컴포넌트 맵핑. 대부분의 프로젝트는 새로 만드는 것이 아닌 유지보수. 이 기능은 기존의 컴포넌트를 사용하도록 제너레이트.

### **[GitHub Actions; All Actions will run on Node20 instead of Node16 by default](https://github.blog/changelog/2024-03-07-github-actions-all-actions-will-run-on-node20-instead-of-node16-by-default/)**

- 5월13일부터 Node16을 사용하는 워크플로는 Node20으로 변경
- `FORCE_JAVASCRIPT_ACTIONS_TO_NODE20=true` 를 통해 지금 먼저 Node20 사용 가능

### **[Interaction to Next Paint is officially a Core Web Vital](https://web.dev/blog/inp-cwv-launch)**

- Core Web Vital 에서 FID제거 INP추가

### Release

- [Storybook 8](https://storybook.js.org/blog/storybook-8/)
- [cmdk v1.0.0](https://github.com/pacocoursey/cmdk/releases/tag/v1.0.0)
- [date-fns v3.5.0](https://github.com/date-fns/date-fns/releases/tag/v3.5.0)
- [rspack v0.5.7](https://github.com/web-infra-dev/rspack/releases/tag/v0.5.7)