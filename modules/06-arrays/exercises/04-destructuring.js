// Exercise 06.4 — Destructuring
// Run:  node exercises/04-destructuring.js
//
// 1. Using ONE destructuring line, create `gold`, `silver` and `others` from `leaderboard`
//    (`others` = everyone after silver).
// 2. Write `splitName(fullName)` that returns [firstName, lastName].
//    Use fullName.split(" ") — it turns "Ada Lovelace" into ["Ada", "Lovelace"].
//    Then destructure its result into `firstName` and `lastName` for "Grace Hopper".
// 3. Write `headAndTail(list)` that returns [firstItem, arrayOfTheRest],
//    using destructuring with rest INSIDE the function.

const leaderboard = ["Mo", "Lee", "Sam", "Kai", "Ivy"];

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("gold", gold, "Mo");
check("silver", silver, "Lee");
check("others", others, ["Sam", "Kai", "Ivy"]);
check("firstName", firstName, "Grace");
check("lastName", lastName, "Hopper");
check("headAndTail", headAndTail([1, 2, 3]), [1, [2, 3]]);
check("headAndTail of one item", headAndTail(["x"]), ["x", []]);
