// An EXPRESSION is any piece of code that produces a value.

const price = 20;
const quantity = 3;

console.log(price * quantity);             // expression -> 60
console.log(price > 10);                   // expression -> true
console.log("Total: " + price * quantity); // + with a string JOINS text (concatenation)

// Template literals: backticks + ${ } let you put expressions inside text.
const item = "notebook";
console.log(`You bought ${quantity} ${item}s for $${price * quantity}.`);

// An expression's value can be stored in a variable and used in another expression.
const total = price * quantity;
const withTax = total * 1.1;
console.log(`Total with tax: ${withTax}`);
