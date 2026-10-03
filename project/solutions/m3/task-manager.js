// Task Manager — Milestone 3 reference solution
// New concepts: throw, custom errors, try/catch, validation, guard clauses.

// ===== Your code =====

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

const PRIORITIES = ["low", "medium", "high"];
const PRIORITY_RANK = { high: 1, medium: 2, low: 3 };
const SORT_OPTIONS = ["id", "priority", "title", "newest"];

function validateTaskInput(input, { partial = false } = {}) {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ValidationError("Task data must be an object");
  }

  const allowedFields = partial ? ["title", "description", "priority", "completed"] : ["title", "description", "priority"];
  for (const key of Object.keys(input)) {
    if (!allowedFields.includes(key)) throw new ValidationError(`Unknown field: ${key}`);
  }
  if (partial && Object.keys(input).length === 0) {
    throw new ValidationError("No changes provided");
  }

  const { title, description, priority, completed } = input;

  if (!partial || title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") throw new ValidationError("Title is required");
    if (title.trim().length > 100) throw new ValidationError("Title must be at most 100 characters");
  }
  if (description !== undefined) {
    if (typeof description !== "string") throw new ValidationError("Description must be a string");
    if (description.length > 500) throw new ValidationError("Description must be at most 500 characters");
  }
  if (priority !== undefined && !PRIORITIES.includes(priority)) {
    throw new ValidationError(`Priority must be one of: ${PRIORITIES.join(", ")}`);
  }
  if (completed !== undefined && typeof completed !== "boolean") {
    throw new ValidationError("Completed must be true or false");
  }
}

function parseId(value) {
  const id = Number(value);
  if (!Number.isInteger(id) || id < 1) {
    throw new ValidationError("Task id must be a positive whole number");
  }
  return id;
}

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
  return tasks.reduce((highest, task) => Math.max(highest, task.id), 0) + 1;
}

function addTask(tasks, input) {
  validateTaskInput(input);
  return [...tasks, createTask(nextId(tasks), input)];
}

function formatTask(task) {
  return `${task.completed ? "[x]" : "[ ]"} #${task.id} ${task.title} (${task.priority})`;
}

function formatTaskList(tasks) {
  if (tasks.length === 0) return "No tasks yet.";
  return tasks.map(formatTask).join("\n");
}

function countCompleted(tasks) {
  return tasks.filter((task) => task.completed).length;
}

function findTaskById(tasks, id) {
  return tasks.find((task) => task.id === id);
}

function getTaskById(tasks, id) {
  const task = findTaskById(tasks, id);
  if (!task) throw new NotFoundError(`Task ${id} not found`);
  return task;
}

function completeTask(tasks, id) {
  getTaskById(tasks, id); // guard: throws if missing
  return tasks.map((task) => (task.id === id ? { ...task, completed: true } : task));
}

function updateTask(tasks, id, changes) {
  getTaskById(tasks, id);
  validateTaskInput(changes, { partial: true });
  const cleaned = { ...changes };
  if (cleaned.title !== undefined) cleaned.title = cleaned.title.trim();
  if (cleaned.description !== undefined) cleaned.description = cleaned.description.trim();
  return tasks.map((task) => (task.id === id ? { ...task, ...cleaned, id: task.id, createdAt: task.createdAt } : task));
}

function deleteTask(tasks, id) {
  getTaskById(tasks, id);
  return tasks.filter((task) => task.id !== id);
}

function filterTasks(tasks, { completed, priority } = {}) {
  if (priority !== undefined && !PRIORITIES.includes(priority)) {
    throw new ValidationError(`Priority must be one of: ${PRIORITIES.join(", ")}`);
  }
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
  if (!SORT_OPTIONS.includes(sortBy)) {
    throw new ValidationError(`Sort must be one of: ${SORT_OPTIONS.join(", ")}`);
  }
  return [...tasks].sort(SORTERS[sortBy]);
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
tasks = addTask(tasks, { title: "Validate input", priority: "high" });
tasks = addTask(tasks, { title: "Throw useful errors" });

const attempts = [
  () => addTask(tasks, { title: "   " }),
  () => addTask(tasks, { title: "Urgent!", priority: "urgent" }),
  () => completeTask(tasks, 99),
  () => updateTask(tasks, 1, {}),
  () => parseId("abc"),
];

for (const attempt of attempts) {
  try {
    attempt();
  } catch (error) {
    console.log(`${error.name} (${error.statusCode}): ${error.message}`);
  }
}

console.log("\n" + formatTaskList(tasks));
