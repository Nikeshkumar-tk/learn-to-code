// Exercise 11.3 — ID generators (you'll reuse this idea in the project)
// Run:  node exercises/03-id-generator.js
//
// createIdGenerator(prefix, start = 1) returns a FUNCTION.
// Each call returns the next id as a string: `${prefix}-${number}`
//
//   const nextTaskId = createIdGenerator("task");
//   nextTaskId() -> "task-1"
//   nextTaskId() -> "task-2"
//
// Separate generators must count independently.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const nextTask = createIdGenerator("task");
const nextUser = createIdGenerator("user", 100);
check("first task id", nextTask(), "task-1");
check("second task id", nextTask(), "task-2");
check("user starts at 100", nextUser(), "user-100");
check("task continues independently", nextTask(), "task-3");
check("user continues", nextUser(), "user-101");
