// PURE functions that work on an array of tasks. No files, no HTTP, no printing.
// Every function takes the current tasks and returns a result (often a NEW array).
import { ValidationError, NotFoundError } from "./errors.js";
import { PRIORITIES, SORT_OPTIONS, validateTaskInput } from "./task-validation.js";

const PRIORITY_RANK = { high: 1, medium: 2, low: 3 };

export function createTask(id, { title, description = "", priority = "medium" }) {
  return {
    id,
    title: title.trim(),
    description: description.trim(),
    completed: false,
    priority,
    createdAt: new Date().toISOString(),
  };
}

export function nextId(tasks) {
  return tasks.reduce((highest, task) => Math.max(highest, task.id), 0) + 1;
}

export function addTask(tasks, input) {
  validateTaskInput(input);
  return [...tasks, createTask(nextId(tasks), input)];
}

export function countCompleted(tasks) {
  return tasks.filter((task) => task.completed).length;
}

export function findTaskById(tasks, id) {
  return tasks.find((task) => task.id === id);
}

export function getTaskById(tasks, id) {
  const task = findTaskById(tasks, id);
  if (!task) throw new NotFoundError(`Task ${id} not found`);
  return task;
}

export function completeTask(tasks, id) {
  getTaskById(tasks, id);
  return tasks.map((task) => (task.id === id ? { ...task, completed: true } : task));
}

export function updateTask(tasks, id, changes) {
  getTaskById(tasks, id);
  validateTaskInput(changes, { partial: true });
  const cleaned = { ...changes };
  if (cleaned.title !== undefined) cleaned.title = cleaned.title.trim();
  if (cleaned.description !== undefined) cleaned.description = cleaned.description.trim();
  return tasks.map((task) => (task.id === id ? { ...task, ...cleaned, id: task.id, createdAt: task.createdAt } : task));
}

export function deleteTask(tasks, id) {
  getTaskById(tasks, id);
  return tasks.filter((task) => task.id !== id);
}

export function filterTasks(tasks, { completed, priority } = {}) {
  if (priority !== undefined && !PRIORITIES.includes(priority)) {
    throw new ValidationError(`Priority must be one of: ${PRIORITIES.join(", ")}`);
  }
  return tasks.filter(
    (task) =>
      (completed === undefined || task.completed === completed) &&
      (priority === undefined || task.priority === priority),
  );
}

export function searchTasks(tasks, query = "") {
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

export function sortTasks(tasks, sortBy = "id") {
  if (!SORT_OPTIONS.includes(sortBy)) {
    throw new ValidationError(`Sort must be one of: ${SORT_OPTIONS.join(", ")}`);
  }
  return [...tasks].sort(SORTERS[sortBy]);
}

export function getStats(tasks) {
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
