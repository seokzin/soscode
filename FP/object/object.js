import { log } from '../../log';
import { reduce } from './../reduce';

export const object = (entries) =>
  reduce((obj, [k, v]) => ((obj[k] = v), obj), {}, entries);

const m = new Map();
m.set('a', 10);
m.set('b', 20);
m.set('c', 30);

log(object(m));
