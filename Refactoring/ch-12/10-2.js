class Bird {
  _name;
  _feather;
  _speciesDelegate;
  constructor(data) {
    this._name = data.name;
    this._feather = data.feather;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  get name() {
    return this._name;
  }

  get feather() {
    return this._feather || "보통";
  }

  get airSpeedVelocity() {
    return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
  }

  selectSpeciesDelegate(data) {
    switch (data.type) {
      case "european":
        return new EuropeanSwallowDelegate();
      case "african":
        return new AfricanSwallowDelegate(data);
      case "norwegian":
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return null;
    }
  }
}

class EuropeanSwallowDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallowDelegate {
  #numberOfCoconuts;
  constructor(data) {
    this.#numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.#numberOfCoconuts;
  }
}

class NorwegianBlueParrotDelegate {
  #voltage;
  #isNailed;
  _bird;
  constructor(data, bird) {
    this.#voltage = data.voltage;
    this.#isNailed = data.isNailed;
    this._bird = bird;
  }

  get feather() {
    if (this.#voltage > 100) return "그을림";
    return this._bird._feather || "예쁨";
  }

  get airSpeedVelocity() {
    return this.#isNailed ? 0 : 10 + this.#voltage / 10;
  }
}

const createBird = (data) => new Bird(data);

const birds = [
  createBird({ type: "european", name: "유제" }),
  createBird({ type: "african", name: "아제1", numberOfCoconuts: 2 }),
  createBird({ type: "african", name: "아제2", numberOfCoconuts: 4 }),
  createBird({ type: "norwegian", name: "파앵1", isNailed: false, voltage: 3000 }),
  createBird({ type: "norwegian", name: "파앵2", isNailed: true, voltage: 50 }),
  new Bird({ name: "가짜새" }),
];

console.log(birds.map((b) => ({ name: b.name, velocity: b.airSpeedVelocity, feather: b.feather })));
