---
title: dev-weekly 2024-07-06
date: "2024-07-06T18:15:00.000Z"
description: "dev-weekly 2024-07-06"
tags: ["css", "javascript"]
---
# CSS

### **[Fine-tuning Text Inputs](https://garrettdimon.com/journal/posts/fine-tuning-text-inputs)**

- 최소한의 노력으로 보다 나은 폼 경험을 위한 기능 소개
- spellcheck, autofocus, autocomplete, autocorrect
- autocapitalize: 비활성화, 첫 글자만 대글자로 변경, 모든 문자 대문자, 단어의 첫 글자만 대문자의 4가지 옵션.

# Javascript

### **[Enhancing The New York Times Web Performance with React 18](https://open.nytimes.com/enhancing-the-new-york-times-web-performance-with-react-18-d6f91a7c5af8)**

- 뉴욕타임즈가 react 16 에서 react 18로 마이그레이션 한 후기

### **[How to Annul Promises in JavaScript](https://webdeveloper.beehiiv.com/p/cancel-promises-javascript)**

- Promise 취소하는 방법. 취소 API는 없기 때문에 결과를 삭제하거나 무시하기
- Promise.withResolvers(), AbortController 사용하는 예제

### **[Why Google Sheets ported its calculation worker from JavaScript to WasmGC](https://web.dev/case-studies/google-sheets-wasmgc?hl=en)**

- WasmGC는 가비지 콜렉팅 언어를 컴파일하는 데 필요한 요소를 추가하는 WASM 확장
- Sheet Wasm의 초기 버전은 JS보다 2배 정도 느렸지만 최적화 후 JS보다 2배 빨라짐

### **[Blazing Fast Websites with Speculation Rules](https://www.debugbear.com/blog/speculation-rules)**

- 브라우저는 기본적으로 필요에 의해 페이지들을 다운로드. Speculation rules은 백그라운드에서 어떤것을 적극적으로 다운로드할지 힌트를 주는 기능.
- preload는 현재 페이지에 필요한 리소스에, speculation은 탐색할 가능성이 높은 페이지에 사용.
- prerender, prefetch의 차이 및 사용 가이드
- 크롬 개발자 도구에서 speculation을 디버깅하는 방법

# ETC

### **[Introducing the MDN HTTP Observatory](https://developer.mozilla.org/en-US/blog/mdn-http-observatory-launch/)**

- 웹 사이트의 보안 모범 사례 준수 여부를 테스트하는 도구.
- HTTP Observatory는 좋은 도구지만 메이저 업데이트가 없었고 모질라는 보안 지식 혜택을 받을 새로운 사용자를 찾을 필요있다고 판단하여 MDN으로 이전.
- 레거시인 Mozilla Observatory는 24년9월 종료 예정.

### **Release**

- [backbonejs 1.6.0](https://backbonejs.org/#changelog)