const go = (...as) => reduce((a, f) => f(a), as);

function reduce(f, acc, iter) {
  if (arguments.length === 2) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
}

const log = console.log;

go(
  10,
  (a) => a + 10,
  (a) => a + 1,
  log
); // 21
