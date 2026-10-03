// Object destructuring pulls properties into variables BY NAME (not position).
const task = { id: 7, title: "Review PR", completed: false, priority: "high" };

const { title, priority } = task;
console.log(title, priority);

// Rename while destructuring:   key: newName
const { id: taskId } = task;
console.log(taskId);

// Defaults for missing properties:
const { dueDate = "no due date" } = task;
console.log(dueDate);

// Rest: collect the remaining properties into a new object
const { id, ...withoutId } = task;
console.log(withoutId);

// Destructuring in function parameters — VERY common in Node/Express code:
function describe({ title, completed }) {
  return `${completed ? "✔" : "•"} ${title}`;
}
console.log(describe(task));

// Nested destructuring:
const request = { params: { id: "42" }, query: { search: "milk" } };
const { params: { id: requestedId }, query } = request;
console.log(requestedId, query);
