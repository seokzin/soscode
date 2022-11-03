import { range } from './range';
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from './sort';

describe('sorts >', () => {
  const list = range(100, 0, -1);
  const sortedList = range(1, 101);

  it('should return sorted list (bubbleSort - n^2)', () => {
    expect(bubbleSort(list)).toEqual(sortedList);
  });

  it('should return sorted list (selectionSort - n^2)', () => {
    expect(selectionSort(list)).toEqual(sortedList);
  });

  it('should return sorted list (insertionSort - n^2)', () => {
    expect(insertionSort(list)).toEqual(sortedList);
  });

  it('return sorted list (mergeSort - nlogn)', () => {
    expect(mergeSort(list)).toEqual(sortedList);
  });

  it('return sorted list (quickSort - nlogn)', () => {
    expect(quickSort(list)).toEqual(sortedList);
  });
});
