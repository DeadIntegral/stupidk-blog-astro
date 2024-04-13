---
title: dev-weekly 2024-04-13
date: "2024-04-13T16:15:00.000Z"
description: "dev-weekly 2024-04-13"
tags: ["javascript", "node"]
---
# Node

### **[ZX 8.0: A tool for writing better scripts](https://github.com/google/zx/releases/tag/8.0.0)**

- esbuild사용, 안전성과 안정성 향상, 설치시간 단축, 사이즈 20배 감소
- 브레이킹 체인지
    - ssh 제거
    - powershellzx 제거 필요하다면 usePowerShell 사용

### **[Migrating 500+ tests from Mocha to Node.js](https://astro.build/blog/node-test-migration/)**

- Astro 프로젝트의 Mocah, Chi 기반 테스팅을 Nodejs built-in 테스팅으로 전환
- 이점 - 모노레포에 유지 관리해야 할 종속성 감소, nodejs에 기여하는 더 많은 사람, 노드 테스트가 발전할 거라는 기대 등
- 모노레포 내부의 작은 패키지 하나부터 마이그레이션 및 PoC
- nodejs의 테스팅은 각 파일에 대해 새로운 프로세스를 생성하여 격리하기 때문에 느린 이슈. 내부에 임시 파일을 생성하고 단일 파일을 테스트 하도록 해서 문제 해결
    - 실패나 시간초과시 어떤 테스트가 원인인지 찾기 어려운 이슈
- 프로젝트 마이그레이션은 커뮤니티에 도움을 요청했고 일주일만에 마이그레이션 완료

# Javascript

### **[Bulma v1.0.0: Modern CSS framework based on Flexbox](https://github.com/jgthms/bulma/releases/tag/1.0.0)**

- Dart Sass를 사용하여 프로젝트 재작성 (html은 그대로)
- 테마 도입(다크 모드), 스켈레톤 로더

### **[The Things Users Would Appreciate In Mobile Apps](https://www.smashingmagazine.com/2024/04/things-users-would-appreciate-mobile-apps/)**

- 모바일 서비스에서 사용자에게 불편을 줄 수 있는 요소들에 대한 아티클

# ETC

### **[The ADA Now has Regulations for Accessibility of Web Content and Mobile Apps](https://www.tpgi.com/the-ada-now-has-regulations-for-accessibility-of-web-content-and-mobile-apps/)**

- 미국 장애인법에 디지털 접근성에 대한 요구 사항 제공 규칙
- ADA Title ii 에 해당하는 조직들 적용 - 주 및 지방 정부가 제공하는 서비스 (공립학교, 대학교 포함)

### **[ESLint v9.0.0 released](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/)**

- nodejs v18.18.0, nodejs19 지원 종료
- Flat config가 기본값이며 이제 eslintrc는 사용하지 않음
- stylish, html, json, json-with-meta를 제외한 모든 포맷터 제거

### **Release**

- [madge v7.0.0](https://github.com/pahen/madge/releases/tag/v7.0.0)
- [jotai v2.8.0](https://github.com/pmndrs/jotai/releases/tag/v2.8.0)
- [DOMPurify v3.1.0](https://github.com/cure53/DOMPurify/releases/tag/3.1.0)
- [Rspack 0.6.0](https://www.rspack.dev/blog/announcing-0.6.html)