// Fixed. Indexes start at 0, so the last index is length - 1.
// tasks.length is 4, and tasks[4] doesn't exist -> undefined.
const tasks = ["design", "build", "test", "deploy"];
const lastTask = tasks[tasks.length - 1]; // or tasks.at(-1)

console.log("Last task:", lastTask);
