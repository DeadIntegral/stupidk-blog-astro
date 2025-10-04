---
title: dev-weekly 2025-10-04
date: "2025-10-04T23:16:00.000Z"
description: "dev-weekly 2025-10-04"
tags: ["javascript", "css", "nodejs", "workers", "npx", "http"]
---

# CSS

### [7 Practical Animation Tips](https://emilkowal.ski/ui/7-practical-animation-tips)

- 버튼 :active 가상 클래스에 0.97 scale 적용하기
- 애니메이션의 scale 0으로 시작하지 않기 (0.9이상 사용하기)
- 화면에 들어오거나 나가는 애니메이션은 ease-out 으로 시작하기
- 로딩 스피너, 셀렉트박스 애니메이션 등 빠르게 움직이기 (300ms 이하 유지하기)
- 2px blur 추가하기

# Nodejs

### [A year of improving Node.js compatibility in Cloudflare Workers](https://blog.cloudflare.com/nodejs-workers-2025/)

- Workers 호환성을 개선하여 이제 express 를 포함한 많은 npm 모듈 실행 가능
    - node:console, crypto, fs, https, dns, net, process, timers, tls, zlib API 지원. 지원하지 않는 API는 명시적 에러
    - TS, Cpp를 결합하여 네이티브 구현. Wrangler를 쓰지 않기 때문에 성능 향상
    - `wrangler.jsonc` or `wrangler.toml` 에서 `nodejs_compat` 플래그 설정. wrangler 사용 안하면 클라우드 플레어 대시보드 혹은 API 플래그 제어 가능
- Workers는 EOL 없음. `remove_nodejs_compat_eol` 플래그는 통해 현재 호환 날짜까지 EOL 에 도달한 API 제거

### [Electron-based apps cause a huge system-wide lag on macOS 26](https://github.com/electron/electron/issues/48311)

- MacOS 26에서 일렉트론 앱 2개 이상 열면 느려지는 현상 발생
- 38.2, 37.6, 36.9.2 에서 수정

### [Mastering NPX: A Cheatsheet for npm and Node.js Power Users](https://www.nodejs-security.com/blog/mastering-npx-cheatsheet-npm-nodejs-power-users)

- npx 커맨드 치트시트
- `npx -p node@14 <command>` -p 커맨드를 통해 특정 노드 버전 지정 가능
- `npx gist <gist-id>` github gist의 스크립트를 바로 실행 가능
- `MY_VAR=value npx <package-name>` 환경 변수 전달

### [modern-tar: zero dependency streaming tar parser and writer](https://github.com/ayuhito/modern-tar)

- 모든 JS 런타임을 위한 크로스 플랫폼 스트리밍 tar 라이브러리
- 성능과 메모리를 위하여 네이티브 웹 스트림 API 기반 구축
- nodejs 18, chrome71, safari 14.1, firefox 102 부터 지원

# Javascript

### [React 19.2](https://react.dev/blog/2025/10/01/react-19-2)

- `<Activity />` 앱의 일부를 조건부 렌더링 하는 대신 Activity 사용 가능
    
    ```jsx
    // Before
    {isVisible && <Page />}
    
    // After
    <Activity mode={isVisible ? 'visible' : 'hidden'}><Page /></Activity>
    ```
    
- `useEffectEvent` useEffect 내부의 값을 사용하게 되면 의존성에 전부 선언 필요했었음. Effect event를 사용하면 이를 추출하여 Effect에서 분리 가능.
- 퍼포먼스 트랙
    - 스케쥴러 - 유저 인터랙션을 위한 블로킹이나 트랜지션과 같은 다양한 우선순위에 대해 리액트가 어떤 작업을 수행하는지 보여줌
    - 컴포넌트 - 렌더링하거나 이펙트를 실행하기 위해 작업중인 컴포넌트 트리를 보여줌
- Partial Pre-Rendering
- 클라이언트 렌더링, SSR 에서 스트리밍 되었는지에 따라 서스펜스 바운더리 다르게 나타나는 버그 수정
- 

# ETC

### [A complete guide to HTTP caching](https://www.jonoalderson.com/performance/http-caching/)

- `no-cache` 저장하되 재검증 하지 않는다는 뜻인데 캐시하지 않는다 처럼 오해받는 영역들 존재. 많은 사이트가 캐싱을 잘못하고 있고 이를 위해 만든 가이드
    - HTTP 캐시에 대해 옵션들과 우선순위, 멘탈모델에 대해 설명한 가이드. 사용 사례에 따른 패턴, 레시피 제공
- 캐시 멘탈 모델 - 캐싱은 한 곳에서 일어나는게 아니라, 각 레이어마다 고유한 규칙, 범위, 특징을 가진 여러 레이어로 구성된 생태계
- 메모리 캐시는 HTTP 캐싱 헤더 영향 안받음. 단일 세션 동안 유지. 디스크 캐시는 탭과 세션간 유지. HTTP 캐싱 헤더 준수.
- 브라우저는 캐시 키로 요청된 리소스의 스키마, 호스트, 경로, 쿼리 스트링, top-level browsing context도 사용해 double-keyed caching을 구현.
    - 모던 브라우저는 임베디드 iframe과도 구분하는 triple-keyed caching 으로 전환 중
    - Vary 헤더 - 특정 요청도 캐시 키에 포함되어야 함을 알려줌.
- 캐싱은 freshness vs validation. 언제 재사용할 수 있는가.
    - 하이 레벨에 3가지 카테고리 존재. Freshness controls, Validators, Metadata
    - 카테고리별 헤더들 - max-age, s-max-age, … age, ETag 등
- CDN 캐시(Cloudflare), 애플리케이션 캐시
- 캐시 디버깅

### [Polypane 26: Accurate device emulation with safe area and small viewport units](https://polypane.app/blog/polypane-26-accurate-device-emulation-with-safe-area-and-small-viewport-units/)

- safe-area, 스크롤 시 주소창과 같은 영역까지 표시해주는 에뮬레이터
- 크롬 140을 기반으로 구축.

### [HTML’s Best Kept Secret: The <output> Tag](https://denodell.com/blog/html-best-kept-secret-output-tag)

- 값의 변화를 스크린 리더기에게 알려주는 `output` 엘리먼트 소개
- label 처럼 for를 통해 input 연결 가능. 토스트같은 사용성 아님. 토스트는 `role="status"` (혹은 alert)을 사용하는게 좋음

### Release

- [oxlint v1.19.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.19.0)
- [bun v1.2.23](https://bun.com/blog/bun-v1.2.23)
- [deno v2.5.3](https://github.com/denoland/deno/releases/tag/v2.5.3)
- [ckeditor5 v47.0.0](https://github.com/ckeditor/ckeditor5/releases/tag/v47.0.0)
- [verdaccio v6.2.0](https://github.com/verdaccio/verdaccio/releases/tag/v6.2.0)