---
title: dev-weekly 2023-10-28
date: "2023-10-28T09:50:00.000Z"
description: "dev-weekly 2023-10-28"
tags: ["javascript", "CSS", "node", "eslint"]
---

# CSS

### **[Select element: now with horizontal rules](https://developer.chrome.com/en/blog/hr-in-select/)**

- 크롬 119, 사파리17 부터는 select 내에 `<hr>` 사용가능. 보다 나은 사용자 경험을 위한 시각적 구분 기호

# Node

### **[serverless-offline](https://github.com/dherault/serverless-offline)**

- AWS 람다와 API 게이트웨이를 로컬에서 에뮬레이션 하는 도구
- nodejs, python, ruby, go, java(kotlin, groovy, scala) 지원

# Javascript

### **[Release: Yarn 4.0](https://yarnpkg.com/blog/release/4.0)**

- node.js 18이상 필요
- yarn init으로 생성한 새 프로젝트는 디폴트로 zero-install 활성화하지 않고, yarnPath 대신 Corepack 사용
- 유저 인터페이스 향상 - 추가한 패키지와 용량을 표시
- 메타데이터 캐시를 통한 성능 향상
- 웹 사이트 개편

### **[Next.js 14](https://nextjs.org/blog/next-14)**

- 터보팩 - 로컬 서버 시작 53.3% 향상, 코드 리프레시 94.7% 향상
- Server Action
    - React Canary 채널 기반으로 구축
    - 캐싱, 리밸리데이션, 리디렉션 통합
- Partial Prerendering
    - `<Suspense />` 바운더리를 기반으로 정적 셸 생성.
- 메타데이터 개선
- 넥스트를 배우기 위한 무료 강의 출시 [https://nextjs.org/learn](https://nextjs.org/learn)

### **[Transformers](https://github.com/xenova/transformers.js)**

- 브라우저에서 실행 가능한 머신 러닝. Huggingface의 Transformer 파이썬 라이브러리와 기능적으로 동일
- 자연어 처리, 컴퓨터 비전, 오디오, 멀티모달 등 제공

### **[Web Components Will Outlive Your JavaScript Framework](https://jakelazaroff.com/words/web-components-will-outlive-your-javascript-framework/)**

- 콘텐츠가 중심이고 콘텐츠는 마크다운으로 작성. 마크다운에서도 HTML이 지원.
- 웹 컴포넌트로 만들고 마크다운에서 불러오면 오랜기간 지속가능할 것.

### **[react-magic-motion](https://www.react-magic-motion.com/)**

- 리액트 컴포넌트를 `import { MagicMotion } from "react-magic-motion";` 로 감싸기만 하면 모션 적용
- framer motion을 기반으로 구축

# ETC

### **[Internet Artifacts](https://neal.fun/internet-artifacts/)**

- 인터넷 박물관. 대부분의 요소가 상호작용 가능. 1997년 ~ 2007년 까지.
    - 1977년 네트워크에 연결된 111개의 컴퓨터 터미널을 보여주는 ARPANET 지도
    - 최초의 스팸 메일, 해커 사전, 유즈넷 뉴스그룹, 최초의 MP3
    - 모리스 웜 - 1988년 11월 2일 모리스가 인터넷 규모 측정을 위해 배포. 오류로 인해 24시간만에 인터넷에 연결된 컴퓨터 10% 비활성화. 사과문을 보냈으나 비활성화되어 피해자들은 받지 못함. 컴퓨터 사기 및 남용 첫번째 유죄 판결.
    - 세계 최초의 웹사이트 [info.cern.ch](http://info.cern.ch/) 팀 버너스 리는 이 사이트를 표시하기 위해 world wide web 이라는 브라우저 제작

### **[Deprecation of formatting rules](https://eslint.org/blog/2023/10/deprecating-formatting-rules/)**

- eslint에서 formatting rule 공식 제거.
- 규칙이 많아지면서 유지보수도 어려워지고 규칙간의 충돌, 사람들의 기대, 일관성 문제 등
- prettier, dprint 추천.

### **Release**

- [p5.js](https://github.com/processing/p5.js/releases/tag/v1.8.0)
- [Bun v1.0.7](https://bun.sh/blog/bun-v1.0.7)
- [clipboardy v4.0.0](https://github.com/sindresorhus/clipboardy/releases/tag/v4.0.0)
- [MDX 3](https://mdxjs.com/blog/v3/)
- [jotai v2.5.0](https://github.com/pmndrs/jotai/releases/tag/v2.5.0)
- [protobuf-es v1.4.0](https://github.com/bufbuild/protobuf-es/releases/tag/v1.4.0)