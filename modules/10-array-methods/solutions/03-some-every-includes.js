// Solution 10.3
const tasks = [
  { title: "A", overdue: false, assignee: "ana", priority: "high" },
  { title: "B", overdue: true, assignee: "ben", priority: "urgent" },
  { title: "C", overdue: false, assignee: "", priority: "low" },
];

const VALID_PRIORITIES = ["low", "medium", "high"];

const hasOverdue = (tasks) => tasks.some((task) => task.overdue);

const allAssigned = (tasks) => tasks.every((task) => task.assignee !== "");

const isValidPriority = (value) => VALID_PRIORITIES.includes(value);

const invalidPriorities = (tasks) =>
  tasks.filter((task) => !isValidPriority(task.priority)).map((task) => task.title);

console.log(hasOverdue(tasks), allAssigned(tasks), invalidPriorities(tasks));
