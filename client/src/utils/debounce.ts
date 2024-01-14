export const debounce = (func: () => void, delay: number | undefined) => {
  let timeoutId: number | undefined;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
};
