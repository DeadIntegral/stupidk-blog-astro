---
title: dev-weekly 2026-11-28
date: "2026-11-28T18:35:00+09:00"
description: "번들러 없이 의존성을 관리하는 Nudeps, vlt의 무료 npm 미러, 브라우저에서 llama.cpp를 실행하는 wllama와 AI 시대 개발자의 역량 및 에이전트 친화적인 모노레포 설계를 살펴봅니다."
tags: ["devtools", "npm", "ai", "wasm", "browser", "monorepo", "bun", "security"]
---

# Javascript

### [Nudeps: bundler-like imports, none of the baggage](https://lea.verou.me/blog/2026/nudeps/)

- 번들러가 필요하지 않은 프로젝트에서 디펜던시 처리를 가볍게 떼어낸 도구
- 내부적으로 필요한 패키지만 client_modules로 복사하고 import map을 생성. 개발자가 작성한 js 코드는 건드리지 않고 node_modules만 수정.

# Nodejs

### [vlt is open to everyone: a free npm registry, no account, no token](https://www.vlt.io/blog/free-public-npm-mirror)

- vlt 1.8.0부터 무료 npm mirror를 운영. npm 레지스트리와 호환되는 공개 mirror라서 레지스트리 URL만 교체하면 사용 가능.
- 단순 CDN이 아니라 패키지 메타데이터와 tarball을 가까운 위치에서 제공해 설치 속도와 가용성을 높임

# AI

### [When Everything Has Changed, What Do We Do Next?](https://css-tricks.com/when-everything-has-changed/)

- 개발자의 가치는 구현 속도가 아니라 경험, 지식, 맥락 이해, 창의성에 있고 AI가 반복 작업을 대신할수록 인간의 역량을 의도적으로 유지해야 한다는 글.
- 조직은 AI로 절약한 시간을 더 많은 산출물로 채우기보다 학습과 실험에 다시 투자해야 한다는 주장.

### [wllama: WASM binding for llama.cpp](https://github.com/ngxson/wllama)

- llama.cpp를 브라우저에서 실행시키는 라이브러리.
- 모델은 GGUF를 사용. 멀티스레드를 사용하려면 COOP, COEP 헤더 필요.

### [How I fixed 55 bugs in a week by making my monorepo more agent-friendly](https://www.devas.life/how-i-fixed-55-bugs-in-a-week-by-making-my-monorepo-more-agent-friendly/)

- 에이전트에게 규칙을 더 많이 주는 것보다 에이전트가 보고 따라 할 코드베이스 자체를 더 좋은 패턴으로 만드는 것의 중요성

# ETC

### Release

- [bun v1.4.5](https://bun.com/blog/bun-v1.4.5) - 보안 업데이트
- [ioredis v6.1.0](https://github.com/redis/ioredis/releases/tag/v6.1.0)
