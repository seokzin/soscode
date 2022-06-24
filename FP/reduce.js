function reduce(f, acc, iter) {
  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
}

console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5])); // 15
