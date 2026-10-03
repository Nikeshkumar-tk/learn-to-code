// Spread syntax ... "unpacks" an array's items into the place where you write it.

const morning = ["coffee", "email"];
const afternoon = ["meeting", "code"];

const day = [...morning, ...afternoon];     // combine
console.log(day);

const withLunch = [...morning, "lunch", ...afternoon]; // insert in the middle
console.log(withLunch);

const copy = [...day];                      // shallow copy
console.log(copy);

// Spreading into a function call: each item becomes a separate argument.
const scores = [88, 92, 79];
console.log(Math.max(...scores));           // same as Math.max(88, 92, 79)

// Adding without mutating — return a NEW array:
const moreTasks = [...day, "deploy"];
console.log(day.length, moreTasks.length);
