---
title: dev-weekly 2024-03-23
date: "2024-03-23T20:00:00.000Z"
description: "dev-weekly 2024-03-23"
tags: ["javascript", "node", "css", "w3c"]
---
# CSS

### **[Implementing Vertical Form Controls](https://webkit.org/blog/15190/implementing-vertical-form-controls/)**

- `writing-mode: vertical-rl` 사파리 17.4 부터 form controller에서도 지원

### **[CSS Button Styles You Might Not Know](https://dbushell.com/2024/03/10/css-button-styles-you-might-not-know/)**

- `touch-action: manipulation;` 손가락 확대, 축소 같은것에 영향을 받지 않게 해주는 프로퍼티
- `::file-selector-button` input type file 의 UI 커스텀 제공

# Node

### **[require(esm) in Node.js](https://joyeecheung.github.io/blog/2024/03/18/require-esm-in-node-js/)**

- require는 동기, esm은 비동기로 인지하고 있었지만 esm은 조건부 비동기.
- 2019년 mjs에 대한 동기식 require(esm) 아이디어

# Javascript

### **[Using localStorage in Modern Applications: A Comprehensive Guide](https://rxdb.info/articles/localstorage.html)**

- localStorage에 대한 가이드 및 다른 스토리지와 비교
- 적절한 스토리지를 선택하기 위해 고려해야 할 사항

### **[CartoSVG: Elegant, simple interactive maps](https://cartosvg.com/)**

- 커스텀 가능한 svg 지도. e.g. 메르카토르 도법을 사용한 지도.
- html에 붙여넣을 수 있는 export 제공

# ETC

### **[Marking the Web’s 35th Birthday: An Open Letter](https://webfoundation.org/2024/03/marking-the-webs-35th-birthday-an-open-letter/)**

- 웹의 창시자 팀 버너스 리의 오픈 레터
- 3c는 collaboration, compassion, creativity 본래 목표는 인류에게 힘을 실어주는 도구가 되는 것
- 해결해야 할 두 가지 문제. 권력 집중, 타겟팅 광고

### **[Web Neural Network API](https://www.w3.org/TR/webnn/)**

- 뉴럴 네트워크 인터페이스 가속을 위한 로우 레벨 API
- 웹 뉴럴 네트워크 API는 플랫폼에 얽매이지 않고 OS, 기본 하드웨어 플랫폼의 머신 러닝 기능을 사용하는 웹 친화적인 하드웨어 독립적인 추상화 계층 정의

### **[Runtime compatibility](https://runtime-compat.unjs.io/)**

- JS runtime 들이 지원하는 API 테이블
- caniuse의 JS Runtime버전

### **Release**

- [Angular v17.3.0](https://dev.to/this-is-angular/whats-new-in-angular-173-1148)
- [preact v10.20.0](https://github.com/preactjs/preact/releases/tag/10.20.0)