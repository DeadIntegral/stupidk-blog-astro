---
title: dev-weekly 2023-10-14
date: "2023-10-14T11:00:00.000Z"
description: "dev-weekly 2023-10-14"
tags: ["javascript", "CSS", "node", "v8", "ddos"]
---
# CSS

### **[Textareas with auto-increasing height using CSS](https://www.amitmerchant.com/textarea-auto-increase-height/)**

- `form-sizing: normal;` - textarea auto resize. 아직 WD 지만 크롬 카나리에 추가될 예정

# Node

### **[Fresh 1.5: Partials, client side navigation and more](https://deno.com/blog/fresh-1.5)**

- `Partials` - html attribute를 사용하면, 페이지를 다시 로드하지 않고도 이미 로드된 페이지의 HTML 수정
- 커스텀 빌드 타겟 - config에 지원 브라우저 버전 지정 가능
- 번들 파일 분석 - 브라우저에 제공되는 파일 분석

### **[node-webrtc](https://github.com/WonderInventions/node-webrtc)**

- Node.js Native Addon. 스펙 준수를 목적으로 하며 W3C의 웹 플랫폼 테스트 프로젝트를 사용하여 테스트할 예정. 테스트를 위한 비표준 API 포함.
- N-API version3 대상으로 한 기능.

# Javascript

### **[Bun v1.0.4](https://bun.sh/blog/bun-v1.0.4)**

- `Bun.serve()` 메모리 감소
- server.requestIP(req) 추가
- bun install 의 timeout 을 30초에서 5분으로 변경
- 버그수정, nodejs 호환성 개선 등

### **[Bun v1.0.5](https://bun.sh/blog/bun-v1.0.5)**

- `fetch` 메모리 누수 수정 - gzip/delate 인코딩이 제대로 닫히지 않는 이슈
- bun lock 파일을 찾지 못하면 pakcage-lock.json 에서 패키지 설치
- 충족되지 않은 피어 디펜던시 자동 설치

### **[Speeding up the JavaScript ecosystem - The barrel file debacle](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7/)**

- 배럴 파일(export만 하고 코드 자체는 포함하지 않는 파일)이 코드에 미치는 영향
- 배럴 파일로 인해 모듈 그래프의 크기가 커지는 이슈
- 전역 변수나 모듈 실행 순서에 의존하는 코드의 손상을 막기 위해 필요하지 않은것도 import 하고 모든 의존성 파일을 로드하는 오버헤드 발생
- 배럴 파일 몇개는 괜찮지만, 모든 단일 디렉토리에 파일이 있는것은 문제.

### **Release**

- [oclif 4.0](https://github.com/oclif/oclif/releases/tag/4.0.0)
- [Electron 27.0.0](https://www.electronjs.org/blog/electron-27-0)
- [parcel v2.10.0](https://github.com/parcel-bundler/parcel/releases/tag/v2.10.0)
- [solidjs v.1.8.0](https://github.com/solidjs/solid/releases/tag/v1.8.0)
- [pnpn v8.9.0](https://github.com/pnpm/pnpm/releases/tag/v8.9.0)
- [ionic 7.5](https://ionic.io/blog/announcing-ionic-7-5)

# ETC

### **[Cloudflare, Google, and Amazon explain what’s behind the largest DDoS attacks ever](https://www.theverge.com/2023/10/10/23911186/ddos-http2-vulnerability-blocked-amazon-aws-cloudflare-google-cloud)**

- 클라우드 플레어, 구글, 아마존은 지난 8, 9월에 사상 최대 규모의 ddos layer 7 attack을 성공적으로 방어
- “http/2 rapid reset” 으로 명명한 제로데이 취약점
- 구글은 초당 3.98억건, 클라우드 플레어는 초당 2.01억건, 아마존은 초당 1.55억건 발생

### **[Control-flow Integrity in V8](https://v8.dev/blog/control-flow-integrity)**

- CFI란 제어 흐름을 가로채는 공격을 방지하는 것을 목표로 하는 보안 기능
- Forward Edge CFI - 함수 포인터, table과 같은 간접 제어 흐름 전송의 무결성
  - 간접 호출과 점프를 보호하기 위해 하드웨어 기능 Landing Pad와 Pointer Authentication 사용
- Backward Edge CFI - 스택에서 읽은 반환 주소 유효성 체크
  - 반환 주소를 보호하기 위해 하드웨어 기능 Shadow Stack과 PAC-RET사용
- JIT Memory Integrity - 런타임 시 실행 가능한 메모리에 기록되는 모든 데이터 유효성 검사
  - JIT 컴파일러는 메모리에 쓸 수 있지만, 공격자의 메모리 쓰기는 방지 필요.
  - 권한체크를 생각하기 쉽지만, 다른 스레드에서 임의 쓰기 트리거 발생 가능. ⇒ 스레드별 메모리 권한