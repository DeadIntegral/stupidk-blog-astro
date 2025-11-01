---
title: dev-weekly 2025-11-01
date: "2025-11-01T20:25:00.000Z"
description: "dev-weekly 2025-11-01"
tags: ["javascript", "nodejs", "css"]
---

# CSS

### [Inlining Critical CSS: Does It Make Your Website Faster?](https://www.debugbear.com/blog/critical-css)

- HTML에 직접 넣으면 복잡성 증가, HTML 파일 크기증가, 재사용 불가 등 단점도 존재.
    - FYI. 기존 CSS는 렌더블로킹을 발생시킬테니 레이지 로드 시켜야함.
- critical CSS는 penthouse 와 같은 도구를 사용해 생성 가능. 이 도구는 크롬에서 미리 정의된 뷰포트 크기로 페이지를 열고 뷰포트마다 렌더링에 필요한 CSS코드를 식별

# Nodejs

### [What I learned porting Mastro from Deno to Node.js](https://mastrojs.github.io/blog/2025-10-27-what-learned-porting-from-deno-to-node-js/)

- Nodejs가 TS를 네이티브로 지원하면서 포팅하는데 얼마나 많은 작업이 필요할지 궁금해져 작업 시작.
- deno 네임스페이스 제거, Request, Response 폴리필, http import 변경, JSR과 NPM, NPX

# Javascript

### [Directives and the Platform Boundary](https://tanstack.com/blog/directives-and-the-platform-boundary)

- JS에는 `use strict` 라는 하나의 지시어만 존재. 모든 환경에서 동일하게 동작하고 언어, 엔진, 개발자간의 계약.
- 프레임워크들이 자체적으로 use client, use server, use cache, use workflow 같은 지시어를 만들어 혼란을 가중시키는 중.
- JSX, VDOM은 언어 기능으로 위장 안함. 명시적인 경계가 있었음. 지시어는 플랫폼처럼 보임.
- 단기적인 채택을 위해 경계를 흐리지 말고 프레임워크 동작과 플랫폼 의미론을 명확히 구분해야 함.

### [Octoverse: A new developer joins GitHub every second as AI leads TypeScript to #1](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)

- 레포, 커밋, PR, 지역별 신규 가입자, 주요 기여 레포 카테고리(e.g. AI)등 데이터를 분석한 리포
    - 2025년 한해동안 3600만명 깃헙에 가입. 25년 8월 최초로 파이썬과 JS를 제치고 TS가 깃헙에서 가장 많이 사용하는 언어가 됨.
    - Generative AI 는 개발의 표준이 됨. 깃헙 신규 가입자의 80%가 첫 주에 코파일럿 사용
    - 새로운 레포의 80%가 파이썬, JS/TS, Java, Cpp, C# 사용
    - 113만개 이상의 공개 프로젝트가 LLM SDK 사용 중
    - 3년전 깃헙은 AI가 개발자를 대체하지 않고 더 많은 사람을 끌어들일 거라고 예측했고 이제 데이터가 이를 증명

### [Why NaN !== NaN in JavaScript (and the IEEE 754 story behind it)](https://pzarycki.com/en/posts/js-nan/)

- NaN의 첫 번째 표준화는 1985년 IEEE754에서 등장. 무엇을 위한 것인지 이해하기 위해 어셈블리 코드 생성
- NaN은 JS 추상화 레벨이 아닌 하드웨어 추상화 레벨에서 구현 - `ucomisd`(Unordered Compare Scalar) Instruction
- 감지를 가능하게 하는 의도적인 디자인. NaN 이전에는 각 하드웨어 제조업체가 자체 방식으로 작업을 수행했고, 0/0과 같은 작업은 충돌 및 프로그램 종료였음.

### [Introducing ArkRegex](https://arktype.io/docs/blog/arkregex)

- 복잡한 정규표현식은 이해하기 어려울 수 있고, 타입 안정성도 없음.
- arkRegex는 `.test()`, `.exec()` 등의 유형을 갖는 Regex인스턴스를 생성하며, 정적으로 파싱

# ETC

### [The Sky Is Falling, The Web Is Dead](https://tedium.co/2025/10/25/web-dead-predictions-george-colony/)

- 매번 웹이 죽었다거나 죽어가고 있다고 하지만 앱이 나왔을때도 AI가 나온 지금도  웹은 늘 변화해왔음.

### [Typing SVG Generator](https://typingsvg.vercel.app/)

- 텍스트를 입력하면 타이핑 애니메이션 SVG파일로 만들어주는 도구.
- 텍스트, 폰트 사이즈, 애니메이션 속도, 배경 등 설정 가능.

### [VoidZero Raises $12.5M Series A](https://voidzero.dev/posts/announcing-series-a)

- 시드 펀딩이 연구 목적이라면, 시리즈 A는 가속을 위한 것.
- 새로운 팀원으로 napi-rs 개발자와 OSS프로젝트 핵심 기여자들이 정규직으로 합류

### Release

- [hexo v8.1.0](https://hexo.io/news/2025/10/26/hexo-8-1-0-released/)
- [electron v39.0.0](https://github.com/electron/electron/releases/tag/v39.0.0)
- [ember 6.8](https://blog.emberjs.com/ember-released-6-8/)
- [immer v10.2.0](https://github.com/immerjs/immer/releases/tag/v10.2.0)
- [dependency-cruiser v17.2.0](https://github.com/sverweij/dependency-cruiser/releases/tag/v17.2.0) -  uniqBy, uniqWith 함수의 성능을 O(n^2)에서 O(n)으로 향상
- [ink v6.4.0](https://github.com/vadimdemedes/ink/releases/tag/v6.4.0)

### Othres

- [HTTPS by default](https://security.googleblog.com/2025/10/https-by-default.html) - 2026년 10월 크롬 154부터 https 아닌 사이트 접근 시 사용자에게 경고