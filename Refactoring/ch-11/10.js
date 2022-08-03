class ChargeCalculator {
  #customer;
  #usage;
  #provider;
  constructor(customer, usage, provider) {
    this.#customer = customer;
    this.#usage = usage;
    this.#provider = provider;
  }

  get baseCharge() {
    return this.#customer.baseRate * this.#usage;
  }

  get charge() {
    return this.baseCharge + this.#provider.connectionCharge;
  }
}

const charge = (customer, usage, provider) =>
  new ChargeCalculator(customer, usage, provider).charge;

const customer = { baseRate: 100 };
const usage = 1000;
const provider = { connectionCharge: 50 };
const monthCharge = charge(customer, usage, provider);

console.log(monthCharge);
