// Task Manager — Milestone 1 reference solution
// Concepts: objects, arrays, functions, default parameters, destructuring, loops, spread.

// ===== Your code =====

// A task looks like this:
// {
//   id: 1,
//   title: "Learn higher-order functions",
//   description: "Practice map, filter and reduce",
//   completed: false,
//   priority: "high",                       // "low" | "medium" | "high"
//   createdAt: "2026-03-01T10:00:00.000Z"   // an ISO date STRING (JSON-friendly — Module 16)
// }

function createTask(id, { title, description = "", priority = "medium" }) {
  return {
    id,
    title: title.trim(),
    description: description.trim(),
    completed: false,
    priority,
    createdAt: new Date().toISOString(),
  };
}

function nextId(tasks) {
  let highest = 0;
  for (const task of tasks) {
    if (task.id > highest) highest = task.id;
  }
  return highest + 1;
}

function addTask(tasks, input) {
  const task = createTask(nextId(tasks), input);
  return [...tasks, task]; // a NEW array — the caller's array is untouched
}

function formatTask(task) {
  const checkbox = task.completed ? "[x]" : "[ ]";
  return `${checkbox} #${task.id} ${task.title} (${task.priority})`;
}

function formatTaskList(tasks) {
  if (tasks.length === 0) return "No tasks yet.";
  let output = "";
  for (const task of tasks) {
    output += formatTask(task) + "\n";
  }
  return output.trimEnd();
}

function countCompleted(tasks) {
  let count = 0;
  for (const task of tasks) {
    if (task.completed) count++;
  }
  return count;
}

// ===== Demo (runs with `node task-manager.js`; the checks ignore everything below) =====

let tasks = [];
tasks = addTask(tasks, { title: "Learn objects", priority: "high" });
tasks = addTask(tasks, { title: "Practise loops", description: "for, while and for...of" });
tasks = addTask(tasks, { title: "Read about JSON", priority: "low" });
tasks[0].completed = true; // (mutating directly for the demo — Milestone 2 adds completeTask)

console.log(formatTaskList(tasks));
console.log(`${countCompleted(tasks)} of ${tasks.length} done`);
