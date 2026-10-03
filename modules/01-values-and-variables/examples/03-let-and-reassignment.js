// const = this name will ALWAYS point to the same value.
// let   = this name may point to a different value later (REASSIGNMENT).

let score = 0;
console.log("start:", score);

score = 10;              // reassign: no "let" the second time!
console.log("after first level:", score);

score = score + 5;       // read the old value, add 5, store the result back
console.log("after bonus:", score);

// Rule of thumb: use const by default. Use let only when the value MUST change.
const maxScore = 100;
console.log("max:", maxScore);
