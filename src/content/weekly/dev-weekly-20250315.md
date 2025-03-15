---
title: dev-weekly 2025-03-15
date: "2025-03-15T22:32:00.000Z"
description: "dev-weekly 2025-03-15"
tags: ["javascript", "css", "node"]
---

# CSS

### [Grouping Selection List Items Together With CSS Grid](https://css-tricks.com/grouping-selection-list-items-together-with-css-grid/)

- grid를 이용해 CSS만으로 선택된 리스트를 그룹핑하는 방법 feat.
- 그룹핑을 위한 `grid-area` , 정렬을 위한 `auto-fill`  혹은 `justify-content`

### [Faster Rendering with the content-visibility CSS Property](https://www.debugbear.com/blog/content-visibility-api)

- `content-visibility` 를 사용하면 안되는 예시
- auto 값을 줬을 때 브라우저가 크기를 모르는 이슈 - contain-intrinsic-size
- `contain` 프로퍼티에 대한 설명

# Node

### [PGlite](https://github.com/electric-sql/pglite)

- [ElectricSQL](https://electric-sql.com/) 에서 제공하는 Postgres의 WASM 빌드

### [Node v20.19.0 (LTS)](https://nodejs.org/en/blog/release/v20.19.0)

- require(esm) 기본 활성화
- `--no-experimental-require-module` no를 붙인 플래그가 되어 끌 수 있게됨.

# Javascript

### [View Transitions Applied: Smoothly animating a `border-radius` with a View Transition](https://www.bram.us/2025/03/11/view-transitions-border-radius/)

- view transition 에서 border-radius와 배경색 등은 애니메이션이 이전 상태와 새로운 상태를 전환해버리는 이슈
- `::view-transition-group` 에 커스텀 애니메이션을 바인드하여 부드러운 애니메이션 하는 방법 소개

### [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)

- TS의 성능을 근본적으로 개선하기 위해 go로 포팅하는 작업 시작
- TS 7 에서 적용될 예정.

### [Introducing command and commandfor](https://developer.chrome.com/blog/command-and-commandfor?hl=en)

- `command` , `commandfor`  어트리뷰트 추가.
- 기존에 popover이벤트를 js로 컨트롤 했는데 이제 html 에서 컨트롤 가능

```html
<button commandfor="my-menu" command="show-popover">Open Menu</button>
<div popover id="my-menu">
  <!-- ... -->
</div>
```

# ETC

### [Use our code translator easily achieve language localization](https://www.i18ncode.com/en)

- JSON 데이터를 넣으면 값만 선택한 언어로 번역해주는 도구

### Release

- [Bun v1.2.5](https://bun.sh/blog/bun-v1.2.5)
- [Electron v35](https://www.electronjs.org/blog/electron-35-0)
- [zx 8.4.0](https://github.com/google/zx/releases/tag/8.4.0)
- [capacitor v7.1.0](https://github.com/ionic-team/capacitor/releases/tag/7.1.0)