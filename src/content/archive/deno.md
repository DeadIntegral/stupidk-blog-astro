---
title: Deno
date: "2024-01-25T00:00:00.000Z"
description: "Deno Archive"
tags: ["javascript", "deno", "fresh"]
---

# deno

### **[2024.01.25 - Deno 1.40: Temporal API](https://deno.com/blog/v1.40)**

- `-unstable-temporal` 플래그를 통해 Temporal API 사용 가능
- TC39 stage3 의 Decorator 지원
- Deno 2를 위한 디프리케이트, 안정화, 제거
- X11과 같은 네이티브 윈도잉 시스템에 연결하지 않고 WebGPU용 윈도잉 솔루션 제공을 목표.
- deno fresh 1.6 릴리즈

### **[2023.12.14 - Deno 1.39: The Return of WebGPU](https://deno.com/blog/v1.39)**

- 2023년 초 성능문제로 제거했던 WebGPU 다시 릴리즈
- deno compile 기능 향상, nodejs 호환성 개선
- TS 5.3 지원

### **[2023.11.29 - Announcing Deno Cron](https://deno.com/blog/cron)**

- Deno 1.38부터 사용가능. *nix 크론과 달리 중복실행되지 않음
- 웹 서버나 지속적인 요청 없이도 크론을 실행하고 격리 상태 유지
- 새 프로덕션 배포가 발생하면 글로벌 크론 스케쥴러가 프로젝트의 최신 크론 정의로 업데이트되고 기존 크론, 새 크론, 삭제된 크론 업데이트

### **[2023.11.02 - Deno 1.38: HTML doc generator and HMR](https://deno.com/blog/v1.38)**

- `deno doc —html` 프로젝트에 대한 정적 문서 사이트 생성
- HMR 제공, nodejs 호환성 개선
- JSX Transform - 서버 사이드 렌더링에 최적화된 JSX Transform
- websocket 개선, API 변경, 표준 라이브러리 업데이트

### **[2023.09.20 - Deno 1.37: Modern JavaScript in Jupyter Notebooks](https://deno.com/blog/v1.37)**

- Deno 1.37에서 주피터 노트북 지원
    - 노트북에서 바로 npm 모듈에 접근 가능
    - ex) npm에서 d3를 가져와서 노트북에 시각화
- VSCode 익스텐션, 언어 서버 지원 추가
- 테스트 개선 - 속도, TAP 리포터
- Node.js 호환성 개선
- 성능개선 - WebAPI 최적화, lockfile v3 업데이트

### **[2023.08.09 - Node.js's Config Hell Problem](https://deno.com/blog/node-config-hell)**

- Nodejs에서 수많은 config파일이 생기는 이슈
- deno는 스마트한 기본값을 갖춘 런타임이라 구성이 적게 필요. 프로그래밍은 복잡성 관리에 관한 것.

### **[2023.08.03 - Deno 1.36: More flexible security and expanded testing APIs](https://deno.com/blog/v1.36)**

- node20 의 test 사용가능
- deno 벤치마크 기능 향상 - V8의 최적화로 인해 잘못된 벤치를 해결하기 위해 warmup도입
- npm 호환성 개선 등

### **[2023.07.05 - Deno 1.35: A fast and convenient way to build web servers](https://deno.com/blog/v1.35)**

- `Deno.serve()` 이제 스테이블하고 성능도 향상.
- npm, node 호환성 개선
- semver를 포함하여 표준 라이브러리 변경

### **[2023.05.25 - Deno 1.34: deno compile supports npm packages](https://deno.com/blog/v1.34)**

- npm 패키지로 컴파일하는 deno compile 지원. (싱글 바이너리 파일)
- IP 주소를 포함한 TLS 인증
- API 변경. Deno.serve()는 상위 호환성을 위해 안정화 연기

### **[2023.05.01 - Announcing Deno KV](https://deno.com/blog/kv)**

- 세계 35개 지역을 서포트하는 DenoKV. 지금은 waitlist에 등록해야 사용 가능
- 로컬에서 실행 관리, 아토믹 트랜잭션, 일관성 지원

### **[2023.03.23 - Deno 1.32 Released with Enhanced Node Compatibility](https://deno.com/blog/v1.32)**

- 1.32.0 에는 보안 문제가 있으니 1.32.1 사용 권장
- package.json 지원
- NodeJS 호환성 증가, Deno API 변경
- Web API 변경 - URLSearchParams.size제공, WebGPU API 제거
- TS 5.0, V8 11.2 적용

### **[2023.03.20 - Why We Added `package.json` Support to Deno](https://deno.com/blog/package-json-support)**

- Deno 에서 package.json 지원을 추가한 이유를 설명하는 라이언 달의 글
- Deno 사용자가 Node를 사용할 때 보다 더 효율적으로 작업하도록 지원하기를 희망
    - Node 프로젝트를 Deno에서 직접 실행하기를 원하는 개발자들

