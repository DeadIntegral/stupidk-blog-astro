---
title: About Rendering In The Browser
date: "2020-10-23T00:00:00.000Z"
description: "브라우저의 렌더링에 대하여."
tags: ["browser"]
---
# 브라우저의 렌더링에 대하여

# 들어가며

이 글은 중급자를 위하여 쓰여졌습니다. 초급자가 이해하기엔 다소 난해한 개념들이 등장하고, 고급자에겐 당연한 내용들 및 명확하지 않은 내용이 있을 수 있습니다. 고급자 분들은 가볍게 읽고, 참조문서의 보다 자세한 내용을 보시길 권해드립니다.

# 객체 모델 생성

---

브라우저가 HTML 파일을 전송받으면 HTML 마크업은 DOM(Document Object Model)으로, CSS 마크업은 CSSOM(CSS Object Model)으로 변환해 트리를 생성합니다. 

DOM과 CSSOM은 독립적인 데이터 구조입니다.

---

## DOM

- Bytes → Characters → Tokens → Nodes → Object Model
    - Conversion - Tokenizing - Lexing - DOM construction

![[https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/dom-tree.png](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/dom-tree.png)](/images/browser-rendering-01.png)

[https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/dom-tree.png](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/dom-tree.png)

1. Conversion: 브라우저가 HTML의 원시 바이트를 읽어, 지정된 인코딩에 따라 문자로 변환합니다.
2. Tokenizing: 브라우저가 문자열을 고유 토큰으로 변환합니다.
3. Lexing: 토큰을 해당 속성 및 규칙을 정의하는 객체로 변환합니다.
4. DOM construction: 트리 데이터 구조에 연결합니다.

위 과정의 최종 결과물이 DOM 이며, HTML 마크업이 변경될 때 마다 위의 모든 단계를 수행합니다.

---

## CSSOM

브라우저는 DOM을 생성하는 동안 Link태그를 만나 페이지를 렌더링하는데 필요할 것이라고 판단해 즉시 요청을 날립니다.

CSSOM 역시 위의 프로세스를 반복합니다.

- Bytes → Characters → Tokens → Nodes → Object Model

CSSOM 또한 트리구조를 갖습니다. CSSOM트리는, `사용자 에이전트 스타일`(브라우저 기본 스타일)에 스타일시트에서 재정의한 것을 덮어쓰기하며 하향식으로 규칙을 적용합니다. 특정 태그는 내 조상들에게 정의된 모든 속성을 갖습니다.

---

# 브라우저 이벤트 와 내비게이션 타이밍

---

- `domLoading`: 브라우저가 HTML 바이트의 파싱을 시작하려고 합니다.
- `domInteractive`: 브라우저가 파싱을 완료하고, DOM이 준비된 시점입니다.
- `domContentLoaded`: DOM과 CSSOM이 모두 준비되어, 렌더 트리를 생성할 수 있는 시점입니다. 아래 스크립트 부분에서 다시 설명하지만, 상호관계 있는 CSSOM의 완료까지 지연됩니다.
    - 많은 라이브러리 및 프레임워크가 이 이벤트를 받은 후 자체 로직을 수행합니다.
- `domComplete`: 페이지 및 하위 리소스(이미지 등)가 모두 준비되었습니다.
- `loadEvent`: 브라우저가 추가 어플리케이션 로직을 트리거할 수 있는 `onLoad` 이벤트를 발생시킵니다.

위의 값들은 `window.performance.timing` 에서 확인 해볼 수 있습니다.

# 렌더 트리 생성

---

## 렌더 트리(Render tree, Frame tree)

DOM 과 CSSOM 을 결합하여 렌더 트리 생성

1. DOM 트리의 루트에서 시작해, 표시되는 노드를 각각 횡단(traverse)합니다.
    
    일부 노드는 표시하지 않습니다(스크립트, 메타 등).
    
    일부 노드는 CSS를 통해 숨겨져서(display: none) 생략합니다.
    
    ⇒ 페이지를 렌더링 하는데 필요한 노드만 포함됩니다.
    
2. 표시된 각 노드에 대해 일치하는 CSSOM 규칙을 찾아 적용합니다.
3. 표시된 노드를 컨텐츠, 계산된 스타일과 함께 내보냅니다.
- 어태치먼트(attachment, content sink): DOM 과 CSSOM 을 합치는 과정

---

# 레이아웃(Layout, Reflow)

---

컨텐츠 및 스타일 정보를 포함하는 렌더 트리를 받습니다. 

렌더 트리의 루트에서 시작하여, 렌더 트리를 횡단(traverse)합니다.

뷰포트 내에서 각 요소의 정확한 위치와 크기를 캡처하는 `Box Model`이 출력됩니다. 이 때 모든 상대적인 측정값은 절대값인 픽셀로 변환됩니다.

브라우저는 충분히 영리하기 때문에, 스타일이 변경되었을 때 렌더 트리를 업데이트 해야 하는지 확인합니다. 기하학적 속성이 변경되었는지, 이로 인해 영향받는 것들은 무엇이 있는지를 판단하고 그부분들만 수정합니다.

