import { log } from '../../log.js';
import { map } from './../map.js';
import { go } from './../go.js';
import { object } from './object.js';
import { L } from './entries.js';

export const mapObject = (f, obj) =>
  go(
    obj,
    L.entries,
    map(([k, v]) => [k, f(v)]),
    object
  );

log(mapObject((a) => a + 10, { a: 1, b: 2, c: 3 }));
