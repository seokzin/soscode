import { readJSON } from "../fileController.js";

class Order {
  product = {};
  constructor(product) {
    this.product = product;
  }
}

const run = (args) => {
  if (args.length === 0) throw new Error("파일명을 입력하세요");
  const filename = args[args.length - 1];
  const input = readJSON(filename);
  const orders = input.map((item) => new Order(item));

  if (args.includes("-r")) {
    const readyOrders = orders.filter((o) => o.product.status === "ready");
    return readyOrders.length;
  } else {
    return orders.length;
  }
};

const main = (args) => {
  try {
    console.log(run(args));
  } catch (err) {
    console.error(err);
  }
};
main(process.argv.slice(2));
