---
title: dev-weekly 2024-07-20
date: "2024-07-20T14:47:00.000Z"
description: "dev-weekly 2024-07-20"
tags: ["node", "javascript"]
---

# Node

### **[Node v22.5.0 (Current)](https://nodejs.org/en/blog/release/v22.5.0)**

- `node:http` 가 Websocket 노출, `node:sqlite` 모듈 추가

### **[Netlify: Our Official Deployment Partner](https://astro.build/blog/netlify-official-deployment-partner/)**

- Netlify Astro 공식 배포 파트너
- Netlify는 Astro에 매달 $12500을 후원

# Javascript

### **[Why "page.goto()" is slowing down your Playwright tests](https://www.checklyhq.com/blog/why-page-goto-is-slowing-down-your-playwright-test/)**

- `await page.goto("/");` 는 load 이벤트를 기다리고 이는 스타일시트, 스크립트, iframe, image 등 모든 종속성을 포함
- `await page.goto("/", {waitUntil: "commit"});` commit, domcontentloaded, load, networkidle 의 값이 존재하지만 사용해보면 어떤 값이든 테스트는 성공. playwright의 각 함수는 사용가능할 때 까지 기다렸다가 실행하기 때문에.

### **[Exploring JS: JavaScript books for programmers](https://exploringjs.com/)**

- Dr. Axel의 무료 온라인 서적들

### **[How fast is javascript? Simulating 20,000,000 particles](https://dgerrells.com/blog/how-fast-is-javascript-simulating-20-000-000-particles)**

- JS로 모바일 디바이스에서 CPU 만으로 100만개의 입자 60fps 렌더링하기 (WASM도 쓰지 않기)
- 프로그래밍 언어에서 대량의 계산을 수행하는 안정적이고 빠른 방법은 밀집된 연속 데이터 배열. 그러나 JS Array는 연속된 데이터 배열이 아닐 수 있음. Typed Array 사용하기
- `eventual visibility` 에 의존하는 메인 스레드와 워커 스레드간의 통신을 위해 `signaling` SharedArrayBuffer 사용
    - 단 하나의 워커만 메모리 읽고 쓰기 수행. 이를 통해 워커 간 데이터 액세스 동기화 보장
- 인터랙션 추가. 천만개로 변경했을 때 프레임 드랍. 워커가 느린것이 아니라 메인 스레드의 페인트 성능.
- 성능 개선을 위해서는 워커에 더 많은 작업을 할당해야함. 이는 글 초반 같은 메모리 쓰기를 피하려고 했던 설계와 상반되지만 트레이드 오프.
- 화면이 깜빡거리는 이슈. 메인 스레드가 픽셀 버퍼를 읽을 때 워커 스레드에 의해 제거하기 때문. 워커가 연산을 완료할 때 까지 렌더링 차단하는 방법 사용. 하지만 프레임 감소. ⇒ 더블 버퍼링 사용
- 그럼에도 느린 로직 존재. 모든 데이터가 압축되어 있지만 연속적으로 접근하지는 않음. 픽셀 인덱스는 SAB의 입자 순서를 기반으로 작동하고 결국 픽셀 인덱스는 픽셀 버퍼의 어느곳으로든 점프. 여기서 캐시 미스 발생. L1 캐시에 넣기에는 너무 큰 데이터.
- GPU 예시를 만들어봤지만 생각보다 떨어지는 성능. 프레임 시간의 80%가 GPU로 데이터를 전송 시간.

# ETC

### **[Seamless SVG copy-paste on the web](https://blogs.windows.com/msedgedev/2024/07/11/seamless-svg-copy-paste-on-the-web/)**

- 엣지와 크롬의 async clipboard API 에서 이제 SVG 복사 붙여넣기 지원.

### **[@property: Next-gen CSS variables now with universal browser support](https://web.dev/blog/at-property-baseline?hl=en)**

- CSS houdini의 일부인 `@property` 가 이제 baseline에 포함

### Release

- [eslint v9.7.0](https://eslint.org/blog/2024/07/eslint-v9.7.0-released/)
- [meteor 3.0](https://forums.meteor.com/t/its-official-meteor-3-0-official-release-is-out/61860)
- [jQuery 4.0.0 Beta2](https://blog.jquery.com/2024/07/17/second-beta-of-jquery-4-0-0/)
- [eruda v3.2.0](https://github.com/liriliri/eruda/releases/tag/v3.2.0)