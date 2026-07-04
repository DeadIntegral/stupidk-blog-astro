---
title: dev-weekly 2026-07-04
date: "2026-07-04T21:22:00+09:00"
description: "CSS 설계 실수를 바로잡는 FixCSS, VSCode의 TypeScript 7 이행, GPU 없는 서버에서 크롬 플래그로 WebGL 4배 빠르게, styled-components→StyleX 전환과 npm 고영향 계정 보호까지 이번 주 개발 소식."
tags: ["css", "typescript", "performance", "webgl", "npm", "security", "node", "html"]
---

# CSS

### [FixCSS: Library to rectify mistakes in the design of CSS](https://tangled.org/vale.rocks/FixCSS)

- CSS는 설계 과정에서 다양한 실수가 있었고 CSS working group도 이를 인정하여 불완전한 실수 목록 문서 작성. 이 라이브러리는 이러한 문제점을 해결하여 원래 설계 방식대로 작성할 수 있도록 가이드. 올바른 사용법 예시 보여줌.

# Javascript

### [Iterating faster with TypeScript 7](https://code.visualstudio.com/blogs/2026/06/26/iterating-faster-with-ts-7)

- VScode를 TS7으로 마이그레이션하는 여정

### [Moving Linear from styled‑components to StyleX](https://www.skovhus.dev/blog/moving-linear-from-styled-components-to-stylex)

- Linear의 styled-components to StyleX 마이그레이션
- 현재 58% 전환, 렌더링 성능 30% 향상

### [WebGL without a GPU: How one chrome flag makes 3D pages render 4× faster](https://microlink.io/blog/webgl-without-a-gpu)

- Microlink는 웹페이지의 스크린샷을 찍어주는 서비스. 요즘 서비스들은 WebGL 많이 사용. 하지만 서버는 보통 GPU가 없음.
- GPU가 없는 서버에서 크롬 실행하면 디폴트는 SwiftSahder 실행. `--use-angle=gl` 을 사용하면 리눅스 내장 Mesa llvmpipe를 사용하고 성능 개선 약4배.

### [Streaming HTML](https://olliewilliams.xyz/blog/streaming-html/)

- `TextDecoderStream()` , `.textStream()`을 통해 HTML 스트리밍하기
- `streamHTML` 을 비롯한 streamHTML으로 엘리먼트 업데이트

# Node

### [npm adds preventive account protection for high-impact accounts](https://github.blog/changelog/2026-06-25-npm-adds-preventive-account-protection-for-high-impact-accounts/)

- 영향력이 큰 계정에 민감한 계정 변경 감지되면 임시 예방 조치 추가. 이메일 주소나 2FA 복구 코드 사용하면 해당 계정은 72시간 동안 읽기 전용 상태로 전환 후 이전 이메일 주소로 알림 전송

### [Nodejs: Guides and FAQs for first-time contributors](https://github.com/nodejs/node/blob/main/doc/contributing/first-contributions.md)

- Joyee Cheung이 작성한 Node 프로젝트에 처음 기여하는 사람들을 위한 공식 가이드.

# ETC

### Release

- [Deno 2.9](https://deno.com/blog/v2.9)
- [Prettier 3.9](https://prettier.io/blog/2026/06/27/3.9.0)
- [Rspack 2.1](https://rspack.rs/blog/announcing-2-1)
- [electron v43.0.0](https://github.com/electron/electron/releases/tag/v43.0.0)
- [git 2.55](https://github.blog/open-source/git/highlights-from-git-2-55/)
    - incremental 멀티팩 인덱스를 사용한 Repacking
    - git history fixup(실험적 기능)을 통한 이전 커밋 수정
- [fastify v5.9.0](https://github.com/fastify/fastify/releases/tag/v5.9.0)