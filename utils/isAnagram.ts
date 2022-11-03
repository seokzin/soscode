const isAnagram = (str1: string, str2: string) => {
  const sortedStr = (str: string) =>
    str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return sortedStr(str1) === sortedStr(str2);
};

export default isAnagram;
