// Exercise 09.2 — Your own forEach and countWhere
// Run:  node exercises/02-each-and-count.js
//
// 1. each(list, callback)
//      calls callback(item, index) for every item. Returns nothing.
//
// 2. countWhere(list, test)
//      returns how many items make test(item) return a truthy value.
//      Write it USING your `each` function (no for loops inside countWhere!).
//
// 3. Use countWhere on `tasks` to set:
//      doneCount     -> how many tasks are completed
//      urgentCount   -> how many have priority "high" AND are not completed

const tasks = [
  { title: "Fix bug", completed: false, priority: "high" },
  { title: "Write docs", completed: true, priority: "low" },
  { title: "Deploy", completed: false, priority: "high" },
  { title: "Email Sam", completed: true, priority: "high" },
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
const seen = [];
each(["a", "b"], (item, index) => seen.push(`${index}:${item}`));
check("each passes item and index", seen, ["0:a", "1:b"]);
check("countWhere evens", countWhere([1, 2, 3, 4, 6], (n) => n % 2 === 0), 3);
check("doneCount", doneCount, 2);
check("urgentCount", urgentCount, 2);
