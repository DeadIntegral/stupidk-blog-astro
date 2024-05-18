---
title: dev-weekly 2024-05-18
date: "2024-05-18T15:00:00.000Z"
description: "dev-weekly 2024-05-18"
tags: ["javascript", "node", "css", "chrome"]
---
# CSS

### **[The Modern Guide For Making CSS Shapes](https://www.smashingmagazine.com/2024/05/modern-guide-making-css-shapes/)**

- CSS로 다양한 모양 만들기. svg와 css는 선택의 문제.
- 모양별로 어떻게 만들어야 하는지, 어떻게 만들 수 있는지 예제와 함께 설명
- 폴리곤, 별, 아크, 말풍선, 하트, 꽃 등

# Node

### **[Simple Implemention to Understand worker_threads in NodeJS](https://coderoasis.com/worker-threads-nodejs/)**

- `import { parentPort, isMainThread, Worker } from 'node:worker_threads';` 를 사용하여 nodejs 멀티 스레드로 작동시키기 예제

# JavaScript

### **[React Compiler](https://react.dev/learn/react-compiler)**

- 리액트 컴파일러에는 리액트 19 베타 필요.
- JS 의미와 React rule을 이해하여 자동 최적화
- useMemo, useCallback, React.memo의 최적화를 자동으로 수행
- 호환성 확인 도구, 린트 플러그인, 바벨 플러그인, Vite 플러그인, 웹팩, 에스포 등 다양한 도구에서 사용하는법 설명
- Nextjs, Remix의 경우 아직 바벨을 사용해야함

### **[Merging Remix and React Router](https://remix.run/blog/merging-remix-and-react-router)**

- 리믹스 다음 버전(v3)은 React Router v7 로 제공될 것 (리액트 라우터에 리믹스의 모든 장점을 추가할 것)
- 리믹스에서 React Router v7로의 변환은 import뿐

### **[Announcing the Web Platform Dashboard](https://web.dev/blog/web-platform-dashboard?hl=ko)**

- [https://webstatus.dev/](https://webstatus.dev/) 대시보드 제공
- caniuse, mdn을 대체하기 위한 것 아님. 특정 연도에 포함된 기능 조회 가능

### **[The Screen Wake Lock API is now supported in all browsers](https://web.dev/blog/screen-wake-lock-supported-in-all-browsers?hl=ko)**

- Screen Wake Lock API 모든 메이저 브라우저에 공식적으로 포함
- 화면을 켜진 상태로 유지하기, 웹 기반 프레젠테이션이나 슬라이드쇼에서 화면 어두워지는 것 방지 가능

# ETC

### **[New in Chrome 125](https://developer.chrome.com/blog/new-in-chrome-125?hl=ko)**

- 앵커 포지셔닝 도입
    - [https://developer.chrome.com/blog/anchor-positioning-api?hl=ko](https://developer.chrome.com/blog/anchor-positioning-api?hl=ko)
- SAA(Storage Access API)가 Cookie 이외 저장소로 확산

### **[What's new in DevTools, Chrome 125](https://developer.chrome.com/blog/new-in-devtools-125?hl=ko)**

- 콘솔에서 error cause를 지정하면 각 오류 스택의 casue를 접두사와 함께 출력
- 퍼포먼스 패널에 selector stats 추가 (edge와 같은 사용성)
- Recorder 이제 공식 기능

### **[10 updates from Google I/O 2024: Unlocking the power of AI for every web developer](https://developer.chrome.com/blog/web-at-io24?hl=ko)**

- Chrome 데스크톱에 Gemini Nano 통합
- 온디바이스 AI를 지원하는 WASM, WebGPU
- 크롬 개발자 도구 디버깅 프로세스 개선 (콘솔 에러에 대해 버튼 클릭을 통한 ai 응답)

### **Release**

- [Execa v9.0](https://medium.com/@ehmicky/execa-9-release-d0d5daaa097f)
- [bun v1.1.8](https://bun.sh/blog/bun-v1.1.8)
- [ink v5.0.0](https://github.com/vadimdemedes/ink/releases/tag/v5.0.0)
- [zx v8.1.0](https://github.com/google/zx/releases/tag/8.1.0)
- [fastify v4.27.0](https://github.com/fastify/fastify/releases/tag/v4.27.0)