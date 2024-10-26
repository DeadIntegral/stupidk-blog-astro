---
title: dev-weekly 2024-10-26
date: "2024-10-26T13:25:00.000Z"
description: "dev-weekly 2024-10-26"
tags: ["javascript", "ai", "node"]
---

# Node

### [Why I’m skeptical of rewriting JavaScript tools in ”faster” languages](https://nolanlawson.com/2024/10/20/why-im-skeptical-of-rewriting-javascript-tools-in-faster-languages/)

- 성능. - JS에서의 개선 가능성이 남아있음. 다시 작성했기 때문에 (더 많이 알고 더 많은 주의를 기울여 만들었기 때문에) 빠름
- 기여, 디버깅 가능성 - JS 일 경우 node_modules를 추적하여 버그 수정 가능.

# Javascript

### [Svelte 5 is alive](https://svelte.dev/blog/svelte-5-is-alive)

- svelte4와 거의 완벽하게 호환. 더 빠름.
- 웹 컴포넌트에 발맞추려 한 것이지만 실수 `$:` 신택스는 풋건. 5에서는 불일치와 풋건을 제거하고 runes 이라고 부르는 선언 매커니즘 구현
    - `let count = $state(0);`

### [How Microsoft Edge Is Replacing React With Web Components](https://thenewstack.io/how-microsoft-edge-is-replacing-react-with-web-components/)

- 엣지 브라우저가 리액트를 사용했던 이유는 크롬과 UI를 차별화하기 위해.
- Web UI 2.0 프로젝트는 리액트를 웹 컴포넌트로 변경하는 것.
- 저사양 기기에서의 성능 이슈, React는 모두가 의존하는 거대한 번들이 되어버림.

### [Generative AI Scripting](https://microsoft.github.io/genaiscript/)

- LLM 프롬프트를 JS코드로 작성
    
    ```jsx
    // context: define a "FILE" variable
    const file = def("FILE", env.files)
    // task: appends text to the prompt (file is the variable name)
    $`Summarize ${file} in one sentence. Save output to ${file}.summary`
    ```
    

### [Next.js 15](https://nextjs.org/blog/next-15)

- 비동기 요청 API (브레이크 체인지) - 모든 컴포넌트가 요청 데이터에 의존하는 것은 아님. 요청이 도착하기 전에 준비.
- Route Handlers, Client Router Cache의 캐싱 기본값을 캐시되지 않음으로 변경
- React 19 지원, React 18과 PageRouter간의 하위 호환성 유지
- React Compiler 실험적 지원
- 개발 중 Static Route Indicator를 통해 경로가 동적인지 정적인지 힌트
- 외부 패키지 번들링 최적화 - 콜드 스타트 성능 향상
- ESLint 9 지원

# ETC

### [Smarter than 'Ctrl+F': Linking Directly to Web Page Content](https://alfy.blog/2024/10/19/linking-directly-to-web-page-content.html)

- Text Fragment란 앵커를 추가하지 않고 웹 페이지 내의 특정 텍스트에 대한 링크를 허용하는 방법.
- encodeURICompontnt로 인코딩된 문자열을 넣거나 startText, endText를 사용 가능.
- &를 사용하여 여러 텍스트도 강조 가능

### [New Architecture is here](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here)

- RN의 주요 시스템 재작성 - e.g. 컴포넌트가 렌더링 되는 방식, JS 추상화가 네이티브 추상화와 통신하는 방식, 태스크가 여러 스레드에서 예약 되는 방식 등
- 브릿지 제거 - 네이티브 인터페이스 직접 접근 가능한 네이티브 모듈, 네이티브 컴포넌트 지원
- 이벤트 루프 - 웹의 동작과 더 유사하게 작동
- 리액트18 지원 - Transition, Automatic Batching(컨커런트 렌더러), Suspense 지원

### Release

- [cookie v1.0.0](https://github.com/jshttp/cookie/releases/tag/v1.0.0) - nodejs 내장 쿠키
- [ml.js v8.0.0](https://github.com/mljs/ml/releases/tag/v8.0.0)