---
title: dev-weekly 2025-09-13
date: "2025-09-13T20:13:00.000Z"
description: "dev-weekly 2025-09-13"
tags: ["css", "nodejs", "javascript", "bun", "deno"]
---

# CSS

### [You Don’t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)

- UX를 향상시키기 위해 언제, 어떻게 애니메이션을 적용해야 하는지 예시와 함께 설명
- 목적의 유무, 사용 빈도, 속도의 인지 등
    - 빈도가 잦은 영역은 애니메이션 빼는게 좋음.
    - 로딩 스피너는 빠르게 도는게 체감 성능이 더 좋음.
    - UI 애니메이션은 300ms 이하를 권장

### [The History of Themeable User Interfaces](https://bradfrost.com/blog/post/the-history-of-themeable-user-interfaces)

- 1970년대 GUI 의 등장부터 현대에 이르기까지의 테마의 역사
    - 마리오, 루이지는 기술적 난관 극복을 위한 테마 적용 가능한 UI (테마만 다름). 구름과 덤불도 모양은 같고 테마만 다름.
- 디자인 토큰의 컨셉과 기원
    - 세일즈 포스의 Jina Anne, Jon Levine이 로우 레벨 디자인 결정에 “디자인 토큰”이라는 이름을 부여.

# Nodejs

### [npm Author Qix Compromised via Phishing Email in Major Supply Chain Attac**k**](https://socket.dev/blog/npm-author-qix-compromised-in-major-supply-chain-attack)

- Qix 계정 손상, npm 패키지 악성 버전 게시
- chalk, wrap-ansi 등을 포함하여 주간 다운로드 2~30억건에 해당하는 패키지들 감염

### [Zero-configuration Express backends](https://vercel.com/changelog/zero-configuration-express-backends)

- vercel에서 express지원.

### [Master the Node.js Runtime](https://www.thenodebook.com/)

- nodejs 무료 온라인 서적
- nodejs 아키텍처에서 시작하여 libuv, v8 compile 에 이르기까지 딥 다이브

### [Behind The Scenes of Bun Install](https://bun.com/blog/behind-the-scenes-of-bun-install)

- nodejs가 탄생한 2009년에는 서버가 I/O 작업을 기다리는데 95%의 시간을 소비. 노드는 이러한 문제를 이벤트루프 등을 통해 해결했고 패키지 관리자는 노드를 계승. 16년이 흐르며 지금의 병목은 I/O가 아니라 system call
- user mode, kernel mode 전환 비용은 1000~1500 CPU 사이클. React와 그 종속성은 5만번 호출. Bun은 이 시스템 호출을 최소화.
- MacOS에 한하여 Async DNS 레졸루션을 통한 최적화 적용
- tarball 최적화 - 대부분의 패키지 매니저는 tarball데이터를 스트리밍하며 압축해제. 크기를 알 수 없기 때문에 버퍼를 늘리면서 받지만, 덕분에 동일 데이터를 복사하며 성능 병목. Bun은 압축 파일 전체가 메모리에 다운로드 될 때 까지 대기
- 캐시 친화적인 데이터 레이아웃 - package 데이터를 객체로 저장하면 캐시 미스가 자주 발생. Bun은 배열을 사용
- lockfile 역시 bun은 배열로 만들어서 중복 회피 및 캐시 친화적인 레이아웃으로 저장
- 압축 해제한 파일 복사에 있어서 OS별 최적화
- nodejs기반 패키지 매니저들은 싱클 코어 사용하는 반면 Bun은 멀티코어 사용

# Javascript

### [Splide: lightweight, flexible and accessible slider/carousel written in TypeScript](https://splidejs.com/)

- 의존성도 없고, lighthouse 에러도 없는 슬라이더. minify 29kb, gzip 12kb.
- nested slider, IE 10 지원, 접근성 지원

### [How to keep package.json under control](https://blog.val.town/gardening-dependencies)

- 새로운 패키지 설치할 때 어떤 것들이 설치되는지 읽어보기
- 코드 베이스가 얼마 없다면 라이센스와 함께 복사하기
- 패키지 실제 크기 분석하기
- renovate, knip 같은 도구로 사용하지 않는것은 제거하고, 나머지는 최신 상태로 유지하기
- 좋은 모듈을 만드는 사람들을 기억하기

### [Andromeda - JS/TS Runtime](https://tryandromeda.dev/)

- Rust, Nova 엔진으로 만든 JS/TS 런타임
- 적은 메모리 사용, 빌트인 제로컨피그 TS지원, WGPU 하드웨어 가속 지원
- 패키지 매니저 아직 없음

# ETC

### Release

- [Eletron 38](https://github.com/electron/electron/releases/tag/v38.1.0)
- [fastify v5.6.0](https://github.com/fastify/fastify/releases/tag/v5.6.0)
- [deno v2.5](https://deno.com/blog/v2.5)
- [Migration guide for Storybook 10](https://storybook.js.org/docs/10/releases/migration-guide)
    - 스토리북 10은 ESM-only
- [Expo Router v6](https://expo.dev/blog/expo-router-v6)
- [deno fresh v2](https://github.com/denoland/fresh/releases/tag/2.0.0)