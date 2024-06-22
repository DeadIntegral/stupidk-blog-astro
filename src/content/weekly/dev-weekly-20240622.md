---
title: dev-weekly 2024-06-22
date: "2024-06-22T18:15:00.000Z"
description: "dev-weekly 2024-06-22"
tags: ["css", "node", "javascript"]
---

# CSS

### **[Inline conditionals in CSS?](https://lea.verou.me/blog/2024/css-conditionals/)**

- CSSWG에서 inline if 추가하기로 합의.
- 스타일 쿼리를 대체하는것이 아닌 보완하는 것
- 브라우저에서 지원하기 까지는 낙관적으로 봐도 2년

# Node

### **[What happens when a major npm library goes commercial?](https://adventures.nodeland.dev/archive/what-happens-when-a-major-npm-library-goes/)**

- ua-parser-js 의 라이선스가 AGPLv3로 전환.
- 이전버전은 계속 사용 가능

# Javascript

### **[State of JS 2023 Result](https://2023.stateofjs.com/en-US)**

- 모바일, 데스크톱 도구 사용량 순위 - 일렉트론, RN, Native App, Cordova, Ionic

### **[How JavaScript Is Finally Improving the Module Experience](https://thenewstack.io/how-javascript-is-finally-improving-the-module-experience/)**

- ESM이 나왔지만 CommonJS로 번들러를 작성하는게 더 쉬움
- 격차를 해소하고 ESM이 더 잘 작동하도록 하기 위한 “module harmony” 제안

### **[htmx 2.0.0 has been released!](https://htmx.org/posts/2024-06-17-htmx-2-0-0-is-released/)**

- htmx 2.0 릴리스. IE 지원종료.
- npm에는 cdn 의존성 때문에 25년1월1일까지 latest가 1.x으로 표시.

### **[How To Use Google Sheets as a Database With React via Next.js](https://thenewstack.io/how-to-use-google-sheets-as-a-database-with-react-and-ssr/)**

- 구글 시트를 데이터베이스로 사용하여 사용자 설문조사 서비스 만들기
- Google Cloud 셋팅에 대해 스크린샷을 첨부하여 상세한 과정 설명

# ETC

### **[NLUX: The Powerful Conversational AI JavaScript Library](https://docs.nlkit.com/nlux)**

- chatGPT와 같은 언어 모델을 웹앱이나 웹사이트에 통합하려는 경우, 인터페이스 구축하는데 필요한 요소 제공
- LLM, LangChain, HuggingFace, Vercel AI 등을 지원

### **[2-Page Login Pattern, And How To Fix It](https://www.smashingmagazine.com/2024/06/2-page-login-pattern-how-fix-it/)**

- 사람들은 어떤 이메일로 가입했는지, 마지막으로 어떤 서비스로 로그인했는지 잊어버리는 경우가 많음
- 이메일을 먼저 물어보고 올바른 페이지로 리디렉션 하는것이 2-page login의 기본 아이디어
- SSO가 아닌 사용자에게는 좋은 UX가 아님. 대안으로 SSO 인풋을 추가하고 패스워드를 옵션으로 넣을 수 있음.

### **[pic-small: Compress JPEG, PNG, WEBP, AVIF, SVG and GIF images intelligently](https://github.com/joye61/pic-smaller)**

- 서버를 사용하지 않고 로컬에서 작동하는 이미지 압축 도구

### **Release**

- [Electron v31.0.0](https://www.electronjs.org/blog/electron-31-0)
- [Electron Store v10.0.0](https://github.com/sindresorhus/electron-store/releases/tag/v10.0.0)
- [fastify v4.28.0](https://github.com/fastify/fastify/releases/tag/v4.28.0)
- [ESLint v9.5.0](https://eslint.org/blog/2024/06/eslint-v9.5.0-released/)
- [relay v17.0.0](https://github.com/facebook/relay/releases/tag/v17.0.0)