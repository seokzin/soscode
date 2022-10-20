import { useState, useEffect } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T, (x: T) => void] => {
  const item = window.localStorage.getItem(key);
  const [state, setState] = useState(item ? JSON.parse(item) : initialValue);

  useEffect(() => {
    if (initialValue) {
      window.localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
