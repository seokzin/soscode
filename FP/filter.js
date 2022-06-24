function* filter(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
}

const generator = filter((x) => x > 2, [1, 2, 3, 4, 5]);

console.log(generator); // Object [Generator] {}
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }
console.log(generator.next()); // { value: 5, done: false }
console.log(generator.next()); // { value: undefined, done: true }
