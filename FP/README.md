# Keywords

## Functional Programming

- 순수 함수 → 안전성
- 조합성 강조 → 모듈화 + 생산성

## iterable / iterator

- 순회가 가능한 객체 (일반 객체보다 추상화 레벨이 높음)
- iterator를 리턴하는 `[Symbol.iterator]()`를 가진 값

  - iterator: `{ value, done }` 객체를 리턴하는 `next()`를 가진 값
  - `next()`: 호출시 가장 가까운 `yield <value>`문을 만날 때까지 실행을 지속. 이후 `yield <value>`를 만나면 실행을 멈추고 다음 객체를 반환
  - iterable/iterator 프로토콜: iterable `for...of`, 전개 연산자 등과 함께 동작하도록 한 규약

- well-formed iterable
  - `iter[Symbol.iterator]() === iter` // true
  - iterator 자신을 반환하는 Symbol.iterator를 가지고 있을 때

## generator

- iterator를 리턴하는 함수
- `function*` 으로 generator function 선언
- 문장을 통해 순회할 수 있는 값을 만들 수 있다. → 어떠한 값도 generator를 통해 순회할 수 있는 형태로 만들 수 있다.

- 일반 함수와 달리 코드가 실행되지 않고, 대신 실행을 처리하는 특별 객체 **제너레이터 객체**를 반환

  - value: 산출 값
  - done: 함수 코드 실행이 끝났으면 true, 아니면 false

- filter, map은 제너레이터 함수 → **지연 평가(Lazy evaluation)**
  - 불필요한 계산을 하지 않으므로 빠른 계산이 가능하다.
  - 무한 자료 구조를 사용 할 수 있다.
  - 복잡한 수식에서 오류 상태를 피할 수 있다.

## 일급 함수

- 함수를 값으로 다룰 수 있다.
  - 변수에 할당
  - 객체의 인자
  - 객체의 리턴값
- 조합성과 추상화의 도구

## 고차 함수

- 함수를 값으로 다루는 함수
  1. 함수를 인자로 받아서 실행하는 함수
  2. 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
- 값인 함수를 원하는 시점에 사용할 수 있다.

## 지연 평가(Lazy evaluation)

- 계산의 결과 값이 필요할 때까지 계산을 늦추는 기법
- 평가 대상이 클수록 효과가 커짐 → 불필요한 계산을 하지 않기 때문
- 엄격한 평가 : 평가 흐름이 좌 → 우

  ![image](https://user-images.githubusercontent.com/43740455/181026935-da7d53c5-8df7-469b-afa6-3d218e76c401.png)

- 지연 평가 : 평가 흐름이 상 → 하

  ![image](https://user-images.githubusercontent.com/43740455/181026996-03c9da29-a641-4ee8-bb5c-37944acf5d63.png)

## 다형성

- 외부 다형성
  - arrayLike (arguments, NodeList..)
  - 들어오는 데이터를 length, key로 추상화하여 다형성
- 내부 다형성
  - 보조 함수를 통해
    - predi : 조건 역할의 함수
    - iter : 반복 실행 목적의 함수
    - mapper : 매핑 목적의 함수

## 애매모호한 지식 (보충 예정)

### map → 기존 Array helper methods 과의 차이점?

- **외부 다형성**: Array 뿐 아니라 iterable Protocol을 만족해도 사용 가능 (NodeList 등..)
- `array.map(f)`과 `map(f, array)`는 **패러다임**의 차이! → 전자는 객체지향, 후자는 함수형..?
- iterable protocol을 허용하는 함수가 많아질수록 서로간의 결합성이 좋아진다.

### go vs pipe

- go
  - 인자로 함수들을 받아 차례로 실행시켜 결과에 해당하는 값을 리턴하는 함수
  - pipe 함수로도 구현 가능 (연관 관계)
- pipe
  - go와 비슷하지만 값을 리턴하는 것이 아닌, (합성된) 함수를 리턴하는 함수
  - go 함수로 구현 가능 (연관 관계)
- go, pipe 모두 사고의 흐름을 상 → 하 (순방향)으로 만들어 준다고 생각함..
  - 기존의 중첩 로직은 최하단부터 하나씩 올라오며 평가하기 때문
- go와 pipe의 관계에서 useMemo와 useCallback의 유사함을 느낌 → 공부 예정

# Reference

- 함수형 프로그래밍과 JavaScript ES6+ (인프런/유인동)
- 함수형 프로그래밍과 JavaScript ES6+ 응용편 (인프런/유인동)
- naver d2 - 함수형 프로그래밍과 ES6+ (세미나/유인동)
- 함수형 자바스크립트 프로그래밍 (책/유인동)
- 쏙쏙 들어오는 함수형 코딩 (책/에릭 노먼드)
