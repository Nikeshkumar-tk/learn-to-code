// Debug 10.4 — Filtering changed my data?!
// Expected:
//   High priority: [ 'Fix bug' ]
//   All priorities: [ 'high', 'low', 'medium' ]

const tasks = [
  { title: "Fix bug", priority: "high" },
  { title: "Write docs", priority: "low" },
  { title: "Deploy", priority: "medium" },
];

const highPriority = tasks.filter((task) => (task.priority = "high"));

console.log("High priority:", highPriority.map((t) => t.title));
console.log("All priorities:", tasks.map((t) => t.priority));
