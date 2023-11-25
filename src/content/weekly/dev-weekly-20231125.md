---
title: dev-weekly 2023-11-25
date: "2023-11-25T14:50:00.000Z"
description: "dev-weekly 2023-11-25"
tags: ["javascript", "CSS", "node"]
---
# CSS

### **[The New CSS Math: rem() and mod()](https://danielcwilson.com/posts/mathematicss-rem-mod)**

- CSS의 새로운 함수 rem() 과 mod()
    
    ```css
    rem(9, -4) /* 9 - 8 = 1 */
    mod(9, -4) /* 12 - 9 = 3 */
    ```
    

### **[An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)**

- 인터랙티브한 데모들로 설명해주는 josh의 Grid 가이드
- grid-template-columns 를 %로 주고 gap을 주면 영역을 초과하는 등 상세한 작동 설명
- 그리드에 사용하는 숫자는 인덱스가 아니라 line number. 또한 음수도 지원.
- display grid와 `place-content: center` 라는 2개의 프로퍼티만으로 자식을 가운데 정렬 시키는 트릭

# Node

### **[Announcing TypeScript 5.3](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/)**

- Import Attributes 런타임에 import 포맷에 대한 정보를 제공.
- 변수 범위를 좁히기 위해 === true와 같은 표현식 사용을 유지하고 이해
- Inlay Hints(인레이 힌트)에서 타입 정의로 이동 지원
- JSDoc 파싱 스킵을 통합 성능 향상
- typescript.js 와 tsserverlibrary.js 통합을 통한 번들 감소

### **[URL PARSER PERFORMANCE](https://daniel.haxx.se/blog/2023/11/21/url-parser-performance/)**

- curl 제작자가 curl과 ADA 비교
- RFC 3986, 3987 에서 벗어나서 WHATWG 표준을 사용.
- 속도보다 다음의 것들이 더 중요
    - 깨지지 않는 API, ABI
    - 읽기 쉽고 유지보수하기 쉬운 코드
    - 합리적이고 일관된 코드
    - 사용자가 문제 파악 하는데 도움이 되는 에러 코드
- libcurl 파서와 ADA 파서를 로컬 머신에서 비교해봤는데 1.25~1.8배 차이 (ADA의 주장은 700%)
- libcurl URL의 파서의 성능을 높일 수 있는 작업은 많이 있지만, 지금은 리소스를 더 잘 사용할 수 있는 영역이 있다고 생각.

### **[release-it v17.0.0](https://github.com/release-it/release-it/releases/tag/17.0.0)**

- 버저닝 및 패키지 퍼블리싱 자동화 도구 release-it 17 릴리즈

# Javascript

### **[Introducing Netlify Image CDN Beta](https://www.netlify.com/blog/introducing-netlify-image-cdn-beta/)**

- 프레임워크 독립적으로 사용자 경험을 창출하기 위해 Image CDN 구축.
- 사용자 브라우저에서 지원하는 최상의 포맷을 자동으로 제공.
- 베타 기간동안은 무료. 정식 출시 후 요금을 부과할 계획.

### **[AutoDraw](https://autodraw.com/)**

- QuickDraw에 사용한것과 동일한 기술을 사용하여 사용자가 그리는 그림을 추측, AI가 같은 의미의 그림들 추천

### **[Vite 5.0 is out!](https://vitejs.dev/blog/announcing-vite5)****[](https://vitejs.dev/blog/announcing-vite5#vite-5-0-is-out)******

- vite 생태계는 더 커지는 중. 연말 이전에 rolldown 공개할 것.
- 롤업4지원, CJS API 필요하지 않음. Nodejs 18 이상 필요.

### **[RTK 2.0](https://github.com/reduxjs/redux-toolkit/releases/tag/v2.0.0-rc.0)**

- 2023년 12월~ 24년 1월 즈음 Redux ToolKit 2.0 출시. redux 5.0, react-redux 9.0 필요.
- https://github.com/reduxjs/redux/releases/tag/v5.0.0-rc.0
- https://github.com/reduxjs/react-redux/releases/tag/v9.0.0-rc.0
- [https://deploy-preview-3089--redux-starter-kit-docs.netlify.app/migrations/migrating-1.x-to-2.x](https://deploy-preview-3089--redux-starter-kit-docs.netlify.app/migrations/migrating-1.x-to-2.x)

# ETC

### **[A11y - Focus Order](https://www.figma.com/community/plugin/731310036968334777/a11y-focus-order)**

- 피그마 플러그인. 디자인 위에 접근성 코멘트 추가 가능.

### Release

- [transformers.js v2.9.0](https://github.com/xenova/transformers.js/releases/tag/2.9.0)