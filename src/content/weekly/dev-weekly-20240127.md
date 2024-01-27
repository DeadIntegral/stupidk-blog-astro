---
title: dev-weekly 2024-01-27
date: "2024-01-27T12:00:00.000Z"
description: "dev-weekly 2024-01-27"
tags: ["javascript", "node"]
---

# Node

### **[Jint v3.0.0](https://github.com/sebastienros/jint/releases/tag/v3.0.0)**

- .NET 런타임 위에서 실행하는 JS 엔진. 7년만의 메이저 릴리즈.
- Generator, Tail call 제외하고 ECMA 2023까지의 모든 피쳐 구현
- jint v2보다 최소2배이상 성능 개선

### **[Announcing Mutative 1.0 - A New Era in Efficient Immutable Updates](https://mutative.js.org/blog/releases/1.0/)**

- 효율적인 불변 업데이트를 위한 라이브러리.
- 객체를 스트레드 신택스로 복사하며 업데이트 하는 것 보다 2~6배 성능
- Immer의 모든 테스트 케이스 통과

### **[TypeSpec](https://typespec.io/)**

- 데이터 모델을 정의하면 다양한 포맷으로 만들어주는 도구
- OpenAPI 3.0, JSON Schema 2020-12, Protobuf, JSON RPC 지원

# Javascript

### **[Astro 4.2](https://astro.build/blog/astro-420/)**

- Speculation Rules API 를 사용한 페이지 사전 렌더링 (실험)
- remark플러그인을 통해 마크다운에서 이미지 최적화 방법 사용자 지정 가능

### **[Next.js 14.1](https://nextjs.org/blog/next-14-1)**

- 향상된 셀프 호스팅
- 터보팩 개선 - 테스트추가, 성능향상
- DX개선
    - 오류메시지 개선: 문제가 되는 소스 코드 표시
    - window.history 사용 가능. pushState, replaceState가 app router에 통합
    - 데이터 캐시 로깅 - cache hit, skip 표시

# ETC

### **[Design Systems Database](https://designsystems.surf/)**

- 다양한 방식을 제공하는 디자인 시스템 탐색기
- 디렉토리(접근성, 색상, 타이포) 기준으로 제공하는 디자인 시스템 탐색 기능
- 컴포넌트 중심으로 해당 컴포넌트를 제공하는 디자인 시스템 탐색 기능

### **Release**

- [nodejs v21.6.1](https://nodejs.org/en/blog/release/v21.6.1) - WebStream 사용하는 undici 버그 수정
- [zustand v4.5.0](https://github.com/pmndrs/zustand/releases/tag/v4.5.0)