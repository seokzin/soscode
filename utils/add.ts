const add = (...args: number[]) => [...args].reduce((a, b) => a + b);

export default add;
