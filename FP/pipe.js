import { go } from "./go.js";
import { log } from "./utils.js";

export const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 1
);

log(f(0, 1)); // 12
