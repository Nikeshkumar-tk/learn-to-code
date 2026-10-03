// A string is a sequence of characters. Like arrays, they have a length and indexes.
const word = "Node.js";

console.log(word.length);              // 7
console.log(word[0]);                  // "N"
console.log(word[word.length - 1]);    // "s"
console.log(word.at(-1));              // "s"

for (const char of word) {
  process.stdout.write(char + " ");    // write without a newline (just for display)
}
console.log();

// ⚠️ Strings are IMMUTABLE: you can never change a string in place.
let name = "jane";
try {
  name[0] = "J";            // not allowed: strings can't be changed in place
} catch (error) {
  console.log("Error:", error.message);
}
console.log(name);          // still "jane"

// String methods never change the original — they RETURN A NEW string.
name.toUpperCase();         // result thrown away!
console.log(name);          // still "jane"
name = name.toUpperCase();  // keep the result by reassigning
console.log(name);          // "JANE"
