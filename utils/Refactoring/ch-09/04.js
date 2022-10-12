class TelephoneNumber {
  #areaCode;
  #number;
  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  set areaCode(arg) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }

  set number(arg) {
    this.#number = arg;
  }
}

class Person {
  #telephoneNumber;
  constructor() {
    this.#telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this.#telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(arg) {
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

const p = new Person();
p.officeAreaCode = "312";
p.officeNumber = "555-0142";
console.log(p.officeAreaCode, p.officeNumber);
