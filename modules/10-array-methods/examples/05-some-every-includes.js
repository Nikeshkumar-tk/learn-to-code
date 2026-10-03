// some(test):  is there AT LEAST ONE item that passes?  -> boolean
// every(test): do ALL items pass?                       -> boolean
// includes(value): is this exact value in the array?    -> boolean

const tasks = [
  { title: "A", completed: true },
  { title: "B", completed: false },
];

console.log(tasks.some((t) => t.completed));   // true  — at least one done
console.log(tasks.every((t) => t.completed));  // false — not all done

// They stop early: some stops at the first true, every at the first false.

const allowedRoles = ["admin", "editor", "viewer"];
console.log(allowedRoles.includes("editor"));  // true
console.log(allowedRoles.includes("hacker"));  // false

// Real use: validation
const tags = ["node", "express", ""];
const allTagsValid = tags.every((tag) => tag.trim().length > 0);
console.log("All tags valid?", allTagsValid);

// ⚠️ includes compares with === , so it can't find OBJECTS by their contents:
console.log([{ id: 1 }].includes({ id: 1 }));          // false — different objects
console.log([{ id: 1 }].some((item) => item.id === 1)); // true — use some for that

// Edge case worth knowing: on an EMPTY array, some -> false, every -> true.
console.log([].some((x) => x > 0), [].every((x) => x > 0));
