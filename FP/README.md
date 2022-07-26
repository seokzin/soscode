# Keywords

## Functional Programming

- 순수 함수 → 안전성
- 조합성 강조 → 모듈화 + 생산성

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

## 일급 함수

- 함수를 값으로 다룰 수 있다.
  - 변수에 할당
  - 객체의 인자
  - 객체의 리턴값
- 조합성과 추상화의 도구

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

# Reference

- 함수형 프로그래밍과 JavaScript ES6+ (인프런/유인동)
- 함수형 프로그래밍과 JavaScript ES6+ 응용편 (인프런/유인동)
- naver d2 - 함수형 프로그래밍과 ES6+ (세미나/유인동)
- 함수형 자바스크립트 프로그래밍 (책/유인동)
- 함수형 코딩 (책/에릭 노먼드)
