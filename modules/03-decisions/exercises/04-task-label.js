// Exercise 03.4 — Task labels with the ternary operator
// Run:  node exercises/04-task-label.js
//
// Use the ternary operator (condition ? a : b) for each of these. No if statements!
//   checkbox  -> "[x]" if completed, otherwise "[ ]"
//   badge     -> "🔥" if priority is "high", otherwise "" (empty string)
//   line      -> a template literal combining them: `${checkbox} ${title} ${badge}`
//
// Then flip `completed` and `priority` and predict the output before running.

const title = "Learn conditionals";
const completed = true;
const priority = "high";

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("checkbox", checkbox, "[x]");
check("badge", badge, "🔥");
check("line", line, "[x] Learn conditionals 🔥");
