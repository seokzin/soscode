import { curry } from './curry.js';
import { catchNoop } from './catchNoop.js';

export const take = curry((length, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();

  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise)
        return a.then((a) =>
          (res.push(a), res).length === l
            ? res
            : recur().catch((e) => (e === nop ? recur() : Promise.reject(e)))
        );
      res.push(a);
      if (res.length === l) return res;
    }
    return acc;
  })();
});

export const c_take = curry((l, iter) => take(l, catchNoop([...iter])));

// console.log(take(3)([1, 2, 3, 4, 5])); // [ 1, 2, 3 ]
// console.log(take(Infinity)([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
