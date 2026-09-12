---
title: dev-weekly 2026-09-12
date: "2026-09-12T20:45:00+09:00"
description: "Turbopack의 청킹 전략, Fetch 응답 본문과 스트림 처리 시 주의점, CSS로 구현하는 커스텀 스크롤바, Node 내장 벤치마크와 .name 도메인 서비스 종료의 보안 문제까지 이번 주 개발 소식."
tags: ["javascript", "bundler", "css", "node", "performance", "animation", "chrome", "security"]
---

# Javascript

### [How Turbopack chunks your JavaScript](https://nextjs.org/blog/turbopack-chunking)

- 터보팩의 Chunk Group을 통한 청킹 전략 개선. 청크를 작은 단위로 나누고 페이지에서 함께 필요로 하는 것들을 하나의 그룹으로 묶기.

### [Half Past Fetch](https://blog.gaborkoos.com/posts/2026-09-08-Half-Past-Fetch/)

- await fetch(url)은 응답을 기다리는 것 같지만 헤더만 기다림. Response 본문은 여전히 전송중이며 일반적으로 await을 두번 사용하는 이유.
- body를 읽지 않으면 http 연결 재사용이 제한될 수 있고, Response.clone()은 복사가 아닌 스트림 분기라 읽지 않는 만큼 메모리 쌓일 수 있음.

### [Custom Scrollbar Component In 2026](https://blog.master.dev/custom-scrollbar-component-in-2026/)

- 앵커 포지셔닝, 스크롤 드리븐 애니메이션 등을 활용해 커스텀 스크롤바의 크기, 위치, 노출 여부 등 상당수를 SCC로 구현.
- scroll, ResizeObserver 계산이 없어 reflow, DOM 업데이트 비용 감소.
- 마우스로 스크롤바 드래그 앤 드랍하는 부분만 JS로 처리

# Nodejs

### [node:bench](https://www.jasnell.me/posts/a-node-bench-module)

- nodejs 내장 벤치마크 추가.
- `node --bench benchmark.mjs` , `node --bench --bench-reporter=json 'benchmarks/**/*.js'`형태로 실행
- 이 모듈은 안정성 1.0, CLI 플래그는 실험적인 기능

# ETC

### [Chrome again exempts Google from user site data settings](https://lapcatsoftware.com/articles/2026/9/1.html)

- 크롬 데이터 삭제에서 구글 예외되는 버그. 창을 닫을 때 모든 데이터 삭제로 설정해도 구글은 남아있음. 지금은 수정.

### [.name Termination](https://neil.fraser.name/news/2026/09/03/)

- Verisign이 관리 편의를 이유로 .name의 3차 도메인 서비스를 종료하기로 했고 ICANN이 승인.
- 2차 도메인이 다른 사람에게 넘어가면 기존 주소를 재현해 계정 탈취, 코드 서명 등 모든것이 가능. 약 22,000명이 영향.

### Release

- [vitest 5.0](https://vitest.dev/blog/vitest-5)
- [bun v1.4.2](https://bun.com/blog/bun-v1.4.2)
- [rslib v1.0](https://rslib.rs/blog/v1-0)
- [Javet 6.0.0](https://www.caoccao.com/Javet/)
