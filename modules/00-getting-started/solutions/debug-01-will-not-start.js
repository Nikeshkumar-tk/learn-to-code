// Fixed: line 6 opened a string with " but never closed it.
// The error said "SyntaxError: Invalid or unexpected token" and pointed at line 6.
// A SyntaxError means Node could not even READ the program, so nothing ran — not even line 5.
console.log("Welcome to the course");
console.log("Let's learn to program");
console.log("One step at a time");
