import { log } from '../../log.js';
import { map } from './../map.js';
import { filter } from '../../filter.js';
import { go } from './../go.js';
import { object } from './object.js';

export const pick = (ks, obj) =>
  go(
    ks,
    map((k) => [k, obj[k]]),
    filter(([k, v]) => v !== undefined),
    object
  );

log(pick(['b', 'c'], { a: 1, b: 2, c: 3, d: 4 })); // { b: 2, c: 3 }
