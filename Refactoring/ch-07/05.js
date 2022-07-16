class Person {
  #name;

  #telephoneNumber;
  constructor() {
    this.#telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get TelephoneNumber() {
    return this.#telephoneNumber.telephoneNumber;
  }
}

class TelephoneNumber {
  #officeAreaCode;
  #officeNumber;

  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg) {
    this.#officeNumber = arg;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
}
