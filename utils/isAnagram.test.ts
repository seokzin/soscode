import { isAnagram } from 'utils';

describe('isAnagram >', () => {
  it('should return true if two strings are anagrams', () => {
    expect(isAnagram('rat', 'tar')).toBe(true);
  });

  it('should return false if two strings are not anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('should remove non word character or underscore', () => {
    expect(isAnagram('rat!', 'tar')).toBe(true);
  });
});
