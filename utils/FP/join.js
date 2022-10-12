import { curry } from './curry.js';
import { log } from './log.js';
import { reduce } from './reduce.js';

export const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter));
