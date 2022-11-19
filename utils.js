const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      document.querySelector(".tutorial").classList.add("is-hidden");
      func.apply(null, args);
    }, delay);
  };
};