- 만약 페이지 상단의 기하학적 요소(width, height, margin 등)를 변경하면 그로 인해 영향받는 부분 전체를 다시 계산하게 됩니다.
- IE를 지원해야 하는 경우가 아니라면, Float보다는 Flexbox를 사용하세요. 레이아웃 계산 코스트가 월등히 낮습니다.
- 단 하나의 요소만 수정되더라도 영향받는 부분 전체를 계산하기 때문에, 여러 모델이 나오게 됩니다. fastDOM과 VDOM이 대표적인 예입니다. 이들은 일정량을 모아 DOM에게 전달해 렌더링 횟수를 줄입니다.

---

# 페인트

---

실제로 페인트가 하는 작업은 두 가지 입니다.

1. 그리기 호출 목록 생성(creating a list of draw calls)
2. 픽셀 채우기(filling in the pixels) 혹은 래스터화(rasterization)

흔히 생각하기에 리플로우가 가장 큰 비용을 차지한다고 생각하고 리플로우를 줄이기 위한 노력을 많이 하지만, 대체로 가장 큰 비용을 차지하는것은 페인트입니다.

페인트 영역을 줄이기 위한 방법이 있는데, 아래에 컴포짓에서 다시 다루겠습니다.

또한 렌더링 메뉴에서 `Paint flashing`을 체크하여, 리페인트 되는 영역을 확인하며 작업할 수도 있습니다.

![/images/browser-rendering-02.png](/images/browser-rendering-02.png)

---

# 컴포짓

![[https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg](https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg)](/images/browser-rendering-03.png)

