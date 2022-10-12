import { go } from './go.js';
import { filter } from './filter.js';
import { take } from './take.js';
import { curry } from './curry.js';
import { log } from './log.js';

export const find = curry((f, iter) =>
  go(iter, filter(f), take(1), ([a]) => a)
);

// log(find((n) => n < 10)([33, 7, 9]));
