// Solution 10.4
const products = [
  { name: "Mouse", price: 35 },
  { name: "cable", price: 12 },
  { name: "Keyboard", price: 90 },
];

const tasks = [
  { title: "Write docs", priority: "low" },
  { title: "Fix bug", priority: "high" },
  { title: "Deploy", priority: "medium" },
  { title: "Add tests", priority: "high" },
];

const cheapestFirst = (products) => [...products].sort((a, b) => a.price - b.price);

const byName = (products) => [...products].sort((a, b) => a.name.localeCompare(b.name));

const PRIORITY_RANK = { high: 1, medium: 2, low: 3 };

function byPriority(tasks) {
  return [...tasks].sort((a, b) => {
    const difference = PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority];
    if (difference !== 0) return difference;  // different priorities: that decides it
    return a.title.localeCompare(b.title);    // same priority: fall back to title
  });
}

console.log(byPriority(tasks).map((t) => t.title));
