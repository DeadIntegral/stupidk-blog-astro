---
title: dev-weekly 2026-04-18
date: "2026-04-18T20:20:00.000Z"
description: "dev-weekly 2026-04-18"
tags: ["javascript", "nodejs", "css", "AEO", "v8"]
---

# CSS

### [Squash and Stretch](https://www.joshwcomeau.com/animation/squash-and-stretch/)

- 공을 튀길 때 바닥에 닿을때는 납작해지고, 튀어 오르면서 길고 가늘어지는 것과 같이 애니메이션 효과를 그대화하기 위한 효과 소개
- Stretch Arrow 소개 - 화살이 길어지면서 화살촉이 안쪽으로 당겨지는 형태의 애니메이션
- 어떻게 구현하 수 있는지 svg path 부터 motion 활용까지 다양한 방법 소개

# Javascript

### [Under the hood of MDN's new frontend](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/)

- CRA를 사용하다가 기본 설정 중 일부가 동작하지 않게 되어 eject하고 임시방편적인 빌드 스크립트 추가. CSS도 sass를 사용하다 css variable추가하는 등 부채 쌓임.
- React는 래퍼였을 뿐 정적 콘텐츠 내에 복사와 같은 상호작용이 필요해서 `dangerouslySetInnerHTML` 로 사용해온 이슈.
- Lit을 통한 웹 컴포넌트와 React 조합으로 재구성.

### [Uses for nested promises](https://blog.jcoglan.com/2026/03/23/uses-for-nested-promises/)

- 모나드와 펑터, Promise의 암묵적 평면화(implicit flattening)
- RWLock을 통한 예시로 nested promise의 필요한 케이스 설명

# Nodejs

### [Jank Busters Part Two: Orinoco](https://v8.dev/blog/orinoco)

- orinoco는 GC작업을 병렬, 동시로 분산해서 메인 스레드 멈춤(jank)을 줄이는 방향으로 설계
- 기존에는 객체 이동, 포인터 업데이트를 순차적으로 처리했는데 이를 병렬화하여 compaction 시간 감소
- remembered set 구조를 개선해 포인터 업데이트 병렬 처리 가능, pause time 감소
- black allocation 등으로 마킹 비용, GC작업량 감소시켜 메모리 사용량 감소.

# ETC

### [Introducing a new spam policy for "back button hijacking"](https://developers.google.com/search/blog/2026/04/back-button-hijacking)

- 뒤로가기 버튼을 눌렀을 때 뒤로가지 못하게 막는일이 증가 추세고, 구글은 이를 악의적인 행위 정책 위반이라고 판단.
- 뒤로가기 악용하는 페이지는 매뉴얼 스팸 조치 또는 자동 순위 하락 할 것. 2026년 6월15일 부터 시행.
- 검증 로직을 파편화하지 말고, 바운더리를 정의하고 파싱해서 신뢰 가능한 도메인 타입으로 변환하기.

### [Parse, Don't Validate — In a Language That Doesn't Want You To](https://cekrem.github.io/posts/parse-dont-validate-typescript/)

- 밸리데이트는 통과 여부만 확인하고 정보를 버리지만, parse는 입력을 정밀한 타입으로 변환.

### [Agentic Engine Optimization (AEO)](https://addyosmani.com/blog/agentic-engine-optimization/)

- 문서, CLI, MCP, 스킬 등 AI 코딩 에이전트가 상호작용하는 인터페이스 생태계가 존재.
- 페이지를 읽는데 사용되는 토큰 수가 문서화 평가의 핵심 지표.
- AI가 읽고 좋은 사이트를 만드는 방법.
- 궁극적으로 사람이 콘텐츠를 소비하더라도, 가장 가까운 소비자는 AI 어시스트인 경우가 많고, 문서화 방식은 두 대상 모두를 만족시켜야할 것.

### [Testing OpenGraph on localhost from the CLI before you go public](https://simonhartcher.com/posts/2026-04-15-testing-opengraph-on-localhost-from-the-cli/)

- og title, description, image를 추가하더라도 테스트 해보기 위해서는 퍼블리싱 해야하는데, 한번 하면 각 서비스의 캐싱 이슈 발생.
- 이를 해결하기 위해 로컬호스트에서 OpenGraph 프리뷰를 렌더링하는 og-check 개발.
    - CLI 도구모음인 neutils 에 포함.

### [The Git Commands I Run Before Reading Any Code](https://piechowski.io/post/git-commands-before-reading-code/)

- 코드베이스의 문제점을 파악해볼 수 있는 git 커맨드 소개
- 가장 많이 변경되는 파일, 컨트리뷰터 커밋 횟수 순 랭킹, 버그 관련 키워드가 포함된 커밋 필터링, 월별 커밋 횟수, 롤백 및 핫픽스 빈도 등을 통해 프로젝트 상황 파악하기.

### Release

- [bun v1.3.12](https://bun.com/blog/bun-v1.3.12)
- [ReactNative 0.85](https://reactnative.dev/blog/2026/04/07/react-native-0.85)
- [electron v41.2.0](javascriptweekly.com/link/183703/4e4af8cb63)
- [pnpm 11 RC 0](https://github.com/pnpm/pnpm/releases/tag/v11.0.0-rc.0)
- [mantine v9.0.0](https://mantine.dev/changelog/9-0-0/)
- [lexical v0.43.0](https://github.com/facebook/lexical/releases/tag/v0.43.0)
- [ink v7.0.0](https://github.com/vadimdemedes/ink/releases/tag/v7.0.0)