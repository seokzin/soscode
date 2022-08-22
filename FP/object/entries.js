import { log } from '../../log';

export const L = {};

L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
};

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const it = L.entries(obj);
