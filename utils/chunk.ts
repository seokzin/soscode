/**
 * Chunks an array into smaller arrays of a specified size.
 * @param arr The array to chunk.
 * @param size The size of each chunk.
 * @returns The new array of chunks. last chunk may be smaller than size.
 */

const chunk = <T>(arr: T[], size: number) =>
  arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    [] as T[][]
  );

export default chunk;
