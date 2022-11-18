import { binarySearch, range } from 'utils';

describe('binarySearch >', () => {
  it('should return index of target number', () => {
    const target = 5;
    expect(binarySearch(range(1, 11), (num) => num - target)).toBe(4);
  });

  it('should return -1 if target number is not in list', () => {
    const target = 11;
    expect(binarySearch(range(1, 11), (num) => num - target)).toBe(-1);
  });
});
