class ShippingRules {
  data;
  constructor(data) {
    this.data = data;
  }
}

const countryData = {
  shippingRules: {
    US: 10,
    CA: 7,
  },
};

const errorList = [];

class OrderProcessingError extends Error {
  code;
  constructor(errorCode) {
    super(`주문 처리 오류${errorCode}`);
    this.code = errorCode;
  }

  get name() {
    return "OrderProcessingError";
  }
}

const localShippingRules = (country) => {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
};

const calculateShippingCosts = (order) => {
  localShippingRules(order.country);
};

const execute = (order) => {
  try {
    calculateShippingCosts(order);
  } catch (err) {
    if (err instanceof OrderProcessingError) errorList.push({ order, errorCode: err.code });
    else throw err;
  }
};

execute({ country: "US" });
execute({ country: "CA" });
execute({ country: "KO" });

console.log(errorList);
