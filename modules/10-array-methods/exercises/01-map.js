// Exercise 10.1 — map
// Run:  node exercises/01-map.js
//
// Use .map() (no loops!) for each of these:
//   1. celsius      -> convert `fahrenheit` temps to celsius, rounded to whole numbers
//                      formula: (f - 32) * 5 / 9
//   2. initials     -> "Ada Lovelace" -> "AL"  for every name in `names`
//   3. taskLabels   -> "#1 Write tests (high)" for every task
//   4. withStatus   -> copies of the tasks with a NEW property:
//                      status: "done" or "todo" based on completed. Don't mutate the originals!

const fahrenheit = [32, 212, 98.6, 50];
const names = ["Ada Lovelace", "Alan Turing", "Grace Hopper"];
const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Fix login bug", completed: true, priority: "medium" },
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
check("celsius", celsius, [0, 100, 37, 10]);
check("initials", initials, ["AL", "AT", "GH"]);
check("taskLabels", taskLabels, ["#1 Write tests (high)", "#2 Fix login bug (medium)"]);
check("withStatus", withStatus.map((t) => t.status), ["todo", "done"]);
check("withStatus keeps other fields", withStatus[0].title, "Write tests");
check("originals not mutated", tasks[0].status, undefined);
