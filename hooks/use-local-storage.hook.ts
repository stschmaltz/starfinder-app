import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key, setValue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export { useLocalStorage };
