# Keywords

## generator function

- `function*` 으로 선언

- 일반 함수와 달리 코드가 실행되지 않고, 대신 실행을 처리하는 특별 객체 **제너레이터 객체**를 반환

- `next()` - 제너레이터의 주요 메서드. 호출시 가장 가까운 `yield <value>`문을 만날 때까지 실행을 지속. 이후 `yield <value>`를 만나면 실행을 멈추고 다음 객체를 반환

  - value: 산출 값
  - done: 함수 코드 실행이 끝났으면 true, 아니면 false

- filter, map은 제너레이터 함수 → **지연 평가(Lazy evaluation)**
  - 불필요한 계산을 하지 않으므로 빠른 계산이 가능하다.
  - 무한 자료 구조를 사용 할 수 있다.
  - 복잡한 수식에서 오류 상태를 피할 수 있다.

## iterable

- 순회가 가능한 객체
- 일반 객체보다 추상화 레벨이 높음

## 지연 평가

-
-

# Reference

- naver d2 - 함수형 프로그래밍과 ES6+ (유인동)
