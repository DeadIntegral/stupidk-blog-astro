---
title: dev-weekly 2023-11-04
date: "2023-11-04T11:20:00.000Z"
description: "dev-weekly 2023-11-04"
tags: ["javascript", "CSS", "node", "browser"]
---

# CSS

### **[Making a nice neon button](https://zellwk.com/blog/neon-button)**

- text-shadow 대신 drop-shadow 필터를 사용하면 더 부드럽고 블러 효과도 좋음.
- `filter: drop-shadow(0 0 1px currentcolor);` 와 같이 사용도 가능

# Node

### **[Announcing WinterJS](https://wasmer.io/posts/announcing-winterjs-service-workers)**

- Rust로 작성한 JS Workers 서버. Spider Monkey 런타임 사용
- WinterCG(Web-interoperable Runtimes Community Group) 스펙 준수

### **[Goodbye, Node.js Buffer](https://sindresorhus.com/blog/goodbye-nodejs-buffer)**

- Buffer는 Nodejs에서 바이너리 데이터 초석이었지만, 지금은 Uint8Array가 존재. Buffer는 Uint8Array의 인스턴스지만 다른 환경(브라우저)에서 작동하지 않음
- 신드레는 본인의 모든 패키지를 Buffer 에서 Uint8Array로 옮길 계획.

# Javascript

### **[<BROWSER-WINDOW> WEB COMPONENT](https://www.zachleat.com/web/browser-window/)**

- 사파리와 같은 브라우저 창 UI 웹 컴포넌트
- [https://zachleat.github.io/browser-window/demo.html](https://zachleat.github.io/browser-window/demo.html)

### **[Answering Common Questions About Interpreting Page Speed Reports](https://www.smashingmagazine.com/2023/10/answering-questions-interpreting-page-speed-reports/)**

- Lighthouse와 Core Web Vital을 측정하는 방법과 PageSpeed Insight의 차이
- PSI에서 말하는 실제 사용자 경험 데이터는 CRUS(크롬 사용자 환경 보고서)에서 수집된 실제 데이터
    - 또다른 유형의 실제 사용자 데이터 RUM
- Lighthouse LCP가 실제 사용자 데이터보다 낮은 이유, CLS가 실제 사용자 데이터보다 나은 이유

### **[Remix Vite Support](https://remix.run/blog/remix-heart-vite)**

- 단지 속도 때문에 비트를 선택한것이 아니라, 비트가 프레임워크 구축을 위해 설계되었기 때문에 선택.
    - 비트를 사용하면 리믹스는 컴파일러가 아니라 비트 플러그인

### **[Announcing Docusaurus 3.0](https://docusaurus.io/blog/releases/3.0)**

- nodejs18, react18, mdx3, TS5 등 디펜던시 브레이킹 체인지.
- 마크다운 글로벌 구성 방법 도입(docusaurus.config.js 에서 셋팅)

# ETC

### **[VSCode 2023 09, 10 (1.83, 1.84)](https://code.visualstudio.com/updates/v1_84)**

- 접근성 향상
    - 커맨드 팔레트에 유사한 명령어를 입력해도 검색해주는 기능
    - pin 기능 추가.
- 코파일럿 챗 - 보류중인 변경사항을 기반으로 커밋 메시지 작성해주는 기능 추가
- VSCode Speech 익스텐션
    - [https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-speech](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-speech)
    - 코파일럿 챗에 통합되어 채팅 입력 대신 보이스 인풋.
    - 로컬로 계산해서 인터넷 연결 필요 없음.
- Windwos 32비트 지원 종료

### **[You're Gonna Need A Bigger Browser](https://berjon.com/bigger-browser/)**

- 브라우저를 검색과 떨어져서 독립적인 제품으로 볼 수 있는가?
- 브라우저의 탭 이라는 개념의 문제점. 정말 사용자에게 유용한가
- 브라우저가 나쁜 것이 아니라, 충분하지 않은 것.

### **[The AV1 video codec gains broader hardware support](https://fullystacked.net/posts/av1/)**

- 애플 M3, iPhone15, 안드로이드14 등 대다수의 하드웨어가 AV1 지원
- MS Edge를 제외한 모든 브라우저가 AV1 지원.

### Release

- [rollup v4.2.0](https://github.com/rollup/rollup/releases/tag/v4.2.0)
- [stencil v4.7.0](https://github.com/ionic-team/stencil/releases/tag/v4.7.0)
- [ember.js v5.4.0](https://github.com/emberjs/ember.js/releases/tag/v5.4.0)
- [axios v1.6.0](https://github.com/axios/axios/releases/tag/v1.6.0)