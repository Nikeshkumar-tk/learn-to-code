// Solution 10.1
const fahrenheit = [32, 212, 98.6, 50];
const names = ["Ada Lovelace", "Alan Turing", "Grace Hopper"];
const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Fix login bug", completed: true, priority: "medium" },
];

const celsius = fahrenheit.map((f) => Math.round(((f - 32) * 5) / 9));

const initials = names.map((name) => {
  const [first, last] = name.split(" ");
  return first[0] + last[0];
});

const taskLabels = tasks.map((task) => `#${task.id} ${task.title} (${task.priority})`);

const withStatus = tasks.map((task) => ({ ...task, status: task.completed ? "done" : "todo" }));

console.log(celsius, initials, taskLabels, withStatus);
