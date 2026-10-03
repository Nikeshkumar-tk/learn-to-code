// for...of walks through every item in something "list-like", one at a time.
// No counter, no index, no condition — just "for each thing in here".

// Strings are list-like: one character at a time.
for (const letter of "Node") {
  console.log(letter);
}

// A sneak peek at ARRAYS (lists of values) — Module 06 covers them properly.
const tasks = ["Write code", "Test code", "Ship code"];

for (const task of tasks) {
  console.log("TODO:", task);
}
