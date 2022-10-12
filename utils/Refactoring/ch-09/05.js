class Customer {
  #id;
  constructor(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}

class Order {
  #number;
  #customer;
  constructor({ number, customer }) {
    this.#number = number;
    this.#customer = registerCustomer(customer);
  }

  get customer() {
    return findCustomer(this.#customer);
  }
}

const _repositoryData = { customers: new Map() };

const findCustomer = (id) => _repositoryData.customers.get(id);

const registerCustomer = (id) => {
  if (!_repositoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new Customer(id));
  }
  return findCustomer;
};

const o = new Order({ number: 1, customer: "a" });
console.log(o.customer.id);
