/**
 * Binary search
 * @param list - Number list to search
 * @param callback - Callback function to compare
 * @returns Index of the number
 */
const binarySearch = (list: number[], callback) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (callback(list[mid]) === 0) {
      return mid;
    } else if (callback(list[mid]) > 0) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

export default binarySearch;
