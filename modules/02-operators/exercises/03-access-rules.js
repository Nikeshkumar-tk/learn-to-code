// Exercise 02.3 — Car rental rules
// Run:  node exercises/03-access-rules.js
//
// Turn these business rules into boolean variables:
//   1. isOldEnough       -> age is 21 or more
//   2. canRent           -> old enough AND has a licence AND does NOT have unpaid fines
//   3. getsDiscount      -> is a member OR is renting for 7 or more days
//   4. needsDeposit      -> NOT a member AND renting for less than 3 days
//
// Use only comparison and logical operators (no if statements yet).

const age = 23;
const hasLicense = true;
const hasUnpaidFines = false;
const isMember = false;
const rentalDays = 2;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("isOldEnough", isOldEnough, true);
check("canRent", canRent, true);
check("getsDiscount", getsDiscount, false);
check("needsDeposit", needsDeposit, true);
