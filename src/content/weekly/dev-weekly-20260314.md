---
title: dev-weekly 2026-03-14
date: "2026-03-14T21:54:00.000Z"
description: "dev-weekly 2026-03-14"
tags: ["javascript", "nodejs"]
---

# CSS

# Javascript

### [Video.js v10 Beta: Hello, World (again)](https://videojs.org/blog/videojs-v10-beta-hello-world-again)

- AI 기반 개발로의 전환을 위한 토대 마련
- 디폴트 번들 사이즈 88% 감소, 선택한 프레임워크의 개발 패턴을 활용한 맞춤 설정 제공, AI 에이전트가 플레이어 개발을 함께 진행하면서 코드베이스 및 문서 설계
- SPF의 목표는 HLS.js와 같은 완전한 기능을 갖춘 엔진 대체가 아닌 일반적이고 간단한 사례에서 파일 사이즈 감소.
- UI 커스텀 가능 및 디폴트 스킨 제공. React, Web Component 등 지원 및 앞으로 더 많은 도구 지원할 것.
- ai 에이전트가 문서에 접근하면 마크다운을 전송해서 불필요한 컨텍스트 감소

### [Vite 8.0 is out!](https://vite.dev/blog/announcing-vite8)

- rolldown 탑재.
- nodejs 20.19이상, 22.12 이상 필요
- [마이그레이션 가이드](https://vite.dev/guide/migration)

# Nodejs

### [My Personal Skills for AI-assisted Node.js Development](https://adventures.nodeland.dev/archive/my-personal-skills-for-ai-assisted-nodejs/)

- Matteo Collina의 ai SKILL.md 공유
- 코딩 작업의 대부분은 AI 어시스트에게 맡기지만 생성한 모든 코드는 직접 검토. 코드의 엉성함과 수정해야 할 부분에 지쳐서 만든 skills.
- fastify, node, node-core, oauth, documentation, …

# ETC

### [How to steal npm publish tokens by opening GitHub issues](https://neciudan.dev/cline-ci-got-compromised-here-is-how)

- cline 은 누군가 깃헙 이슈를 열면 Claude가 이슈를 읽고 레이블을 지정하고 댓글을 남기도록 설정되어 있었음. 이슈 제목을 프롬프트에 넣도록 했지만 시크릿 키 접근은 허용되지 않음.
- Github Actions는 공유 캐시 풀(최대 10GB) 이 있고 디폴트 브랜치의 모든 워크플로는 이 캐시에서 데이터를 읽고 씀. 러너를 통해 의미없는 10GB를 기록, actions는 LRU라서 정상적인 node_modules들 제거됨. 공격자는 동일한 키로 새로운 캐시 항목 작성. 여기엔 변조된 node_modules를 포함.
- 야간 릴리스 워크플로는 예약작업이 있었고, 키가 일치하는 항목을 찾아 공격자가 변조한 버전을 워크스페이스에 복원. 이후 릴리스 워크플로에서 실행되는 모든 코드는 손상된 환경에서 실행.

### [How fast is fast enough? Rethinking web performance in pragmagical terms](https://www.speedcurve.com/blog/fast/)

- 빠른 제품들에 대해 사람들은 빠르다고 하지 않고 훌륭하다고 함. 속도는 눈에 보이지 않지만 이 특성 때문에 강력함.
- 속도는 비즈니스 임팩트 뿐 아니라 사용자 경험의 본질적인 요소
- 요즘 유저 경험을 묻지 않고 SEO 점수를 최적화 하는데 집중함.
- 실험으로 의도적인 지연을 만들었다가 해제해보면 그래도 여전히 해당 실험군은 리텐션 낮음.
- 지난 몇년 사람들은 구글의 CWV 에만 집중하고 자신들의 사용자 데이터 분석에 소홀
- 실용적인 속도란 사업 목표 달성, 회귀모니터링, ROI 최적화
- 마법 같은 속도란 인지 마찰 제거, 즉각적인 상호작용

### Release

- [solid v2.0.0-beta.0](https://github.com/solidjs/solid/releases/tag/v2.0.0-beta.0)
- [typescript 6.0 rc](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0-rc/)
- [astro v6.0.0](https://astro.build/blog/astro-6/)
- [ArkType v2.2](https://arktype.io/docs/blog/2.2)
- [reveal.js v6.0.0](https://github.com/hakimel/reveal.js/releases/tag/6.0.0)
    - 공식 React 래퍼 추가. 플러그인, ES모듈, CSS 등 경로변경 과 같은 BC존재.
- [verdaccio v6.3.1](https://github.com/verdaccio/verdaccio/releases/tag/v6.3.1)
- [mercurius v16.8.0](https://github.com/mercurius-js/mercurius/releases/tag/v16.8.0)