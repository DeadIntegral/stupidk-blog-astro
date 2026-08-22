---
title: dev-weekly 2026-08-22
date: "2026-08-22T19:25:00+09:00"
description: "Rust로 다시 쓴 Bun 1.4와 그 안에 들어간 React 컴파일러, Codex에서 GPT-5.6 Sol의 100만 토큰 컨텍스트 여는 법, 로지텍 Options+를 대신하는 로컬 우선 대체품까지 이번 주 개발 소식."
tags: ["bun", "rust", "node", "react", "compiler", "performance", "ai"]
---

# Javascript

### [Bun 1.4](https://bun.com/blog/bun-v1.4)

- Rust로 다시 작성한 첫 릴리스
- nodejs 호환성 - playwright, next.js 16, vitest 등 호환
- 최적화 - 메모리, CPU 사용량 감소. 바이너리 크기 감소.
- 옵저버빌리티 - 기존도구 호환. cpu, 힙 프로필 마크다운으로 작성 등 제공
- 리액트 컴파일러 내장. 바벨보다 20배 성능.

# AI

### [1M token context window in Codex for GPT-5.6 Sol](https://x.com/thsottiaux/status/2089082893804896524)

- `~/.codex/config.toml` 에서 다음 설정

```jsx
model = "gpt-5.6-sol"
model_context_window = 1000000
model_auto_compact_token_limit = 900000
```

# ETC

### [Your Logitech mouse, keyboard, camera, finally local.](https://openlogi.org/)

- Rust로 작성된 로지텍 옵션+ 의 로컬 퍼스트 대체품.
- 마우스의 각 영역들 핫스팟 오버라이드 가능. Options+의 모든 기능 계정 없이 이용 가능