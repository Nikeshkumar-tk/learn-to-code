// Entry point for Milestone 4: the same demo as before, now importing from modules.
//   node src/demo.js
import { addTask, completeTask, updateTask, sortTasks, getStats } from "./task-logic.js";
import { formatTaskList } from "./format.js";

let tasks = [];
tasks = addTask(tasks, { title: "Split code into modules", priority: "high" });
tasks = addTask(tasks, { title: "Name things well" });
tasks = addTask(tasks, { title: "Keep functions pure", priority: "high" });
tasks = completeTask(tasks, 1);
tasks = updateTask(tasks, 2, { priority: "low" });

console.log(formatTaskList(sortTasks(tasks, "priority")));
console.log(getStats(tasks));
