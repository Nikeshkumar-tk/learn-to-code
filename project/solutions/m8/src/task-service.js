// SERVICE: the operations the app offers. Each one follows load -> logic -> save.
// Accepts ids as numbers OR strings ("3" from a URL or the command line) — parseId handles both.
// Knows nothing about the terminal or HTTP, so the CLI and the API can both use it.
import * as logic from "./task-logic.js";
import { parseId } from "./task-validation.js";
import { loadTasks, saveTasks } from "./task-repository.js";

export async function listTasks({ completed, priority, search, sort } = {}) {
  const tasks = await loadTasks();
  const filtered = logic.filterTasks(tasks, { completed, priority });
  const searched = logic.searchTasks(filtered, search);
  return logic.sortTasks(searched, sort);
}

export async function getTask(id) {
  const tasks = await loadTasks();
  return logic.getTaskById(tasks, parseId(id));
}

export async function createTask(input) {
  const tasks = await loadTasks();
  const updated = logic.addTask(tasks, input);
  await saveTasks(updated);
  return updated[updated.length - 1];
}

export async function updateTask(id, changes) {
  const taskId = parseId(id);
  const updated = logic.updateTask(await loadTasks(), taskId, changes);
  await saveTasks(updated);
  return logic.getTaskById(updated, taskId);
}

export async function completeTask(id) {
  const taskId = parseId(id);
  const updated = logic.completeTask(await loadTasks(), taskId);
  await saveTasks(updated);
  return logic.getTaskById(updated, taskId);
}

export async function deleteTask(id) {
  const taskId = parseId(id);
  const tasks = await loadTasks();
  const task = logic.getTaskById(tasks, taskId);
  await saveTasks(logic.deleteTask(tasks, taskId));
  return task;
}

export async function getStats() {
  return logic.getStats(await loadTasks());
}
