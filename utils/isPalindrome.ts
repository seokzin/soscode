/**
 * Checks if a string is a palindrome
 * @param str String to check
 * @returns True if palindrome, false otherwise
 */

const isPalindrome = (str: string) => {
  const reversedStr = (str: string) =>
    str.toLowerCase().split('').reverse().join('');

  return reversedStr(str) === str;
};

export default isPalindrome;
