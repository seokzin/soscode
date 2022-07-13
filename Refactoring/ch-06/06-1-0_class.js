class Person {
  constructor(data) {
    this._lastName = data._lastName;
    this._firstName = data._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}

let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

export const defaultOwner = () => new Person(defaultOwnerData);
export const setDefaultOwner = (arg) => {
  defaultOwnerData = arg;
};
