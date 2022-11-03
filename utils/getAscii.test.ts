import { getAscii } from './getAscii';

describe('getAscii >', () => {
  it('should return ascii code of char', () => {
    expect(getAscii('a')).toBe(1);
    expect(getAscii('z')).toBe(26);
    expect(getAscii('A')).toBe(1);
    expect(getAscii('Z')).toBe(26);
  });

  it('should return 0 if char is not alphabet', () => {
    expect(getAscii('0')).toBe(0);
    expect(getAscii(' ')).toBe(0);
  });
});
