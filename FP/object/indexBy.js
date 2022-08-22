import { log } from '../../log.js';
import { reduce } from '../../reduce.js';

export const indexBy = (f, iter) =>
  reduce((obj, a) => ((obj[f(a)] = a), obj), {}, iter);

const users = [
  { id: 5, name: 'AA', age: 35 },
  { id: 10, name: 'BB', age: 24 },
  { id: 15, name: 'CC', age: 27 },
  { id: 23, name: 'DD', age: 21 },
  { id: 28, name: 'EE', age: 31 },
];

log(indexBy((u) => u.id, users));
