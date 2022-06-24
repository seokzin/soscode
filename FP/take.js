function take(length, iter) {
  let res = [];

  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }

  return res;
}

console.log(take(3, [1, 2, 3, 4, 5])); // [ 1, 2, 3 ]
console.log(take(Infinity, [1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
