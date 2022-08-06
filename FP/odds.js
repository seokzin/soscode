export function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

let iter = odds(6);

log(iter.next()); // { value: 1, done: false }
log(iter.next()); // { value: 3, done: false }
log(iter.next()); // { value: 5, done: false }
log(iter.next()); // { value: undefined, done: true }
