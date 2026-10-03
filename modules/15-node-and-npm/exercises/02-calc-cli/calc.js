// Exercise 15.2 — A calculator CLI with proper errors and exit codes
// Run:   node exercises/02-calc-cli/calc.js add 2 3
// Check: node exercises/02-calc-cli/check.js
//
//   node calc.js add 2 3        -> prints 5
//   node calc.js sub 10 4       -> prints 6
//   node calc.js mul 3 4        -> prints 12
//   node calc.js div 9 2        -> prints 4.5
//
// Errors (print with console.error, set process.exitCode = 1, print nothing to stdout):
//   wrong number of arguments   -> "Usage: calc <add|sub|mul|div> <a> <b>"
//   unknown operation           -> "Unknown operation: <op>"
//   a or b not a number         -> "Both operands must be numbers"
//   division by zero            -> "Cannot divide by zero"
//
// Suggested design: a lookup table of operation functions (Module 09!), a function that
// THROWS errors for bad input (Module 12), and a small main section that catches them,
// prints the message, and sets the exit code.

// Write your code below.
