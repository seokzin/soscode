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

console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5])); // 15
console.log(reduce((a, b) => a + b, [1, 2, 3, 4, 5])); // 15
