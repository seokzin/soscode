import { curry } from "./curry.js";

export const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

export const l_map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

const array = map((x) => x ** 2, [1, 2, 3]);
const generator = l_map((x) => x ** 2)([1, 2, 3]);

// console.log(generator); // Object [Generator] {}
// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 4, done: false }
// console.log(generator.next()); // { value: 9, done: false }
// console.log(generator.next()); // { value: undefined, done: true }
