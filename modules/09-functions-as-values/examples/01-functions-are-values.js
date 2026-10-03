// In JavaScript, a function is a VALUE — just like a number or a string.
// Anything you can do with a value, you can do with a function.

function sayHi() {
  return "hi!";
}

// 1. A function has a type
console.log(typeof sayHi);        // "function"
console.log(typeof 42);           // "number"

// 2. You can store it in another variable (no parentheses = no call!)
const greet = sayHi;
console.log(greet());             // "hi!" — same function, second name

// 3. You can put functions in arrays...
const steps = [
  () => "wake up",
  () => "coffee",
  () => "code",
];
for (const step of steps) {
  console.log(step());            // call each one
}

// 4. ...and in objects
const actions = {
  start: () => "Starting...",
  stop: () => "Stopping...",
};
console.log(actions.start());

// THE crucial distinction:
console.log(sayHi);    // the function itself (a value you can pass around)
console.log(sayHi());  // the RESULT of calling it ("hi!")
