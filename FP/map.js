import { curry } from './curry.js';
import { pipe } from './pipe.js';
import { take } from './take.js';
import { log } from './log.js';

export const l_map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

const old_map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

export const map = curry(pipe(l_map, take(Infinity)));

const generator = l_map((x) => x ** 2)([1, 2, 3]);
const array = map((x) => x ** 2, [1, 2, 3]);

// log(generator); // Object [Generator] {}
// log(generator.next()); // { value: 1, done: false }
// log(generator.next()); // { value: 4, done: false }
// log(generator.next()); // { value: 9, done: false }
// log(generator.next()); // { value: undefined, done: true }
