// Debug 07.3 — "0 of 3 tasks done", but two are done
// Expected: "2 of 3 tasks done"

const tasks = [
  { title: "Buy milk", completed: true },
  { title: "Walk dog", completed: false },
  { title: "Pay rent", completed: true },
];

let doneCount = 0;
for (const task of tasks) {
  if (task.complete) {
    doneCount++;
  }
}

console.log(`${doneCount} of ${tasks.length} tasks done`);
