export const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
