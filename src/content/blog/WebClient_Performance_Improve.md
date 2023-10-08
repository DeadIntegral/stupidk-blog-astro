---
title: WebClient Performance Improve
date: "2023-05-16T00:00:00.000Z"
description: "WebClient Performance Improve. 웹의 성능은 무엇이고, 어떤걸 개선해야 하는지에 대한 개요 문서"
tags: ["performance", "javascript", "css", "font", "image"]
---

# Requirement

펀더멘탈과 키워드, 기본적인 부분만 설명하고 자세한 내용은 링크로 대체합니다. 이해가 가지 않는 부분은 저자를 호출해주세요.

## WebApp Performance란 무엇인가?

## MDN

[MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Fundamentals)의 설명을 조금 빌리겠습니다.

웹 앱의 맥락에서 퍼포먼스란 궁극적으로 사용자가 인지하는 퍼포먼스만이 중요합니다. 퍼포먼스란 사용자 입력에 대한 시스템 출력의 품질입니다.

앞으로 사용자 인지 퍼포먼스를 `UPP(User-Perceived Performance)` 라고 쓰겠습니다.

### Responsiveness

사용자 입력에 대한 응답으로, 출력을 제공하는 속도입니다. API 와 연결된 버튼의 경우 클릭 했다는 인터랙션 외에도, 로딩 인디케이터가 있는게 좋습니다.

### **Frame rate**

사용자에게 표시되는 픽셀을 변경하는 속도입니다. UI 라이브러리 및 프레임워크들은 대부분 60fps 를 유지해줍니다.

### **Memory usage**

사용자는 메모리 사용량을 직접 인식하지 못하지만 “사용자 상태”와 거의 유사합니다. 사용자가 애플리케이션을 마지막으로 상호 작용했던 상태를 유지합니다. 여기서 중요한 부분이, 잘 설계된 시스템은 사용 가능한 메모리의 양을 최대화하지 못한다는 것입니다. 잘 설계된 시스템은 사용자 상태를 유지하면서 다른 UPP 목표를 달성하기 위해 가능한 많은 메모리를 사용하도록 최적화되어 있습니다.

그렇다고 메모리를 낭비해야 한다는 의미는 아닙니다.

덧붙이자면, 크롬이나 여러분이 흔히 사용하는 `will-change`도 메모리를 사용해서 성능을 얻습니다.

### **Power usage**

UPP를 얼마나 오래 유지할 수 있는지에 따라 간접적으로 인식됩니다.

---

## Core web vital

위에서 말하는 기준들을 측정하려면 지표가 필요합니다. 웹에서는 보통 Core Web Vital을 사용합니다.

### LCP(Largest Contentful paint)

로딩 성능을 측정합니다. 사용자가 페이지 로딩을 시작한 시점부터 뷰포트 내에서 가장 큰 이미지나 텍스트 블록이 렌더링 될 때 까지의 시간을 측정합니다. 우수한 사용자 경험을 제공하려면 2.5초 이내에 LCP 가 발생해야 합니다.

