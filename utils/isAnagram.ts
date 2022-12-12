/**
 * Checks if two strings are anagrams of each other
 * @param str1 First string
 * @param str2 Second string
 * @returns True if anagrams, false otherwise
 */

const isAnagram = (str1: string, str2: string) => {
  const sortedStr = (str: string) =>
    str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return sortedStr(str1) === sortedStr(str2);
};

export default isAnagram;
