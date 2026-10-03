// Debug 06.2 — Everyone gets everyone else's tasks
// Every new employee should start with a COPY of the default onboarding tasks.
// Expected:
//   Ana: [ 'setup laptop', 'read handbook', 'meet team' ]
//   Ben: [ 'setup laptop', 'read handbook', 'get parking pass' ]
//   Defaults: [ 'setup laptop', 'read handbook' ]

const defaultTasks = ["setup laptop", "read handbook"];

const anaTasks = defaultTasks;
anaTasks.push("meet team");

const benTasks = defaultTasks;
benTasks.push("get parking pass");

console.log("Ana:", anaTasks);
console.log("Ben:", benTasks);
console.log("Defaults:", defaultTasks);
