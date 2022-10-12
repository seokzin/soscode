export const curry =
  (f) =>
  (a, ...bs) =>
    bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

// const add = curry((a, b) => a + b);

// console.log(add(10, 5)); // 15
// console.log(add(10)(5)); // 15
