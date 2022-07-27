import { log } from "./utils.js";

const iterable = {
  [Symbol.iterator]() {
    let i = 3;

    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
    };
  },
};
