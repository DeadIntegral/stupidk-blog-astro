---
title: Asynchronous
date: "2023-03-30T00:00:00.000Z"
description: "Asynchronous"
tags: ["Asynchronous"]
---

# 비동기

우리는 보다 로우레벨에서 제공해주는 비동기를 사용하기만 합니다. 그럼 이 비동기는 어떻게 구현할 수 있을까요? 가장 기본적으로는 큐와 이벤트 루프를 만들고, 이벤트 루프에서 매번 큐를 확인할 겁니다. 가장 기본적인 모델이지만, 루프를 돌게 하면 컴퓨터는 스레드의 모든 cpu 자원을 사용할겁니다. 가장 쉽게 생각할 수 있는 방법으로는 지연시간을 추가할 수 있습니다. 지연 시간 동안은 루프가 작동을 멈출 것이라는 기대가 있습니다. 여기서 또 다른 문제가 발생합니다. 모든 비동기 작업이 최대 루프의 지연 시간만큼 느려질 수 있습니다.

그럼 기존의 도구들은 어떻게 구현되어있을까요? NodeJS를 사용하는 분은 libuv를, Rust를 사용하는 분은 tokio를 본적이 있을겁니다. 둘 다 epoll 이라는 것을 사용해서 비동기를 처리합니다.

<aside>
💡 poll() 과 select() 는 블록킹 소켓 오퍼레이션입니다. 이 두 함수의 진화된 형태가 epoll 입니다. 또한 이 두 함수 역시 비동기 처리는 epoll과 유사합니다.

</aside>

epoll은 시스템 콜 입니다. 이 함수를 사용하면 CPU 가 점유되지 않고 이벤트가 발생하면 **OS에서 프로그램에 알려줍니다.** 이 함수는 이벤트가 처리될 준비가 될 때까지 프로그램이 대기하도록 함으로써 과도한 CPU 리소스를 소모하지 않고 여러 I/O 작업을 효율적으로 처리하도록 설계되었습니다. 이 함수를 사용하면 여러 파일 디스크립터(예: 네트워크 소켓)를 모니터링하고 하나 이상의 파일 디스크립터가 읽기, 쓰기 또는 예외적 조건(예: 오류)을 사용할 준비가 될 때까지 기다릴 수 있습니다.

그럼 운영체제는 어떻게 모니터링을 할까요? 운영체제의 모니터링이 시간 베이스라면 결국 레이어만 다를 뿐 위에서 언급한 지연 시간의 문제는 여전히 남아있습니다. 운영체제는 모니터링을 효율적으로 처리하기 위해 **인터럽트 기반 I/O 및 효율적인 폴링 매커니즘**을 사용합니다.

인터럽트 기반 I/O는 모니터링하는 파일 디스크립터에서 I/O 이벤트가 발생하면 해당 하드웨어 또는 장치 드라이버가 CPU에 인터럽트 시그널을 발생시킵니다. 인터럽트 시그널은 CPU의 정상적인 실행을 중단하고 운영 체제 커널 내 인터럽트 처리기 루틴으로 제어권을 전송합니다.

운영체제는 인터럽트에만 의존하는 대신 Linux의 epoll이나 Windows의 I/O 완료 포트(IOCP)와 같은 프로세서별 명령어를 사용하는 등 효율적인 폴링 매커니즘을 사용할 수도 있습니다. 모니터링 매커니즘은 주기적으로 파일 디스크립터를 확인합니다. 이 때 주기적이란 시간 기반이 아니라 필요에 따라 입니다. 주기적으로 이벤트의 준비 상태 또는 발생 여부를 확인합니다.

- evport = Solaris 10
- epoll = Linux
- kqueue = OS X, FreeBSD
- select = 일반적으로 모든 플랫폼에 설치되어 `fallback` 으로 사용 가능합니다.

Evport, Epoll, Kqueue는 파일 디스크립터 선택 알고리즘이 O(1) 로 작동하고 내부 커널 공간 메모리 구조를 사용합니다. 반면 select는 최대 1024개의 디스크립터만 제공 가능하며, 매번 디스크립터를 스캔하여 작업할 하나를 선택하기 때문에 복잡도가 O(n) 입니다.

epoll은 대중적으로 많이 사용되지만 io_uring 이라는 더욱 진보된 기술도 있습니다. libuv에는 1.45.0에 도입되었습니다. 

- epoll: 디스크립터 중 하나가 준비되면 다른 시스템 콜을 발행하여 해당 디스크립터로부터 버퍼를 읽도록 합니다.
- io_uring
    - 디스크립터 중 하나라도 준비되면 미리 할당한 버퍼 중 하나에서 읽은 다음 완료되면 알립니다.
    - batch submission을 통해 단일 시스템 콜로 여러 작업을 제출합니다. user space와 kernel space 사이의 컨텍스트 전환 횟수가 줄어들어 성능이 향상됩니다.
    - Kernel Offloading 을 사용하면 CPU의 개입을 줄이고 하드웨어에게 오프로드 하여(하드웨어가 지원된다면) 성능이 향상됩니다.

참조

- [https://m.blog.naver.com/pjt3591oo/223101051947](https://m.blog.naver.com/pjt3591oo/223101051947)
- [https://windows-internals.com/ioring-vs-io_uring-a-comparison-of-windows-and-linux-implementations/](https://windows-internals.com/ioring-vs-io_uring-a-comparison-of-windows-and-linux-implementations/)