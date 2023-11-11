---
title: dev-weekly 2023-11-04
date: "2023-11-04T11:20:00.000Z"
description: "dev-weekly 2023-11-04"
tags: ["javascript", "CSS", "node", "eslint"]
---

# CSS

### **[Workarounds for buggy gradients](https://keithjgrant.com/posts/2023/11/problematic-color-gradients-and-workarounds)**

- 그라디언트에서 from, to 외에 다른 색상이 중간에 들어가는 버그
- OKLCH에서의 보정 방법, HSL에서의 보정방법 등 제공

# Node

### **[awesome-nodejs-security](https://github.com/lirantal/awesome-nodejs-security)**

- nodejs 보안 리소스 모음.
- 라이브러리, 도구, 교육자료, 발생했던 보안 아티클 등.

### **[Deno 1.38: HTML doc generator and HMR](https://deno.com/blog/v1.38)**

- `deno doc —html` 프로젝트에 대한 정적 문서 사이트 생성
- HMR 제공, nodejs 호환성 개선
- JSX Transform - 서버 사이드 렌더링에 최적화된 JSX Transform
- websocket 개선, API 변경, 표준 라이브러리 업데이트

### **[capture-website 4.0](https://github.com/sindresorhus/capture-website)**

- 노드, 커맨드라인에서 사이트 캡쳐하는 퍼펫티어 래퍼
- 신드레가 이전에 말한것처럼 buffer를 Uint8Array 로 변환

# Javacript

### **[Introducing React components for the Maps JavaScript API](https://cloud.google.com/blog/products/maps-platform/introducing-react-components-for-the-maps-javascript-api/?hl=en)**

- Google Map 리액트 컴포넌트로 제공.

### **[Introducing Angular v17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)**

- 리브랜드 및 새로운 문서 [angular.dev](http://angular.dev) 는 웹 컨테이너로 개발. angular 18 이전까지 베타
- 블록 템플릿 구문 출시 - `ngSwitch` , bulid in `for`
- 지연된 로딩 - 지연 로드와 관련된 것을 문법으로 제공.
    
    ```jsx
    @defer (on viewport) {
      <comment-list/>
    } @loading {
      Loading…
    } @error {
      Loading failed :(
    } @placeholder {
      <img src="comments-placeholder.png">
    }
    ```
    
- 하이드레이션 preview에서 정식 액티브.
- 새 프로젝트 디폴트를 vite, esbuild 기반으로 변경
- 실험적인 view transition 지원

### **[Headless Component: a pattern for composing React UIs](https://martinfowler.com/articles/headless-component.html)**

- Headless Component란 특정 UI를 규정하지 않고, 논리, 상태 관리만을 담당하는 컴포넌트
- dropdown list를 헤드리스 컴포넌트로 구현하는 과정
    - 키보드 네비게이션, 테스팅, Context API 결합, 새로운 UI 요구사항에 적용

### **[moveable](https://github.com/daybrush/moveable)**

- 영역을 선택하고 움지직이고, 크기를 조절하고, 회전하고, 그룹핑 하게 해주는 패키지

### **[cmdk-sv](https://www.cmdk-sv.com/)**

- 명령 팔레트 해드리스 컴포넌트 cmdk의 스벨트 버전.

# ETC

### **[Compression Streams are now supported on all browsers](https://web.dev/blog/compressionstreams)**

- Compression Streams API 는 gzip, deflate 포맷을 사용하며 데이터 스트림을 압축, 압축 해제
- JS 로 압축하는 대신 빌트인을 사용하면 번들 감소. 이제 모든 브라우저에서 이 API 지원

### **[Introducing Learn Performance](https://web.dev/blog/introducing-learn-performance?hl=en)**

- web.dev에 Learn 시리즈 Learn Performance 릴리즈.
- [https://web.dev/learn/performance](https://web.dev/learn/performance)

### **[What's coming in ESLint v9.0.0](https://eslint.org/blog/2023/11/whats-coming-in-eslint-9.0.0/)**

- eslint 9.0.0 은 릴리즈를 알파와 베타로 나눠서 하기로 결정.
- 9.0.0 알파
    - flat config가 기본값이고, eslintrc를 계속 사용하려면 `ESLINT_USE_FLAT_CONFIG` false
    - Node.js < v18.18.0, v19 지원 중단
    - formatter들 제거
- 9.0.0 베타
    - `/*eslint no-undef: warn */` 와 같은 주석이 다른 옵션도 비활성화 하던 버그 수정

### **Release**

- [TS 5.3 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3-rc/)
- [cypress 13.5](https://docs.cypress.io/guides/references/changelog#13-5-0)
- [rollup v4.3.0](https://github.com/rollup/rollup/releases/tag/v4.3.0)