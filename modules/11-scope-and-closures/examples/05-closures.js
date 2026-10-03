// A CLOSURE is a function that remembers the variables from where it was created —
// even after that outer function has finished running.

function createCounter() {
  let count = 0;                 // lives in createCounter's scope

  return function increment() {  // this inner function uses `count`...
    count++;
    return count;
  };
}

const counterA = createCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3   <- count is REMEMBERED between calls

const counterB = createCounter(); // a NEW call = a NEW `count`
console.log(counterB()); // 1
console.log(counterA()); // 4   <- A and B don't share

// Mental model: each call to createCounter() creates a little private "backpack"
// of variables. The returned function carries that backpack wherever it goes.

// You've already used closures! In Module 09:
function makeMultiplier(factor) {
  return (n) => n * factor; // remembers `factor`
}
console.log(makeMultiplier(3)(5));
