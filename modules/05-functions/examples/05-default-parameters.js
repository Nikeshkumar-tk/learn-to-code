// A default parameter is used when the caller doesn't pass that argument (or passes undefined).

function createTask(title, priority = "medium") {
  return `${title} [${priority}]`;
}

console.log(createTask("Write README", "high"));
console.log(createTask("Water plants"));         // priority falls back to "medium"
console.log(createTask("Fix bug", undefined));   // undefined also triggers the default
