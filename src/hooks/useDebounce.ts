interface IParams {
  callback: () => void;
  debounce: number;
}
export function useDebounce(callback: (value: string) => void, debounce: number) {
  let timeout = setTimeout(() => {}, 0);

  function setNewDebounce(value: string) {
    clearTimeout(timeout);
    timeout = setTimeout(callback, debounce, value);
  }
  return setNewDebounce;
}
