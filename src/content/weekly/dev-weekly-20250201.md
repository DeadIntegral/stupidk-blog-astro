---
title: dev-weekly 2025-02-01
date: "2025-02-01T13:39:00.000Z"
description: "dev-weekly 2025-02-01"
tags: ["javascript", "node", "wasm"]
---

# Node

### [My failed attempt to shrink all npm packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/)

- npm 패키지는 gzip tarball 이기 때문에, Zopfli 로 압축하여 용량 줄이기
- Zopfli를 사용하면 용량은 줄어들지만 압축해제가 약30배 느려짐. 본인의 라이브러리인 helmet에 적용하고 이후 npm에 제안, RFC 작성, 회의, 포기하기 까지의 과정

### [Troubles with multipart form data and fetch in Node.js](https://philna.sh/blog/2025/01/14/troubles-with-multipart-form-data-fetch-node-js/)

- nodejs에서 fetch(undici)로 multipart form data를 전송할 때 이슈
- `multipart/form-data` 스펙인 RFC 7578에 명시되어 있지는 않음. 그러나 저자가 사용한 Langflow API는 CRLF(\r\n)로 끝나야하고 그렇지 않으면 에러. curl과 같은 라이브러리들도 CRLF를 추가해줌.
- undici V7.1.0 에서 업데이트되어 CRLF가 포함되게 됨.

### [The modern way to write JavaScript servers](https://marvinh.dev/blog/modern-way-to-write-javascript-servers/)

- nodejs의 기본 예제를 보면 createServer, listen 을 사용하는데 이는 소켓 바인딩이 필요.
- 이제는 nodejs에서 fetch 사용이 가능하고, 이는 소켓 바인딩 없이 테스트 가능.

# Javascript

### [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet/)

- JS로 만든 192바이트 WASM 컴파일러.
    
    ```jsx
    let c=(b,l)=>WebAssembly.instantiate(new Int8Array(
    [,97,115,109,1,,,,1,5,1,96,,1,127,3,2,1,,7,4,1,,,,10,
    l=(b=b.split` `.flatMap(t=>t>-1?[65,t]:107+'-*/'.indexOf(t)))
    .length+4,1,l-2,,...b,11]))
    ```
    

### [Squish - Batch Browser-based Image Compression](https://github.com/addyosmani/squish)

- WASM을 활용한 브라우저 기반 이미지 압축 도구

### [Umbrella: CRA breaks with React 19, and CRA needs deprecation notices](https://github.com/facebook/create-react-app/issues/17004)

- CRA는 React 최신 버전이 설치되고 의존성인 `@testing-library/react@13.0` 는 peer dependency가 React18 로 되어 있음. 이로 인해 CRA가 깨지는 이슈 제기
- CRA 에서 React 19 지원하도록 할 예정.

# ETC

### [Things people get wrong about Electron](https://felixrieseberg.com/things-people-get-wrong-about-electron/)

- 일렉트론의 핵심은 웹 앱을 작성하려는 모든 네이티브 코드와 페어링 가능하다는 점. 1password는 대부분의 코드가 Rust로 작성됨
- 모든 네이티브 앱이 웹 앱 보다 낫다고 하지만 시장은 그러한 정서를 반영하지 않음. 나사의 미션 컨트롤은 웹 기술로 작성됐고 블룸버그 터미널, 맥도날드 키오스크, spaceX의 Dragon 2 space capsule은 크로미움 사용.
- OS Webview가 더 성능이 좋다는 주장은 내장 웹뷰가 크롬보다 성능이 더 좋다는것을 증명한 데이터를 본적이 없음.. 슬랙은 MacGap에서 시작했으나 일렉트론으로 변경.
- 번들 크기 - 더 작은 것이 좋긴 하지만 소비자는 신경쓰지 않음
- 일렉트론은 누군가와 경쟁하기 위해 존재하는 것이 아니라, 부족한 부분을 채우는 무료 오픈소스 커뮤니티의 노력

### [Considerations for making a tree view component accessible](https://github.blog/engineering/user-experience/considerations-for-making-a-tree-view-component-accessible/)

- github tree view의 접근성 작업
- 보이스오버, 키보드 제어 등

### Release

- [pnpm v10.1](https://github.com/pnpm/pnpm/releases/tag/v10.1.0)
- [astro v5.2](https://astro.build/blog/astro-520/)