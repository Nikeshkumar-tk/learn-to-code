// if (condition) { ... } runs the block ONLY when the condition is true.
// else { ... } runs when it is false. Exactly one of the two blocks runs.

const temperature = 31;

if (temperature > 30) {
  console.log("It's hot. Drink water.");
} else {
  console.log("It's not that hot.");
}

console.log("This line always runs — it's outside the if/else.");
