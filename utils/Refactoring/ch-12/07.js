class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  get isMale() {
    return this.#genderCode === "M";
  }
}

class Male extends Person {
  get genderCode() {
    return "M";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

const createPerson = (record) => {
  switch (record.gender) {
    case "M":
      return Person(record.name, "M");
    case "F":
      return Person(record.name, "F");
    default:
      return Person(record.name, "X");
  }
};

const people = [new Male("재남"), new Female("지금"), new Male("로이"), new Female("이지")];
const numberOfMales = people.filter((p) => p.isMale).length;
console.log(numberOfMales);
