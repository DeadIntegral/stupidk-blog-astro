---
title: dev-weekly 2025-11-22
date: "2025-11-22T19:37:00.000Z"
description: "dev-weekly 2025-11-22"
tags: ["css", "nodejs"]
---

# CSS

### [Mirrow: SVGs. One file. Zero fuss](https://mirrow.app/)

- 그래픽, 도형, 애니메이션을 구조화하여 표현할 수 있는 DSL로 .mirror 소스파일을 만들고 svg로 전환하는 도구
- `npx mirrow -i file.mirrow -o file.svg`

# Nodejs

### [Automated NPM secret rotation in GitHub Actions](https://michaelheap.com/rotate-all-npm-tokens-github-actions/)

- 최근 NPM의 모든 long lived 토큰이 취소되고 신규 토큰은 90일만 유효.
- OIDC를 도입하면 좋지만 모든 프로젝트를 업데이트하기에 시간이 부족함. [https://github.com/mheap/github-update-secret](https://github.com/mheap/github-update-secret) 를 사용해 모든 모든 레포의 secret 업데이트 하기

# ETC

### [2025년 11월 18일 Cloudflare 서비스 중단](https://blog.cloudflare.com/ko-kr/18-november-2025-outage/)

- DB 권한 변경으로 인해 촉발. Bot Management 시스템에서 사용하는 피처파일이 2배로 커졌고 네트워크를 구성하는 모든 컴퓨터에 전파.
    - Bot Management - 네트워크를 통과하는 모든 요청을 대상으로 봇 점수 생성하는데 사용되는 머신 러닝 모델과 시스템들
    - 피처 파일 - 요청이 자동화된 것인지 예측하기 위해 머신러닝 모델이 사용하는 개별 특성 모음
    - 메모리 사전 할당을 위해 런타임에 사용 가능한 피처 수 제한을 200으로 두고 있었고 200개 이상 피처를 가진 파일이 전송되어 시스템 패닉. 5XX 오류로 이어짐.

### [Introducing Gemini 3](https://blog.google/products/gemini/gemini-3-collection/)

- gemini 1에서는 multimodality 와 long context제공했고, 2에서는 사고, 추론, 네이티브 도구 활용을추가해서 AI 에이전트 기반 마련. 이제 3에서는 모든 기능 결합.

### [Monotype font licencing shake-down](https://www.insanityworks.org/randomtangent/2025/11/14/monotype-font-licencing-shake-down)

- Monotype 영업 담당자로부터 폰트 무단 사용 경고를 받음. 조사 결과 사용 안함.
- 자동화된 AI가 경고를 보낸 것.
- MyFront라는 서비스에서 Credit Card라는 무료 폰트를 사용중이었는데, 이 압축파일을 풀업보니 폰트 파일 이름이 `CREDC___.ttf` 이며 앱 페이로드 분석에 사용된 파일 이름과 같음.
- Proxima Nova 라는 폰트도 무단 사용했다고 주장하는데 이미 라이선스도 보유하고 있고, 주장한 회사는 해당 라이선스 이제 판매 안함.

### [Free Online Image Converter](https://imageconverter.dev/)

- 파일 업로드 없이 로컬에서 실행하는 이미지 컨버터
- SVG, HEIC, AVIF, TIFF, GIF, JPEG, JPG, PNG, WebP를 지원하고 파일당 50MB까지 가능.

### Release

- [Announcing Angular v21](https://blog.angular.dev/announcing-angular-v21-57946c34f14b)
    - 이제 zone.js 없음. 디폴트 테스트 러너 vitest로 통합, 앵귤러 MCP 서버 지원
- [webpack-bundle-analyzer v5](https://github.com/webpack/webpack-bundle-analyzer/releases/tag/v5.0.0)
- [pnpm 10.23](https://github.com/pnpm/pnpm/releases/tag/v10.23.0)
- [Astro 5.16](https://astro.build/blog/astro-5160/)