[https://web.dev/lcp/](https://web.dev/lcp/)

LCP를 위한 이미지 최적화 - [https://csswizardry.com/2022/03/optimising-largest-contentful-paint/](https://csswizardry.com/2022/03/optimising-largest-contentful-paint/)

### FID(First Input Delay)

인터랙션을 측정합니다. 사용자가 페이지에서 처음 인터랙션을 일으킬 때 해당 인터랙션에 대한 응답으로 브라우저가 실제로 이벤트 핸들러 처리를 시작하기까지의 시간입니다. 우수한 사용자 경험을 제공하려면 100ms 이하입니다. 앞으로 INP로 대체될 예정입니다.

hydration을 사용하면 FID가 떨어진다는 비평이 꽤 있었습니다.

[https://web.dev/fid/](https://web.dev/fid/)

### CLS(Cumulative Layout Shift)

시각적 안정성을 측정합니다. 사용자가 예상치 못한 레이아웃 이동을 경험하는 빈도를 수치화 한 값이니다. 우수한 사용자 경험을 제공하려면 0.1 이하를 유지해야 합니다. 지연된 로딩이나 내 행동으로 인해 레이아웃이 바뀌고 이로인해 잘못 클릭되는 케이스가 대표적인 문제 케이스입니다.

[https://web.dev/cls/](https://web.dev/cls/)

위의 각 메트릭은 모바일, 데스크탑 장치들을 세분화 했을 때 페이지 로드의 75번째 백분위 입니다.

위의 지표들을 수집하기 위해 [https://pagespeed.web.dev/](https://pagespeed.web.dev/) 나 크롬 개발자 도구의 lighthouse 등을 이용할 수 있습니다.

- [https://developer.chrome.com/docs/lighthouse/overview/](https://developer.chrome.com/docs/lighthouse/overview/)

### INP(Interaction to Next Paint)

사용자의 액션 후 다음 페인트까지 걸리는 시간을 측정합니다. 페이지가 사용자 인터랙션을 얼마나 잘 처리하는지 평가하는 지표입니다. 구글 가이드라인에서 말하는 우수 사례는 200ms 미만입니다.

[https://web.dev/inp/](https://web.dev/inp/)

[https://web.dev/optimize-inp/](https://web.dev/optimize-inp/)

[https://calibreapp.com/blog/interaction-to-next-paint](https://calibreapp.com/blog/interaction-to-next-paint)

### 브라우저 개발자 도구 활용

크롬 개발자도구에서 lighthouse 패널로 이동하여 페이지를 분석할 수 있습니다.

크롬 개발자도구의 드로어의 렌더링에서 core web vital 을 키거나 팔레트에서 core web vital을 검색하면 오버레이로 띄울 수 있습니다.

---

위와 같은 지표를 달성하기 위해 적용할 수 있는 다양한 기법을 소개할 겁니다. 그 전에 설계적인 측면에서 여러분은 다음의 두 가지 중 하나 혹은 경우에 둘 다 적절하게 사용해야 합니다.

## 우아한 저하와 점진적 향상 (Graceful Degradation and Progressive Enhancement)

### 우아한 저하

우아한 저하는 모던 브라우저에서 특정 수준의 사용자 경험을 제공하고, 이전 버전에서는 사용자 경험이 점진적으로 저하되도록 합니다. 

polyfill을 사용하는 경우 상당수가 우아한 저하에 해당할 수 있습니다.

<aside>
💡 Shim은 똑같은 구현을, polyfill은 유사한 구현입니다.

</aside>

### 점진적 향상

점진적 향상은 모든 브라우저가 제공할 수 있는 적절한 수준의 사용자 경험을 설정하는 것으로 시작하여, 기능이 제공되는 브라우저에서는 고급 기능도 제공합니다.

`@supports` 를 생각하면 좋을 것 같습니다.

```css
.container {
	float: left;
}
@supports (display: flex) {
	.container { display: flex; }
}
```

JS에서는 보통 아래와 같이 사용합니다. safari에 대한 신뢰가 없을 경우 try catch를 사용한 detect함수를 만들어서 사용하기도 합니다.

```jsx
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
  });
} else {
}
```

[https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement)

---

# CSS Tips

## transform

`translateZ(0)`, `translate3d(0,0,0)`과 같은 트릭을 이용하면 레이어 프로모션이 발생합니다. 이는 레이어 프로모션을 발생시키기 위한 강제적인 조건이고 딱히 이와같이 사용하지 않더라도 `transform`을 사용하면 경우에 따라 레이어 프로모션이 발생합니다.

### layer promotion이란?

[https://www.notion.so/stupidk/994f91c0b5cc493481876d04be028b76?pvs=4#c00724be857345fba3c507c94de35dd2](https://www.notion.so/994f91c0b5cc493481876d04be028b76?pvs=21)

### layer devtools

크롬 개발자 도구에 layers 패널이 있습니다.

컴포짓 레이어가 어떻게 작동하고, GPU 가속이 어떻게 작동하는지 궁금한분은 다음의 문서를 보세요.

[https://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome/](https://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome/)

---

## Containment

페이지의 서브트리를 페이지의 나머지 부분과 분리할 수 있도록 하여 성능을 향상시킵니다. 이 값은  `fetchpriority`처럼 브라우저에게 주는 힌트에 가깝습니다. 브라우저는 `contain`을 기준으로 판단하여 새 요소가 삽입될 때 하위 트리의 외부 영역에 대해서는 `relayout(reflow)`, `repaint` 할 필요가 없음을 인식합니다. 보다 자세한건 아래 mdn을 참조하세요.

[https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Containment](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Containment)

### Contain

layout

- 요소의 자손이 다른 요소에 영향을 주는지를 결정합니다.

paint

- 요소의 테두리 바깥에서 하위 요소가 그려지지 않음(페인트되지 않음)을 브라우저에게 알려줍니다.

size

- 레이아웃 계산을 수행할 때 자손을 고려할 필요가 없음을 알려줍니다. size를 적용하는 요소에는 width, height가 적용되어 있어야 합니다.

그 외에 style, content(layout + paint), strict(layout + paint + size) 등도 있습니다.

[https://developer.mozilla.org/en-US/docs/Web/CSS/contain](https://developer.mozilla.org/en-US/docs/Web/CSS/contain)

[https://css-tricks.com/almanac/properties/c/contain/](https://css-tricks.com/almanac/properties/c/contain/)

### content-visibility (WD)

content-visibility 역시 CSS containment스펙입니다. 요소가 화면 밖에 있을 경우 렌더링 하지 않도록 설정할 수 있는 기능입니다. 사파리, 모바일 FF를 제외하고 사용가능합니다.

다음 예제에서는 섹션이 뷰포트에 가까워질 때 까지 콘텐츠 페인팅을 생략합니다. 이는 페이지의 로드와 인터랙션 모두에 도움이 됩니다.

이 프로퍼티는 오버헤드가 상당히 비쌉니다. 데이터 리스트에는 여전히 virtual list 가 훨씬 효율적입니다. 레이아웃과 같은 부분에 적용하세요.

이와 같은 케이스는 적용하는 것 만으로 점진적 향상이 됩니다.

```html
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>
<!-- … -->

<style>
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
</style>
```

[https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility)

[https://wit.nts-corp.com/2020/09/11/6223](https://wit.nts-corp.com/2020/09/11/6223)

---

## import

CSS import는 동기식으로 이루어집니다. CSS `import`로 폰트 파일을 불러온다면, 해당 폰트 파일을 불러올 때 까지 `CSSOM`은 생성되지 못하고 블록킹 처리가 됩니다. 

---

## ETC

CSS는 하단에 있는 프로퍼티가 오버라이드 합니다. 때문에 아래와 같이 사용하기도 합니다.

```css
div {
	default-property: auto;
	more-modern-property: auto;
	more-more-modern: auto;
}
```

이와 같이 작성 할 경우 브라우저가 지원하는 가장 최신 프로퍼티가 적용됩니다.

단, aspect-ratio 처럼 fallback이 본래의 프로퍼티들과 충돌할 수 있는 경우 support를 사용하여 처리합니다.

```css
.box {
	width: 100%;
	aspect-ratio: 1/1;
	@support not (aspect-ratio) {
		padding-top: 100%;
	}
}
```

---

# Image

### lazy

웹에 있는 가이드 문서들을 보면 이미지에는 `lazy` 어트리뷰트를 적용하라고 합니다. 이는 이미지를 비동기적으로 (뷰포트에 접근하면) 불러오기 때문입니다. 반대로 히어로 이미지(페이지 최 상단의 이미지)에는 이를 적용하지 않아야 합니다. 유저 접근 시 이미 뷰포트에 속하는 영역이고 이는 초기 로딩 속도에 상당한 영향을 줍니다.

### srcset, image-set()

흔히 해상도에 적합한 사이즈의 이미지를 제공하는데 사용됩니다. `image-set()`은 css에서 `srcset`을 사용하는 방법입니다.

```css
background-image: image-set(
	"cat.avif" type("image/avif"),
	"cat.jpg" type("image/jpeg")
);
```

link preload의 as를 image로 주고 사용할수도 있습니다.

```html
<link rel="preload" as="image" href="image.jpg" imagesrcset="image_360.jpg 360w, image_800.jpg 800w" imagesizes="50vw">
```

사용자의 브라우저가 지원하는 확장자에 따른 이미지 제공도 가능합니다. 주로 아트 디렉션(인물이나 특정 객체에 포커스된 이미지 등)에 사용됩니다.

```html
<picture>
	<source srcset="img/photo.avif" type="image/avif">
	<source srcset="img/photo.webp" type="image/webp">
	<img src="fallback_image.jpg" />
</picture>
```

이는 accecpt-header로도 가능합니다. 일부 CDN은 이 기능을 지원합니다.

[https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### priority

특정 브라우저에서만 성능 향상이 있더라도 우리의 전략에 따라 충분히 도입할 가치가 있습니다.  `fetchpriority` 도 그렇습니다. 이는 이미지나 iframe과 같은 곳에서 사용 가능합니다.

```html
<img src="hero-image.jpg" fetchpriority="high" alt="Hero">

<img src="second-image.jpg" fetchpriority="low">

<iframe src="https://third-party.com" fetchpriority="low"></iframe>
```

blink에는 `VeryHigh`, `High`, `Medium`, `Low`, `VeryLow`의 값이 있습니다. 단, `VeryHigh`는 레이아웃 블록킹을 발생시킵니다. (개발자도구에서는 highest, lowest 로 표현합니다)

[https://web.dev/fetch-priority/](https://web.dev/fetch-priority/)

### Image C****ompression****

인코딩 방식 변경을 통한 파일 크기 감소도 많이 사용됩니다. (단일 색상이어도 png라면 픽셀에만 비례해야 하는데 실제 크기가 감소합니다.) 다운 샘플링도 많이 사용됩니다. 다운 샘플링은 인간의 인식 품질을 손상시키지 않으면서 크로마 채널의 디테일을 줄이고 해상도를 다운시키는 방법입니다. (퀄리티는 근사치로 유지되니다. 직접 셋팅 가능한 도구들도 있습니다.) 자세한 내용은 아래 키워드를 남길테니 관심있은 분들만 보시면 될 것 같습니다. 이미지 확장자에 따라 각 브라우저 벤더사가 전문영역을 구축하기도 합니다.

현대에 이르러선 새로운 파일 포맷을 사용하는것이 더욱 권장됩니다. 여러분이 많이 사용하는 WebP를 비롯하여 AVIF 와 같은 비디오 기반 포맷 방식으로 더욱 용량을 줄일 수 있습니다.

- `will-change`를 할 경우 이미지의 GPU 메모리는 width * height * 4(byte) 만큼 사용됩니다. 반대로, 작은 이미지를 사용하고 transform의 scale등을 사용하면 메모리를 절약하는 트릭도 존재합니다.

Reference

- `DEFLATE`, `delta encoding`, `chroma subsampling`
- [https://medium.com/@duhroach/how-png-works-f1174e3cc7b7](https://medium.com/@duhroach/how-png-works-f1174e3cc7b7)
- [https://evilmartians.com/chronicles/decoding-avif-deep-dive-with-cats-and-imgproxy](https://evilmartians.com/chronicles/decoding-avif-deep-dive-with-cats-and-imgproxy)

### Reference

- 웹 이미지에 대하여 [https://web.dev/learn/images](https://web.dev/learn/images)

# <script>, <link>

## defer, async

제가 작성한 다른 문서의 참조로 대체하겠습니다.

[https://www.notion.so/stupidk/994f91c0b5cc493481876d04be028b76?pvs=4#0562751876bc47db9955a1f53e0e4ec3](https://www.notion.so/994f91c0b5cc493481876d04be028b76?pvs=21)

## fetchpriority

이 옵션은 지시문이 아니라 힌트입니다. 충돌이 발생하면 브라우저가 필요하다고 간주되는 것이 우선 적용될 수 있습니다. link의 preload는 강제로 적용하는것과 비교됩니다.

```html
<script> 
const req = await fetch("/api", { priority: "low" }); 
</script>
```

preload 하는 다른 리소스와 경쟁하지 않도록 우선순위를 낮출수도 있습니다.

```html
<link rel="preload" as="script" href="critical-script.js">
<link rel="preload" href="/js/script.js" as="script" fetchpriority="low">
```

위의 async와 같이 사용할수도 있습니다.

```html
<script src="async_but_important.js" async fetchpriority="high"></script>
```

# Font

## font-display

폰트를 불러올 때 브라우저의 기본 폰트로 보여주고 있을지, 숨기고 있다 로드가 변경 폰트를 변경할지 등을 결정합니다. 이 때 중요한 컨셉이 font glyph입니다. 폰트 글리프란 폰트 하나하나의 모양 정보입니다. 이는 폰트마다 그 크기가 다르고, 결국 폰트마다 같은 사이즈(font-size: 1rem) 임에도 strut이 달라지는 원인입니다. 이는 swap을 할 경우 CLS의 원인이 됩니다. (padding이 없고 width, height가 결정적인 상태에서 정렬을 통해 배치하여 회피할 수 있습니다.)

- [https://developer.mozilla.org/ko/docs/Web/CSS/@font-face/font-display](https://developer.mozilla.org/ko/docs/Web/CSS/@font-face/font-display)

이에 대해 size-adjust 를 사용하여 보정이 가능합니다. [https://developer.chrome.com/blog/font-fallbacks/](https://developer.chrome.com/blog/font-fallbacks/) 이와 같이 폰트 메트릭을 조정할 수 있습니다. 다만 성과에 비해 큰 노력이 들어가서 권하지 않습니다.

## google font

대체로 폰트 파일은 용량이 큽니다. 한글의 다양한 조합에 대한 데이터가 포함되어 그렇습니다. 구글 폰트를 사용하면 많이 사용되는 자모음 위주의 파일을 먼저 전송하고, 그 외의 글자를 만나게 되면 그 때 해당하는 파일들을 전송합니다. (유니코드의 레인지로 폰트 파일들을 분리해놨기에 이러한 기능이 제공됩니다.)

### ETC

- font-face 주의사항
[https://nooshu.com/blog/2021/01/23/the-importance-of-font-face-source-order-when-used-with-preload](https://nooshu.com/blog/2021/01/23/the-importance-of-font-face-source-order-when-used-with-preload)
- font weight 마다 다운로드 하는 대신 CSS로 처리하기
[https://www.stefanjudis.com/today-i-learned/the-relative-font-weight-axis-how-variable-fonts-ease-font-weight](https://www.stefanjudis.com/today-i-learned/the-relative-font-weight-axis-how-variable-fonts-ease-font-weight)

---

# Reference

- [https://web.dev/vitals/](https://web.dev/vitals/)
- [https://support.google.com/webmasters/answer/9205520](https://support.google.com/webmasters/answer/9205520)
- [https://calibreapp.com/blog/interaction-to-next-paint](https://calibreapp.com/blog/interaction-to-next-paint)