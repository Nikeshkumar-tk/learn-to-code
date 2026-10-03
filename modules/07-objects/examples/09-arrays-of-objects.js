// The shape of most real data: an ARRAY of OBJECTS.
// Your task API will be exactly this.
const tasks = [
  { id: 1, title: "Buy milk", completed: true, priority: "low" },
  { id: 2, title: "Write report", completed: false, priority: "high" },
  { id: 3, title: "Call plumber", completed: false, priority: "medium" },
];

// Print each one
for (const task of tasks) {
  console.log(`#${task.id} [${task.completed ? "x" : " "}] ${task.title}`);
}

// Find one by id
let found;
for (const task of tasks) {
  if (task.id === 2) {
    found = task;
    break;
  }
}
console.log("Found:", found);

// Collect the titles of incomplete tasks
const todo = [];
for (const task of tasks) {
  if (!task.completed) todo.push(task.title);
}
console.log("Still to do:", todo);

// In Module 10 you'll do all of this with find, filter and map — in one line each.
