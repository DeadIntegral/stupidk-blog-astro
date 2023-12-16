---
title: dev-weekly 2023-12-16
date: "2023-12-16T16:21:00.000Z"
description: "dev-weekly 2023-12-16"
tags: ["javascript", "CSS", "node", "vscode", "browser"]
---
# 2023-12-16

# CSS

### **[CSS Wrapped: 2023!](https://developer.chrome.com/blog/css-wrapped-2023?hl=en)**

- 2023년동안의 CSS 변화 모음
- ko로 문서를 볼 경우 nest를 수습기간으로 번역.

### **[You don't need JavaScript for that](https://www.htmhell.dev/adventcalendar/2023/2/)**

- JS가 없어도 되는 항목은 HTML, CSS로 처리하자는 글
- input color, datalist, details, dialog등 모던 엘리먼트 소개

# Node

### **[Name Checker](https://namechecker.vercel.app/)**

- 패키지 이름을 검색하면 npm, github, gitlab, PyPI, Homebrew, apt, Rust, Maven 등 다양한 레지스트리에서 사용중인지 확인하는 도구

### **[Bun v1.0.18](https://bun.sh/blog/bun-v1.0.18)**

- node-gyp 가 설치되지 않은 경우 bunx-node-gyp를 심볼릭 링크.

### **[Deno 1.39: The Return of WebGPU](https://deno.com/blog/v1.39)**

- 2023년 초 성능문제로 제거했던 WebGPU 다시 릴리즈
- deno compile 기능 향상, nodejs 호환성 개선
- TS 5.3 지원

# Javascript

### **[AutoAnimate](https://auto-animate.formkit.com/)**

- 한 줄의 코드로 앱에 애니메이션을 추가하는 도구
- React, Vue, Preact, Solid, Svelte, Angular, NativeJS 지원

### **[Oxlint](https://oxc-project.github.io/blog/2023-12-12-announcing-oxlint.html)**

- Oxlint 정식버전 출시.
- 설정이 필요 없고, 오류나 사용하지 않는 코드를 잡아내는 린트.
- eslint를 대체하려는 것이 아니라 ESLint가 병목이 될 때 개선하는 용도 (oxlint를 먼저 실행 후 eslint실행)

### **[Javascript engines runtime list](https://gist.github.com/guest271314/bd292fc33e1b30dede0643a283fadc6a)**

- JS 런타임, 엔진에 대한 간략한 설명 모음

# ETC

### **[VSCode November 2023 (version 1.85)](https://code.visualstudio.com/updates/v1_85)**

- 파일 탐색기 붙여넣기 지원 (파일 복사 후 vscode 탐색기에 붙여넣기를 하면 파일 추가)
- 익스텐션 자동 업데이트 컨트롤
- v8 힙 스냅샷(.heapsnapshot 파일) 시각화 (브라우저 메모리 탭 캡처 등)
- TS 5.3 적용.
- 깃헙 코파일럿 개선 - 인라인 채팅 UI, 실험적 경량 모드 등
- 트리(탐색기)에서도 sticky scroll 제공
- 한국어 대체 문자 필터링

### **[WebKit Features in Safari 17.2](https://webkit.org/blog/14787/webkit-features-in-safari-17-2/)**

- Exclusive 아코디언 제공 (details의 name이 같은것들 중 하나가 열리면 다른 것들은 자동으로 닫힘)
- CSS Nesting 중 &를 입력하지 않아도 되는 신택스 구현.
- 프리로딩 `imagesrcset` 지원.
- 웹 앱에 쿠키 복사(Dock에 추가)를 하면 기존 쿠키에 유지되어 로그인 상태 등 유지

### **[What's new in DevTools (Chrome 120)](https://developer.chrome.com/blog/new-in-devtools-120?hl=en)**

- ignore list 향상 (node_modules 등)
- device inspect 중 커서와 터치 선택 가능
- 향상된 애니메이션 디버깅 - 특정 시점 보기
- web worker, worklet 이벤트 리스너도 브레이크 포인트 작동
- lighthouse 11.2 지원. 퍼포먼스 카테고리에 대한 정밀 검사 포함.

### **Release**

- [Million 3.0](https://million.dev/blog/million-3)
- [rollup v4.9.0](https://github.com/rollup/rollup/releases/tag/v4.9.0)
- [ember v5.5.0](https://github.com/emberjs/ember.js/releases/tag/v5.5.0)
- [relay v16.1.0](https://github.com/facebook/relay/releases/tag/v16.1.0)