import { isPalindrome } from './isPalindrome';

describe('isPalindrome >', () => {
  it('should return true if string is palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('우영우')).toBe(true);
  });

  it('should return false if string is not palindrome', () => {
    expect(isPalindrome('car')).toBe(false);
    expect(isPalindrome('테스트')).toBe(false);
  });
});
