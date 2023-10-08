---
title: Priority Scheduler
date: "2023-02-07T00:00:00.000Z"
description: "Priority Scheduler"
tags: ["browser"]
---

# 들어가기전에

> 이 문서에서 말하는 프라이어리티 스케쥴러는 웹 클라이언트의 얘기입니다.
> 

---

# 배경

여러분이 이미 알고있듯이 브라우저는 event loop 라는 시스템이 있고 이 또한 스케쥴러입니다. 상기시키는 의미에서 간단히 살펴보고 가겠습니다.

브라우저가 코드(executable code)를 읽을 때 위에서부터 순차적으로 읽어나갑니다. 비동기 코드를 만나면 해당하는 적절한 큐에 해당 작업을 적재하면서 읽습니다. 그리고 모든 코드를 읽고나면 이벤트 루프가 microtask queue, request animation frame, task queue 순서대로 읽으며 큐에 적재된 작업을 실행합니다.

<aside>
💡 어느시점에나 실제로 코드를 실행하는 에이전트(agent)당 실행 컨텍스트는 최대 하나입니다. 이를 에이전트의 동작중인 실행 컨텍스트(running execution context)라고 합니다. execution context 에는 연관된 코드의 실행 진행 상황(execution progress)을 추적하는데 필요한 구현 특정 상태(implementation specific state)가 포함되어 있습니다. 일단은 JS의 비동기는 이렇게 구현되어 있다고 생각하셔도 괜찮을 것 같습니다.

</aside>

<aside>
💡 rAF와 task queue간의 우선순위에 대해서 간단히 설명하고 넘어가자면, 아티팩트인 브라우저 종류 및 버전마다 차이가 있었습니다. 또한 setTimeout과 같이 우리가 TaskQueue라고 알고 있는 브라우저 API 들은 어디서 호출되느냐에 따라 priority가 달라지기도 합니다.

</aside>

- blink artifact

