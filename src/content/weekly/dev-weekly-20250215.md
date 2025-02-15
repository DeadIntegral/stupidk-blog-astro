---
title: dev-weekly 2025-02-15
date: "2025-02-15T15:55:00.000Z"
description: "dev-weekly 2025-02-15"
tags: ["javascript", "node"]
---

# Node

### [Move on to ESM-only](https://antfu.me/posts/move-on-to-esm-only)

- CJS의 비중이 줄어들고 ESM 지원이 늘어나는 중.
- 둘 다 지원하는 것도 물론 좋지만, 둘 다 지원할 때 발생하는 문제 지적
    - CJS와 ESM의 상호운용성(호환성), 패키지 크기 증가(내 패키지를 사용하는 수많은 패키지들), 동시에 지원하기 위한 코드 증가
- 많은 메타 프레임워크들이 Vite위에 ESM First-class citizen 인 상황. 신규 프로젝트는 ESM only로 만드는게 더 좋을거라는 글.

### [web-worker v1.5.0](https://github.com/developit/web-worker/releases/tag/1.5.0)

- 브라우저와 Node에서 Worker 코드를 호환가능하게 만드는 라이브러리
- Node에서는 worker threads를 기반으로 하는 웹 호환 worker, 브라우저, 브라우저 번들에서는 Worker
- DOM 스타일 이벤트(e.g. Event.data), 이벤트 핸들러(worker.onmessage) 속성 지원

# Javascript

### [The Popover API is now Baseline Newly available](https://web.dev/blog/popover-baseline?hl=en)

- 24년4월 Popover API 가 Baseline Newly에서 사용 가능하다고 했지만 아니었고 1월27일 베이스라인에 진입
- iOS, iPadOS 에서 Popover의 배경을 터치해도 닫히지 않는 문제가 있었고 18.3까지 기다려야했음.
- 재발방지를 위해 모바일테스트 개선 작업 중.

### [share-button](https://github.com/daviddarnes/share-button)

- native OS 공유 옵션을 사용한 웹 페이지 공유 버튼 웹 컴포넌트
    
    ```jsx
    class ShareButton extends HTMLElement {
    	// ...
      share = () => {
        const root = this.getRootNode();
        window.navigator.share({
          title: root.title, text: root.title, url: window.location.href,
        }).then(() => console.log("Page was succesffuly shared")).catch((error) => {});
      };
    }
    ```
    

# ETC

### [The European Accessibility Act for websites and apps](https://martijnhols.nl/blog/the-european-accessibility-act-for-websites-and-apps)

- 유럽 접근성 법(EAA) 2025년 6월28일 부터 EU 내 특정 웹, 앱은 접근성 기준을 충족해야함.
- 경제적 어려움으로 접근성 요구를 충족하기 어려우면 면제 신청 가능
- 25년 6월28일 이후 신규 개발에 적용, 27년 6월28일에는 기존 서비스에도 적용.

### [State of AI 2025](https://survey.devographics.com/en-US/survey/state-of-ai/2025)

- state of AI 설문조사

### Release

- [astro 5.3](https://astro.build/blog/astro-530/)
- [prettier 3.5](https://prettier.io/blog/2025/02/09/3.5.0)
- [electron v34.2](https://github.com/electron/electron/releases/tag/v34.2.0)