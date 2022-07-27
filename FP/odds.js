import { log } from "./utils.js";

function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}

function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

let iter = odds(6);

log(iter.next()); // { value: 1, done: false }
log(iter.next()); // { value: 3, done: false }
log(iter.next()); // { value: 5, done: false }
log(iter.next()); // { value: undefined, done: true }
