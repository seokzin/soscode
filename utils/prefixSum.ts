const prefixSum = (arr: number[]) => {
  return arr.reduce((acc, cur) => [...acc, acc[acc.length - 1] + cur], [0]);
};

export default prefixSum;
