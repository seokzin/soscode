# Patterns

## 🎯 Goals

- 디자인 패턴
- (프론트 엔드) 디자인 패턴

<br />
<br />

## 🔎 Keywords

### Design Patterns

- 소프트웨어 설계에서 주로 발생하는 문제에 대한 재사용 가능한 솔루션
- 오랜 기간 검증이 된 솔루션
  - 패턴은 일종의 일반화된 개발자 어휘 → 의사소통에 용이
  - 검증된 구조는 사소한 에러를 방지할 수 있음
  - 패턴을 알고 모르고에 따라 기능 구현, 리팩토링, 최적화에 대한 관점이 달라짐

<br />
<br />

### 1. Creational Patterns (생성 패턴)

객체 생성에 관련된 패턴

- Factory Method
  - 메서드를 통해 객체 생성. 생성 방식의 캡슐화
- Abstract Factory
  - 비슷한 속성의 객체들을 인터페이스로 규격화된 팩토리에서 생성
- Builder
  - 생성과 표기를 분리하여 복잡한 객체 생성
- Prototype
  - 기존 객체의 복제를 통해 객체 생성
- Singleton
  - 하나의 전역 인스턴스만 사용

<br />
<br />

### 2. Structural Patterns (구조 패턴)

객체간 합성에 관련된 패턴

- Adapter
  - 서로 다른 인터페이스의 두 객체를 어댑터 클래스로 통일
- Bridge
  - 인터페이스와 구현을 독립적으로 분리해
- Composite
  - 여러 객체를 묶어 하나의 객체로 이용
- Decorator
  - 기존 객체에 새로운 처리를 동적으로 추가
- Facade
  - 시스템의 복잡성을 숨기기 위해 접근 목적의 단순 인터페이스 제공
- Flyweight
  - 다수의 유사한 객체를 효율적으로 생성, 조작하기 위함
- Proxy
  - 실제 객체의 대역 객체

<br />
<br />

### 3. Behavioral Patterns (행동 패턴)

객체간 책임 할당에 대한 패턴

- Interpreter
  - 문법 규칙을 클래스화하여 원하는 언어의 문법과 일치시키는 방법
- Template Method
  - 비슷한 속성의 객체들을 인터페이스로 규격화된 팩토리에서 생성
- Chain of Responsibility
  - 요청 처리를 위해 객체간의 책임 전달
- Command
  - 명령들을 하나의 추상 클래스로 캡슐화
- Iterator
  - 자료구조(컬렉션)를 캡슐화 하여 접근
- Mediator
  - 객체간 상호작용을 캡슐화
- Memento
  - 객체 상태를 저장. 복원 등의 목적
- Observer
  - 객체의 변경을 다른 객체에 알리는 방법
- State
  - 객체 상태에 따라 객체 동작 변경
- Strategy
  - 알고리즘을 캡슐화 하여 필요에 따라 서로 사용할 수 있게 함
- Visitor
  - 객체를 변경하지 않고 새 작업을 추가
