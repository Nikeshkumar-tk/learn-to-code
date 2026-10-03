// Fixed. `return` ends the function immediately, so the loop only ever looked at the
// FIRST number. To claim "all are positive" you must check every number;
// to claim "not all" you need just one counter-example.
function allPositive(numbers) {
  for (const n of numbers) {
    if (n <= 0) {
      return false; // found a counter-example: we can stop early
    }
  }
  return true; // the loop finished without finding a problem
}

console.log(allPositive([1, 2, 3]));
console.log(allPositive([1, -2, 3]));
console.log(allPositive([-1, 2, 3]));
