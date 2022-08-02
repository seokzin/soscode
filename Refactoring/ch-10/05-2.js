const registry = { billingPlans: { basic: "" } };

const createUnknownCustomer = () => ({
  isUnknown: true,
});

const isUnknown = (arg) => arg.isUnknown;

class Site {
  _customer;
  get customer() {
    return this._customer === "미확인 고객"
      ? createUnknownCustomer()
      : this._customer;
  }
  get isUnknown() {
    return false;
  }
}

class Customer {
  _name;
  _billingPlan;
  _paymentHistory;

  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {
    this._billingPlan = arg;
  }

  get paymentHistory() {
    return this._paymentHistory;
  }
}

const client1 = () => {
  const customer = new Site().customer;
  let customerName;
  if (isUnknown(customer)) customerName = "거주자";
  else customerName = customer.name;
};

const client2 = () => {
  const customer = new Site().customer;
  const plan = isUnknown(customer)
    ? registry.billingPlans.basic
    : customer.billingPlan;
};

const client3 = () => {
  const customer = new Site().customer;
  const weeksDelinquent = isUnknown(customer)
    ? 0
    : customer.paymentHsitry.weeksDelinquentInLastYear;
};
