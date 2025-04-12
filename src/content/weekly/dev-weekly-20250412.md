---
title: dev-weekly 2025-04-12
date: "2025-04-12T21:20:00.000Z"
description: "dev-weekly 2025-04-12"
tags: ["javascript", "css", "node"]
---

# CSS

### [Minimal CSS-only blurry image placeholders](https://leanrada.com/notes/css-only-lqip/)

- CSS와 엘리먼트에 작성하는 사용자 정의 속성 하나로 블러이미지 만들기
- 기존 pure CSS 방법은 마크업에 긴 인라인 스타일을 사용하거나, 데이터 URL을 추가해야 하는데 이 방법은 CSS 비트 연산을 통해 구현.

### [Better typography with text-wrap pretty](https://webkit.org/blog/16547/better-typography-with-text-wrap-pretty/)

- 사파리도 text-wrap pretty 지원
- 엘리먼트 수에 영향을 받지 않도록 최적화
- text-wrap balance와의 차이

# Javascript

### [Accelerating Large-Scale Test Migration with LLMs](https://medium.com/airbnb-engineering/accelerating-large-scale-test-migration-with-llms-9565c208023b)

- 에어비앤비에서 리액트 컴포넌트의 3.5K개에 달하는 Enzyme 테스팅 파일을 LLM을 통해 React Testing Library(a.k.a RTL)로 마이그레이션
- 23년 중반 해커톤 팀에서 시연, 마이그레이션을 일련의 자동화된 검증, 리팩토링 단계로 나누는 것으로 시작.
- 마이그레이션 초기에는 파일별 마이그레이션 성공률을 높이기 위해 다양한 엔지니어링 전략을 실험했지만 가장 효과적인 방법은 brute force였고 대부분은 10번의 시도 후 완료.
- 테스트 상태 설정이 복잡하거나 과도한 간접 참조가 있는 파일은 최대한 많은 관련 컨텍스트를 주입하는게 좋은 방법
- 수동 작업 예상 시간은 1.5년, LLM을 사용하여 6주로 단축.

### [React Reconciliation: The Hidden Engine Behind Your Components](https://cekrem.github.io/posts/react-reconciliation-deep-dive/)

- React reconciliation 에 대한 심층 설명과 코드 예시
- 리액트의 reconciliation은 엘리먼트의 타입이 중요. 조건부 렌더링을 할 때 같은 요소라면 엘리먼트를 다시 그리지 않고 어트리뷰트만 변경됨
- 리스트가 아니더라도 key를 사용하여 명시적으로 리렌더링 되지 않도록 하는 방법
- 메모를 사용하기 이전에, 컴포넌트 바운더리를 설계하여 영향받지 않게 만들기

# Node

### [Making Node.js Downloads Reliable](https://nodejs.org/en/blog/announcements/making-nodejs-downloads-reliable)

- nodejs의 웹 인프라스트럭쳐, 역사, 현재 위치
- 현재 nodejs.org는 매 월 24억건의 요청, 3페타바이트 처리 중. 한계에 도달하여 재구성
    - Cloudflare workers, R2 스택 - Project Alexandria로 인해 따라 Cloudflare가 무료 제공

### [Deno v Oracle Update 3: Fighting the JavaScript Trademark](https://deno.com/blog/deno-v-oracle3)

- Deno와 Oracle의 javascript 상표권 분쟁 현재 상태
- JS는 ECMA에서 표준화하고 TC39에서 관리하고 애플, 구글, 모질라에서 구현. 오라클은 발전시키지 않는데 오라클에서 상표권 소유
- [https://javascript.tm/](https://javascript.tm/) 에서 서명 가능

# ETC

### [Chrome 136 beta](https://developer.chrome.com/blog/chrome-136-beta?hl=en)

- `:visited` 링크 개인 정보 보호 개선
    - [https://developer.chrome.com/blog/visited-links?hl=en](https://developer.chrome.com/blog/visited-links?hl=en)
- WebRTC에서 H265(HEVC) 코덱 지원
- RegExp.escape

### [The full stack AI workspace](https://firebase.studio/)

- AI 에이전트로 풀스택 개발하는 서비스.

### [Tauri vs. Electron: performance, bundle size, and the real trade-offs](https://gethopp.app/blog/tauri-vs-electron)

- 타우리 일렉트론 비교
- 일렉트론의 메인 프로세스는 nodejs process로 실행되고 nodejs 이벤트 루프에 의존. 렌더러 프로세스는 메인 프로세스에서 생성된 단일 브라우저 탭.
- 타우리는 웹뷰 프로세스. 윈도우에선 Webview2, 맥에선 WKWebview, 리눅스에선 WebKitGTK

### Release

- [undici v7.7.0](https://github.com/nodejs/undici/releases/tag/v7.7.0)
- [pnpm 10.8](https://github.com/pnpm/pnpm/releases/tag/v10.8.0)
- [react native 0.79](https://reactnative.dev/blog/2025/04/08/react-native-0.79)
- [bun v1.2.9](https://bun.sh/blog/bun-v1.2.9)
- [nextjs 15.3](https://nextjs.org/blog/next-15-3)