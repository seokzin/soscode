/**
 * Returns a list of prime numbers up to n
 * @param n - Upper limit
 * @returns List of prime numbers up to n
 */

const prime = (n: number) => {
  const list = Array(n + 1).fill(true);
  list[0] = false;
  list[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (list[i]) {
      for (let j = i * i; j <= n; j += i) {
        list[j] = false;
      }
    }
  }

  return list;
};

export default prime;
