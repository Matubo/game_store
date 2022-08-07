interface IParams {
  callback: () => void;
  debounce: number;
}
export const useDebounce = (callback: (value: string) => void, debounce: number, initValue: string) => {
  let currentValue = initValue;
  let timeout = setTimeout(() => {}, 0);

  function setNewDebounce(value: string) {
    if (value != currentValue) {
      clearTimeout(timeout);
      currentValue = value;
      timeout = setTimeout(() => callback(value), debounce);
    }
  }
  return setNewDebounce;
};
