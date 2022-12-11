/**
 * Adds numbers together
 * @param args Number list
 * @returns The sum of number list
 */
const add = (...args: number[]) => [...args].reduce((a, b) => a + b);

export default add;
