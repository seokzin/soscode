import { pipe } from './pipe.js';
import { add } from './add.js';

export const time = (f, label = '') => (
  console.time(label), f, console.timeEnd(label)
);

// time(pipe(add(2 + 3), add(3 + 4)), 'add');
