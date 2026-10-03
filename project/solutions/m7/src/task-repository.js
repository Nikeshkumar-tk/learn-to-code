// DATA ACCESS: the only file that knows tasks are stored in a JSON file.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { config } from "./config.js";

export async function loadTasks() {
  try {
    return JSON.parse(await readFile(config.tasksFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return []; // no file yet = no tasks yet
    throw error; // corrupted file etc. — never silently replace data
  }
}

export async function saveTasks(tasks) {
  await mkdir(path.dirname(config.tasksFile), { recursive: true });
  await writeFile(config.tasksFile, JSON.stringify(tasks, null, 2));
}
