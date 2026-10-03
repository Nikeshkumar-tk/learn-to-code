// DATA ACCESS: the only file that knows tasks are stored in a JSON file.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const tasksFile = process.env.TASKS_FILE ?? path.join(import.meta.dirname, "..", "data", "tasks.json");

export async function loadTasks() {
  try {
    return JSON.parse(await readFile(tasksFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return []; // no file yet = no tasks yet
    throw error; // corrupted file etc. — never silently replace data
  }
}

export async function saveTasks(tasks) {
  await mkdir(path.dirname(tasksFile), { recursive: true });
  await writeFile(tasksFile, JSON.stringify(tasks, null, 2));
}
