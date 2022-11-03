const isPalindrome = (str: string) => {
  const reversedStr = (str: string) =>
    str.toLowerCase().split('').reverse().join('');

  return reversedStr(str) === str;
};

export default isPalindrome;
