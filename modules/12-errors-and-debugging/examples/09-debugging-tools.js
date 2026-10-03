// Tools for SEEING what your program is doing.

const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Fix login", completed: true, priority: "high" },
  { id: 3, title: "Docs", completed: false, priority: "low" },
];

// 1. Label your logs. A bare number in the terminal means nothing 10 minutes later.
const open = tasks.filter((t) => !t.completed);
console.log("open tasks count:", open.length);

// 2. Log several variables at once with an object — names included for free.
const query = "test";
const page = 1;
console.log({ query, page, openCount: open.length });

// 3. console.table for arrays of objects
console.table(tasks);

// 4. JSON.stringify(value, null, 2) for deeply nested data
console.log(JSON.stringify({ data: { tasks: tasks.slice(0, 1) } }, null, 2));

// 5. typeof / Array.isArray when the TYPE might be the problem
const idFromUrl = "2";
console.log(typeof idFromUrl, tasks.find((t) => t.id === idFromUrl)); // string -> no match!

// 6. The VS Code debugger (no code needed):
//    - click left of a line number to set a red BREAKPOINT
//    - open a "JavaScript Debug Terminal" (Ctrl+Shift+P -> type it), run: node examples/09-debugging-tools.js
//    - execution pauses at your breakpoint; hover over variables, step line by line.
//    You can also write the statement `debugger;` in your code to pause there.
