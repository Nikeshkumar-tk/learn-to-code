// filter(test): build a NEW array with only the items that pass the test.
//
//   [ a,  b,  c,  d ]
//     ✓   ✗   ✓   ✗      test(item) returns true/false
//   [ a,      c     ]    -> SAME OR SHORTER length; items are unchanged
//
// Mental model: "Keep the ones where..."

const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Fix login bug", completed: true, priority: "high" },
  { id: 3, title: "Update README", completed: false, priority: "low" },
];

const open = tasks.filter((task) => !task.completed);
console.log("Open:", open.map((t) => t.title));

const urgent = tasks.filter((task) => task.priority === "high" && !task.completed);
console.log("Urgent:", urgent.map((t) => t.title));

// Search (case-insensitive)
const query = "readme";
const matches = tasks.filter((task) => task.title.toLowerCase().includes(query));
console.log("Search:", matches);

// Removing an item without mutating = keep everything EXCEPT it:
const withoutTask2 = tasks.filter((task) => task.id !== 2);
console.log(withoutTask2.length, tasks.length);
