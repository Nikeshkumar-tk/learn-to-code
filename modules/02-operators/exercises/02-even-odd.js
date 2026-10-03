// Exercise 02.2 — Even, odd, multiples
// Run:  node exercises/02-even-odd.js
//
// Create three BOOLEAN variables using the remainder operator %:
//   isEven         -> true if `number` is even
//   isMultipleOf3  -> true if `number` divides by 3 with nothing left over
//   isMultipleOf6  -> true if `number` is BOTH even AND a multiple of 3 (reuse the two above!)
//
// After the checks pass, change `number` to 7 and then to 9, and predict the output each time.
// (The checks are written for 12 — they will fail for other numbers, that's fine.)

const number = 12;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("12 is even", isEven, true);
check("12 is a multiple of 3", isMultipleOf3, true);
check("12 is a multiple of 6", isMultipleOf6, true);
