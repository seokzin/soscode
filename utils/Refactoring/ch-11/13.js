const Resource = (() => {
  let id = 0;
  return class Resource {
    id;
    constructor() {
      id += 1;
      this.id = id;
    }
    static create() {
      return new Resource();
    }
  };
})();

class ResourcePool {
  available = [];
  allocated = new Set();

  get() {
    const result = this.available.length === 0 ? Resource.create() : this.available.pop();
    this.allocated.add(result);
    return result;
  }

  add() {
    this.available.push(Resource.create());
  }
}
