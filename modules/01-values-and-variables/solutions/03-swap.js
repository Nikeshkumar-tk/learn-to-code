// Solution 01.3
let cupA = "coffee";
let cupB = "tea";

const spareCup = cupA; // pour A into the spare cup  (spare = "coffee")
cupA = cupB;           // pour B into A              (A = "tea")
cupB = spareCup;       // pour the spare into B      (B = "coffee")

console.log(cupA, cupB);

// Bonus: after Module 06 you'll understand this one-line shortcut:
//   [cupA, cupB] = [cupB, cupA];
