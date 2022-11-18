import { compact } from 'utils';

describe('compact >', () => {
  it('should return an array without falsey values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all values are falsey', () => {
    expect(compact([0, false, '', undefined, null])).toEqual([]);
  });
});
