// User input is messy. Cleaning it up ("normalising") is a daily job.
const rawInput = "   Hello World  ";

console.log(`[${rawInput.trim()}]`);       // remove spaces at both ends
console.log(`[${rawInput.trimStart()}]`);
console.log(`[${rawInput.trimEnd()}]`);

console.log("MiXeD".toLowerCase());
console.log("MiXeD".toUpperCase());

// replace changes the FIRST match only; replaceAll changes every match.
const sentence = "red apple, red car, red door";
console.log(sentence.replace("red", "blue"));
console.log(sentence.replaceAll("red", "blue"));

// Methods return strings, so you can CHAIN them, left to right:
const tag = "  Node JS  ".trim().toLowerCase().replaceAll(" ", "-");
console.log(tag); // "node-js"
