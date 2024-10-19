---
title: dev-weekly 2024-10-19
date: "2024-10-19T20:45:00.000Z"
description: "dev-weekly 2024-10-19"
tags: ["javascript", "CSS", "node"]
---

# CSS

### [Quick guide to web typography for developers](https://sinja.io/blog/web-typography-quick-guide)

- CSS를 조작하여 앱, 웹의 텍스트를 보기좋게 만드는 방법. 20%의 노력으로 80%의 효과를 보려는 개발자를 위한 팁.
- 로컬 폰트 사용, 익스터널 폰트의 경우 woff2 장점, 배리어블 폰트 사용의 장점, 서브셋팅(사용하지 않는 글리프 제거)
- font-size, line-height, max-width, letter-space 권장안
- 모바일에서의 폰트 - text-size-adjust, antialiased, grayscale

# Node

### [The story of web framework Hono, from the creator of Hono](https://blog.cloudflare.com/the-story-of-web-framework-hono-from-the-creator-of-hono/)

- 멀티 런타임 프레임워크 hono (2.0.0 부터 Deno, Bun 지원)
- 핸들러와 미들웨어 - RPC, Zod, JSX, Testing 예제

### [Node v23.0.0 (Current)](https://nodejs.org/en/blog/release/v23.0.0)

- require(esm) default 활성화
- windows 32비트 시스템 지원 종료

# Javascript

### [The nuances of base64 encoding strings in JavaScript](https://web.dev/articles/base64-encoding?hl=en)

- JS에서 base64 인코딩, 디코딩은 유니코드에서는 작동하지 않음. (JS는 문자열을 UTF-16으로 처리.)
- MDN에서 소개하는 것처럼 Uint8Array을 사용하는 방법 존재. 그러나 출력이 변경되는 케이스 존재 (surrogate)
- 모던 브라우저에서는 isWellFormed() 지원. encodeURIComponent() 를 사용하면 비슷한 결과. 대신 서로게이트 하나만 포함되어 있으면 URIError 발생.

# ETC

### [An Abridged History of Safari Showstoppers](https://webventures.rejh.nl/blog/2024/history-of-safari-show-stoppers/)

- 지난 10년간 발생한 최악의 문제 정리
- 소셜, 미디어 앱을 네이티브로 만든다고 가정할 때의 문제들 (push, 각종 스토리지 미지원 기간)
- 망가진 indexedDB, 100vh이슈, overflow: hidden 에서 스크롤 가능, WASM중단, 백그라운드 오디오 끄기, fullscreen API, etc

### [Linkpreview](https://linkpreview.xyz/)

- 구글 검색 결과, 트위터(X), 페이스북, 디스코드, 왓츠앱, 링크드인, 텔레그램에 링크했을 때 보이는 뷰 미리보기

### Release

- [Announcing TypeScript 5.7 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-7-beta/)
- [docx 9.0](https://github.com/dolanmiu/docx/releases/tag/9.0.0)
- [Electron 33](https://www.electronjs.org/blog/electron-33-0)
- [Zustand v5.0.0](https://github.com/pmndrs/zustand/releases/tag/v5.0.0) (react 18 이상)
- [Next.js 15 RC 2](https://nextjs.org/blog/next-15-rc2)
- [Javet v4.0.0](https://github.com/caoccao/Javet/releases/tag/4.0.0)