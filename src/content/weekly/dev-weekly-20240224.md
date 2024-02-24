---
title: dev-weekly 2024-02-24
date: "2024-02-24T17:00:00.000Z"
description: "dev-weekly 2024-02-24"
tags: ["javascript", "css", "chrome", "ai"]
---
# CSS

### **[What is Utility-First CSS?](https://heydonworks.com/article/what-is-utility-first-css/)**

- 유틸리티 퍼스트 CSS를 이해하려면 CSS자체에 대한 이해가 필요하지만, CSS를 잘 알수록 유틸리티 CSS의 가치가 낮아짐.

### **[View transitions: Handling aspect ratio changes](jakearchibald.com/2024/view-transitions-handling-aspect-ratio-changes)**

- view transition의 다양한 이슈에 대한 솔루션
    - 애니메이션 중 콘텐츠가 여럿인 경우 - 종횡비 이슈
    - 의도적인 종횡비 변경 시 대응
    - 박스 내 텍스트가 변경되는 경우
    - 텍스트 변경 시 정렬처리 등

### **[Playing with Infinity in CSS](https://codersblock.com/blog/playing-with-infinity-in-css)**

- CSS Infinity를 다양한 요소에 넣었을때의 상황들
    - z-index에 넣어 항상 최상위 레이어
    - width, height에 넣었을 때
    - 애니메이션

# Javascript

### **[A practical guide to using shadow DOM](https://www.mayank.co/blog/declarative-shadow-dom-guide)**

- 일반 DOM 콘텐츠(light DOM)는 shadow DOM 내부에 배치 가능.
- 이전에는(명령형) Element를 shadow root에 연결하기 위해 클라이언트 사이드 JS가 필요했으나, 선언형 Shadow DOM을 사용하면 HTML에서 Shadow tree 표현 가능 (JS로드 이전에 shadow root 연결)
    - 선언형 Shadow DOM은 HTML 파서 기능. (e.g. innerHTML에서 사용 불가)
- Shadow DOM use case
- Shadow DOM의 스타일(:host)는 항상 외부 스타일보다 우선순위 낮음. 단, CSS Shadow part를 사용하여 외부 스타일을 선택적으로 적용 가능

### **[WXT Next-gen Web Extension Framework](https://wxt.dev/)**

- 크로스 브라우저 익스텐션 프레임워크. 크롬, 파이어폭스, 엣지, 사파리 타겟 가능

# ETC

### **[What's new in DevTools (Chrome 122)](https://developer.chrome.com/blog/new-in-devtools-122)**

- 네트워크 탭 status 필드에서 실패 이유 표시, 복사 메뉴 UI 변경
- 퍼포먼스 탭 드래그하면 그 영역만큼 걸린 시간 표시, 메인 트랙에 다음 이벤트를 연결하는 화살표 표시
- align-content 프로퍼티 블록 컨테이너에서 작동(지금까지는 flex, grid에서만 작동)
- 폴더블 디바이스 에뮬레이트

### **[Stable Diffusion 3](https://stability.ai/news/stable-diffusion-3)**

- 스테이블 디퓨전 3 early preview. 사전체험을 위한 [대기자 명단 제공](https://stability.ai/stablediffusion3).

### Release

- [Redwood v7.0.0](https://community.redwoodjs.com/t/redwood-v7-0-0-is-now-available/5777)
- [Bun v1.0.28](https://bun.sh/blog/bun-v1.0.28)
- [rullup v4.12.0](https://github.com/rollup/rollup/releases/tag/v4.12.0)