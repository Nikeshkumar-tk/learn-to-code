// reduce(reducer, initialValue): boil an array down to ONE value.
// It's the ACCUMULATOR PATTERN from Module 04, packaged as a method.
//
//   let acc = initialValue;
//   for (const item of array) {
//     acc = reducer(acc, item);
//   }
//   return acc;

const prices = [12, 5, 30];

// Watch it step by step:
const total = prices.reduce((sum, price) => {
  console.log(`  sum so far: ${sum}, adding: ${price} -> ${sum + price}`);
  return sum + price;
}, 0);
console.log("Total:", total);

// The "one value" can be anything: a number, a string, an object, an array.

const tasks = [
  { title: "A", priority: "high", estimate: 3, completed: false },
  { title: "B", priority: "low", estimate: 1, completed: true },
  { title: "C", priority: "high", estimate: 5, completed: false },
];

// Count per category -> an object
const countByPriority = tasks.reduce((counts, task) => {
  counts[task.priority] = (counts[task.priority] ?? 0) + 1;
  return counts;          // ⚠️ ALWAYS return the accumulator
}, {});
console.log(countByPriority);

// Find the maximum
const biggest = tasks.reduce((max, task) => (task.estimate > max.estimate ? task : max));
console.log("Biggest:", biggest.title);
// (No initial value here: the first item becomes the starting accumulator.
//  Fine for "max", but crashes on an empty array. When unsure, give an initial value.)

// Several numbers at once -> an object
const stats = tasks.reduce(
  (acc, task) => ({
    total: acc.total + 1,
    done: acc.done + (task.completed ? 1 : 0),
    hours: acc.hours + task.estimate,
  }),
  { total: 0, done: 0, hours: 0 },
);
console.log(stats);

// Honest advice: if a reduce is hard to read, a for...of loop is perfectly fine.
