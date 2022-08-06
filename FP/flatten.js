import { log } from './log.js';
import { take } from './take.js';
import { pipe } from './pipe.js';

export const l_flatten = function* (iter) {
  for (const a of iter) {
    if (a && a[Symbol.iterator]) {
      yield* a;
    } else {
      yield a;
    }
  }
};

export const flatten = pipe(l_flatten, take(Infinity));

// const l = l_flatten([[1, 2, 3], 4, 5, [6, 7, 8, 9]]);
// const a = flatten([[1, 2, 3], 4, 5, [6, 7, 8, 9]]);

// log([...l]);
// log([...a]);
