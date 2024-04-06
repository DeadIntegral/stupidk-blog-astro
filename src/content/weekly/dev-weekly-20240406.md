---
title: dev-weekly 2024-04-06
date: "2024-04-06T20:30:00.000Z"
description: "dev-weekly 2024-04-06"
tags: ["javascript", "node"]
---

# Node

### **[Bun 1.1](https://bun.sh/blog/bun-v1.1)**

- windows 10 이상에서 Bun 지원.
- 윈도우에서 yarn보다 18배, npm보다 30배 빠른 설치
- nodejs API 최적화. e.g. fs.readdir은 58% 빠름.
- bun과 nodejs간 IPC 지원

### **[Deno 1.42: Better dependency management with JSR](https://deno.com/blog/v1.42)**

- deno add, publish를 통한 JSR 사용
- node.js, npm 호환성 개선
- 성능 개선 - 리눅스에서 시작 시간 10% 향상. setTimeout, setInterval 개선.
- v8 12.3, TS 5.4.3 지원

# Javascript

### **[Cally: Small, feature-rich calendar components](https://wicky.nillia.ms/cally/)**

- gzip 9kb 미만의 작은 크기의 캘린더
- 단일 날짜, 범위, 여러 달 표시 가능
- html 친화적이고 현지화, 테마 및 커스텀 지원 등.

### **[<relative-time> element: Web component extensions to the standard <time> element.](https://github.com/github/relative-time-element)**

- 서버 캐시에서 동일한 마크업을 제공하고 브라우저에 도달하면 사용자 지정 `relative-time` 이 현지 시간대로 서식 변경

### **[proposal-signals: JavaScript Signals standard proposal](https://github.com/proposal-signals/proposal-signals)**

- JS에 signal을 추가하자는 제안. 현재 stage 0

# ETC

### **[Introducing Jpegli: A New JPEG Coding Library](https://opensource.googleblog.com/2024/04/introducing-jpegli-new-jpeg-coding-library.html)**

- 고품질 압축 설정 및 35% 향상된 압축 비율을 제공하는 JPEG 라이브러리

### **[Running OCR against PDFs and images directly in your browser](https://simonwillison.net/2024/Mar/30/ocr-pdfs-images/)**

- Tesseract.js와 pdf.js를 사용하여 브라우저에서 이미지와 PDF파일의 내용을 읽는 도구 개발
- Claude 3, GPT-4를 프롬프트로 만들어낸 도구. 마무리는 직접 작업.

### **[BFCache explained](https://www.sabatino.dev/bfcache-explained/)**

- 브라우저가 완전히 렌더링된 페이지의 스냅샷을 메모리 내에 유지하는 메커니즘
- 전체 JS 힙이 메모리에 저장되고 진행중인 코드가 일시중지.
    - setInterval, setTimeout, promise등이 재개
- BFCache에서 로드되면 load event대신 `pageshow` 발생.

### **Release**

- [Docusaurus 3.2](https://docusaurus.io/blog/releases/3.2)
- [gulp v5.0.0](https://github.com/gulpjs/gulp/releases/tag/v5.0.0)