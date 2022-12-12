/**
 * Get ASCII value of a character
 * @param char Character to get ASCII value
 * @returns ASCII value (number)
 */

const getAscii = (char: string) => {
  if (char >= 'a' && char <= 'z') {
    return char.charCodeAt(0) - 96;
  } else if (char >= 'A' && char <= 'Z') {
    return char.charCodeAt(0) - 64;
  } else {
    return 0;
  }
};

export default getAscii;
