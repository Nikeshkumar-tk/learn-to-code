// Solution 11.4
function once(fn) {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args); // rest + spread: pass along whatever arguments we got
    }
    return result;
  };
}

function memoize(fn) {
  const cache = {};
  return (arg) => {
    if (!(arg in cache)) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const init = once(() => "initialised");
console.log(init(), init());
