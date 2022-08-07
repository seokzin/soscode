import { go } from './go.js';
import { go1 } from './go1.js';
import { map } from './map.js';
import { filter } from './filter.js';
import { curry } from './curry.js';
import { log } from './log.js';
import { add } from './add.js';

const reduceF = (acc, a, f) =>
  a instanceof Promise
    ? a.then(
        (a) => f(acc, a),
        (e) => (e === nop ? acc : Promise.reject(e))
      )
    : f(acc, a);

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }

  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = reduceF(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
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

// 장바구니 예시 1
// log(
//   reduce(
//     add,
//     map(
//       (p) => p.price,
//       filter((p) => p.price < 20000, products)
//     )
//   )
// ); // 30000

// 장바구니 예시 2
// log(
//   reduce(
//     add,
//     filter(
//       (n) => n < 20000,
//       map((p) => p.price, products)
//     )
//   )
// ); // 30000

//// go 함수 도입
// go(
//   products,
//   (products) => filter((p) => p.price < 20000, products),
//   (products) => map((p) => p.price, products),
//   (prices) => reduce(add, prices),
//   log
// ); // 30000

//// curry 함수 도입 → 파라미터 주입을 생략할 수 있음
// go(
//   products,
//   filter((p) => p.price < 20000),
//   map((p) => p.price),
//   reduce(add),
//   log
// ); // 30000

go(
  Promise.resolve(1),
  (a) => a + 10,
  (a) => Promise.resolve(a + 100),
  (a) => a + 1000,
  (a) => a + 10000,
  log
);
