import { curry } from './curry.js';
import { go1 } from './go1.js';
import { pipe } from './pipe.js';
import { take } from './take.js';
import { log } from './log.js';

export const l_filter = curry(function* (f, iter) {
  for (const a of iter) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.ten((b) => (b ? a : Promise.reject()));
    else if (b) yield a;
  }
});

const old_filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

export const filter = curry(pipe(l_filter, take(Infinity)));

// const generator = l_filter((x) => x > 2)([1, 2, 3, 4, 5]);
// const array = filter((x) => x > 2)([1, 2, 3, 4]);

// log(generator); // Object [Generator] {}
// log(array);
// log(generator.next()); // { value: 3, done: false }
// log(generator.next()); // { value: 4, done: false }
// log(generator.next()); // { value: 5, done: false }
// log(generator.next()); // { value: undefined, done: true }
