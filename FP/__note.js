export const log = console.log;

export const curry =
  (f) =>
  (a, ...bs) =>
    bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

export const take = curry((length, iter) => {
  let res = [];

  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }

  return res;
});

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
});

export const go = (...as) => reduce((a, f) => f(a), as);

export const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const isIterable = (a) => a && a[Symbol.iterator];

export const l_flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) {
      for (const b of a) {
        yield b;
      }
    } else {
      yield a;
    }
  }
};

export const l_deepFlatten = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    else yield a;
  }
};

export const l_map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

export const flatten = pipe(l_flatten, take(Infinity));

// log([...l_deepFlatten([1, [2, [3, 4], [[5]]]])]);

const l = l_flatten([[1, 2, 3], 4, 5, [6, 7, 8, 9]]);
const a = flatten([[1, 2, 3], 4, 5, [6, 7, 8, 9]]);
// log([...l_deepFlatten([1, [2, [3, 4], [[5]]]])]);

export const l_flatMap = curry(pipe(l_map, l_flatten));

const it = l_flatMap((a) => a, [[1, 2], 3, [4, 5, 6, 7]]);
log([...it]);

// log([...l]);
// log([...a]);
