// Turning tasks into text for humans (used by the demo and, later, the CLI).

export function formatTask(task) {
  return `${task.completed ? "[x]" : "[ ]"} #${task.id} ${task.title} (${task.priority})`;
}

export function formatTaskList(tasks) {
  if (tasks.length === 0) return "No tasks yet.";
  return tasks.map(formatTask).join("\n");
}
