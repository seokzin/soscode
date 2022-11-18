import { twoPointer, range } from 'utils';

describe('twoPointer >', () => {
  it('should return subarray of target sum', () => {
    expect(twoPointer(range(1, 11), 15)).toEqual([
      [1, 2, 3, 4, 5],
      [4, 5, 6],
      [7, 8],
    ]);
  });

  it('should return empty array if there is no subarray of target sum', () => {
    expect(twoPointer(range(1, 11), 100)).toEqual([]);
  });
});
