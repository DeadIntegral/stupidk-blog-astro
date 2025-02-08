---
title: dev-weekly 2025-02-08
date: "2025-02-08T15:10:00.000Z"
description: "dev-weekly 2025-02-08"
tags: ["css", "javascript", "node", "deno"]
---

# CSS

### [The Mistakes of CSS](https://css-tricks.com/the-mistakes-of-css/)

- 한번 출시하면 변경 불가능한 CSS의 특성
- CSS 실수 목록 - [https://wiki.csswg.org/ideas/mistakes](https://wiki.csswg.org/ideas/mistakes)

### [Change font-weight based on the user's screen DPI](https://muffinman.io/blog/font-weight-based-on-dpi)

- DPI에 따른 저해상도 font weight대응
    
    ```css
    h1 { font-weight: 300; }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    	h1 { font-weight: 100; }
    }
    ```
    
- Mac에서 테스트 하기: 접근성 - 확대/축소 - 고급 - 부드러운 이미지 체크 해제. 브라우저 줌 변경, 시스템 줌 변경

# Node

### [Intro to Wasm in Deno](https://deno.com/blog/intro-to-wasm)

- Deno에서 WASM 컴파일 및 사용하기

# Javascript

### [Feature: DOM State-Preserving Move](https://chromestatus.com/feature/5135990159835136)

- 엘리먼트의 상태를 재설정하지 않고 DOM tree에서 엘리먼트를 이동할 수 있는 DOM Primitive(moveBefore) 추가
- Element, Document, DocumentFragment 같은 부모노드에서 사용 가능.

### [Which rich text editor framework should you choose in 2025?](https://liveblocks.io/blog/which-rich-text-editor-framework-should-you-choose-in-2025)

- Tiptap, BlockNote, Lexical, Slate, ProseMirror, Quill, Plate, Remirror, Editor.js, CKEditor, TinyMCE 비교. 각각의 장단점, 실시간 동시편집(대게 yjs 호환)지원 할 방법, 데코레이터 기능 등에 대한 비교.

# ETC

### [Detect license usage restrictions in your project: feluda](https://github.com/anistark/feluda)

- 프로젝트의 의존성을 분석하고, 라이선스를 기록하고, 퍼스널/커머셜 사용을 제한하는 권한에 플래그를 지정하는 Rsut 기반 커맨드 라인 도구

### Release

- [Announcing TypeScript 5.8 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/)
- [Bun v1.2.2](https://bun.sh/blog/bun-v1.2.2)
- [haapy-dom v17.0.0](https://github.com/capricorn86/happy-dom/releases/tag/v17.0.0) - ESM 지원