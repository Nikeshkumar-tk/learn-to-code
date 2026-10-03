// Exercise 01.1 — Build a profile with variables
// Run:  node exercises/01-profile.js
//
// Create these variables (none of them change in this file, so which keyword?):
//   username        -> a string (any name)
//   age             -> a number
//   isLearningNode  -> a boolean
//   favoriteFood    -> null   (you haven't decided yet)
//
// Then print one sentence that uses username and age, using a template literal.
// Example: "Sam is 30 years old."
//
// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — run the file and read the results. Don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("username is a string", typeof username, "string");
check("age is a number", typeof age, "number");
check("isLearningNode is a boolean", typeof isLearningNode, "boolean");
check("favoriteFood is null", favoriteFood, null);
