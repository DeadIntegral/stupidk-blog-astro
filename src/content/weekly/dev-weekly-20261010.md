---
title: dev-weekly 2026-10-10
date: "2026-10-10T15:09:00+09:00"
description: "웹 플랫폼 기능 채택을 가로막는 요인, Deno 팀의 Cloudflare 합류, 웹 성능 데이터셋 BEACON 공개, SVG 2 스펙 업데이트, Preact 11과 Remix 3 등 주요 릴리스까지 이번 주 개발 소식."
tags: ["javascript", "css", "deno", "cloudflare", "performance", "svg", "preact", "remix"]
---

# Javascript

### [Why don’t more developers “use the platform”?](https://nolanlawson.com/2026/10/03/why-dont-more-developers-use-the-platform/)

- 개발자들이 플랫폼 기능보다 익숙한 라이브러리나 직접 구현을 선택하는걸 이해해보려는 글.
    - 과거의 낮은 호환성, 라이브러리 생태계, 이해하기 어려운 CSS 스펙 등
- 직접 구현의 장단점과 AI 에 대한 입장.

# Nodejs

### [Deno is joining Cloudflare](https://deno.com/blog/cloudflare)

- Deno 팀 전체가 클라우드플레어에 합류.
- Deno Deploy 를 구축하고 운영하는 과정에서 개발자 경험 이면의 복잡성들을 봤고 그것까지 단순화 하고 싶었음. 이는 Cloudflare Workers를 기반으로 한 Celled의 탄생으로 이어짐.
- 향후 1년동안 Deno 런타임을 지원할 예정 1년 후에는 개발 종료. 이후 Deno는 오픈 소스로 유지될 것.
- Deno Deploy는 6개월 운영 후 종료 예정. Cloudflare Workers로 이전하는 유료 고객에게는 마이그레이션 지원.
- JSR은 계속 운영하지만 인프라는 Cloudflare로 이전.

# ETC

### [How fast is the web? Explore billions of real-user measurements with BEACON](https://blog.cloudflare.com/how-fast-is-the-web/)

- 클라우드 플레어가 실제 사용자 성능 데이터셋 `BEACON` 공개. 상위 1만개 사이트에서 수집한 수십억건의 RUM 데이터 기반
- 브라우저, 국가, OS, 프로토콜별 성능 차이를 비교 가능.
- 사회, 네트워크, 지역적 맥락과 함께 분석 가능 (e.g. GDP와 결합해 경제적 수준과 웹 성능 관계)
- 이 데이터는 구글 빅쿼리 ([링크](https://console.cloud.google.com/bigquery?ws=!1m4!1m3!3m2!1scf-open-web-performance!2srumarchive&pli=1)) 에서 무료로 사용 가능

### [Updated Candidate Recommendation: Scalable Vector Graphics (SVG) 2](https://www.w3.org/news/2026/updated-candidate-recommendation-scalable-vector-graphics-svg-2/)

- SVG 2 스펙 업데이트. 2는 x, y, width, height 같은 일부 속성을 CSS 프로퍼티처럼 다룰 수 있도록 하는 geometry properties 컨셉 도입.
- paint-order 를 통해 fill, stroke, marker 가 그려지는 순서 제어 가능.

### Release

- [Preact 11](https://preactjs.com/blog/preact-11/)
- [remix v3.0.0](https://github.com/remix-run/remix/releases/tag/remix%403.0.0)
- [ink v8.0.0](https://github.com/vadimdemedes/ink/releases/tag/v8.0.0)
- [qwik 2 rc](https://next.qwik.dev/blog/qwik-2-rc/)
- [video.js v10.0.0](https://videojs.org/blog/videojs-10)
    - 8 대비 번들 60% 감소
- [Effect 4.0](https://effect.website/blog/releases/effect/40)
- [Panda CSS 2.0](https://panda-css.com/blog/panda-css-v2)
    - 컴파일러를 Oxc 기반의 Rust로 작성된 새로운 엔진으로 교체
