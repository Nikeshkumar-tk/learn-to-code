// Fixed. "ReferenceError: username is not defined".
// The variable is called userName (capital N). JavaScript is CASE-SENSITIVE:
// userName and username are two completely different names.
const userName = "Priya";
const greeting = `Welcome back, ${userName}!`;

console.log(greeting);
