// Destructuring: pull items out of an array into variables, by POSITION.

const point = [10, 20];
const [x, y] = point;
console.log(x, y);

// Skip items with an empty slot:
const podium = ["gold", "silver", "bronze"];
const [winner, , third] = podium;
console.log(winner, third);

// Collect "the rest" into a new array:
const queue = ["Ana", "Ben", "Cy", "Dee"];
const [next, ...waiting] = queue;
console.log("Next:", next);
console.log("Still waiting:", waiting);

// Defaults for missing items:
const [a, b = "default"] = ["only one"];
console.log(a, b);

// Swap two variables (remember Exercise 01.3?):
let left = "L";
let right = "R";
[left, right] = [right, left];
console.log(left, right);

// Functions can return an array, and the caller destructures it:
function minAndMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)];
}
const [lowest, highest] = minAndMax([5, 1, 9]);
console.log(lowest, highest);
