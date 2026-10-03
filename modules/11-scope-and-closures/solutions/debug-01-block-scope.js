// Fixed. `const discount` was declared INSIDE the if-block, so it stopped existing at the `}`.
// Declare the variable before the block (with a sensible default) and assign inside it.
const price = 100;
const isMember = true;

let discount = 0;
if (isMember) {
  discount = 10;
}

console.log("Final price:", price - discount);
