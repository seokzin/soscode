const bubbleSort = (arr: number[]) => {
  const result = [...arr];

  for (let i = 0; i < result.length; i += 1) {
    for (let j = 0; j < result.length - i - 1; j += 1) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
};

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
};

const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = cur;
  }

  return arr;
};

const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
};

const quickSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

export { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort };
