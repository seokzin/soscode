import { add } from './add';
import { range } from './range';

describe('add >', () => {
  it('should return sum of two numbers', () => {
    expect(add(3, 4)).toBe(7);
  });

  it('should return sum of many numbers', () => {
    expect(add(...range(10))).toBe(45);
  });
});
