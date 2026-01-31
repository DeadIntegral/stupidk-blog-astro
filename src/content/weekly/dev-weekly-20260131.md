---
title: dev-weekly 2026-01-31
date: "2026-01-31T20:35:00.000Z"
description: "dev-weekly 2026-01-31"
tags: ["javascript", "nodejs", "css"]
---

# Nodejs

### [Node.js 16 to 25 Performance Benchmarks](https://www.repoflow.io/blog/node-js-16-to-25-benchmarks-how-performance-evolved-over-time)

- nodejs 16 부터 25 까지 API 별 성능 비교 차트
- HTTP Get, JSON.parse, stringify, SHA-256 hashing, Buffer copy, Array map, reduce, … 등

# CSS

### [Understanding the fundamentals of CSS Layout](https://polypane.app/blog/understanding-the-fundamentals-of-css-layout/)

- CSS 레이아웃 알고리즘에 대하여
- normal flow, box model, baseline, margin behavior, display outer inner, %가 의미하는 것, position, offset, stacking context 등 CSS 의 기본 컨셉들 소개

# Javascript

### [Introducing LibPDF: The PDF Library TypeScript Deserves](https://documenso.com/blog/introducing-libpdf-the-pdf-library-typescript-deserves)

- 문서 서명 워크플로의 전체 라이프 사이클(업로드한 PDF파일을 파싱하고, 폼 필드를 채우고, 서명을 추가하고, 저장하면서 기존 서명 보존하는) 처리가 가능한 라이브러리 제작
- pdfjs와 PDFBox의 아이디어를 빌려 파싱 실패하면 무차별 대입으로 복구. 파일 전체 스캔해서 문서 재구축.
- incremental save제공 - 서명된 문서 수정하거나, 다른 서명 추가, 저장해도 이전 서명 유효한 상태로 유지
- 네이티브 디지털 서명 - PAdES BB부터 B-LTA까지 장기 유효성 검사 지원 (외부 의존성 없음)
- 완전한 기능 세트 제공 - 암호화(RC4, AES-128, 256), 폼 채우기, 병합, 분할, 텍스트 추출, 폰트 삽입, 이미지 삽입, 레이어 병합 등

### [Announcing Rolldown 1.0 RC](https://voidzero.dev/posts/announcing-rolldown-rc)

- 1.0 stable release 전까지 퍼블릭 API breaking change 없을 예정.
- vite 8 beta 부터 Rolldown 이 디폴트 번들러.

### [SonicJS: **The Fastest Headless CMS**](https://sonicjs.com/)

- strapi 보다 100배 빠르고 free tier를 제공하는 Cloudflare Worker 기반 Edge-native CMS

# ETC

### [**Midscene.js 1.0 Release**](https://midscenejs.com/)

- 비전 기반 모델로 모든 플랫폼(웹, 앱)의 자동화 구현

### [Try text scaling support in Chrome Canary](https://www.joshtumath.uk/posts/2026-01-27-try-text-scaling-support-in-chrome-canary/)

- 웹 브라우저에서 모바일 디바이스 시스템 폰트 사이즈 적용해주는 새로운 meta 태그 추가.
    - `<meta name="text-scale" content="scale" />`

### Release

- [bun 1.3.7](https://bun.com/blog/bun-v1.3.7)
    - Buffer.from 성능 50% 향상, JSC 업그레이드로 버그픽스 및 성능향상
- [emscripten v5.0.0](https://github.com/emscripten-core/emscripten/blob/main/ChangeLog.md#500---012426)