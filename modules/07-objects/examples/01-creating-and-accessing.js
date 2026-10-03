// An OBJECT groups related values under NAMES (called keys or properties).
// Arrays are "lists by position". Objects are "collections by name".

const task = {
  id: 1,
  title: "Learn objects",
  completed: false,
  priority: "high",
};

console.log(task);

// Dot notation: object.key
console.log(task.title);
console.log(task.completed);

// Bracket notation: object["key"] — the key is a STRING (or a variable holding one)
console.log(task["priority"]);

const field = "title";
console.log(task[field]);   // uses the VALUE of field -> task["title"]
console.log(task.field);    // looks for a key literally named "field" -> undefined

// Missing keys give undefined (no error):
console.log(task.dueDate);
