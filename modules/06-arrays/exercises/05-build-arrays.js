// Exercise 06.5 — Build arrays with loops
// Run:  node exercises/05-build-arrays.js
//
// Write these WITHOUT using built-in shortcuts like reverse(), map() or filter():
//
//   numbersBetween(start, end)  -> array of whole numbers from start to end (inclusive)
//                                  numbersBetween(3, 6) -> [3, 4, 5, 6]
//   reversed(list)              -> NEW array with the items in reverse order
//                                  (the original must not change)
//   onlyLongWords(words, min)   -> NEW array with only the words whose length >= min
//
// Pattern: start with an empty array, push into it inside a loop, return it.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("numbersBetween(3, 6)", numbersBetween(3, 6), [3, 4, 5, 6]);
check("numbersBetween(5, 5)", numbersBetween(5, 5), [5]);
const words = ["a", "node", "is", "great"];
check("reversed", reversed(words), ["great", "is", "node", "a"]);
check("reversed leaves original alone", words, ["a", "node", "is", "great"]);
check("onlyLongWords(words, 3)", onlyLongWords(words, 3), ["node", "great"]);
