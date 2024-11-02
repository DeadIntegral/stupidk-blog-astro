---
title: dev-weekly 2024-11-02
date: "2024-11-02T16:20:00.000Z"
description: "dev-weekly 2024-11-02"
tags: ["javascript", "vscode", "node", "browser", "css"]
---

# CSS

### [Making content-aware components using CSS :has(), grid, and quantity queries](https://piccalil.li/blog/making-content-aware-components-using-css-has-grid-and-quantity-queries/)

- 콘텐츠에 따라 달라지는 UI 만들기 (CSS quantity query)
- 해당 방법을 선택했을때의 단점과 극복을 위한 솔루션

# Node

### [Node v22.11.0 (LTS)](https://nodejs.org/en/blog/release/v22.11.0)

- Node 22 LTS로 전환. 2025년 10월까지 Active LTS, 27년 4월까지 Maintenance
- OpenSSL 3.x 는 2026년 9월7일까지 지원 예정

# Javascript

### [Should JavaScript be split into two languages? New Google-driven proposal divides opinion](https://devclass.com/2024/10/22/should-javascript-be-split-into-two-languages-new-google-driven-proposal-divides-opinion/)

- JS를 2개로 나누는 제안에 대한 논의.
- 새로운 기능 구현은 툴링에서 이뤄지는데 여기서 구현되는 언어를 JS Sugar로, 엔진에서 구현된 언어는 JS 0

### [How we shrunk our Javascript monorepo git size by 94%](https://www.jonathancreamer.com/how-we-shrunk-our-git-repo-size-by-94-percent/)

- MS의 178GB짜리 JS모노레포 Git 크기 감소시키기
- 깃은 일반적으로 변경된 파일의 diff만 푸시하지만, 오래된 패킹 코드가 파일 이름의 마지막 16자만 검사한 후 diff를 푸시하는 이슈.
    - 서로 다른 두 패키지의 [CHANGELOG.md](http://CHANGELOG.md) 파일을 비교했고 수십메가의 변경 발생.

# ETC

### [The most effective ways to improve Core Web Vitals](https://web.dev/articles/top-cwv)

- 모든 성능 최적화를 하기에는 시작 부족. 현실적이고 임팩트 있는 방법 소개
- bfcache 기준 충족시키기, Speculation Rules API 활용하기
- 콘텐츠에 명시적인 크기 설정하기(동적인 콘텐츠라도 min-height넣기)

### [WebKit Features in Safari 18.1](https://webkit.org/blog/16188/webkit-features-in-safari-18-1/)

- 사파리 18.1 애플 인텔리전스를 사용한 아티클 요약 기능 제공

### [Tooltip Best Practices](https://css-tricks.com/tooltip-best-practices/)

- 툴팁은 대게 두 가지 용도로 사용 - 라벨링, 맥락에 따른 설명
- 케이스별 접근성 향상을 위한 가이드 - aria-labelledby, aria-describedby
- 보다 나은 툴팁을 만들기 위한 권장 및 피해야 할 것들

### [VSCode October 2024 (version 1.95)](https://code.visualstudio.com/updates/v1_95)

- 코파일럿
    - 코드 편집 세션 (맥락 유지, ai 선택, 파일 선택)
    - 코파일럿 리뷰 기능 추가
    - 답변에 심볼릭 링크 추가(함수 클릭하면 해당 파일 선언 위치로 이동)
    - 머메이드 다이어그램 그려주는 vscode-mermAId 확장
- 함수를 복사하면 의존성들을 자동으로 임포트 문으로 작성해주는 기능

### Release

- [tinybench v3.0.0](https://github.com/tinylibs/tinybench/releases/tag/v3.0.0)
- [autocannon v8.0.0](https://github.com/mcollina/autocannon/releases/tag/v8.0.0)
- [apexcharts v4.0.0](https://github.com/apexcharts/apexcharts.js/releases/tag/v4.0.0)
- [YouTube.js v11.0.0](https://github.com/LuanRT/YouTube.js/releases/tag/v11.0.0) - breaking changes