---
title: dev-weekly 2024-10-12
date: "2024-10-12T17:29:00.000Z"
description: "dev-weekly 2024-10-12"
tags: ["javascript", "CSS", "js13kgames"]
---

# CSS

### [CSS nesting improves with CSSNestedDeclarations](https://web.dev/blog/css-nesting-cssnesteddeclarations)

- CSS 파서가 CSSOM을 만들 때 호이스트 되는 문제
- green을 기대하지만 배경색이 호이스트 되고 이후에  `@media screen` 이 선언
    
    ```css
    .foo {
        width: fit-content;
        @media screen {
            background-color: red;
        }
        background-color: green;
    }
    ```
    
- nested-declarations-rule 를 도입하여 해결. CSS 파서가 직접 중첩된 연속 선언을 CSSNestedDeclarations 인스턴스에 자동으로 래핑하도록 변경. 즉 위 코드에서 CSSNestedDeclarations 인스턴스는 CSSStyleRule의 cssRules 프로퍼티로 종료.

# Javascript

### [JS13kgames Winners announced!](https://js13kgames.com/2024/blog/winners-announced)

- js13k games 13번째 에디션
- 전체수상 외에도 모바일, WebXR 등 카테고리별 수상

### [Ridiculously simple and lightweight placeholders](https://placeholderjs.com/)

- [https://placeholderjs.com/500x500](https://placeholderjs.com/500x500) 와 같이 사용하면 해당 크기의 이미지를 제공하는 서비스
- npm 패키지로 사용 가능

### [MySQL 9.0 JavaScript Stored Programs](https://dev.mysql.com/doc/refman/9.0/en/stored-routines-js.html)

- JS 루틴 생성 지원. (MLE Component필요)
- JS로 작성한 루틴은 시스팀, 사용자 변수와 함께 사용 가능

# ETC

### [Firefox 131 Supercharging CSS variables debugging](https://fxdx.dev/firefox-devtools-newsletter-131/)

- CSS 변수에 커서를 올렸을 때 참조중인 변수가 나오는 이슈
- computed value를 출력하도록 수정

### [Increase Library Adoption with Interactive Coding Tutorials.](https://tutorialkit.dev/)

- 인터랙티브한 코딩 튜토리얼을 만들게 도와주는 도구.

### Release

- [Announcing TypeScript 5.7 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-7-beta/)