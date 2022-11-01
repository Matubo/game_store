/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';

export function useDebounce(callback: (value?: any) => void, debounce: number) {
  const [currentTimeout, setNewTimeout] = useState(
    setTimeout(() => {
      return 0;
    }, 0)
  );
  function setNewDebounce(value?: any) {
    clearTimeout(currentTimeout);
    const timeout = setTimeout(callback, debounce, value);
    setNewTimeout(timeout);
  }
  return setNewDebounce;
}
