---
title: dev-weekly 2024-08-17
date: "2024-08-17T17:30:00.000Z"
description: "dev-weekly 2024-08-17"
tags: ["node", "npm", "javascript"]
---

# Node

### **[Common Causes of Memory Leaks in JavaScript](https://www.trevorlasn.com/blog/common-causes-of-memory-leaks-in-javascript)**

- nodejs의 메모리 설명 - RSS, Heap Total, Heap Used, External, Array Buffers
- 이벤트 리스너, 변수를 캡쳐하는 클로저, bind로 인한 이슈, 순환참조 등 메모리 릭이 발생할 수 있는 다양한 케이스 소개
- `node --prof-process isolate-0x140008000-42065-v8.log > processed-profile.txt` 프로파일링 저장

# Javascript

### **[proposal-safe-assignment-operator](https://github.com/arthurfiorette/proposal-safe-assignment-operator)**

- 에러가 나면 [error, null] , 성공하면 [null, result] 를 반환하는 연산자 제안.
- e.g. `const [error, data] ?= await promise`

### **[Google Angular Lead Sees Convergence in JavaScript Frameworks](https://thenewstack.io/google-angular-lead-sees-convergence-in-javascript-frameworks/)**

- 모던 프레임워크들이 외관은 다르지만 동일한 기술이 될 것이라고 말하는 앵귤러 리드
- 모든 프론트엔드 프레임워크의 책임 중 상당 부분은 모델을 뷰와 동기화 하는 것.

### **[Patterns for Memory Efficient DOM Manipulation with Modern Vanilla JavaScript](https://frontendmasters.com/blog/patterns-for-memory-efficient-dom-manipulation/)**

- DOM 직접 조작을 잘 하기 위한 가이드. 목표는 프레임워크를 버리는 것이 아니라 언제 프레임워크를 사용하고 언제 로우 레벨을 컨트롤 할지 결정을 내릴 수 있도록 하는 것.
- VSCode는 DOM을 직접 조작, MS Edge도 최근 React에서 전환 중.
- `innerText`보다는 `textContent`, `innerHTML`보다는 `insertAdjacentHTML`
- `createDocumentFragment`를 통해 래핑하여 메서드 실행 최소화하기
- 노드 제거 관리를 위해 `WeakMap`
- removeEventListener나 once 사용하기 혹은 이벤트 위임하기

# ETC

### **[The Great npm Garbage Patch](https://blog.phylum.io/the-great-npm-garbage-patch/)**

- npm에서 Tea 프로토콜과 관계된 패키지 급증
    - Tea프로토콜은 오픈 소스 기여에 대해 암호화폐로 보상하겠다는 분산형 이시녀티브
- 지난 6개월 동안의 신규 패키지 89만개 중 61~67만개가 Tea 관련 스팸 패키지
- 이로인한 문제점들 - ai오염, 오픈소스 패키지 레지스트리가 생태계의 모든 패키지 안정성 추론하는 능력을 방해

### **Release**

- [angular v18.2.0](https://github.com/angular/angular/releases/tag/18.2.0)
- [volta v2.0.0](https://github.com/volta-cli/volta/releases/tag/v2.0.0)
- [marked v14.0.0](https://github.com/markedjs/marked/releases/tag/v14.0.0)