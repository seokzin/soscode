import { reduce } from "./reduce.js";

export const go = (...as) => reduce((a, f) => f(a), as);

const log = console.log;

go(
  10,
  (a) => a + 10,
  (a) => a + 1,
  log
); // 21
