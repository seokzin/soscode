/**
 * Removes falsy values from an array.
 * @param arr The array to compact.
 * @returns The new array of Truthy values.
 */

const compact = (arr: any[]) => arr.filter(Boolean);

export default compact;
