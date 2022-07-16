class Order {
  #priority = "";
  constructor(data) {
    this.#priority = data.priority;
  }

  get priority() {
    return this.#priority;
  }

  set priority(aString) {
    this.#priority = new Priority(aString);
  }

  get priorityString() {
    return this.#priority.toString();
  }
}

class Priority {
  #value;
  constructor(value) {
    this.#value = value;
  }

  toString() {
    return this.#value;
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
    (o) => o.priorityString === "high" || o.priorityString === "rush"
  ).length;

  return highPriorityCount;
};

console.log(client1());
