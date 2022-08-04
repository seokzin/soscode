class Employee {
  #name;
  #type;
  constructor(name, type) {
    this.validateType(type);
    this.#name = name;
    this.#type = type;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg))
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  }

  get type() {
    return this.#type;
  }

  toString() {
    return `${this.#name} is a ${this.type}`;
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}

const createEmployee = (name, type) => {
  switch (type) {
    case "engineer":
      return new Engineer(name, type);
    case "salesperson":
      return new Salesperson(name, type);
    case "manager":
      return new Manager(name, type);
    default:
      return new Employee(name, type);
  }
};

const roy = createEmployee("roy", "engineer");
const jay = createEmployee("jay", "manager");
const kay = createEmployee("kay", "salesperson");
const tei = createEmployee("tei", "nobody");
