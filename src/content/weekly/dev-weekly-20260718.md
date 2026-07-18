---
title: dev-weekly 2026-07-18
date: "2026-07-18T14:39:00+09:00"
description: "WebGPU 전용 초경량 렌더러 Babylon Lite, 자체 엔진의 경량 JS 런타임 Ant, 2026년에도 빌드 도구가 필요한가, 클라이언트 신호로 봇을 잡는 Cloudflare Precursor까지 이번 주 개발 소식."
tags: ["webgpu", "performance", "runtime", "bundler", "cloudflare", "security", "css", "design-system"]
---

# CSS

### [UX Components: A practical reference for UI components across design systems.](https://www.ux-components.com/)

- 다양한 개별 컴포넌트를 각 디자인 시스템에서 어떻게 안내가 어떻게 안내하는지 제공
- 컴포넌트별 디자인 시스템 비교

# Javascript

### [Welcome to Babylon Lite](https://doc.babylonjs.com/lite/)

- WebGPU 전용, 데이터 지향적인 렌더러. 바빌론js가 제공하는 렌더링 품질을 그대로 재현하지만 대체는 불가능. 하위호환대신 작은 패키지 크기 제공. 필요한 기능만 동적으로 로드.
- 바빌론js의 코드를 복사한 것이 아닌 수학적 원리를 이해한 뒤 동일한 이미지 재현을 위한 최소한의 코드 작성.
    - 동일한 이미지라는것은 시각적으로 구별이 안된다는 것이고 MAD임계값 존재.
- 번들은 평균 19배 작고, RAF CPU는 3~4배 빠름. 스타트업은 2.5배 빠르고 메모리 5배 적게 사용.

### [Ant: A JavaScript runtime that carries more than it weighs.](https://antjs.org/)

- 경량 고성능 자바스크립트 런타임. Ant Silver 엔진은 직접 제작. V8, JSC, SpiderMonkey를 감싼 래퍼가 아님.
- NPM 에 비해 최대 40배 빠르게 패키지 설치가 가능하고, TS 빌드 과정 없음.

### [Do we still need build tools?](https://olliewilliams.xyz/blog/no-build/)

- 2026년 프론트엔드 개발에 빌드 도구가 여전히 필요할지, 웹 표준 및 브라우저가 얼마나 기능을 흡수했는지에 대한 글.
- 번들링은 여전히 유효. HTTP2/3 이 이론적으로 무제한 커넥션이라고 하지만 실제로는 약 100여개 리미트. 전이적 종속성에 대한 이슈 등.

### [Introducing Precursor: detecting agentic behavior with continuous client-side signals](https://blog.cloudflare.com/introducing-precursor/)

- 봇 공격 방지는 일종의 대립적인 상황. 공격자는 전략을 변경하고 방어자는 거기에 대응하는 형태 반복.
- Precursor는 사용자의 프라이버시를 최우선으로 고려해 개발한 클라이언트 사이드 기반 인증 시스템.
- 인간의 움직임은 단순히 노이즈가 많은것이 아니라 물리 법칙 제약 받음.
    - 마우스 조작 동작은 대체로 호 모양이고 이는 손목의 움직임 범위와 팔뚝의 회전에 의해 제한.
    - 인지부하, 손떨림(생리적인 떨림 주파수대에서 떨림 발생)
- 클라이언트는 데이터를 수집하고 임시 메모리에 저장한 뒤 서버에 보내 검증.

# ETC

### [Visual design rules you can safely follow every time](https://anthonyhobday.com/sideprojects/saferules/)

- 인터페이스 디자이너가 알려주는 대비, 정렬, 간격 등에 대한 유용한 팁.
- e.g.
    - 기계적 정렬보다 시각적 정렬이 나은 경우들 존재
    - 글자 크기가 클수록 자간과 줄 간격을 좁히고, 글자 크기가 작을수록 넓히기
    - 컨테이너 테두리는 컨테이너와 배경 모두와 대비되는 색상
    - neutral 톤을 진하게 표현할 때 따뜻한 색이나 차가운 색 중 하나만 사용해야 함.
    - 그림자 블러 값은 거리의 2배를 사용
    - 컨테이너 색상은 밝기 제한 범위 내에서 사용. 어두울 때 밝기 차이는 12% 이내, 밝을 때는 7% 이내.
    - 어두운 인터페이스에서는 그림자 사용하지 않기
    - 텍스트와 함께 사용하는 아이콘은 대비 낮추기.

### Release

- [storybook v10.5.0](https://github.com/storybookjs/storybook/releases/tag/v10.5.0)
- [nanoid v6.0.0](https://github.com/ai/nanoid/releases/tag/6.0.0) - `nanoid()` 함수 성능 4배 증가.