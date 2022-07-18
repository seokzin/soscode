import assert from "assert";

class Account {
  _number;
  _type;
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    assert(
      interestRate === this._type.interestRate,
      "Interest rate must be the same"
    );
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  _name;
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}

const minus = new AccountType("마통", 0.39);
const acc = new Account(100000, minus, 0);
console.log(acc.interestRate);