![[https://docs.google.com/presentation/d/1-QOXjSGyL-taTY4XH7yc-E7KIDE023WSs_GQ6gIoQ8I](https://docs.google.com/presentation/d/1-QOXjSGyL-taTY4XH7yc-E7KIDE023WSs_GQ6gIoQ8I)](/priority-scheduler-01.png)

[https://docs.google.com/presentation/d/1-QOXjSGyL-taTY4XH7yc-E7KIDE023WSs_GQ6gIoQ8I](https://docs.google.com/presentation/d/1-QOXjSGyL-taTY4XH7yc-E7KIDE023WSs_GQ6gIoQ8I)

<aside>
💡 여기서 살펴본 스케쥴러는 브라우저가 JS 영역에서 사용자에게 제공해주는 API 와 그로 인한 이벤트 루프만 해당합니다. 실제 브라우저는 훨씬 복잡합니다.

크롬으로 약간의 설명을 덧붙이자면, blink는 렌더링 엔진의 응답성을 향상시키기 위하여 가능할 때 마다 비동기적으로 실행하고, 별도의 task scheduler가 있습니다. 

</aside>

---

# 리액트의 Priority Scheduler

이 단락의 내용은 리액트 발표 내용을 편집했습니다.

## 스케쥴러란?

스케쥴링의 이점은 리액트나 특정 라이브러리에 국한되지 않습니다. 스케쥴링 우선 접근 방식을 사용하면 그동안 웹에서 받았던 제약들보다 많은 것들을 할 수 있고, 몇 가지 문제도 해결하는데 도움됩니다.

일반적인 스케쥴러는 입력으로 요청을 받고 출력으로 일부 리소스 사용에 대해 시스템에 대한 결정을 내리는 블랙박스입니다. 이러한 종류의 결정을 내릴 때 우선순위를 지정하고 조치를 취해야 하는 요청을 결정합니다. 웹에서는 코드 실행, UI 업데이트가 포함됩니다.

## 리액트를 더 빠르게 만드는 대신 스케쥴러를 만든 이유

- raw speed에 초점을 맞추는 접근 방식은 코드를 얼마나 빨리 만들 수 있는지에 대한 전체 그림을 그리기 어렵습니다.
- 좋은 사용자 경험, raw speed 에 초점을 맞추는 것은 근시안적이며 장기적으로 문제를 해결하지는 못합니다.
- 브라우저와 자바스크립트 엔진, 프레임워크, 라이브러리의 성능 향상으로 웹은 많아 빨라졌지만, 늘어난 예산만큼이나 지출도 늘어났습니다.
- 결국 예산을 확보하려면 지출을 줄여야하고 이를 수행할 것이 스케쥴러입니다.
    - 웹 애플리케이션의 경우 속도만으로 사용자 경험을 정의할 수 없지만, 충분히 빨라야 한다는 기대가 있습니다.

## 리액트의 문제 정의 및 해결

### **문제**

- 코드가 얼마나 빠르든 사용자의 네트워크를 더 빠르게 만들수는 없습니다. (네트워크 지연으로 인해 사용자 인풋 순서와 상관없이 업데이트가 될 수 있습니다.)
- 결국 애플리케이션은 종종 CPU 가 아닌 네트워크 속도로 제한되고, UI 를 새로운 데이터로 업데이트 하는 경우 대부분의 시간을 소비하게 됩니다. 우리는 네트워크 요청을 점점 더 많이 분할하게 되고 이는 계단식 스피너로 이어져 사용자 경험을 크게 해칠 수 있습니다.
- 코드는 다양한 네트워크 조건과 그에 따른 비결정론을 설명할 수 있어야 하고, 이는 본질적으로 스케쥴링 문제이며 모든 것은 조정에 관한 것입니다.

### 해결

- 스케쥴러가 업데이트를 조정할 수 있는 방식으로 애플리케이션을 모델링합니다.

### 목표

- **인지된 성능 향상(perceived performance).** 애플리케이션이 느리다고 느끼는 경우 코드가 얼마나 빠른지는 중요하지 않습니다. 인지된 성능에 대한 흥미로운 점은 가장 빠른 것이 최선이 아니란 것입니다.

대다수의 경우 UI를 한번에 하나씩 업데이트 하는 것은 사용자의 기대(인터랙션 순서 등)와 부합하지 않을 수 있습니다. UI업데이트를 지연시키고 모든 것을 한번에 커밋하는 것이 의미 있을 수 있습니다.(이를 훨씬 더 빠르게 느낄 수 있습니다.) 이것이 작동하는 이유는 단지 눈에 띌 만큼의 양이기 때문.

<aside>
💡 지각의 심리학에 따르면 우리가 갖고 있는 대부분의 지각에 대해서 어떤 임계값이 존재합니다. 임계값은 비교 대상의 규모에 따라 달라지고 이는 **시간에 대한 우리의 인식에도 적용됩니다.**

</aside>

리액트 팀은 의도적으로 리액트와 리액트 스케쥴러를 독립적으로 설계했습니다. 이는 리액트가 다른 프라이어리티 스케쥴러와 같이 사용하거나, 리액트 스케쥴러를 react 외 다른 도구와 같이 사용하도록 퍼블리싱하여 웹 커뮤니티에 기여하기를 바랍니다.

스케쥴러가 우리가 실행하려는 모든 코드를 알고 있는것이 중요하지만, 우리의 코드 외에 현재 프레임 타이밍 등 브라우저가 의사 결정에 영향을 미칠 수 있는 다른 것들도 있습니다. 즉, JS로 구현한 어떤 스케쥴러라도 항상 불완전한 정보를 갖고 있고 스케쥴링 프리미티브가 있어야 합니다. (일부 브라우저에는 scheduler api 가 있습니다.) 이에 대해서는 페이스북, 크롬 등이 고민중입니다.

이러한 스케쥴링에는 두 가지 중요한 문제가 있습니다.
하나는 **모든 것이 우선순위가 높으면 아무 것도 아니며,** 이는 z-index의 우선순위 권리와 흡사합니다. 두번째 문제는 애플리케이션을 계속 확장하고 복잡성을 증가시키기 위해 본질적으로 더 비싼 작업을 어떻게 쪼개고 스케쥴 할 수 있을지 입니다.

---

# Reference

- [https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
- [https://github.com/WICG/scheduling-apis/blob/main/explainers/prioritized-post-task.md](https://github.com/WICG/scheduling-apis/blob/main/explainers/prioritized-post-task.md)
- [https://github.com/WICG/scheduling-apis](https://github.com/WICG/scheduling-apis)
- [https://youtu.be/Iyrf52cwxQI](https://youtu.be/Iyrf52cwxQI)