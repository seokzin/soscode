class Person {
  #name;
  #id;
  constructor(name, id) {
    this.#name = name;
    this.#id = id;
  }

  get name() {
    return this.#name;
  }

  get id() {
    return this.#id;
  }
}

const martin = new Person("Martin", "1234");
