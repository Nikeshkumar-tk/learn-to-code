// @expect-error
// Debug 11.1 — "discount is not defined"
// Expected:
//   Final price: 90

const price = 100;
const isMember = true;

if (isMember) {
  const discount = 10;
}

console.log("Final price:", price - discount);
