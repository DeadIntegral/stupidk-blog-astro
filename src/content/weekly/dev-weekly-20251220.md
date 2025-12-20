---
title: dev-weekly 2025-12-20
date: "2025-12-20T17:52:00.000Z"
description: "dev-weekly 2025-12-20"
tags: ["javascript"]
---

# Javascript

### [The JavaScript Bundler Grand Prix](https://redmonk.com/kholterhoff/2025/12/16/javascript-bundler-grand-prix/)

- 번들러 성능 개선에는 많은 노력을 하고 있는데, 런타임 성능 개선은 뒷전. 사용자 경험 개선이 우선되어야함.
- 번들러는 많은 성능 개선을 이뤘고 상향평준화. “지속가능한 방향으로 확장성 확보” 로 진화해온 JS 커뮤니티의 흐름을 반영.

### [Introducing RSC Explorer](https://overreacted.io/introducing-rsc-explorer/)

- RSC 프로토콜은 React 세부 구현사항이라 명시적인 문서 없음. 작동 방식을 보여주는 작은 도구를 만들어보게 됨.
    - [https://rscexplorer.dev/](https://rscexplorer.dev/)
- RSC Explorer은 SPA. 서버 부분은 워커에서 실행되지만, React가 RSC 프로토콜을 사용하는것과 동일한 패키지를 사용하여 구축되었기 때문에 출력 모든 라인이 실제 값.

# ETC

### [21 Lessons from 14 Years at Google](https://addyo.substack.com/p/21-lessons-from-14-years-at-google)

- 진작 알았다면 좋았을 교훈들 - addy osmani
- The best engineers are obsessed with solving user problems. 솔루션부터 시작하는 엔지니어는 솔루션을 정당화하기 위해 복잡성을 더해가는 경향 존재.
- Being right is cheap. Getting to right together is the real work.
- Clarity is seniority. Cleverness is overhead. 명확성은 스타일 선호도가 아니라, 운영상의 위험을 줄이는 요소.
- Your code doesn’t advocate for you. People do.
- At scale, even your bugs have users.
- Most “slow” teams are actually misaligned teams.
- Focus on what you can control. Ignore what you can’t.
- If you win every debate, you’re probably accumulating silent resistance.
- Process exists to reduce uncertainty, not to create paper trails.
- [https://news.hada.io/topic?id=24909](https://news.hada.io/topic?id=24909)

### Release

- [nextjs 16.1](https://nextjs.org/blog/next-16-1)
- [Bun v1.3.5](https://bun.com/blog/bun-v1.3.5)
- [tesseract v7.0.0](https://github.com/naptha/tesseract.js/releases/tag/v7.0.0)
- [base-ui v1.0.0](https://github.com/mui/base-ui/releases/tag/v1.0.0)