// split(separator) breaks a string into an ARRAY.
// join(separator) glues an array back into a STRING.

const csvLine = "Ada,Lovelace,1815,London";
const parts = csvLine.split(",");
console.log(parts);              // [ 'Ada', 'Lovelace', '1815', 'London' ]
console.log(parts[2]);           // "1815" — still a string!

const words = "learning node one step at a time".split(" ");
console.log(words.length, "words");

console.log(words.join("-"));    // "learning-node-one-step-at-a-time"
console.log(words.join(" | "));

const letters = "abc".split(""); // split("") -> individual characters
console.log(letters);

// Lines of a text file are separated by "\n":
const fileContent = "first line\nsecond line\nthird line";
console.log(fileContent.split("\n"));
