## generator function

- `function*` 으로 선언

- 일반 함수와 달리 코드가 실행되지 않고, 대신 실행을 처리하는 특별 객체 **제너레이터 객체**를 반환

- `next()` - 제너레이터의 주요 메서드. 호출시 가장 가까운 `yield <value>`문을 만날 때까지 실행을 지속. 이후 `yield <value>`를 만나면 실행을 멈추고 다음 객체를 반환
  - value: 산출 값
  - done: 함수 코드 실행이 끝났으면 true, 아니면 false

# Reference

- naver d2 - 함수형 프로그래밍과 ES6+ (유인동)