### **[2023.03.01 - You Don't Need a Build Step](https://deno.com/blog/you-dont-need-a-build-step)**

- 빌드로 인해 얻은 장점과 단점. deno를 사용해서 bulid 프로세스 스킵하기

### **[2022.11.14 - Deno 1.30: Built-in Node modules](https://deno.com/blog/v1.30)**

- built in nodejs 모듈 지원, importMap 지원, api 변경사항 등

### **[2022.11.14 - Deno 1.28 Released (Now with 1.3 Million New Modules..?)](https://deno.com/blog/v1.28)**

- npm 호환성 안정화 - 130만개 이상의 npm 모듈 사용 가능
- 보안 - 의존성이 시스템에 액세스 시도 시 알려주고 제한할 수 있음
- V8 10.9 업그레이드

### **[2022.10.27 - Deno 1.27](https://deno.com/blog/v1.27)**

- language Server/IDE 향상 - 자동완성 레지스트리
- API들 안정화, lint 업데이트, v8 10.8 적용, Nodejs 호환성 개선 등

### **[2022.06.21 - raised $21m in series A funding](https://deno.com/blog/series-a)**

- deno deploy 가 시리즈 A $21M 펀딩
- 리눅스 시스템 콜 대신 JS, WASM을 통한 인터페이스와 보다 빠른 성능의 isolate cloud 제공

### **[2022.05.26 - How We Converted Our Node.js Library to Deno (using Deno)](https://www.edgedb.com/blog/how-we-converted-our-node-js-library-to-deno-using-deno)**

- 런타임 어댑터 패턴을 사용하여 Deno 가 호환되는 Nodejs 라이브러리로 변경하기

### **[2022.05.18 - Deno 1.22 Released](https://deno.com/blog/v1.22)**

### **[2022.04.21 - Deno 1.21 Released](https://deno.com/blog/v1.21)**

### **[2022.03.17 - Deno 1.20 Released](https://deno.com/blog/v1.20)**

- JS와 Rust의 커뮤니케이션 레이어 60% 성능 향상
- HTTP Response body 자동 압축
- deno bench 명령어 추가 - V8이 최적화 할 수 있도록 1000회의 워밍업 후, 다음1000회를 측정
- TS 4.6, V8 10.0 지원 등

### **[dnt: Deno-to-Node Package Transformation Tool](https://github.com/denoland/dnt)**

- Deno 도구를 Node 패키지로 빌드하는 도구

### **[2022.01.20 - Deno 1.18 Released: The (Other) Modern JS/TS Runtime](https://deno.com/blog/v1.18)**

- Web Cryptography API 완성
- devtools 확장

### **[2021.12.13 - Deno joins TC39](https://deno.com/blog/deno-joins-tc39)**

- 서버 측 JS 유저에게 도움이 되는 기능과 언어 개선을 추진하기 위해서

### **[2021.11.09 - Deno 1.16 Released](https://deno.com/blog/v1.16)**


### **[2021.09.14 - Deno 1.14 Released](https://deno.com/blog/v1.14)**

- TS 4.4, V8 9.4 적용
- Web Crypto API additions
- File Locking API
- URL Pattern, 3배 빠른 Url pasing

### **[2021.08.28 - Deno Module Visualizer](https://deno-visualizer.danopia.net)**
- deno 모듈 디펜던시를 시각화 해주는 도구

### **[2021.08.10 - Deno 1.13 Released](https://deno.com/blog/v1.13)**

- V8 9.3
- 네이티브 HTTP 서버 API 안정화
- TLS에 시스템 인증서 지원 및 비활성화 기능

### **[2021.07.13 - Deno 1.12 Released](https://deno.com/blog/v1.12)**

- crypto api 지원
- native http 서버에서 웹소켓 지원
- repl에서 ts지원
- messageChannel, messagePort지원
- wasm 스레딩 지원 등

### **[2021.06.23 - Deno Deploy Beta 1](https://deno.com/blog/deploy-beta1)**

- 전 세계 25개 데이터센터에서 멀티 테넌트 v8 엔진으로 deno 배포
- 코드 푸시하는 순간 프로비저닝된 서브도메인에 배포

### **[2021.06.08 - https://deno.com/blog/v1.11](https://deno.com/blog/v1.11)**

- deno 1.11 릴리즈
- Official Docker images : alpine, centos, debian (default), distroless, ubuntu
- stable한 deno lint : eslint보다 100% 빠르다고 함
- BroadcastChannel : 웹워커간 메시지를 브로드캐스트 하기 위한 브라우저 API 지원

### **[2021.05.11 - Deno 1.10 Released](https://deno.com/blog/v1.10)**

