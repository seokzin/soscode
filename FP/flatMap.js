import { l_map } from './map.js';
import { flatten, l_flatten } from './flatten.js';
import { curry } from './curry.js';
import { pipe } from './pipe.js';

export const l_flatMap = curry(pipe(l_map, l_flatten));

export const flatMap = curry(pipe(l_map, flatten));

// const it = l_flatMap((a) => a, [[1, 2], 3, [4, [5, 6, 7]]]);
// log(it);
