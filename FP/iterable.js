import { log } from './log.js';

const iterable = {
  [Symbol.iterator]() {
    let i = 3;

    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();

// iterable === iterable[Symbol.iterator]() → Well-formed iterable
for (const a of iterable) log(a);
for (const a of iterator) log(a);
