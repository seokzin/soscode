import { readJSON } from "../fileController.js";

class Order {
  product = {};
  constructor(product) {
    this.product = product;
  }
}

class CommandLine {
  constructor(args) {
    if (args.length === 0) throw new Error("파일명을 입력하세요");
    this.onlyCountReady = args.includes("-r");
    this.filename = args[args.length - 1];
  }
}

const countOrders = (commandLine) => {
  const input = readJSON(commandLine.filename);
  const orders = input.map((item) => new Order(item));

  if (commandLine.onlyCountReady) {
    const readyOrders = orders.filter((o) => o.product.status === "ready");
    return readyOrders.length;
  } else {
    return orders.length;
  }
};

const main = (args) => {
  try {
    console.log(countOrders(new CommandLine(args)));
  } catch (err) {
    console.error(err);
  }
};
main(process.argv.slice(2));
