---
title: dev-weekly 2024-08-24
date: "2024-08-24T20:45:00.000Z"
description: "dev-weekly 2024-08-24"
tags: ["css", "node", "javascript"]
---

# CSS

### **[Speeding Up Your Sass Compilation in Vite and Webpack](https://www.oddbird.net/2024/08/14/sass-compiler)**

- Sass를 가져올 때 마다 새 인스턴스가 시작되고 컴파일 후 종료.
- Sass인스턴스를 재사용할 수 있도록 새로운 Compiler API 추가됨.
- vite 5.4.0 이상 webpack 14.2.0 이상에서 사용 가능.

# Node

### **[Protobuf-ES 2.0 is now generally available](https://buf.build/blog/protobuf-es-v2)**

- JS,TS를 위한 Protobuf ES 릴리스.
- Protobuf Edition을 지원, 새로운 API 제공, Protobuf의 JSON 포맷에 대한 TS 타이핑, 풀 리플렉션 API, Protobuf 커스텀 옵션 지원, 익스텐션 레지스트리 관리를 위한 API 등 제공

# Javascript

### **[Regexes Got Good: The History And Future Of Regular Expressions In JavaScript](https://www.smashingmagazine.com/2024/08/history-future-regular-expressions-javascript/)**

- 백트래킹 엔진을 사용하여 ReDos취약점이 있지만 성능 좋음
- lookbehind(무한 길이 지원), unicode 속성 지원
- 이모티콘 매칭 - `\p{RGI_Emoji}`
- 중복된 이름 캡쳐링 그룹 - 프로포절 3이지만 모던 브라우저들 지원(크롬 125, 사파리17.0, FF129, 안드로이드 크롬 127)

### **[50 TypeScript F*ck Ups](https://leanpub.com/50-ts)**

- https://github.com/azat-co/50-ts/blob/main/00-welcome.md 깃헙에서 무료로 읽기 가능
- TS로 작업은 하지만 이해할 시간이나 기회가 부족했던 엔지니어들을 위한 책.

# ETC

### **[Bun v1.1.25](https://bun.sh/blog/bun-v1.1.25)**

- `node:cluster` 지원
- Initial V8 Cpp API를 사용하는 노드 패키지를 호환하기 위해서 해당 API 지원. Bun은 JSCore 기반이고 둘의 GC가 다름. 아직은 cpu-features만 지원.
- `node:http` 클라이언트 구현의 버그를 수정해서 `aws-sdk/client-s3` 의 S3 업로드 속도 5배 상승
- Bun의 스탠드얼론 실행 파일은 `Worker`와 `node:worker_threads`의 번들링 지원

### **[tinykeys: modern library for keybindings](https://github.com/jamiebuilds/tinykeys)**

- 650byte의 키보드 숏컷 바인드 라이브러리

### **Release**

- [Cheerio 1.0 Released, Batteries Included](https://cheerio.js.org/blog/cheerio-1.0)
- [Astro v4.14](https://astro.build/blog/astro-4140/)
- [pnpm v9.8.0](https://github.com/pnpm/pnpm/releases/tag/v9.8.0)
- [chartjs v4.4.4](https://github.com/chartjs/Chart.js/releases/tag/v4.4.4)