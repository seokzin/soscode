import { curry } from './curry.js';
import { pipe } from './pipe.js';
import { c_take, take } from './take.js';
import { go1 } from './go1.js';
import { log } from './log.js';

export const l_map = curry(function* (f, iter) {
  for (const a of iter) {
    yield go1(a, f);
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

export const c_map = curry(pipe(l_map, c_take(Infinity)));

// const generator = l_map((x) => x ** 2)([1, 2, 3]);
// const array = map((x) => x ** 2, [1, 2, 3]);

// log(generator); // Object [Generator] {}
// log(generator.next()); // { value: 1, done: false }
// log(generator.next()); // { value: 4, done: false }
// log(generator.next()); // { value: 9, done: false }
// log(generator.next()); // { value: undefined, done: true }