- Web Storage API 추가. localStorage 와 sessionStorage 지원
- remote import map 지원
- 향상된 test runner - 처음부터 다시 작성
    - [https://caspervonb.medium.com/rewriting-denos-testing-tools-b5f8801bc567](https://caspervonb.medium.com/rewriting-denos-testing-tools-b5f8801bc567)
- 웹워커 직렬화된 모든 데이터를 허용하도록 변경
    - [https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) 을 이용
- WASM 메모리 공유 활성화

### **[2021.04.13 - Deno 1.9 Released](https://deno.com/blog/v1.9)**

- Native HTTP/2 web server
- serde_v8 을 사용하여 오버헤드 최대 98% 절감
    - JS와 러스트 사이에서 앞뒤로 직렬화하는 대신, v8과 러스트 값 사이에서 직렬화 하여 성능 개선
- Blob URL 지원

### **[2021.03.29 - Announcing the Deno Company](https://deno.com/blog/the-deno-company)**

- deno가 $4.9M 자금 유치
- 자금으로 풀 타임 엔지니어들을 고용해 고도화
- 라이센스는 MIT 유지

### **[2021.03.02 - Deno 1.8 Released](https://deno.land/posts/v1.8)**

- Deno 1.8 릴리즈
  - WebGPU 에 대한 실험적 지원
  - Intl API 빌트인 - 모든 JS Intl API 사용 가능
  - 프라이빗 모듈 fetch - 인증 토큰 지원
  - etc

### **[2020.12.08 - Deno 1.6 Released: You Can Now Build Executables](https://deno.land/posts/v1.6)**
- deno 1.6.0이 릴리즈. 1.0 이후 가장 큰 피쳐
- 스탠드얼론 바이너리 빌드
	- 아직은 언스테이블
	- 용량이 40MB에 육박
	- 아직 웹워커, dynamic import, v8 flag 등 몇 가지 제약 존재
- Built-in Deno Language Server
- arm64 실험적 지원

### **[2020.10.27 - Deno 1.5 Released](https://deno.land/posts/v1.5)**
- 번들링에 tree shaking 지원, 최대 15배 빠름.
- repl 개선
- alert, confirm, prompt 지원(콘솔에서)

### **[2020.09.13 - Deno 1.4 Released](https://deno.land/posts/v1.4)**
- Node Security 

# **[2020.03.06 - Deno 1.0 is Due Next Week: Here's What You Need to Know](https://blog.logrocket.com/deno-1-0-what-you-need-to-know)**
<a href="/" target="_blank">Deno 1.0 is Due Next Week: Here's What You Need to Know</a>
- deno의 탄생 배경
- Security, Shortcuts for using permissions
- Using your own tsconfig.json
- The problem with using file extensions
- Package management
	```javascript
	import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
	```
- ... 등 deno에 대해서 알아야 할 사항 소개

# deno fresh

### **[2023.12.01 - Fresh 1.6: Tailwind CSS plugin, simplified typings and more](https://deno.com/blog/fresh-1.6)**

### **[2023.10.10 - Fresh 1.5: Partials, client side navigation and more](https://deno.com/blog/fresh-1.5)**

- `Partials` - html attribute를 사용하면, 페이지를 다시 로드하지 않고도 이미 로드된 페이지의 HTML 수정
- 커스텀 빌드 타겟 - config에 지원 브라우저 버전 지정 가능
- 번들 파일 분석 - 브라우저에 제공되는 파일 분석

### **[2023.08.16 - Fresh 1.4 – Faster Page Loads, Layouts and More](https://deno.com/blog/fresh-1.4)**

- 사전 컴파일로 성능 향상
    - 빌드 없이 빠른 배포를 유지해왔지만, 큰 island의 경우 JIT가 눈에 띄게 느리다는 것을 인지하여 배포 시간에 영향을 덜 주면서 사전 컴파일 하도룩 변경
- 서버에서 직접 html, head 등의 태그를 사용 가능하도록 수정
- 디렉토리 스코프를 가진 _layout.tsx 기능 지원. (넥스트13과 같은 기능) 상속 해제도 가능.

### **[2023.07.18 - Fresh 1.3 – Simplified Route Components and More](https://deno.com/blog/fresh-1.3)**

- Deno Fresh 1.3 릴리즈
- 핸들러와 컴포넌트를 하나의 함수로 지원. (기존에 데이터를 전달하기 위한 인터페이스 문법도 하위호환 유지)
- Error Boundary, 하나의 파일에서 여러 island 내보내기 지원, Deno.serve 지원


### **[2023.06.15 - Deno Fresh 1.2 Release](https://deno.com/blog/fresh-1.2)**

- Deno팀에서 Fresh 오픈소스 후 관리를 잘 못했지만, Preact의 창시자를 새로운 관리자로 발탁.
- renderAsync hook 지원. JSX를 islands로 전달하고, islands들을 중첩가능하도록 지원.

### **[2022.10.25 - How to Build a Blog with Fresh and Deno](https://deno.com/blog/build-a-blog-with-fresh)**

- Fresh 로 블로그를 구축하는 예제

### **[2022.09.08 - Fresh 1.1](https://deno.com/blog/fresh-1.1)**