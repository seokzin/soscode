import { pluck } from 'utils';

describe('pluck >', () => {
  it('should return an array of values', () => {
    const result = pluck(
      [
        { name: 'John', age: 20 },
        { name: 'Jane', age: 30 },
        { name: 'Jack', age: 40 },
      ],
      'name'
    );
    expect(result).toEqual(['John', 'Jane', 'Jack']);
  });
});
