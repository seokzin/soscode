const noop = () => {};

export const catchNoop = (arr) => (
  arr.forEach((a) => (a instanceof Promise ? a.catch(noop) : a)), arr
);
