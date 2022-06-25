import { curry } from "./curry.js";

export const map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

const generator = map((x) => x ** 2)([1, 2, 3]);

// console.log(generator); // Object [Generator] {}
// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 4, done: false }
// console.log(generator.next()); // { value: 9, done: false }
// console.log(generator.next()); // { value: undefined, done: true }
