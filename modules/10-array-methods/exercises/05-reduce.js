// Exercise 10.5 — reduce  ⭐
// Run:  node exercises/05-reduce.js
//
// Use .reduce() for each one. Always pass an initial value.
//   totalHours(tasks)      -> sum of all `hours`
//   countByStatus(tasks)   -> { todo: 2, doing: 1, done: 2 }
//   longestTitle(tasks)    -> the longest title string
//   indexById(tasks)       -> { 1: {task...}, 2: {task...}, ... } (an object for fast lookup by id)
//   groupByStatus(tasks)   -> { todo: ["A", "D"], doing: ["B"], done: ["C", "E"] }  (titles)

const tasks = [
  { id: 1, title: "A", status: "todo", hours: 2 },
  { id: 2, title: "B", status: "doing", hours: 5 },
  { id: 3, title: "C", status: "done", hours: 1 },
  { id: 4, title: "D", status: "todo", hours: 3 },
  { id: 5, title: "E (a much longer title)", status: "done", hours: 4 },
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
check("totalHours", totalHours(tasks), 15);
check("totalHours of []", totalHours([]), 0);
check("countByStatus", countByStatus(tasks), { todo: 2, doing: 1, done: 2 });
check("longestTitle", longestTitle(tasks), "E (a much longer title)");
check("indexById[3].title", indexById(tasks)[3].title, "C");
check("indexById keys", Object.keys(indexById(tasks)), ["1", "2", "3", "4", "5"]);
check("groupByStatus", groupByStatus(tasks), { todo: ["A", "D"], doing: ["B"], done: ["C", "E (a much longer title)"] });
