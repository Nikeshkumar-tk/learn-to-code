// Debug 15.1 — Greeting the wrong thing
// Run:  node debug/01-wrong-argument.js Ana
// Expected: Hello, Ana!

const name = process.argv[0];
console.log(`Hello, ${name}!`);
