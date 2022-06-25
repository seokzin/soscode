import { filter } from "./filter.js";
import { map } from "./map.js";
import { take } from "./take.js";
import { reduce } from "./reduce.js";
import { go } from "./go.js";
import { log } from "./utils.js";

export const flat = function* (iter) {
  for (const a of iter) {
    if (a && a[Symbol.iterator]) {
      for (const b of a) {
        yield b;
      }
    } else {
      yield a;
    }
  }
};

const arr = [[1, 2, 3], 4, 5, [6, 7, 8, 9]];

go(
  arr,
  flat,
  filter((a) => a % 2),
  map((a) => a * a),
  take(3),
  reduce((a, b) => a + b),
  log
); // 35
