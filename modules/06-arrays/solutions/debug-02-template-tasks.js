// Fixed. `const anaTasks = defaultTasks` doesn't copy the array — it creates a second
// NAME for the SAME array. All three variables pointed to one array.
// Confirm the hypothesis with: console.log(anaTasks === defaultTasks) -> true.
// Fix: make a real copy with spread.
const defaultTasks = ["setup laptop", "read handbook"];

const anaTasks = [...defaultTasks];
anaTasks.push("meet team");

const benTasks = [...defaultTasks];
benTasks.push("get parking pass");

console.log("Ana:", anaTasks);
console.log("Ben:", benTasks);
console.log("Defaults:", defaultTasks);
