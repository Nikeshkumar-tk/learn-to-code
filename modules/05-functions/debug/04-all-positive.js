// Debug 05.4 — allPositive is too optimistic
// Expected:
//   [1, 2, 3]   -> true
//   [1, -2, 3]  -> false
//   [-1, 2, 3]  -> false

function allPositive(numbers) {
  for (const n of numbers) {
    if (n > 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(allPositive([1, 2, 3]));
console.log(allPositive([1, -2, 3]));
console.log(allPositive([-1, 2, 3]));
