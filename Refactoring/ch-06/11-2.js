import { readJSON } from "../fileController.js";

class Order {
  product = {};
  constructor(product) {
    this.product = product;
  }
}

class CommandLine {}

const parseCommandLine = (args) => {
  if (args.length === 0) throw new Error("파일명을 입력하세요");
  const result = new CommandLine();
  result.onlyCountReady = args.includes("-r");
  result.filename = args[args.length - 1];
  return result;
};

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

const run = (args) => countOrders(parseCommandLine(args));

const main = (args) => {
  try {
    console.log(run(args));
  } catch (err) {
    console.error(err);
  }
};
main(process.argv.slice(2));
