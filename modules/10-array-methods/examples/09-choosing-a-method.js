// Which method do I need? Ask: "What do I want to END UP with?"
//
//   I want...                                    Use
//   ---------------------------------------------------------------
//   a new array, same length, each item changed  map
//   a new array with only some items             filter
//   one item                                     find
//   the position of one item                     findIndex
//   yes/no: does ANY item match?                 some
//   yes/no: do ALL items match?                  every
//   yes/no: is this exact value in there?        includes
//   the same items in a different order          sort (on a copy!)
//   a single value (total, object, string...)    reduce
//   just to DO something for each item           forEach / for...of

const tasks = [
  { id: 1, title: "Write tests", completed: false },
  { id: 2, title: "Fix login bug", completed: true },
];

console.log(tasks.map((t) => t.title));                 // ["Write tests", "Fix login bug"]
console.log(tasks.filter((t) => t.completed));          // [ {id: 2...} ]
console.log(tasks.find((t) => t.id === 1));             // {id: 1...}
console.log(tasks.findIndex((t) => t.id === 2));        // 1
console.log(tasks.some((t) => t.completed));            // true
console.log(tasks.every((t) => t.completed));           // false
console.log(tasks.reduce((n, t) => n + (t.completed ? 0 : 1), 0)); // 1 open task
