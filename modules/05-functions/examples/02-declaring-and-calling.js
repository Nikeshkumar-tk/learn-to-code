// DECLARING a function: creating it. Nothing runs yet!
function sayHello() {
  console.log("Hello!");
  console.log("Nice to meet you.");
}

console.log("The function exists now, but hasn't run.");

// CALLING a function: running it. The () is what makes it run.
sayHello();
sayHello();

// Without (), you're just mentioning the function — not running it.
console.log(sayHello); // prints [Function: sayHello]
