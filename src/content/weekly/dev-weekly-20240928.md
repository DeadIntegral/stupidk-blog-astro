---
title: dev-weekly 2024-09-28
date: "2024-09-28T18:54:00.000Z"
description: "dev-weekly 2024-09-28"
tags: ["css", "node", "javascript", "performance"]
---

# CSS

### [CSS Converter](https://marketplace.visualstudio.com/items?itemName=Lakkannawalikar.css-converter)

- CSS 케밥케이스 to 카멜케이스, 카멜케이스 to 케밥케이스 변환해주는 VSC 확장

### [First Public Working Draft of CSS Grid Level 3 / Masonry Layout](https://www.w3.org/blog/CSS/2024/09/24/css-grid-3-fpwd/)

- CSS Grid Layout Module Level3(a.k.a CSS Mansonry Layout) 공개 작업 초안(WD) 발표

# Node

### [Deno 2.0 Release Candidate](https://deno.com/blog/v2.0-release-candidate)

- 전역변수 window 제거 process 지원. 라이브러리들이 돔의 존재 여부가 아니라 window로 브라우저를 확인하기 때문에 문제발생.
- 종속성 관리 - 이제 접두사(jsr:, npm:) 사용 필요. 엔트리 포인트 명시가능
- 다음의 API들이 안정화되어 플래그 없이 사용 가능 - WebGPU, FFI API, http client
- import assert 지원 중단, import with 제공
- config 파일에서 nodeModulesDir 셋팅 가능
- 빌트인 nodejs API 들 지원
- `deno test —doc` 으로 JSDoc에 대한 밸리데이트
- TS 5.6 지원

# Javascript

### [How I Built My Blog](https://www.joshwcomeau.com/blog/how-i-built-my-blog-v2/)

- joshwcomeau의 블로그 작성 회고.
- Next App Router에서 linaria 사용하기 (단 추천하지 않음. 추천한다면 Pigment CSS)
- 하이라이팅 프로그램으로 Shiki 사용 - 컴파일 타임에 동작하여 RSC와 호환
- playground는 sandpack 사용
- 앱라우터 페이지라우터 성능비교 및 메모리 비교

### [Markdown to amazing forms and web pages](https://blocks.md/)

- 마크다운으로 작성하면 form을 만들어주는 도구
- 텍스트필드, 페이지 프로그레스, 커스텀 라이도, 셀렉트 박스, 전화번호 입력, 별점, 이메일 등 지원

# ETC

### [Monitor your local and real-user Core Web Vitals performance in DevTools](https://developer.chrome.com/blog/devtools-realtime-cwv)

- Core Web Vital 지표를 백그라운드에서 수집되어 필요할 때 마다 사용 가능
- 로컬 데이터 뿐 아니라 CrUX API를 통한 지난 28일간의 실제 사용자 데이터 지원
- 각 엘리먼트에 대한 인터랙션 성능 지표 로깅

### [Dark Patterns Hall of Shame](https://hallofshame.design/)

- 각 서비스의 다크 패턴 모음 및 패턴에 대한 설명
- e.g. 로치 모델 - 구독 서비스에 주로 사용되는 모델로 가입하기 쉽지만 취소하기 어렵게하는 다크패턴.

### Release

- [strapi v5.0.0](https://github.com/strapi/strapi/releases/tag/v5.0.0)
- [pnpm v9.11.0](https://github.com/pnpm/pnpm/releases/tag/v9.11.0)