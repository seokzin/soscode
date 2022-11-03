const twoPointer = (list: number[], target: number) => {
  const result = [];
  let start = 0;
  let end = 0;

  while (start <= end && end < list.length) {
    const sum = list.slice(start, end).reduce((acc, cur) => acc + cur, 0);

    if (sum === target) {
      result.push(list.slice(start, end));
      start += 1;
    } else if (sum > target) {
      start += 1;
    } else {
      end += 1;
    }
  }

  return result;
};

export default twoPointer;
