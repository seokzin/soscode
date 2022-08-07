import { curry } from './curry.js';

export const take = curry((length, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();

  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (acc instanceof Promise)
        return acc.then((a) => {
          res.push(a);
          if (res.length === l) return res;
          return recur();
        });
      res.push(a);
      if (res.length === l) return res;
    }
    return acc;
  })();
});

// console.log(take(3)([1, 2, 3, 4, 5])); // [ 1, 2, 3 ]
// console.log(take(Infinity)([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
