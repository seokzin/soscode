import { log } from '../../log';

const L = {};

L.values = function* (obj) {
  for (const k in obj) yield obj[k];
};

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const it = L.values(obj);
