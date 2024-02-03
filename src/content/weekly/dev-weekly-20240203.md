---
title: dev-weekly 2024-02-03
date: "2024-02-03T10:40:00.000Z"
description: "dev-weekly 2024-02-03"
tags: ["javascript", "node", "css", "deno"]
---

# CSS

### **[CSS scroll-driven scroll-snapping animations](https://codepen.io/giana/pen/BabdgjB)**

- 스크롤 스냅 애니메이션 데모
- 섹션 단위의 blink animation, horizontal scroll, zoom in-out scroll등 애니메이션

# Node

### **[Modern JavaScript library starter](https://advancedweb.hu/modern-javascript-library-starter/)**

- TS, testing, Github Action을 통해 패키지를 NPM에 오토 퍼블리싱

### **[Deno 1.40: Temporal API](https://deno.com/blog/v1.40)**

- `-unstable-temporal` 플래그를 통해 Temporal API 사용 가능
- TC39 stage3 의 Decorator 지원
- Deno 2를 위한 디프리케이트, 안정화, 제거
- X11과 같은 네이티브 윈도잉 시스템에 연결하지 않고 WebGPU용 윈도잉 솔루션 제공을 목표.
- deno fresh 1.6 릴리즈

# Javascript

### **[Announcing TypeScript 5.4 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4-beta/)**

- 마지막 할당 이후 클로저임에도 타입 보존
- NoInfer 유틸리티 타입 추가
- TS 5.0 부터 디프리케이트 하기로 했던것들을 ignoreDeprecations 옵션으로 사용 가능했는데, 지원하는 마지막 버전이 될 것. 5.5부터는 하드 에러.

### **[htmx 2.0.0-alpha1 has been released!](https://v2-0v2-0.htmx.org/posts/2024-01-26-htmx-2-0-0-alpha1-is-released/)**

- 실제 시나리오에 대한 코드 테스트를 통해 문제, 개선할 부분을 찾기 위한 릴리스
- htmx 2부터는 IE 지원 종료
- 이제 웹 컴포넌트의 섀도우 돔 내에서 htmx 작동

### **[Squeezing Last Bit Of JavaScript Performance For My Automation Game](https://ruoyusun.com/2024/01/23/cividle-optimization.html)**

- cividle 을 만들면서 JS 성능최적화를 했던 후기
- 웹 플랫폼에 머물기 원해서 JS/TS 선택, WebGL렌더러로 Pixi.js선택
- 오프라인 모드를 정산해줄 때 많은 CPU 리소스 필요. 이를 개선하기 위한 프로파일링
    - 프로토타입 체인 대신 정적 캐시 복사본 이용
    - 메모이즈 사용, Map 데이터 포맷 사용
    - 문자열 “x,y” 로 표시하던 타일을 `(x << 16) | y;` 로 변경하여 성능 개선

### **[Test Web Bluetooth with Puppeteer](https://developer.chrome.com/blog/test-web-bluetooth-with-puppeteer)**

- 퍼펫티어로 블루투스 테스팅하는 가이드 문서
- 퍼펫티어 21.4.0 이상 필요. 헤드리스 모드 비활성화 하거나 새로운 헤드리스 모드 사용 하기
- DOM에 데이터를 쓰고 `Page.$eval()` 을 통해 DOM 에서 테스트 스크립트로 가져와서 테스트

# ETC

### **Release**

- [Neutralinojs v5.0.0](https://neutralino.js.org/docs/release-notes/framework/#v500)
- [Ember 5.6](https://blog.emberjs.com/ember-released-5-6/)
- [dependency-cruiser v16.1.0](https://github.com/sverweij/dependency-cruiser/releases/tag/v16.1.0)
- [fastify v4.26.0](https://github.com/fastify/fastify/releases/tag/v4.26.0)