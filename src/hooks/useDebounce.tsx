import { useState } from 'react';

export function useDebounce(callback: (value?: string) => void, debounce: number) {
  const [currentTimeout, setNewTimeout] = useState(setTimeout(() => {}, 0));
  function setNewDebounce(value?: string) {
    clearTimeout(currentTimeout);
    const timeout = setTimeout(callback, debounce, value);
    setNewTimeout(timeout);
  }
  return setNewDebounce;
}
