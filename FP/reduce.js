import { map } from "./map.js";
import { filter } from "./filter.js";
import { curry } from "./curry.js";
import { log, add } from "./utils.js";

export const reduce = curry(function (f, acc, iter) {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
});

// log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5])); // 15
// log(reduce((a, b) => a + b, [1, 2, 3, 4, 5])); // 15

// const products = [
//   { name: "상품A", price: 15000 },
//   { name: "상품B", price: 20000 },
//   { name: "상품C", price: 15000 },
//   { name: "상품D", price: 30000 },
//   { name: "상품E", price: 25000 },
// ];

// log(
//   reduce(
//     add,
//     map(
//       (p) => p.price,
//       filter((p) => p.price < 20000, products)
//     )
//   )
// ); // 30000

// log(
//   reduce(
//     add,
//     filter(
//       (n) => n < 20000,
//       map((p) => p.price, products)
//     )
//   )
// ); // 30000
