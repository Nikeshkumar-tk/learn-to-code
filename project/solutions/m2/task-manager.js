// Task Manager — Milestone 2 reference solution
// New concepts: array methods (map, filter, find, sort, reduce), strings, higher-order functions.

// ===== Your code =====

const PRIORITY_RANK = { high: 1, medium: 2, low: 3 };

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

// Milestone 2 refactor: loops replaced by array methods
function nextId(tasks) {
  return tasks.reduce((highest, task) => Math.max(highest, task.id), 0) + 1;
}

function addTask(tasks, input) {
  return [...tasks, createTask(nextId(tasks), input)];
}

function formatTask(task) {
  return `${task.completed ? "[x]" : "[ ]"} #${task.id} ${task.title} (${task.priority})`;
}

function formatTaskList(tasks) {
  if (tasks.length === 0) return "No tasks yet.";
  return tasks.map(formatTask).join("\n"); // passing formatTask itself as the callback!
}

function countCompleted(tasks) {
  return tasks.filter((task) => task.completed).length;
}

function findTaskById(tasks, id) {
  return tasks.find((task) => task.id === id);
}

function completeTask(tasks, id) {
  return tasks.map((task) => (task.id === id ? { ...task, completed: true } : task));
}

function updateTask(tasks, id, changes) {
  return tasks.map((task) =>
    // id and createdAt are written LAST so `changes` can never overwrite them
    task.id === id ? { ...task, ...changes, id: task.id, createdAt: task.createdAt } : task,
  );
}

function deleteTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

function filterTasks(tasks, { completed, priority } = {}) {
  return tasks.filter(
    (task) =>
      (completed === undefined || task.completed === completed) &&
      (priority === undefined || task.priority === priority),
  );
}

function searchTasks(tasks, query = "") {
  const text = query.trim().toLowerCase();
  if (text === "") return tasks;
  return tasks.filter(
    (task) => task.title.toLowerCase().includes(text) || task.description.toLowerCase().includes(text),
  );
}

const SORTERS = {
  id: (a, b) => a.id - b.id,
  title: (a, b) => a.title.localeCompare(b.title),
  // A difference of 0 (same priority) is falsy, so || falls back to comparing ids.
  priority: (a, b) => PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] || a.id - b.id,
  newest: (a, b) => b.createdAt.localeCompare(a.createdAt) || b.id - a.id,
};

function sortTasks(tasks, sortBy = "id") {
  const compare = SORTERS[sortBy] ?? SORTERS.id;
  return [...tasks].sort(compare);
}

function getStats(tasks) {
  return tasks.reduce(
    (stats, task) => {
      stats.total++;
      if (task.completed) stats.completed++;
      else stats.pending++;
      stats.byPriority[task.priority]++;
      return stats;
    },
    { total: 0, completed: 0, pending: 0, byPriority: { high: 0, medium: 0, low: 0 } },
  );
}

// ===== Demo (runs with `node task-manager.js`; the checks ignore everything below) =====

let tasks = [];
tasks = addTask(tasks, { title: "Learn map and filter", description: "Module 10", priority: "high" });
tasks = addTask(tasks, { title: "Write a README", priority: "low" });
tasks = addTask(tasks, { title: "Practise reduce", description: "accumulators!", priority: "high" });
tasks = completeTask(tasks, 1);
tasks = updateTask(tasks, 2, { title: "Write a great README" });

console.log("All, by priority:\n" + formatTaskList(sortTasks(tasks, "priority")));
console.log("\nPending:\n" + formatTaskList(filterTasks(tasks, { completed: false })));
console.log("\nSearch 'reduce':\n" + formatTaskList(searchTasks(tasks, "REDUCE")));
console.log("\nStats:", getStats(tasks));
