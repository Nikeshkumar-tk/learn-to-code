// Shorthand properties: if a variable has the same name as the key, write it once.
const title = "Write docs";
const priority = "low";

const longWay = { title: title, priority: priority };
const shortWay = { title, priority };
console.log(longWay, shortWay);

// You'll see this ALL the time in functions that build objects:
function createTask(title, priority = "medium") {
  return { title, priority, completed: false };
}
console.log(createTask("Fix login"));

// Computed property names: [expression] as a key.
const fieldName = "status";
const update = { [fieldName]: "done" };
console.log(update); // { status: 'done' }

// Handy for building objects from data:
const lang = "fr";
const greetings = { [lang]: "Bonjour", [`${lang}_formal`]: "Bonjour madame/monsieur" };
console.log(greetings);
