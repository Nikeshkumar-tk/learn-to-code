// An if condition doesn't have to be a boolean.
// JavaScript converts the value: "falsy" values act like false, everything else like true.
//
// The ONLY falsy values:  false, 0, "" (empty string), null, undefined, NaN
// Everything else is truthy — including "0", "false", " " and [] (empty list)!

const values = [false, 0, "", null, undefined, NaN, true, 1, -5, "hello", "0", "false", " "];

for (const value of values) {          // (a loop — next module! It just repeats for each value)
  if (value) {
    console.log(JSON.stringify(value), "is truthy");
  } else {
    console.log(JSON.stringify(value), "is falsy");
  }
}

// Common real-world use: "was anything typed?"
const searchText = "";
if (searchText) {
  console.log("Searching for", searchText);
} else {
  console.log("Please type something to search");
}
