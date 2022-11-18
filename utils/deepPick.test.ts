import { deepPick } from 'utils';

describe('deepPick >', () => {
  const obj = {
    a: {
      b: {
        c: 1,
      },
    },
  };

  it('should return the value of the key', () => {
    expect(deepPick('a.b.c', obj)).toBe(1);
  });

  it('should return undefined if the key does not exist', () => {
    expect(deepPick('a.b.d', obj)).toBe(undefined);
  });
});