[https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg](https://developers.google.com/web/fundamentals/performance/rendering/images/intro/frame-full.jpg)

페이지의 여러 부분은 레이어로 그려져있습니다. 이들을 정확한 순서대로(z축을 포함하여) 렌더링합니다. 이 순서는 무척 복잡하고, 쌓임맥락(`Stacking Context`)에 대해 알아야 합니다.

- 이것은 자주 발생하지는 않지만, 사람들이 잘 모르는 순서의 예입니다. [https://philipwalton.com/articles/what-no-one-told-you-about-z-index/](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)

레이어 승격(layer promotion), 애니메이션 오케스트레이션(orchestration)을 통해 페인트 영역을 줄일 수 있습니다.

- transform: translateZ(0) 혹은 translate3d(0, 0, 0)
- will-change
- transform은 GPU 가속(GPU acceleration)을 사용합니다. 이 때에 레이어의 텍스처는 GPU로 업로드 되어야 하고, CPU와 GPU간의 대역폭 및 GPU 메모리를 추가로 사용합니다.
또한 지금은 모바일 기기의 메모리가 충분히 커졌지만, 만약 메모리를 전부 사용할 경우 모바일 기기가 리붓(reboot)되는 현상이 존재합니다.
- 레이어 승격에 대해서, 그레이스케일 안티앨리어싱을 사용하여 렌더링된다고 말합니다. 자세한 내용은 [https://www.html5rocks.com/ko/tutorials/internals/antialiasing-101/](https://www.html5rocks.com/ko/tutorials/internals/antialiasing-101/) 를 참조하세요.

CSS 각 속성에 따른 레이아웃, 페인트, 컴포짓 발동여부는 [https://csstriggers.com](https://csstriggers.com/) 에서 확인할 수 있습니다. 여러 레이어(렌더레이어, 그래픽스레이어 등)를 순서에 맞게 배치합니다.

레이어에 대한 보다 자세한 내용은 [https://www.html5rocks.com/ko/tutorials/speed/layers](https://www.html5rocks.com/ko/tutorials/speed/layers/) 를 참조하세요.

---

# Process - Blocking

---

## Link

위에서 설명한대로 HTML 파서는 Link태그를 만나면 브라우저는 렌더링에 필요하다고 판단하고 즉시 요청을 보냅니다.

~~기본적으로 CSS는 렌더링 차단 리소스로 취급되고, CSSOM이 생성될 때 까지 브라우저는 모든 컨텐츠를 렌더링하지 않습니다.~~

그러나 브라우저의 렌더링 엔진은 좀 더 나은 사용자 경험을 위해, 모든 HTML을 파싱할 때 까지 기다리지 않고 레이아웃과 페인트를 반복합니다. 네트워크로부터 나머지 내용이 전송되기를 기다리며 내용의 일부를 먼저 화면에 표시해줍니다.

이 부분은 각 브라우저 개발자도구에서 퍼포먼스 레코딩을 한 뒤 워터폴과 컴포짓을 같이 보면 확인할 수 있습니다.

- 이 때에, FOUC(Flash Of Unstyled content)가 발생할 수 있습니다. 고전적인 해결방법으로 html 에 style태그를 넣어주는 방법이 있습니다.
    
    ```html
    <head>
    	<style>
    	html { display: none;  }
    	</style>
    </head>
    <body>
    ...
    <style> html { display: block; }</style> <!-- <link 파일에 같은 내용이 있어도 됩니다 -->
    </body>
    ```
    
    혹은 애니메이션으로 표현하여 지연이 없는 것처럼 보여주기도 하고, preload를 통한 방법도 있습니다.
    
    preload에 관한건 [https://developers.google.com/web/updates/2017/12/modulepreload](https://developers.google.com/web/updates/2017/12/modulepreload) 를 참조하세요.
    
- 특정 상황에서만 사용하기 위한 media attribute를 사용한 스타일시트는, 렌더링을 차단하지 않습니다.
    
    ```html
    <link href="print.css" rel="stylesheet" media="print">
    <link href="other.css" rel="stylesheet" media="(max-width: 320px)">
    ```
    

---

## Script

HTML파서는 script태그를 만나면 자바스크립트 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고, JS 엔진으로 제어 권한을 넘겨줍니다.

JS의 실행이 완료되면 다시 HTML파서로 권한을 넘겨주고, 정지했던 시점부터 DOM 생성을 재개합니다.

스크립트를 실행하려는 경우, CSSOM이 완료되지 않았다면, CSSOM을 다운로드 하고 생성하는 작업이 끝날 때 까지 스크립트 실행 및 DOM 생성을 지연합니다.

인라인 스크립트 대신 외부 파일을 이용할 경우

- 브라우저는 작업을 중단하고 디스크, 캐시, 원격 서버 등으로부터 스크립트 파일을 가져올 때 까지 대기합니다.

이에 대한 대안으로 defer와 async 어트리뷰트가 있습니다.

---

### defer

이 어트리뷰트를 사용하면, DOM 빌드를 멈추지 않고 계속 진행하고 백그라운드에서 스크립트를 로드합니다.

defer는 DOM이 준비된 후, `DOMContentLoaded` 전에 스크립트를 실행합니다.

defer 스크립트 간에는 우선순위를 유지합니다.

```html
<script defer src="./big.js"></script>
<script defer src="./small.js"></script>
```

---

### async

defer와 마찬가지로 DOM 빌드를 멈추지 않고 진행하지만, `DOMContentLoaded` 와 독립적으로 작동합니다. 즉, `DOMContentLoaded` 가 먼저 실행될수도 스크립트가 먼저 실행될수도 있습니다.

특히, 스크립트 파일이 작거나 HTTP 캐시에 있는 경우가 그렇습니다.

또한 async간에도 순서보장을 하지 않고 독립적이며, load-first 순서대로 실행됩니다.

---

## 이미지

- 이미지는 페이지의 초기 렌더링을 차단하지 않습니다.
- `DOMContentLoaded` 에서는 차단하지 않지만, `load` 이벤트(`onLoad`)에선 이미지도 차단(Blocking) 대상 입니다.

---

# Performance

---

- [https://developers.google.com/web/fundamentals/performance/critical-rendering-path/page-speed-rules-and-recommendations](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/page-speed-rules-and-recommendations) 페이지 스피드를 위한 권장
- [https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size](https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size) 웹팩 설정을 통한 보완
- 일반적으로 문서의 DOM 노드 합산은 2천개를 넘지 말라고 합니다(참조 링크 필요).
콘솔을 열고, `document.querySelectorAll('*').length` 를 입력해 확인해볼 수 있습니다.
- 퍼포먼스 탭을 활용하면, 일반적으로 보기 힘든 여러가지를 대신 실시간 캡쳐해줍니다.
여기서 표시해주는 DOM nodes는 메모리에 보관되어 있는 노드입니다. 위의 쿼리를 실행하면, 현재 문서의 Nodes가 나옵니다. 이는 GC가 해당 Nodes를 가져가지 않았음을 의미합니다. 즉, JS코드 어디에선가 해당 노드들을 참조하고 있습니다.

![/images/browser-rendering-04.png](/images/browser-rendering-04.png)

- [https://d2.naver.com/helloworld/4969726](https://d2.naver.com/helloworld/4969726) 폰트 최적화

---

- [https://wiki.developer.mozilla.org/ko/docs/Web/CSS/CSS_Containment](https://wiki.developer.mozilla.org/ko/docs/Web/CSS/CSS_Containment) css contain
[https://wit.nts-corp.com/2020/09/11/6223](https://wit.nts-corp.com/2020/09/11/6223?utm_source=gaerae.com&utm_campaign=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%8A%A4%EB%9F%BD%EB%8B%A4&utm_medium=social) content-visibility

---

여기에 포스팅된 대부분의 내용은 구글문서를 참조합니다. 아래 레퍼런스 중 하나를 열고, 화면 좌측 사이드바를 따라가며 모든 문서를 정독하는걸 추천드립니다.

읽어주신분들, 피드백주신분들 모두 감사드립니다.

# Reference

---

- [https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)
- [https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
- [https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
- [https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript)
- [https://poiemaweb.com/js-browser](https://poiemaweb.com/js-browser)
- [https://d2.naver.com/helloworld/59361](https://d2.naver.com/helloworld/59361)
- [https://javascript.info/script-async-defer](https://javascript.info/script-async-defer)
- [https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)
- [https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp?hl=ko](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp?hl=ko)