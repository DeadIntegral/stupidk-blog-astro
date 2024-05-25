---
title: dev-weekly 2024-05-25
date: "2024-05-25T16:45:00.000Z"
description: "dev-weekly 2024-05-25"
tags: ["javascript", "node"]
---
# Node

### **[Crawlee: web scraping and browser automation library](https://crawlee.dev/)**

- 안정적인 크롤러를 구축하기 위한 웹 스크래핑 및 브라우저 자동화 도구
- 웹 사이트의 봇 탐지 및 차단 매커니즘을 회피하는 다양한 기술 제공
- 브라우저 TLS 핑거프린트 복제, JSON API 도 스크랩 가능

### **[Speed Up Your Playwright Scripts with Request Interception](https://www.checklyhq.com/blog/speed-up-playwright-scripts-request-interception/)**

- playwright와 같은 e2e에서 불필요한 요청을 인터셉트하여 차단하는 것으로 성능 높이기
- e.g. `page.route('**/*.{png,jpg,jpeg}', route => route.abort());`

# Javascript

### **[Next.js 15 RC](https://nextjs.org/blog/next-15-rc)**

- React 19 RC, React Compiler(바벨 플러그인) 지원
- fetch request, GET 라우트 핸들러, 클라이언트 라우터 캐시 기본값 캐시 안함으로 변경. 캐싱 계속 사용 가능.
- Partial PreRendering 실험적 지원
- `create-next-app` 새로운 디자인
- 외부 패키지 번들링 최적화 스테이블 제공

### **[Rethinking Text Resizing on Web](https://medium.com/airbnb-engineering/rethinking-text-resizing-on-web-1047b12d2881)**

- 에어비앤비의 텍스트 크기 조정을 향상시키기 위한 여정
- px to rem으로의 변환 비용을 줄이기 위해 여전히 px을 사용하고 linaria 플러그인을 사용하여 빌드 타임에 변경되도록 작업. 모두 rem을 사용하지는 않고 전략적으로 사용.
    - px, Px를 구분하여 여전히 픽셀이어야 하는 것은 유지
- 모바일 사파리 폰트 스케일링 - 모바일에서 100% 선택했을 때 기본 크기가 16px이 아닌 17px인 이슈 대응

### **[SolidStart 1.0: The Shape of Frameworks to Come](https://www.solidjs.com/blog/solid-start-the-shape-frameworks-to-come)**

- SolidJS 앱을 빌드하고 배포에 도움을 주는 프레임워크 SolidStart 1.0 릴리스
- 파일 기반 라우팅
- SPA로 구축되었지만 `use server` 사용하면 서버에서 호출되거나 RPC로 사용

### **[City In A Bottle – A 256 Byte Raycasting System](https://frankforce.com/city-in-a-bottle-a-256-byte-raycasting-system/)**

- 256바이트로 도시 애니메이션 프로그램 제작자가 설명하는 작동 방식

# ETC

### **Release**

- [commander.js v.12.1.0](https://github.com/tj/commander.js/releases/tag/v12.1.0)
- [axios v1.7.0](https://github.com/axios/axios/releases/tag/v1.7.0)
- [eslint v9.3.0](https://eslint.org/blog/2024/05/eslint-v9.3.0-released/)
- [angular v18](https://blog.angular.dev/angular-v18-is-now-available-e79d5ac0affe)
    - [https://angular.dev/](https://angular.dev/)