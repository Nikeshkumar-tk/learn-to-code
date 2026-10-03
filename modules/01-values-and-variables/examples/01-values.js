// Every piece of data in a program is a VALUE.
// Values come in different TYPES. typeof tells you the type of a value.

console.log("hello", "->", typeof "hello");   // string: text, always in quotes
console.log(42, "->", typeof 42);             // number: whole numbers...
console.log(3.14, "->", typeof 3.14);         // ...and decimals are both "number"
console.log(true, "->", typeof true);         // boolean: only true or false
console.log(false, "->", typeof false);

// Quotes change everything:
console.log("42", "->", typeof "42");         // looks like a number, but it's text!

// You can use "double", 'single' or `backtick` quotes for strings.
console.log("double", 'single', `backtick`);
