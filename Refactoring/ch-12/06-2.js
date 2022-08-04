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

  get typeString() {
    return this.#type.toString();
  }

  get type() {
    return this.#type;
  }

  set type(arg) {
    this.#type = arg;
  }

  get capitalizedType() {
    return this.#type.charAt(0).toUpperCase() + this.#type.slice(1).toLowerCase();
  }

  toString() {
    return `${this.#name} is a ${this.capitalizedType}`;
  }
}

class EmployeeType {
  _value;
  constructor(str) {
    this._value = str;
  }

  toString() {
    return this._value;
  }
}

console.log(new Employee("roy", "engineer").toString());
console.log(new Employee("jay", "manager").toString());
console.log(new Employee("kay", "salesperson").toString());
// console.log(new Employee("tei", "nobody").toString());
