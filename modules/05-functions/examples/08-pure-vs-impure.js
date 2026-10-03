// A PURE function:
//   - only uses its inputs (parameters)
//   - only produces an output (return value)
//   - same input -> always same output, and nothing else in the program changes
// Pure functions are easy to test, reuse, and reason about.

function calculateTotal(price, quantity) {   // pure
  return price * quantity;
}

// An IMPURE function changes something outside itself or depends on outside state.
let cartTotal = 0;
function addToCart(price) {                  // impure: modifies cartTotal
  cartTotal += price;
}

addToCart(10);
addToCart(10);
console.log(cartTotal);                      // 20 — calling it twice had a different effect each time

console.log(calculateTotal(10, 2));          // always 20, no matter how often you call it

// Impure isn't "bad" — printing, saving files and sending responses are all impure.
// Goal: keep the CALCULATIONS pure, and do the side effects in a few clear places.
