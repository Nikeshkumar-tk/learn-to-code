// Solution 04.3
// The "both" case must be checked FIRST — otherwise 15 would match "divisible by 3" and stop.
let output = "";

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    output += "FizzBuzz\n";
  } else if (i % 3 === 0) {
    output += "Fizz\n";
  } else if (i % 5 === 0) {
    output += "Buzz\n";
  } else {
    output += `${i}\n`;
  }
}

console.log(output);
