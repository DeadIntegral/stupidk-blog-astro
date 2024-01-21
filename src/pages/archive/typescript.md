---
title: Typescript Achive
date: "2023-11-20T00:00:00.000Z"
description: "Typescript Update History"
tags: ["javascript", "typescript"]
---

### **[2023.11.20 - Announcing TypeScript 5.3](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/)**

- Import Attributes 런타임에 import 포맷에 대한 정보를 제공.
- 변수 범위를 좁히기 위해 === true와 같은 표현식 사용을 유지하고 이해
- Inlay Hints(인레이 힌트)에서 타입 정의로 이동 지원
- JSDoc 파싱 스킵을 통합 성능 향상
- typescript.js 와 tsserverlibrary.js 통합을 통한 번들 감소

### **[2023.06.30 - Announcing TypeScript 5.2 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-2-beta/)**

- TS 5.2 베타.
- using과 explicit resource management. 생성할 때 소멸자도 같이 정의하여 리소스 관리를 용이하게 해주는 문법
- Decorator Metadata
- 익명 튜플 지원

### **[2023.06.16 - TypeScript 5.2's New Keyword: 'using'](https://www.totaltypescript.com/typescript-5-2-new-keyword-using/)**

- `Symbol.dispose` 소개
- 비동기 처리가 끝나면 자동으로 dispose시키게 해주는 using, dispose 패턴 예제 설명

### **[2023.05.18 - Announcing TypeScript 5.1 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1-rc/)**

- 함수 선언을 다른 파일로 이동(현재 프리뷰)
- JSX에서 태그의 시작 부분을 변경하면 끝 부분도 같이 변경
- JS, TS파일에서 `@param` 작성 시 스니펫 제공
- 최적화 작업들
- 브레이킹 체인지 - 최소지원버전 ES2020, Nodejs 14.17

### **[2023.04.18 - Announcing TypeScript 5.1 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1-beta/)**

- 정의되지 않은 함수에 대한 더 쉬운 암시적 변환
- `@param` JSDoc Tag에 대한 자동 완성
- JSX 지원 향상
- 최적화
- 브레이킹 체인지 - 최소사양 ES2020, Nodejs14.17

### **[2023.03.16 - Announcing TypeScript 5.0](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/)**

- TS 5.0 릴리즈
- RC, 베타와 차이점
    - export 전후에 데코레이터 배치
    - 새로운 번들러 모듈 레졸루션 옵션은 —module 이 esnext로 설정된 경우만 사용 가능
    - package.json에서 nodejs 최소 12.20 지정

### **[2023.03.01 - Announcing TypeScript 5.0 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/)**

- TS 5.0 RC.
- TC39내의 논의, 컨센서스를 반영하여 export, export default 전후에 배치 가능한 데코레이터

### **[2023.01.26 - Announcing TypeScript 5.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/)**

- TS 5.0 베타
- 새로운 데코레이터, const Type Parameters, union enum
- `export type *`, jsDoc에서 `@satisfies`, `@overload`  지원
- 4.9 대비해서 용량, 시작 시간, 빌드 타임 등 감소

### **[2022.11.15 - Announcing TypeScript 4.9](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9/)**

- TS 4.9 릴리즈. 다음 릴리즈는 5.0

### **[2022.09.23 - Announcing TypeScript 4.9 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/)**

- `satisfies` 오퍼레이터 추가
- in 오퍼레이터를 통한 프로퍼티 축소

### **[2022.08.25 - TypeScript 4.8 Released](https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/)**

- TS 4.8 릴리즈

### **[2022.06.21 - beta of TypeScript 4.8](https://devblogs.microsoft.com/typescript/announcing-typescript-4-8-beta/)**

- —build, —watch, —incremental 성능 향상
- 바인딩 패턴에서 추론 향상

### **[2022.05.24 - TypeScript 4.7 Released](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/)**

- TS 4.7 릴리즈
- package.json - type의 새로운 확장, 새 파일 확장자
- 모듈 감지 제어 - 기존 스크립트 코드와 새 모듈 코드
- Go to Source Definition - .d.ts 파일에 가려져 있더라도 원본 코드를 찾아가는 기능

### **[2022.05.11 - TypeScript 4.7 Release Candidate](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-rc/)**

- TS 4.7 RC
- package.json에서 exports, imports, 자체참조
- module detection, Instantiation Expressions ...

### **[2022.04.08 - TypeScript 4.7 is now available in beta.](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/)**

- package.json의 type 확장 - module
    - commonjs 대신 esmodule

### **[2022.02.28 - TypeScript 4.6 Released (And It Even Benefits Non-TS Users!)](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/)**

