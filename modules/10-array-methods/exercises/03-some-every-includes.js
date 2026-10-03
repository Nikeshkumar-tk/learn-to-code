// Exercise 10.3 — some, every, includes
// Run:  node exercises/03-some-every-includes.js
//
//   hasOverdue(tasks)        -> true if ANY task has overdue: true
//   allAssigned(tasks)       -> true if EVERY task has a non-empty `assignee`
//   isValidPriority(value)   -> true if value is "low", "medium" or "high" (use includes)
//   invalidPriorities(tasks) -> array of TITLES of tasks whose priority is not valid
//                               (combine filter + map + your isValidPriority)

const tasks = [
  { title: "A", overdue: false, assignee: "ana", priority: "high" },
  { title: "B", overdue: true, assignee: "ben", priority: "urgent" },
  { title: "C", overdue: false, assignee: "", priority: "low" },
];

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("hasOverdue", hasOverdue(tasks), true);
check("hasOverdue none", hasOverdue([{ overdue: false }]), false);
check("allAssigned", allAssigned(tasks), false);
check("allAssigned ok", allAssigned(tasks.slice(0, 2)), true);
check("isValidPriority high", isValidPriority("high"), true);
check("isValidPriority urgent", isValidPriority("urgent"), false);
check("invalidPriorities", invalidPriorities(tasks), ["B"]);
