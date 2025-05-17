---
title: dev-weekly 2025-05-17
date: "2025-05-17T17:44:00.000Z"
description: "dev-weekly 2025-05-17"
tags: ["node","css", "browser"]
---

# CSS

### [The Height Enigma](https://www.joshwcomeau.com/css/height-enigma/)

- 박스에 height: 50% 를 넣었을 때 작동하지 않는 이유
- width는 부모로부터 계산, height는 자식으로 부터 계산. 트리 상위에 있는 요소의 값을 유추할 수 있게 하면 50% 와 같은 형태도 작동
- min-height는 고정된 크기를 부여하는것이 아니라서 자식이 %를 가질 때 동작하지 않음.
    - flex 1 로 채우거나, grid를 사용하기.

### [Container Query for “is there enough space outside this element?”](https://frontendmasters.com/blog/container-query-for-is-there-enough-space-outside-this-element/)

- 박스 바깥에 충분한 공간이 있을때만 바깥에 배치하기

# Node

### [Best Practices for Creating a Modern npm Package with Security in Mind](https://snyk.io/blog/best-practices-create-modern-npm-package/)

- 2025년에 npm 패키지 만들기
- 프로젝트 설정, npm 계정 설정, 퍼블리시 전 `--dry-run` 을 통한 확인, 모듈 포맷, 단위테스트, 보안점검에 이르기까지
- CI 단계에서 패키지 테스팅하기 - npm pack, relative path, npm link, registry, verdiccio

# ETC

### [Firefox moves to GitHub](https://boingboing.net/2025/05/13/firefox-moves-to-github.html)

- 파이어폭스 브라우저를 비롯하여 2500개 프로젝트 깃헙으로 이전

### [WebKit Features in Safari 18.5](https://webkit.org/blog/16923/webkit-features-in-safari-18-5/)

- Declarative Web Push - 서비스 워커가 필요하지 않은 웹 푸시. 오용 가능성이 없어서 제한이나 페널티 적용 안함.

### [AI codes electronics with tscircuit](https://tscircuit.com/)

- PCB를 생성, 프리뷰, 시뮬레이션, 제조 하기 위한 React/TS 전자공학 툴체인이자 에코시스템.

### Release

- [Parcel v2.15.0](https://parceljs.org/blog/v2-15-0/)
- [react-router v7.6.0](https://github.com/remix-run/react-router/blob/main/CHANGELOG.md#v760)
- [jsdiff v8.0.0](https://github.com/kpdecker/jsdiff/releases/tag/v8.0.0)