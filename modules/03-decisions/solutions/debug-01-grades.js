// Fixed. else-if chains stop at the FIRST true condition.
// 95 >= 60 is true, so everything 60+ got "D" and the other branches were unreachable.
// Fix: check the most specific (highest) threshold first.
const score = 95;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`${score} -> ${grade}`);
