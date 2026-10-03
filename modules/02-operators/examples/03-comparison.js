// Comparison operators ask a question. The answer is always a boolean.

const age = 20;

console.log(age > 18);   // true   greater than
console.log(age < 18);   // false  less than
console.log(age >= 20);  // true   greater than OR equal
console.log(age <= 19);  // false  less than OR equal
console.log(age === 20); // true   equal
console.log(age !== 20); // false  NOT equal

// The answer is a value, so you can store it:
const canVote = age >= 18;
console.log("Can vote?", canVote);

// Strings compare alphabetically (by character code):
console.log("apple" < "banana"); // true
console.log("Zebra" < "apple");  // true! Uppercase letters come before lowercase.
