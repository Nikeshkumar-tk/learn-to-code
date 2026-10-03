// Shortcuts for "update a variable using its current value".

let balance = 100;

balance = balance + 20;  // the long way
console.log(balance);    // 120

balance += 20;           // the same thing, shorter
console.log(balance);    // 140

balance -= 40;           // balance = balance - 40
console.log(balance);    // 100

balance *= 2;            // balance = balance * 2
console.log(balance);    // 200

// Increment / decrement: add or subtract exactly 1.
let lives = 3;
lives--;                 // lives = lives - 1
console.log(lives);      // 2
lives++;                 // lives = lives + 1
console.log(lives);      // 3

// += also works with strings (it appends):
let message = "Hello";
message += ", world";
console.log(message);
