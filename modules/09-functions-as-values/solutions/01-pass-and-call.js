// Solution 09.1
function applyTwice(fn, value) {
  return fn(fn(value));
}

function collect(times, fn) {
  const results = [];
  for (let i = 0; i < times; i++) {
    results.push(fn(i));
  }
  return results;
}

function ifElse(condition, onTrue, onFalse) {
  if (condition) {
    return onTrue();
  }
  return onFalse();
}

console.log(applyTwice((x) => x + 3, 10), collect(4, (i) => i * i));
