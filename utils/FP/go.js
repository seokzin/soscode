import { reduce } from './reduce.js';
import { log } from './log.js';

export const go = (...as) => reduce((a, f) => f(a), as);

// go(
//   10,
//   (a) => a + 10,
//   (a) => a + 1,
//   log
// ); // 21
