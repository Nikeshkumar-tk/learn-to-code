// Solution 11.2
function createCounter(start = 0) {
  let count = start;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      if (count > 0) count--;
      return count;
    },
    reset() {
      count = start; // `start` is remembered too — it's in the closure
      return count;
    },
    value() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.value());
