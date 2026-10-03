// Fixed. The property is `completed`, but the code read `task.complete`.
// A missing property is undefined (falsy) — no error, just silently wrong.
// Technique: console.log(task) inside the loop shows the REAL property names.
const tasks = [
  { title: "Buy milk", completed: true },
  { title: "Walk dog", completed: false },
  { title: "Pay rent", completed: true },
];

let doneCount = 0;
for (const task of tasks) {
  if (task.completed) {
    doneCount++;
  }
}

console.log(`${doneCount} of ${tasks.length} tasks done`);
