---
title: dev-weekly 2026-08-29
date: "2026-08-29T20:45:00+09:00"
description: "React 컴파일러 린트를 oxlint로 옮겨 babel을 걷어내기, TypeScript 창시자가 말하는 Go 포팅과 AI 시대의 IC, 프런트엔드에 떨어진 소행성, ZIP과 네이티브 glob을 품은 Node 26.8까지 이번 주 개발 소식."
tags: ["node", "typescript", "rust", "react", "compiler", "performance", "web-components", "ai"]
---

# Javascript

### [React Compiler Linting Just Got a Rust-Native Speedup in Oxlint](https://blog.master.dev/react-compiler-linting-just-got-a-rust-native-speedup-in-oxlint/)

- 린트 중 리액트 컴파일러를 oxlint로 변경하면 babel을 사용하지 않아서 성능 향상
- 리액트 컴파일러가 포기하는 것 까지 린트 에러로 지정 가능

### [TypeScript 창시자: 10배 더 빨라진 TypeScript, 그리고 AI가 소프트웨어 엔지니어를 대체하지 못하는 이유](https://www.youtube.com/watch?v=cywK3XYYJ2o)

- Turbo Pascal, Delphi, C#, TypeScript 창시자 인터뷰 유튜브 영상
- TS 컴파일러를 TS로 사용하면 만드는 사람이 사용자가 됨
- 성능, 확장성 때문에 go 선택. rewrite가 아니라 port 언어의 의미론, 에러 메시지, 엣지 케이스 유지. Rust는 GC가 없고, 순환 자료구조 허용 안함.
- 시작할 즈음엔 AI 성능이 좋지 못해 직접 코딩. 지금 다시 한다면 AI 에게 번역 프로그램 만들게 시킬 것. 그러면 확률을 그 프로그램에 가둘 수 있고, 실행할 때 마다 결정론적 결과가 나옴
- 매니저가 될 기회는 많았지만 의식적으로 IC로 남음. 인생은 한번뿐이니 최고의 작업을 하려면 자신을 가장 행복하게 하는 일을 해라.

### [form-saver: A web component that stores (and restores) values within the form it wraps](https://github.com/aarongustafson/form-saver)

- form 웹 컴포넌트로 폼 내의 값을 저장 및 복원.
- 사용자가 입력하는 폼을 localStorage에 저장하고 페이지 로드될 때 복원. 서브밋하면 값 제거.

### [Dither: Vector Dither Tool](https://dither.neato.fun/)

- 이미지를 넣으면 커스텀 디더링을 적용할 수 있는 브라우저 기반 도구.
- SVG, PNG로 익스포트 가능.

# AI

### [The asteroid currently hitting frontend web development](https://nolanlawson.com/2026/08/23/the-asteroid-currently-hitting-frontend-web-development/)

- DX가 AX로 바뀌면서 간결한 프레임워크로 가는게 아니라, AI 가 더 잘 알고 있는 React 같은 도구르 더욱 이동.
- 웹 표준 역시 개발자 경험 향상보다는 브라우저가 기존에 못하던 것을 할 수 있게 만드는데 집중할 것이라 예상.
- 즉 좋은 결과를 정의하고 판단하는 능력의 가치가 증가할 것.

# Nodejs

### [Node.js 26.8.0 (Current)](https://nodejs.org/en/blog/release/v26.8.0)

- 써드 파티 디펜던시 없이 ZIP archive 읽기, 쓰기 가능

### [fs: implement glob natively](https://github.com/nodejs/node/pull/65392)

- fs를 native c++로 다시 작성하여 성능 2배 향상. 기존 구현은 JS 정규표현식ㅇ로 컴파일되고 V8로 컴파일 되는데 전체 항목을 가져오고 일치하는 것 외에 폐기. 지금 구현은 glob 패턴을 AST로 직접 컴파일해서 이 단계 스킵.

# ETC

### Release

- [Solid 2.0 RC: The Big <Reveal>](https://www.solidjs.com/blog/solid-2-0-rc-the-big-reveal)
- [electron v44.0.0](https://github.com/electron/electron/releases/tag/v44.0.0)
- [Waku 1.0 RC](https://waku.gg/blog/waku-v1-rc)
- [react native 0.87](https://reactnative.dev/blog/2026/08/11/react-native-0.87)
- [axios v1.20.0](https://github.com/axios/axios/releases/tag/v1.20.0)
- [pnpm 12.0](https://pnpm.io/blog/releases/12.0) - Rust로 재작성