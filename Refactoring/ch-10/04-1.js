const feathers = (birds) => new Map(birds.map((b) => [b.name, feather(b)]));
const velocities = (birds) => new Map(birds.map((b) => [b.name, velocity(b)]));

class Bird {
  type;
  numberOfCoconuts;
  voltage;
  isNailed;
  constructor(bird) {
    Object.assign(this, bird);
  }

  get feather() {
    switch (this.type) {
      case "유럽 제비":
        return "보통";
      case "아프리카 제비":
        return this.numberOfCoconuts > 2 ? "지침" : "보통";
      case "노르웨이 파랑 앵무":
        return this.voltage > 100 ? "그을림" : "예쁨";
      default:
        return "알수없음";
    }
  }

  get velocity() {
    switch (this.type) {
      case "유럽 제비":
        return 35;
      case "아프리카 제비":
        return 40 - 2 * this.numberOfCoconuts;
      case "노르웨이 파랑 앵무":
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}

const feather = (bird) => {
  return new Bird(bird).feather;
};

const velocity = (bird) => {
  return new Bird(bird).velocity;
};

const birds = [
  { name: "유제", type: "유럽 제비" },
  { name: "아제1", type: "아프리카 제비", numberOfCoconuts: 2 },
  { name: "아제2", type: "아프리카 제비", numberOfCoconuts: 4 },
  { name: "파앵1", type: "노르웨이 파랑 앵무", isNailed: false, voltage: 3000 },
  { name: "파앵2", type: "노르웨이 파랑 앵무", isNailed: true, voltage: 50 },
];

console.log(...feathers(birds));
console.log(...velocities(birds));
