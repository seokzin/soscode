class Order {
  #priority = "";
  constructor(data) {
    this.#priority = data.priority;
  }

  get priority() {
    return this.#priority;
  }

  set priority(aString) {
    this.#priority = aString;
  }
}

const client1 = () => {
  const orders = [
    { priority: "high" },
    { priority: "rush" },
    { priority: "low" },
    { priority: "normal" },
  ].map((o) => new Order(o));

  const highPriorityCount = orders.filter(
    (o) => o.priority === "high" || o.priority === "rush"
  ).length;

  return highPriorityCount;
};

console.log(client1());
