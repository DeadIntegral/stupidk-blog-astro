---
title: dev-weekly 2023-12-23
date: "2023-12-23T17:10:00.000Z"
description: "dev-weekly 2023-12-23"
tags: ["javascript", "CSS", "browser", "v8"]
---

# CSS

### **[Vertical centering in CSS](https://twitter.com/yisibl/status/1734511505356525687)**

- 크롬 카나리와 웹킷 나이틀리에서 display:block 에서도 `align-content: center` 지원

### **[<SNOW-FALL> WEB COMPONENT](https://www.zachleat.com/web/snow-fall/)**

- 종속성없고 HTML, CSS로만 구현한 웹 컴포넌트

# Javascript

### **[date-fns Blog **v3 is out!**](https://blog.date-fns.org/v3-is-out/)**

- TS 지원. 빌드 크기 감소.
- Node.js에 대한 ESM 지원.
- IE 디프리케이트
- default expoerts를 제거하고 명시적으로 변경.
    - nextjs에서 깨짐

### **[Announcing SvelteKit 2](https://svelte.dev/blog/sveltekit-2)**

- Vite5 적용.
- 2024년 Svelte5 릴리즈 준비를 위해서 스벨트킷2로 업그레이드 하는게 좋음.

# ETC

### **[Firefox 121.0 Release](https://www.mozilla.org/en-US/firefox/121.0/releasenotes/)**

- `has()` 셀렉터, `text-wrap: balance` , iframe에서 loading=lazy 지원

### **[Baseline 2023](https://web.dev/blog/baseline2023?hl=en)**

- baseline이 caniuse에 적용 (일부 페이지 우선 적용)
- 사용할 수 있게 된 연도도 같이 표기

### **[Figma and Adobe are abandoning our proposed merger](https://www.figma.com/blog/figma-adobe-abandon-proposed-merger/)**

- 피그마와 어도비는 보류중인 인수 종료하기로 결정.
- 15개월동안 인수 제안에 대한 규제 당국의 승인받을 수 있는 방안을 찾지못함.
- 독립회사로 계속 활동하며 사용자를 위한 파트너십 체결

### **[Chrome enables desktop mode by default on premium tablets](https://developer.chrome.com/blog/desktop-mode?hl=en)**

- 프리미엄 태블릿에서 크롬은 기본적으로 데크스톱 모드 활성화

### **[Open Source Software](https://osssoftware.org/)**

- 인기있는 오픈 소스 소프트웨어 모음.
- 카테고리 필터 제공

### **[Free AI - Text prompt to SVG](https://svg.io/)**

- 사용자 입력을 AI가 svg이미지로 만들어주는 도구.

### **[V8 is Faster and Safer than Ever!](https://v8.dev/blog/holiday-season-2023)**

- 2023년 한해동안 V8의 주요 변경 사항
    - 미드 티어 최적화 컴파일러 Maglev
    - 새로운 아키텍쳐를 위한 탑 티어 최적화 컴파일러 Tuboshaft
    - 더 빠른 HTML파서, 더 빠른 DOM 할당
    - JS 새로운 표준들 적용
    - WASM 업데이트, WASM GC 등

### **[v0 by Vercel](https://v0.dev/)**

- v0 대기자 명단을 삭제하고, 모두에게 공개