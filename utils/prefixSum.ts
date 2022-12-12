/**
 * Get prefix sum of an array
 * @param arr - Array to get prefix sum of
 * @returns Prefix sum of array
 */

const prefixSum = (arr: number[]) => {
  return arr.reduce((acc, cur) => [...acc, acc[acc.length - 1] + cur], [0]);
};

export default prefixSum;
