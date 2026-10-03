// map(transform): build a NEW array by transforming EVERY item.
//
//   [ a,    b,    c    ]
//     |     |     |        transform each one
//   [ f(a), f(b), f(c) ]   -> always the SAME LENGTH as the original
//
// Mental model: "I have a list of X, I want a list of Y — one Y for each X."

const prices = [10, 25, 40];
const withTax = prices.map((price) => price * 1.18);
console.log(withTax);

// The loop version — map just packages this:
const withTaxLoop = [];
for (const price of prices) {
  withTaxLoop.push(price * 1.18);
}
console.log(withTaxLoop);

// Very common: pull one property out of each object
const tasks = [
  { id: 1, title: "Write tests", completed: false },
  { id: 2, title: "Fix login bug", completed: true },
];
const titles = tasks.map((task) => task.title);
console.log(titles);

// Also common: make a modified COPY of every object (spread + change)
const allDone = tasks.map((task) => ({ ...task, completed: true }));
console.log(allDone);
console.log(tasks[0].completed); // original untouched: false
// ⚠️ To return an object from an implicit-return arrow, wrap it in ( ):  (x) => ({ ... })

// map also gives you the index:
console.log(titles.map((title, i) => `${i + 1}. ${title}`));
