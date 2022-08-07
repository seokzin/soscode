export const delay = (a, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(a), delay));
