// Fixed. `task.priority = "high"` ASSIGNS (mutating every task!) and returns "high",
// which is truthy, so filter kept everything. Two bugs from one character.
// Use === to compare. (The extra parentheses in the original were a hint that something odd
// was going on: code formatters add them around assignments used as values.)
const tasks = [
  { title: "Fix bug", priority: "high" },
  { title: "Write docs", priority: "low" },
  { title: "Deploy", priority: "medium" },
];

const highPriority = tasks.filter((task) => task.priority === "high");

console.log("High priority:", highPriority.map((t) => t.title));
console.log("All priorities:", tasks.map((t) => t.priority));
