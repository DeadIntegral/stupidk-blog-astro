---
title: dev-weekly 2026-06-13
date: "2026-06-13T15:52:00+09:00"
description: "CSS만으로 만드는 뷰 트랜지션, npm v12의 설치 스크립트 기본 비활성화, Node.js 릴리스 체계 개편, AI 시대의 엔지니어링 가치, 구글 폰트 셀프호스팅까지 이번 주 개발 소식."
tags: ["view-transitions", "css", "web-components", "npm", "security", "node", "ai", "font"]
---

# CSS

### [CSS Can Now Animate Between Pages: View Transitions Without JavaScript](https://www.rotecodefraktion.de/en/blog/css-view-transitions-zwischen-seiten/)

- css로 적용하는 view-transition 가이드 및 실제 적용 시 주의점.
- 페이지의 일부를 제자리에 유지하기, 두 페이지 간 이미지 공유 등
    - 공유 이미지의 경우 사파리에서 버벅이는 이슈(메인스레드로 처리하기 때문) 및 솔루션.

# Javascript

### [How building an HTML-first site doubled our users overnight](https://mohkohn.co.uk/writing/html-first/)

- 공공 서비스이기 때문에 모든 기기에서 동작해야 하고, 인터넷 연결 상태에서도 작동해야하는 서비스 개발기.
- 이를 위해 HTML 웹 컴포넌트 제작. 섀도우 돔, JS 렌더링 하는 것 없이 HTML 유효성 검사를 감지하고 현대적인 디자인으로 동작. 이후 폼 제출 유저 2배로 증가.

# Nodejs

### [Upcoming breaking changes for npm v12](https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/)

- npm v12부터 `npm install`과 관련된 기본 설정 변경.
- 프로젝트에서 명시적으로 허용하지 않는 한 `allowSripts` 디폴트 비활성화. preinstall, install, postinstall 스크립트 실행 안함. 네이티브 형태의 node-gyp도 포함. `--allow-git` 디폴트 none.

### [Node.js is changing its release schedule and version numbers](https://nodejsdesignpatterns.com/blog/nodejs-release-schedule-changes/)

- 1년에 한 번만 메이저 업데이트 할 것. 4월에 출시, 10월에 LTS로 전환.
- 연도 기반 버전 번호 체계. 마침 26은 26년에 출시.
- 모든 버전은 LTS로 변경. LTS는 30개월간 지원. 26년 10월부터 시작.
- 단순한 운영상의 조치가 아니라 기여자들의 유지보수 시간 비용을 검토하고 결정한 것.

# AI

### [Modern Engineering Values](https://cpojer.net/posts/modern-engineering-values)

- AI 이후 프로그래밍은 근본적으로 변했고 어떤 엔지니어링 가치들이 여전히 중요한가.
- 현재 소규모 팀들이 구축하는 인프라들은 대형 테크 기업들이 오랫동안 사용해온 인프라와 유사. 엔지니어링은 코드를 만드는 것 보다 코드를 생성하는 시스템을 제어하는데 더 포커스.
- 신속한 피드백 루프 매커니즘이 있어야 더 빠르게 반복 작업을 수행. 코드의 양이 늘더라도 도구의 성능이 저하되면 안됨.

# ETC

### [Fontself: Self-Host Google Fonts](https://www.fontself.app/)

- EU에 기반을 둔 사이트가 google CDN에서 폰트를 불러오면 방문자의 IP 주소가 구글 서버로 전송되어 GDPR 위반.
- 폰트를 자체 호스팅으로 사용하도록 돕는 서비스.

### Release

- [Angular v22](https://blog.angular.dev/announcing-angular-v22-c52bb83a4664)
- [News from WWDC26:WebKit in Safari 27 beta](https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta)
    - 모듈 재작성을 통해 top-level await 등 지원.
- [Port React Compiler to Rust](https://github.com/react/react/pull/36173)
- [rolldown v1.1.0](https://github.com/rolldown/rolldown/releases/tag/v1.1.0)
- [emscripten v6.0.0](https://github.com/emscripten-core/emscripten/releases/tag/6.0.0)
- [commandar.js v15.0.0](https://github.com/tj/commander.js/releases/tag/v15.0.0)
    - ESM only로 변경. v14는 27년 5월까지 보안 업데이트.