// Run with extra words after the file name:
//   node examples/02-process-argv.js hello 42 "two words"
//
// process.argv is an ARRAY of strings:
//   [0] the path to the node program
//   [1] the path to this script
//   [2...] whatever YOU typed after the file name

console.log(process.argv);

const args = process.argv.slice(2);    // just the user's arguments
console.log("Your arguments:", args);
console.log("How many:", args.length);

// ⚠️ Everything arrives as a STRING, even numbers:
if (args[1] !== undefined) {
  console.log(`args[1] is ${JSON.stringify(args[1])}, typeof ${typeof args[1]}`);
}
