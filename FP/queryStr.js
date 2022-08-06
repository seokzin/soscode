import { log } from './log.js';
import { pipe } from './pipe.js';
import { map } from './map.js';
import { join } from './join.js';

export const queryStr = pipe(
  Object.entries,
  map(([k, v]) => `${k}=${v}`),
  join('&')
);

// log(queryStr({ limit: 10, offset: 10, type: 'notice' }));
