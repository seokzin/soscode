import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  const item = localStorage.getItem(key);
  const [value, setValue] = useState(item ? JSON.parse(item) : initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
