// Debug 03.1 — Everyone gets a D
// Expected:  95 -> A,   85 -> B,   65 -> D
// Change `score` to each value and run. What do you get?

const score = 95;
let grade;

if (score >= 60) {
  grade = "D";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 90) {
  grade = "A";
} else {
  grade = "F";
}

console.log(`${score} -> ${grade}`);
