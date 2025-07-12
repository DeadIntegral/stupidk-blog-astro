---
title: dev-weekly 2025-07-12
date: "2025-07-12T19:56:00.000Z"
description: "dev-weekly 2025-07-12"
tags: ["css", "node", "javascript"]
---

# CSS

### [What is popover=hint?](https://una.im/popover-hint/)

- popover에는 `auto` , `manual`, `hint` (hint는 크롬 133에서 추가)의 3가지 타입 존재.
- esc키 사용 시 해제, 열릴 때 다른 팝오버가 닫힐지 제어 등 제공 기능 차이
- 하지만 아직은 JS 이벤트 리스너 필요

# Javascript

### [jsonrepair: Repair invalid JSON documents](https://github.com/josdejong/jsonrepair)

- 따옴표, 이스케이프, 괄호 등 누락 복구, 트레일링 콤마 제거 등을 통한 JSON 복구
- 스트리밍을 지원하며 무한히 큰 문서 처리 가능

### [line-numbers](https://github.com/zachleat/line-numbers)

- 콘텐츠 영역을 침범하지 않으면서, 옆에 라인 숫자를 렌더링 하는 웹 컴포넌트

# Nodejs

### [Parsing 1 Billion Rows in Bun/Typescript Under 10 Seconds](https://www.taekim.dev/writing/parsing-1b-rows-in-bun)

- 1BRC(10억 행 챌린지)를 Bun/TS 로 도전. 약 13.8GB
- 저자의 장비 램이 48GB 였기 때문에 한번에 메모리에 올리는걸 시도했지만 Nodejs의 Buffer는 4GB이기 때문에 실패. 청크로 나누고 개별적으로 읽도록 함.
- 파일 열 때의 버퍼 크기를 128KB로 설정. 이보다 클 경우 느려지기 때문. Bun 및 커널이 16-128KB와 같은 더 작은 버퍼에 최적화 되었기 때문.
- Bytes로 인덱싱하면 청크가 깨질 수 있음.
- 모든 토큰을 string으로 파싱하는 대신 charCodeAt을 사용하여 자체 파서 구현을 통해 CPU 절약 가능.

# ETC

### [Every tool you need to work with URL conversions in one place](https://www.urltoany.com/)

- url을 markdown, image, pdf, json, xml, mp3 등 다양한 포맷으로 변환해주는 도구 모음.

### Release

- [0x v6.0](https://github.com/davidmarkclements/0x/releases/tag/v6.0.0)
- [oxlint v1.6.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.6.0)
- [typescript v5.9 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-9-beta/)
    - import defer
- [ember 6.5](https://blog.emberjs.com/ember-released-6-5/)
- [ckeditor5 v46.0.0](https://github.com/ckeditor/ckeditor5/releases/tag/v46.0.0)