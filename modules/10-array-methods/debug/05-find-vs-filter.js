// Debug 10.5 — The task title is undefined
// Expected: "Editing task: Deploy"

const tasks = [
  { id: 1, title: "Fix bug" },
  { id: 2, title: "Deploy" },
];

const taskId = 2;
const task = tasks.filter((t) => t.id === taskId);

console.log("Editing task:", task.title);
