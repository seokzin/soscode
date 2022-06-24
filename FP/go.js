const go = (a, ...fs) => reduce((a, f) => f(a), a, fs);

function reduce(f, acc, iter) {
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
