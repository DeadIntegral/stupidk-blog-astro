---
title: dev-weekly 2023-11-18
date: "2023-11-18T15:45:00.000Z"
description: "dev-weekly 2023-11-18"
tags: ["javascript", "CSS", "node", "v8"]
---

# CSS

### **[CSS nesting relaxed syntax update](https://developer.chrome.com/blog/css-nesting-relaxed-syntax-update)**

- 크롬의 CSS nesting의 초기 스펙에서는 태그 이름은 중첩할 수 없었음.
- `& h1` 과 같이 &나 is 와 같은 구문을 사용해야 했었는데 Chrome 120 에서는 제한사항 제거.

# Node

### **[The largest Node.js CLI Apps best practices list](https://github.com/lirantal/nodejs-cli-apps-best-practices)**

- Nodejs CLI에서 이상적인 사용자 경험을 최적화하는 것을 목표로 하는 모범 사례 목록
- 지침과 함께 지침을 지키지 않았을때의 부작용, 참고사항, 관련 패키지를 함께 설명하는 레포

### **Release**

- [nve v17.0.0](https://github.com/ehmicky/nve/releases/tag/17.0.0) 최소버전 18.18.0
- [marked](https://github.com/markedjs/marked/releases/tag/v10.0.0) v10.0.0 nodejs 16 드랍
- [reveal.js v5.0.0](https://github.com/hakimel/reveal.js/releases/tag/5.0.0) scroll-view 제공

# Javascript

### **[HTML Web Components](https://blog.jim-nielsen.com/2023/html-web-components/)**

- 웹 컴포넌트와 리액트 컴포넌트의 방향성 차이

### **[Moving back to React](https://daily.dev/blog/moving-back-to-react)**

- Preact에서 React로 마이그레이션한 후기
- Nextjs의 Preact플러그인으로 사용.
- 기술이 발전하며 데브모드에서 문제들 발생 - 핫 리로딩, 오류 처리, 느린 환경과 렌더링
    - 문제 해결을 위해 Preact플러그인을 비활성화하는 등 몇가지 시도를 했지만 근본적인 해결은 되지 못했고 React로 대체 가능한지 PoC
- 마이그레이션하기로 결정하고 플랜 설계
    - 코어 프로젝트 변경(의존성), 코드베이스 테스트(Jest 버전 교체), 호환성

### **[Prettier 3.1: New experimental ternaries formatting and Angular control flow syntax!](https://prettier.io/blog/2023/11/13/3.1.0)**

- Prettier 3.1 릴리즈. Angular17의 컨트롤 플로우 신택스 지원
- 삼항 연산자에 들여쓰기 다시 추가, 마크다운 url의 `<`, `>` 인코딩 등

### **[67 Weird Debugging Tricks Your Browser Doesn't Want You to Know](https://alan.norbauer.com/articles/browser-debugging-tricks)**

- 조건부 Break Point, 함수 호출 디버깅, URL 변경 시 일시 중지, `copy()` 를 이용한 스냅샷 덤프 등 다양한 크롬 개발자도구 팁 모음

### **[My Journey to 3x Faster Builds: Trimming Barrel File Imports](https://blog.vramana.com/posts/barrel_files_slow_build/)**

- 저자는 vite와 mui를 사용. 4k LOC의 작은 코드베이스인데 빌드 시간이 오래 걸린다고 느꼈고, 100k LOC 코드베이스를 빌드해보니 같은 시간 사용.
- 원인은 MUI 아이콘을 최상위에서 로드했고 모든 모듈이 로딩되어 오래 걸린 것(배럴 파일 때문에). 경로를 직접 입력해주고 빌드 성능 3배 향상.

# ETC

### **[Exploring V8's strings: implementation and optimizations](https://iliazeus.github.io/articles/js-string-optimizations-en/)**

- V8의 문자열 구현과 최적화에 대해서.
- `--allow-natives-syntax` 를 사용하여 V8이 어떤 함수를 사용하는지 노출
- ECMA 표준은 문자열을 16비트 시퀀스로 정의하지만, 많은 경우 낭비고 상당수의 문자열은 ASCII 로 제한. (V8에는 1바이트 문자열과 2바이트 문자열 모두 존재)
- `Internalized` - 일부 문자열은 엔진에 의해 내부화 (타입).
- `External` - JS 힙 외부에 할당된 문자열. GC가 돌아도 메모리 이동을 하지 않기 위해
- 문자열을 나누거(slice)나 연결(cons)할 때 대부분의 경우는 데이터를 복사하지 않고 문자열에 대한 참조, 오프셋, 길이를 저장하는 분할된 문자열을 생성
- 이상하고 예상치 못한 성능을 디버깅할 때 유용할 것

### **[URL explained - The Fundamentals](https://ittavern.com/url-explained-the-fundamentals/)**

- URL 구조에 대한 설명과 URI, URL, URN, URC의 차이