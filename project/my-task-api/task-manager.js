// ┌──────────────────────────────────────────────────────────────────────┐
// │  YOUR TASK MANAGER — the project starts here (Milestone 1)           │
// │                                                                      │
// │  1. Read  ../milestones/M1-task-data.md                              │
// │  2. Fill in the functions below                                      │
// │  3. Try your code:   node task-manager.js                            │
// │  4. Check it:        npm run check:m1                                │
// │                                                                      │
// │  Keep the "===== Demo" line! The checks run everything ABOVE it.     │
// └──────────────────────────────────────────────────────────────────────┘

// ===== Your code =====

// A task looks like this:
// {
//   id: 1,
//   title: "Learn higher-order functions",
//   description: "Practice map, filter and reduce",
//   completed: false,
//   priority: "high",                        // "low" | "medium" | "high"
//   createdAt: "2026-03-01T10:00:00.000Z"    // new Date().toISOString()
// }

function createTask(id, input) {
  // TODO: return a new task object built from the id and the input { title, description, priority }
}

function nextId(tasks) {
  // TODO: return the highest id in tasks + 1 (or 1 if there are no tasks)
}

function addTask(tasks, input) {
  // TODO: return a NEW array containing the old tasks plus a new task
}

function formatTask(task) {
  // TODO: return a string like "[ ] #1 Learn objects (high)"
}

function formatTaskList(tasks) {
  // TODO: return one formatted line per task, or "No tasks yet."
}

function countCompleted(tasks) {
  // TODO: return how many tasks are completed
}

// ===== Demo (runs with `node task-manager.js`; the checks ignore everything below) =====

let tasks = [];
// Uncomment these lines as your functions start working:
// tasks = addTask(tasks, { title: "Learn objects", priority: "high" });
// tasks = addTask(tasks, { title: "Practise loops", description: "for, while and for...of" });
// console.log(formatTaskList(tasks));
// console.log(`${countCompleted(tasks)} of ${tasks.length} done`);
console.log("Your task manager is ready to be built! Open milestones/M1-task-data.md");
