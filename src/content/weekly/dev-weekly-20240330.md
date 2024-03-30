---
title: dev-weekly 2024-03-30
date: "2024-03-30T22:55:00.000Z"
description: "dev-weekly 2024-03-30"
tags: ["javascript", "css", "node"]
---
# CSS

### **[Introducing four new international features in CSS](https://developer.chrome.com/blog/css-i18n-features?hl=en)**

- `word-break: auto-phrase` - 띄어쓰기가 없는 일본어 줄바꿈 대응
- `text-spacing-trim` - CJK(중국어, 일본어, 한국어)에서의 마침표 여백 제거
- 크롬 118부터 최소 폰트 사이즈 제한 해제

# Node

### **[Diving into the Node.js Website Redesign](https://nodejs.org/en/blog/announcements/diving-into-the-nodejs-website-redesign)**

- nodejs 웹사이트 역사
- 2011년 nodejs.org 를 시작으로 2019년 nodejs.dev, 현재의 nextra에 이르기까지.

### **[Node.js TSC Confirms: No Intention to Remove npm from Distribution](https://socket.dev/blog/node-js-tsc-confirms-no-intention-to-remove-npm-from-distribution)**

- nodejs TSC는 Corepack 활성화 논의의 일환으로 몇 가지 주요 결정을 내림.
- nodejs 배포판에서 npm 유지. npm 제거는 프로젝트의 목표가 아님.

### **[Node.js v20 LTS is now generally available](https://vercel.com/changelog/node-js-v20-lts-is-now-generally-available)**

- vercel에서 이제 nodejs 20 사용 가능(실험 제거)
- 새 프로젝트의 기본 버전은 노드 20. 더 정확히는 20.11.1이고 메이저 버전만 보장.

# Javascript

### **[V8의 Math.hypot 최적화 하기 - 반복의 숨은 비용](https://blog.seokho.dev/ko/development/2024/03/18/V8-optimize-MathHypot.html)**

- v8의 Math.hypot이 Math.pow나 ** 를 사용한 것 보다 수십배 느린 이슈
- 다양한 가설을 세우고, 원인 규명까지의 과정

# ETC

### **[starlinkmap](https://www.starlinkmap.org/)**

- 전 세계의 스타링크를 지구와 함께 3d 시각화.
- 스타링크를 통해 전송되는 데이터, 수 등에 대한 실시간 지표 제공
- 제작자는 SpaceX, Starlink와는 관련없고 스타링크를 시각화하기 위해 제작.

### **[Two open source projects with great documentation](https://johnjago.com/great-docs/)**

- esbuild, redis의 문서화 사례
- esbuild
    - readme에서는 오로지 최종 사용자에게만 포커스
    - docs파일 내에 architecture.md, development.md 를 두고 그래픽을 사용하며 설명.
    - 디자인 원칙 서술. 명시적으로 설명되지 않은 영역은 원칙의 결과
    - 체인지 로그. 요약, 확장된 설명, 변경 전후의 출력을 보여주는 예제 코드 게시.
- redis
    - readme는 최종 사용자와 기여자 모두에 포커스
    - redis 내부 문서 존재. 소스 코드의 레이아웃
    - 여러 단락에 걸쳐 컨텍스트를 제공하는 코드 주석들.

### **[A native version of Chrome arrives for Arm-based Windows PCs](https://www.theverge.com/2024/3/26/24112273/chrome-native-windows-on-arm-qualcomm-snapdragon)**

- ARM 기반의 윈도우 데스크탑 크롬 출시.

### Release

- [babylon v7.0.0](https://github.com/BabylonJS/Babylon.js/releases/tag/7.0.0)