// forEach(callback): "do something with each item". Returns NOTHING (undefined).
// It's just a loop. Use it for SIDE EFFECTS like printing.

const tasks = [
  { id: 1, title: "Write tests", completed: false },
  { id: 2, title: "Fix login bug", completed: true },
  { id: 3, title: "Update README", completed: false },
];

tasks.forEach((task, index) => {
  console.log(`${index + 1}. [${task.completed ? "x" : " "}] ${task.title}`);
});

// The same with for...of:
for (const task of tasks) {
  console.log("-", task.title);
}

// Most people prefer for...of for plain loops. Recognise forEach — it's everywhere.
