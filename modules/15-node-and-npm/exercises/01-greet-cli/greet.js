// Exercise 15.1 — A greeting command-line tool
// Run:   node exercises/01-greet-cli/greet.js Ana --times=2 --shout
// Check: node exercises/01-greet-cli/check.js
//
// Requirements:
//   - The FIRST argument that doesn't start with "--" is the name.
//   - If there is no name: print "Usage: greet <name> [--times=N] [--shout]" with console.error
//     and set process.exitCode = 1.
//   - Otherwise print "Hello, <name>!" once per --times (default 1).
//   - --shout makes the greeting uppercase.
//   - If --times isn't a positive whole number, print "--times must be a positive whole number"
//     with console.error and set process.exitCode = 1.
//
// Tip: write a parseArgs(args) function that returns { name, times, shout }, then use it.

// Write your code below.
