// Exercise 02.1 — Split the bill
// Run:  node exercises/01-bill-splitter.js
//
// A group of friends had dinner.
//   - Create `tipAmount`: the tip is tipPercent percent of billTotal.
//   - Create `totalWithTip`: bill plus tip.
//   - Create `perPerson`: totalWithTip split evenly between `people`,
//     ROUNDED TO 2 DECIMAL PLACES (cents).
//   - Print: "Each person pays $..."
//
// Rounding to 2 decimals trick:  Math.round(value * 100) / 100

const billTotal = 87.5;
const tipPercent = 15;
const people = 3;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("tipAmount", tipAmount, 13.125);
check("totalWithTip", totalWithTip, 100.625);
check("perPerson (rounded to cents)", perPerson, 33.54);
