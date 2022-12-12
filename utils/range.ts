/**
 * Returns a list of numbers from start to end, with a step of step
 * @param start - Start number
 * @param end - End number (optional)
 * @param step - Step (optional)
 * @returns List of numbers
 */

const range = (start: number, end?: number, step = 1): number[] => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result = [];
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }

  return result;
};

export default range;
