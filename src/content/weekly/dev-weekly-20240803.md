---
title: dev-weekly 2024-08-03
date: "2024-08-03T14:08:00.000Z"
description: "dev-weekly 2024-08-03"
tags: ["css", "javascript"]
---

# CSS

### **[CSS font-size-adjust is now in Baseline](https://web.dev/blog/font-size-adjust?hl=en)**

- font-size-adjust가 이제 baseline에 포함

### **[Letter Spacing is Broken and There’s Nothing We Can Do About It… Maybe](https://css-tricks.com/letter-spacing-is-broken-and-theres-nothing-we-can-do-about-it-maybe/)**

- 엣지, 크롬 브라우저는 오른쪽 끝에 여백이 생기는 이슈. RTL에서는 시작 부분에 공백이 생김. (firefox는 문자의 방향에 따라 끝 부분에 공백
- CSSWG가 조치를 취하기로 결의

# Javascript

### **[Garbage collection and closures](https://jakearchibald.com/2024/garbage-collection-and-closures/)**

- IIFE 메모리 릭 예제
    
    ```javascript
    function demo() {
      const bigArrayBuffer = new ArrayBuffer(100_000_000);
      const id = setTimeout(() => {
        console.log(bigArrayBuffer.byteLength);
      }, 1000);
    
      return () => clearTimeout(id);
    }
    
    globalThis.cancelDemo = demo();
    ```
    

# ETC

### **[Third-party cookies have got to go](https://www.w3.org/blog/2024/third-party-cookies-have-got-to-go/)**

- 구글의 Third party cookie 중단 취소에 대한 w3c의 입장

### **[How Google handles JavaScript throughout the indexing process](https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process)**

- 구글 인덱싱 프로세스에 대한 오해를 검증하기 위해 merj와 함께 실험
- 이에 대한 결과, 의미, 권장
    - e.g. 콘텐츠 타이밍 - noindex와 같은 엘리먼트가 페이지에 언제 추가되느냐에 따라 클라이언트 사이드 변경사항이 반영되지 않을 수 있음.

### Release

- [Announcing TypeScript 5.6 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-6-beta/)
- [Bun v1.1.21](https://bun.sh/blog/bun-v1.1.21)
- [ESLint v9.8.0](https://eslint.org/blog/2024/07/eslint-v9.8.0-released/)
- [ky v1.5.0](https://github.com/sindresorhus/ky/releases/tag/v1.5.0)