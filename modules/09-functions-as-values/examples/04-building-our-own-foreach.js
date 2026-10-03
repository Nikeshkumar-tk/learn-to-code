// Let's build something real: a function that runs a callback for EVERY item in an array.

function forEachItem(list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback(list[i], i);           // give the callback the item AND its index
  }
}

const tasks = ["Write code", "Review PR", "Deploy"];

forEachItem(tasks, (task, index) => {
  console.log(`${index + 1}. ${task}`);
});

// The loop lives in ONE place. The callers only describe WHAT to do with each item.
let totalLetters = 0;
forEachItem(tasks, (task) => {
  totalLetters += task.length;     // the callback can ignore the index — that's fine
});
console.log("Total letters:", totalLetters);

// Arrays already have this built in, called forEach. Exactly the same idea:
tasks.forEach((task, index) => console.log(`[${index}] ${task}`));
