// Fixed. filter ALWAYS returns an ARRAY (here: [ { id: 2, ... } ]).
// Arrays don't have a `title` property -> undefined.
// When you want ONE item, use find. (Check with console.log(task) — you'd see the [ ].)
const tasks = [
  { id: 1, title: "Fix bug" },
  { id: 2, title: "Deploy" },
];

const taskId = 2;
const task = tasks.find((t) => t.id === taskId);

console.log("Editing task:", task.title);
