// Exercise 06.3 — Stats with rest parameters
// Run:  node exercises/03-rest-stats.js
//
// Write functions that accept ANY number of numbers using a rest parameter:
//   sum(...numbers)      -> total (0 if no numbers)
//   average(...numbers)  -> average (0 if no numbers)  — reuse sum!
//   range(...numbers)    -> highest minus lowest (0 if no numbers)
//
// Then write `averageOfArray(numbers)` that takes an ARRAY and reuses `average`
// by SPREADING the array into it.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("sum(1, 2, 3)", sum(1, 2, 3), 6);
check("sum()", sum(), 0);
check("average(2, 4, 9)", average(2, 4, 9), 5);
check("average()", average(), 0);
check("range(4, 10, 1)", range(4, 10, 1), 9);
check("range()", range(), 0);
check("averageOfArray([10, 20])", averageOfArray([10, 20]), 15);
