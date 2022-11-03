import { prime } from './prime';

describe('prime >', () => {
  it('should return prime list', () => {
    const result = prime(10);
    expect(result).toEqual([
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
    ]);
  });
});