- 4.6 Release. 4.6RC 와의 차이

### **[2022.02.11 - TypeScript 4.6 **has been released**](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6-rc/)**

- TS 4.6 RC 릴리즈

### **[2022.01.21 - Announcing TypeScript 4.6 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6-beta/)**

- [TypeScript Trace Analyzer](https://www.npmjs.com/package/@typescript/analyze-trace)
- Breaking Changes
    - Object Rests Drop Unspreadable Members from Generic Objects

### **[2021.11.17 - Announcing TypeScript 4.5](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/)**

- assert
    
    ```tsx
    import obj from "./something.json" assert { type: "json" };
    
    // type is { readonly prop: "hello" }
    let b = { prop: "hello" } as const;
    ```

### **[2021.11.02 - Announcing TypeScript 4.5 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-rc/)**

- 프로젝트 로드 속도 향상
- JSX Attribute 자동완성

### **[2021.10.01 - Announcing TypeScript 4.5 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/)**

- Node에 대한 ES 모듈 지원

### **[2021.08.26 - TypeScript 4.4 Released](https://devblogs.microsoft.com/typescript/announcing-typescript-4-4/)**

- TS 4.4 릴리즈

### **[2021.05.26 - TypeScript 4.3 Released](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/)**

### **[2021.04.21 - Announcing TypeScript 4.3 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/)**

- 4.3 베타. 만우절날 어나운싱
- `from "./module.js" import { func };` 신택스
    - 모듈부터 써서 임포트 할 때 자동완성 되도록 하는 컨셉


### **[2021.01.23 TypeScript 4.2 Released](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/)**

### **[2021.01.12 Announcing TypeScript 4.2 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2-beta)**
## 
- typescript 4.2 beta 발표
- rest 문법을 어디서나 사용 가능
	```javascript
	let bar: [boolean, ...string[], boolean];
	```

### **[2020.11.25 TypeScript Performance Tips](https://github.com/microsoft/TypeScript/wiki/Performance)**
- TS Performance tip 이라고 하지만, ms서 만든 슈가를 쓰지 않으면 된다는 내용
	- 슈가를 만들어놓고 쓰지 말라해서 비판이 나옴


### **[2020.11.19 TypeScript 4.1 Released](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)**
- Template Literal Types
	- 타입 선언을 템플릿 리터럴처럼 사용할 수 있게 해줍니다.
	```javascript
	type Color = "red" | "blue";
	type Quantity = "one" | "two";
  
	type SeussFish = `${Quantity | Color} fish`;
	// same as
	//   type SeussFish = "one fish" | "two fish"
	//                  | "red fish" | "blue fish";
	```
- Key Remapping in Mapped Types
- Recursive Conditional Types
- Checked Indexed Accesses
- paths without baseUrl
- checkJs Implies allowJs
- React 17 JSX Factories
- Editor Support for the JSDoc @see Tag
- Conditional Spreads Create Optional Properties


### **[2020.08.20 - TypeScript 4.0 Released](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0)**
- variadic tuple types
- editor and editor integration improvements
- labeled tuple elements
- short circuiting assignment operators (e.g. a ||= b)


### **[2020.08.04 - Announcing the New TypeScript Website](https://devblogs.microsoft.com/typescript/announcing-the-new-typescript-website)**
- 오피셜 TS사이트 개선
- docs, handbook, playground 등 다양한 서비스
- playground에서는 dts 추출, npm 설치 등 다양한 기능 제공
- https://www.typescriptlang.org/


### **[2020.06.26 - Announcing TypeScript 4.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0-beta)**
- Variadic Tuple Types
- Labeled Tuple Elements
- Class Property Inference from Constructors
- Short-Circuiting Assignment Operators
- unknown on catch Clauses
- Custom JSX Factories
- Speed Improvements in build mode with --noEmitOnError
- --incremental with --noEmit
- Editor Improvements
	- /** @deprecated */ Support
	- Partial Editing Mode at Startup
	- Smarter Auto-Imports
- Breaking Changes

### **[2020.04.28 - Announcing TypeScript 3.9 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-9-rc)**

### **[2020.03.27 - Typescript 3.9 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-3-9-beta)**
- 3.9 는 성능과 안정성에 중점을 두었고, 컴파일 타임은 약 5~10%, 머티리얼UI 가 포함된 경우 약 40%까지 성능 개선

### **[2020.02.20 - TypeScript 3.8 Released](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8)**

- export * as ns Syntax
- Top-Level await
- "Fast and Loose" Incremental Checking : TS가 다른 파일에 영향을 줄 수 있는지 추적하고, 가능한 많은 정보를 메모리에 담아 재사용