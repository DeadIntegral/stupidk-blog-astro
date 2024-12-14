---
title: dev-weekly 2024-12-14
date: "2024-12-14T23:19:00.000Z"
description: "dev-weekly 2024-12-14"
tags: ["javascript", "node", "react", "css"]
---

# CSS

### [CSS Wrapped 2024](https://chrome.dev/css-wrapped-2024)

- 2024년 크롬에 추가된 CSS들 다시보기
- baseline과 함께 샘플 제공.

### [My issues with shorthand properties](https://www.havardbrynjulfsen.design/writing/thoughts/my-issues-with-shorthand-properties/)

- CSS 단축 속성에 대한 문제와 편리함.

# Node

### [Node.js Delivers First LTS with require(esm) Enabled, Enhances Security and Release Automation](https://socket.dev/blog/node-js-delivers-first-lts-with-require-esm-enabled)

- require(esm) 는 실험적 기능이지만 `--experimental-require-module` 없이 지원하는 첫 LTS v22.12.0

### [Node.js Corepack: Version Control for Package Managers](https://www.trevorlasn.com/blog/corepack-nodejs)

- 패키지 매니저를 위한 프록시. package.json에 명시하여 모든 사람이 같은 버전의 패키지 매니저를 사용하도록 보장.
- yarn, pnpm 지원.

### [Building an npm create package](https://www.alexchantastic.com/building-an-npm-create-package)

- npm create 를 사용할 수 있는 패키지 만들기
- npm create -h 를 통해 내용을 확인할 수 있고, 이는 `npm init .` 의 별칭
- package.json 구성 및 스크립트 예제 설명

# Javascript

### [React v19 Stable](https://react.dev/blog/2024/12/05/react-19)

- 19 카나리의 useFormState 를 useActionState 으로 이름 변경

### [How React Compiler Performs on Real Code](https://www.developerway.com/posts/how-react-compiler-performs-on-real-code)

- 리액트 컴파일러 효용 테스트
- 모든 것을 메모한다고 하지만 초기 로딩에는 큰 영향 없음
- 인터랙션 퍼포먼스 증가, 렌더링 성능 증가
- 모든 리렌더링을 감지하진 못함. 사람이 더 잘 할 수 있음.
- 적은 비용으로 충분히 좋게 만들 수 있는 도구.

# ETC

### [Easily Create Custom Date Formatsin Any Programming Language](https://codate.io/)

- 날짜 포맷에 대한 코드 스니펫 모음. JS, Python, Java, C#, Ruby, PHP, Swift, Kotlin, Go, Rust, Bash 지원.

### [VSCode **November 2024 (version 1.96)**](https://code.visualstudio.com/updates/v1_96)

- 코파일럿 디버그 - `copilot-debug` 를 통해 디버깅 환경 구축
- 코파일럿 커밋 메시지 생성에 커스텀 명령 가능
- `@workspace` 성능 개선. 리모트 인덱싱을 기반으로 로컬에서 변경된 것을 탐색
- 익스텐션의 용량 확인 가능
- 탐색기(file explorer) 내 검색 기능 개선
- 에디터 검색 기능 기록 유지
- TS 5.7 사용. 복사 붙여넣기 시 자동 import 추가하듯이 export 추가 기능 제공. (선택)

### Release

- [undici v7.1.0](https://github.com/nodejs/undici/releases/tag/v7.1.0) - stable http2 지원
- [nextjs v15.1](https://nextjs.org/blog/next-15-1) - react 19 에 대한 지원 pages router, app router에서 공식 제공