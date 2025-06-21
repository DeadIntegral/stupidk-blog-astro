---
title: dev-weekly 2025-06-21
date: "2025-06-21T18:37:00.000Z"
description: "dev-weekly 2025-06-21"
tags: ["css", "node", "javascript", "react", "browser"]
---

# CSS

### [1fr 1fr vs auto auto vs 50% 50%](https://frontendmasters.com/blog/1fr-1fr-vs-auto-auto-vs-50-50/)

- grid-template-columns에서 1fr, auto, 50% 를 2개씩 썼을 때 동작 방식의 차이
    - gap을 줬을 때, 이미지가 100%를 넘어갈 때, 띄어쓰기없는 텍스트로 인해 오버플로될 때 등

### [Critical CSS Generator](https://critical-css-extractor.kigo.studio/)

- 웹 페이지의 보이는 영역을 렌더링하기 위한 CSS를 추출해주는 서비스

# Javascript

### [Want to Be a Better Frontend Engineer? Try a Week On-Call](https://denodell.com/blog/try-a-week-on-call)

- 문제가 프론트엔드에 없더라도, 문제가 어디서 시작되든 대응해야 할 것은 프론트
- 경험에 대한 소유권은 프론트엔드에 존재.
- 로딩 상태, 손상된 데이터, 실패로부터 회복하기 등 실패를 대비하기

### [JavaScript broke the web (and called it progress)](https://www.jonoalderson.com/conjecture/javascript-broke-the-web-and-called-it-progress/)

- 어느 순간부터 사용자가 아닌 개발자를 위한 웹사이트를 제작.
- 앱 같은 성능도 더 나은 사용자 경험도 얻지 못한 채 복잡성의 군비 경쟁중

# ETC

### [HTML spec change: escaping < and > in attributes](https://developer.chrome.com/blog/escape-attributes?hl=en)

- element.outerHTML 사용 시 과거에는 부모 엘리먼트가 그대로 표시되었으나 이제 <, > 가 이스케이프
- 20250624 부터 크롬, 파이어폭스에 적용. 202509 부터 사파리26 베타에도 포함.

### [Becoming a good engineer](https://0x0001.cc/blog/good-engineer.md)

- 엔지니어란 “과학적 원리를 분석, 설계, 발명, 코딩, 제작하여 문제를 해결하고 더 나은 세상을 만드는 사람”. 자신이 선택한 분야의 모든 측면에 정통해야 함.
- 엔지니어로서 가장 중요한 것은 문제를 해결하거나 개념을 증명하기 위해 지식을 적용하는 것.
- 최고의 엔지니어는 끊임없이 배우고, 자신의 가정에 도전하고, 모든 일에서 탁월함을 추구. 배운것을 적용하고 객관적인 시각으로 자신의 작업을 분석하고 효과적으로 협업함.

### Release

- [Biome v2—codename: Biotype](https://biomejs.dev/blog/biome-v2/)
    - JS, TS 린터 중 최초로 TS 컴파일러에 의존하지 않는 린트
    - migrate 커맨드와 가이드 문서 제공
        - [https://biomejs.dev/guides/upgrade-to-biome-v2/](https://biomejs.dev/guides/upgrade-to-biome-v2/)
- [astro 5.10](https://astro.build/blog/astro-5100/)
- [relay v20](https://github.com/facebook/relay/releases/tag/v20.0.0)
- [fastify v5.4.0](https://github.com/fastify/fastify/releases/tag/v5.4.0)
- [react native 0.80](https://reactnative.dev/blog/2025/06/12/react-native-0.80)