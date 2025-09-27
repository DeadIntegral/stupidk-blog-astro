---
title: dev-weekly 2025-09-27
date: "2025-09-27T23:16:00.000Z"
description: "dev-weekly 2025-09-27"
tags: ["javascript", "css", "browser", "ai"]
---

# CSS

### [CSS offset and animation-composition for Rotating Menus](https://frontendmasters.com/blog/css-offset-and-animation-composition-for-rotating-menus/)

- offset을 통해 메뉴를 원형으로 배치. 실제로는 원 이지만, overflow: clip을 통해 절반만 렌더
- `animation-composition` 를 사용하여 같은 CSS 프로퍼티에 여러 애니메이션을 합성

# Javacript

### [ASCIIFlow](https://github.com/lewish/asciiflow)

- 아스키 다이어그램을 그리는 웹 기반 클라이언트 사이드 애플리케이션
- https://github.com/lewish/asciiflow

# ETC

### [Your Images Are (Probably) Oversized](https://reasonunderpressure.com/blog/posts/your-images-are-probably-oversized)

- img 엘리먼트에 `sizes` 어트리뷰트 사용하기. `srcset`은 뷰포트 크기에 따른 계산. 브라우저에게 이미지에 필요한 실제 크기를 알려주는 값이 `sizes`
- sizes는 미디어 쿼리 지원. loading=lazy 라면 auto 값도 사용 가능하지만 브라우저 제약 존재.
- 이미지가 브라우저에서 렌더링 될 때 CSS 픽셀 단위로 측정됨. 브라우저는 픽셀 밀도도 고려.
    - srcset에서 w라는 단위를 사용하는건 DPR때문. w대신 DPR을 직접 명시도 가능.

### [Go behind the browser with Chrome’s new AI features](https://blog.google/products/chrome/new-ai-features-for-chrome/)

- 영어를 사용하는 미국 Mac, Windows에서 크롬에 Gemini 출시
- 에이전트 브라우저 어시스턴트 준비. 미용실 예약, 주간 식료품 주문 등 처리 기대
- 모든 탭 이해, 이전에 방문한 페이지 검색
- 주소창에서 AI 질문하기, 현재 페이지 전체에 대한 질문하기
- Gemini Nano 를 통해 유해한 소프트웨어 감지

### [Chrome Dev Tools (MCP) for your AI agent](https://developer.chrome.com/blog/chrome-devtools-mcp)

- 크롬 개발자 도구 MCP 서버 얼리 릴리스. 코딩 에이전트는 자신이 생성한 코드가 브라우저에서 실행될 때 동작을 알 수 없음. 이 문제를 해결하기 위해 제작.
- 수정한 코드가 의도대로 동작하는지 확인하거나, 네트워크 및 콘솔 오류를 진단하거나, 스타일링 및 레이아웃 문제를 디버깅 하는 등의 용도에서 사용 가능.
- [https://addyosmani.com/blog/devtools-mcp/](https://addyosmani.com/blog/devtools-mcp/)

### [GitHub Copilot CLI is now in public preview](https://github.blog/changelog/2025-09-25-github-copilot-cli-is-now-in-public-preview/)

- 코드와 깃헙 컨텍스트를 이해하는 AI 에이전트와 로컬에서 동기식 작업 가능

### Release

- [Docusaurus 3.9](https://docusaurus.io/blog/releases/3.9)
- [pnpm 10.17](https://pnpm.io/blog/releases/10.17)
- [astro 5.14](https://astro.build/blog/astro-5140/)