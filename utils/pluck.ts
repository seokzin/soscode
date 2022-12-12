/**
 * Returns array of values from array of objects by key
 * @param objs Array of objects
 * @param key Key to pluck
 * @returns Array of plucked values
 */

const pluck = <T, K extends keyof T>(objs: T[], key: K): T[K][] =>
  objs.map((obj) => obj[key]);

export default pluck;
