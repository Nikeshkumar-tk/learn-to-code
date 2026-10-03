// Fixed. `points + 25` calculates 125... and then throws the result away.
// An expression on its own line does nothing unless you STORE the result.
let points = 100;
points += 25;
points += 10;

console.log("Points:", points);
