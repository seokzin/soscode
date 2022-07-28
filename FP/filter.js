import { curry } from "./curry.js";

export const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

export const l_filter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

const array = filter((x) => x > 2, [1, 2, 3, 4]);
const generator = l_filter((x) => x > 2)([1, 2, 3, 4, 5]);

// console.log(generator); // Object [Generator] {}
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: 4, done: false }
// console.log(generator.next()); // { value: 5, done: false }
// console.log(generator.next()); // { value: undefined, done: true }
