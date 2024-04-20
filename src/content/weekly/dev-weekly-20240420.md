---
title: dev-weekly 2024-04-20
date: "2024-04-20T23:15:00.000Z"
description: "dev-weekly 2024-04-20"
tags: ["javascript", "node"]
---
# Node

### **[Profile Node.js performance with the Performance panel](https://developer.chrome.com/docs/devtools/performance/nodejs)**

- 크롬 성능 패널을 사용한 노드 퍼포먼스 프로파일
- CPU 프로파일링 및 분석 가이드. - 각 항목(Timeline overview, Bottom-Up, Call Tree, Event Log)에 대한 설명
- `console.profile` 커맨드

### **[How we built JSR](https://deno.com/blog/how-we-built-jsr)**

- JSR을 구축하기 위한 요구사항 및 아키텍처
- Google Cloud 에서 호스팅하고 Posgres, 테라폼
- 러스트 베이스로 hyper http server, sqlx 사용.
- TTFB 최적화를 위한 작업
- Probing 거부 - 네트워크에서의 프로빙, 로컬에서 import 재작성
- 가용성을 위한 백그라운드 큐

# Javascript

### **[CSS in React Server Components](https://www.joshwcomeau.com/react/css-in-rsc/)**

- 리액트 서버 컴포넌트 사용시 styled component, emotion 등에서의 이슈
- 대체품 소개 및 대체품에서의 장단점 - Linaria, Pigment CSS

### **[Quill 2.0: A Powerful Rich Text Editor for the Web](https://github.com/quilljs/quill/releases/tag/v2.0.0)**

- Quill 2.0 릴리즈. ESM, 트리 쉐이킹, 중첩된 퀼 지원
- IME 향상, 클립보드 개선, 렌더링 성능 향상
- TS, Vitest로 마이그레이션, 공식 TS 선언 제공, Playwright사용
- 웹사이트 개츠비로 이전

### **[Next.js 14.2](https://nextjs.org/blog/next-14-2)**

- 트리쉐이킹 RSC 와 클라이언트 컴포넌트 간 경계에 대한 최적화
- 빌드 메모리 사용량 감소. 평균 2.2GB to 190MB 미만
- AppRotuer 캐싱 개선, 오류메시지 UI 개선

# ETC

### **[iOS404](https://ios404.com/)**

- iOS에서 누락된 웹 기능 모음

### **[Release Notes for Safari Technology Preview 192](https://webkit.org/blog/15260/release-notes-for-safari-technology-preview-192/)**

- View Transitions 지원, URL.parse() 지원