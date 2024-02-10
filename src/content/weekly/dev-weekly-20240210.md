---
title: dev-weekly 2024-02-10
date: "2024-02-10T11:30:00.000Z"
description: "dev-weekly 2024-02-10"
tags: ["javascript", "node"]
---
# Node

### **[Node.js Community Debate Intensifies Over Enabling Corepack by Default and Potentially Unbundling npm](https://socket.dev/blog/node-community-debates-enabling-corepack-unbundling-npm)**

- nodejs corepack에서 npm 을 번들로 포함할지 논의한 내용
    - 코어팩에 npm을 포함하면 npm의 방식이 변경됨. 이는 현 상태를 크게 개선하지 않고 더 복잡하고 일관성이 없는 문제 발생
    - npm 번들 해제는 너무 논의가 많아 TSC 투표 진행할 것
- nodejs에 패키지 관리자가 포함된 이유
    - npm창시자 - V8과 OpenSSL에 불공정하게 특권을 부여하기 때문에 대체 JS엔진이나 TLS 구현을 포함해야 하나? 공정성은 이런 질문에 대한 터무니없는 기준

# Javascript

### **[Interaction to Next Paint becomes a Core Web Vital on March 12](https://web.dev/blog/inp-cwv-march-12?hl=en)**

- 2024년 3월12일 부터 INP가 공식 Core Web Vital이 되어 FID를 대체
- CrUX(크롬 유저 경험 보고서)를 표시하는 [pagespeed.web.dev](http://pagespeed.web.dev) 를 사용하면 어떻게 작동하는지 확인 가능

### **[jQuery 4.0.0 BETA!](https://blog.jquery.com/2024/02/06/jquery-4-0-0-beta/)**

- IE 10 이하 지원 중단. IE 11 디프리케이트는 jQuery 5.0 에서 할 계획
- 모든 브라우저에서 지원하거나 동등한 기능이 있는 API 들 제거.
- ESModule 지원, slim 버전 gzip은 8kb.

### **[Announcing Million 3](https://million.dev/blog/million-3)**

- 과거엔 일부 라이브러리가 호환되지 않았고, 비결정적 리턴은 최적화하지 못했으며, 컴파일러는 원하는 만큼 안정적이지 않았음
- 하이드레이션 또한 O(n)의 복잡도. 밀리언3는 컴포넌트의 동적인 부분만 이동하는 새로운 하이드레이션 도입
- 컴파일러 완전히 재작성.

### **[Storybook 8 Beta](https://storybook.js.org/blog/storybook-8-beta/)**

- 디폴트 컴파일러 Babel 에서 SWC로 전환
- 모바일 UI 개선
- 변경사항 커밋 없이 비쥬얼 테스트 지원
- RSC지원, Vite5 Lit3 지원
- Yarn1, Next < 13.5, Vue2, Svelte3, Angular14 지원중단.
- React종속성 제거 - Vue, Angular, WebComponent, Svelte 사용자는 불편했음

# ETC

### **[The psychology of site speed and human happiness](https://www.speedcurve.com/blog/psychology-site-speed/)**

- 사람이 지연 시간을 인지하는 방식
    - 평균적으로 유저들은 로드 시간이 실제보다 15% 느리다고 인식하고 나중에 회상 할 때는 35%느리다고 기억함
    - 스피너나 프로그레스바가 있으면 최대 10% 더 빠르다고 믿게 만들 수 있음
    - 마지막 경험이 가장 큰 영향을 줌. 공평한지와 별개로 우리의 두뇌 작동 방식
    - 시각 지속성 - 우리의 상징적 기억(Iconic memory)이 약 100ms동안 시각적 정보를 공유
- 웹 스트레스와 느린 페이지가 브랜드에 끼치는 영향

### **[Google Search officially retires cache link](https://searchengineland.com/google-search-officially-retires-cache-link-437122)**

- 구글 검색 결과 스니펫에서 캐시 링크 제거.
- Cache operator([https://webcache.googleusercontent.com/search?q=cache:seroundtable.com](https://webcache.googleusercontent.com/search?q=cache:seroundtable.com))는 작동중이지만 이 역시 중단할 것.

### **[In Loving Memory of Square Checkbox](https://tonsky.me/blog/checkbox/)**

- 과거부터 지금까지 메이저 OS들은 체크박스와 라디오를 시각적으로 사각형과 원으로 구분.
- 웹에서 사람들이 커스텀 하면서 경계가 없는 케이스들 등장
- 애플은 VisionOS에서 전통을 버리고 원 체크박스 사용

### **Release**

- [marked v12.0.0](https://github.com/markedjs/marked/releases/tag/v12.0.0)
- [capacitor 5.7.0](https://github.com/ionic-team/capacitor/releases/tag/5.7.0)
- [commander.js v12.0.0](https://github.com/tj/commander.js/releases/tag/v12.0.0)
- [quill v2.0.0-rc.0](https://github.com/quilljs/quill/releases/tag/v2.0.0-rc.0)
- [react-native-typescript-boilerplate v4.0.0](https://github.com/WrathChaos/react-native-typescript-boilerplate/releases/tag/4.0.0)
- [nvm-desktop v3.0.0](https://github.com/1111mp/nvm-desktop/releases/tag/v3.0.0)