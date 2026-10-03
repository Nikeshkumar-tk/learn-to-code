// sort(compare): reorders the array. ⚠️ It MUTATES the original!

// Trap #1: without a compare function, sort compares items as STRINGS.
console.log([10, 9, 100, 1].sort());              // [ 1, 10, 100, 9 ]  ?!

// The compare function gets two items, a and b, and returns:
//   a negative number -> a goes first
//   a positive number -> b goes first
//   0                 -> keep their order
console.log([10, 9, 100, 1].sort((a, b) => a - b)); // ascending  [1, 9, 10, 100]
console.log([10, 9, 100, 1].sort((a, b) => b - a)); // descending [100, 10, 9, 1]

// Strings: use localeCompare (handles upper/lower case sensibly)
const names = ["bob", "Alice", "carol"];
console.log([...names].sort((a, b) => a.localeCompare(b)));

// Trap #2: mutation. Sort a COPY if others use the original array:
const tasks = [
  { title: "Deploy", priority: "medium" },
  { title: "Fix bug", priority: "high" },
  { title: "Tidy up", priority: "low" },
];

// Custom order: use a lookup object to turn words into numbers
const rank = { high: 1, medium: 2, low: 3 };
const byPriority = [...tasks].sort((a, b) => rank[a.priority] - rank[b.priority]);
console.log(byPriority.map((t) => t.title));
console.log(tasks.map((t) => t.title)); // original order untouched

// Newer alternative that never mutates: tasks.toSorted((a, b) => ...)
