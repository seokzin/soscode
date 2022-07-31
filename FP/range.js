import { log } from "./utils.js";
import { reduce } from "./reduce.js";

export const range = (l) => {
  let i = -1;
  let res = [];

  while (++i < l) {
    res.push(i);
  }

  return res;
};

export const L = {};

L.range = function* (l) {
  let i = -1;

  while (++i < l) {
    yield i;
  }
};

const list = L.range(5);
log(reduce((a, b) => a + b, list));
