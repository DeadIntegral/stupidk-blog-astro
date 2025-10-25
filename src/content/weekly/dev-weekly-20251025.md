---
title: dev-weekly 2025-10-25
date: "2025-10-25T18:20:00.000Z"
description: "dev-weekly 2025-10-25"
tags: ["javascript", "nodejs", "vitest", "biome"]
---

# NodeJS

### [Node.js v25.0.0 (Current)](https://nodejs.org/en/blog/release/v25.0.0)

- JSON.stringify 성능 개선
- 빌트인 Uint8Array 기반 base64/16진수 변환 기능 추가. WebAssembly, JIT 파이프라인 최적화
- 앱, 웹 표준 API 집중. 웹 스토리지 디폴트 활성화

### [Tyler Tries DTrace](https://tylerhillery.com/blog/tyler-tries-dtrace/)

- DTrace는 Dynamic Trace Framework. 이 문서에서는 Nodejs의 GC 시간을 측정하여 백프레셔 비활성화의 영향을 확인하는데 사용
    - 백프레셔: 데이터 전송 중 버퍼 뒤에 데이터가 쌓이면 소비자가 따라올 때 까지 잠시 멈추는 메커니즘
- 9GB의 비디오 파일을 사용해 비교. 백프레셔를 끄면 GC가 더 자주 실행

# Javascript

### [Vitest 4.0 is out!](https://vitest.dev/blog/vitest-4)

- 브라우저 모드에서 experimental 태그 제거, visual regression testing 지원
- iframe 내부의 엘리먼트를 찾는데 사용할 수 있는 `frameLocator` 지원 (playwright provider에서만)
- [https://vitest.dev/guide/migration#vitest-4](https://vitest.dev/guide/migration#vitest-4)

### [Biome v2.3—Let's bring the ecosystem closer](https://biomejs.dev/blog/biome-v2-3/)

- HTML파일의 `<script>`, `<style>` 포맷팅, 린팅 지원. - Vue, Svelte, Astro 파일 지원.
- new ignore syntax 지원
    - `!` - 린팅, 포맷팅 경로는 무시, 타입 추론 및 임포트는 필요한 경우. e.g. `!**/generated`
    - `!!` - 인덱싱을 포함한 모든 biome 작업에서 무시. e.g. `!!**/dist`
- Tailwind v4 지원
- 새로운 CLI 플래그 지원
    - e.g. `--format-with-errors` parse error가 포함된 코드 포맷

### [Importing vs fetching JSON](https://jakearchibald.com/2025/importing-vs-fetching-json/)

- 정적 import가 실패하면 전체 모듈 그래프도 다운. 때문에 third-party 데이터에는 dynamic import 사용. 하지만 fetch 를 사용하면 더 자세히  분석 가능
- 임포트는 메모리 릭 일어날 수 있는데 fetch는 참조에서 벗어나면 GC가 가능하고 브라우저 캐싱 가능.

# ETC

### [Introducing ChatGPT Atlas](https://openai.com/index/introducing-chatgpt-atlas/)

- ChatGPT를 기반으로 구축된 웹 브라우저 아틀라스 출시
- 탐색하는 동안 ChatGPT가 무엇을 보고 저장할지 직접 설정 가능

### [**What State ARIA In?**](https://www.tpgi.com/what-state-aria-in/)

- aria-selected, area-pressed, aria-current, aria-checked 와 같은 상태 있고 자주 혼동되는 케이스들 설명
    - aria-selected는 유저가 그룹 내에서 선택한 항목을 표시, area-current는 활성 페이지, 프로세스의 현재 단계와 같은 컨텍스트 표시
    - aria-pressed는 스위치, 토글처럼 동작하는 role=”button”속성 가진 요소에 적용. 활성 상태 표시
- 과도한 aria 사용으로 알림이 중복되거나 충돌하는 이슈 등 주의사항 소개

### [Complete Toolkit for JSON & Data Processing](https://formatjsononline.com/)

- 40개 이상의 무료 도구를 갖춘 전문 JSON 플랫폼. 가입 불필요.
- 포맷, 밸리데이트, CSV/XML/PDF변환
- AI 기반 오류 수정, API 테스트, 생성 기능 제공

### Release

- [DOMPurify v3.3.0](https://github.com/cure53/DOMPurify/releases/tag/3.3.0)
- [nextjs v16.0.0](https://nextjs.org/blog/next-16)
- [ky v1.13.0](https://github.com/sindresorhus/ky/releases/tag/v1.13.0)
- [solito v5](https://solito.dev/v5)
    - react-native-web 종속성 제거