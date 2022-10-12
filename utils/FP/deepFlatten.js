export const l_deepFlatten = function* f(iter) {
  for (const a of iter) {
    if (a && a[Symbol.iterator]) yield* f(a);
    else yield a;
  }
};

// log([...l_deepFlatten([1, [2, [3, 4], [[5]]]])]);
