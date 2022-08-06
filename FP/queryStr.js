import { log } from './log.js';
import { pipe } from './pipe.js';
import { map } from './map.js';
import { reduce } from './reduce.js';

export const queryStr = pipe(
  Object.entries,
  map(([k, v]) => `${k}=${v}`),
  reduce((a, b) => `${a}&${b}`)
);

// log(queryStr({ limit: 10, offset: 10, type: 'notice' }));
