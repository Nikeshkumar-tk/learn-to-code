// else if lets you check several conditions IN ORDER.
// JavaScript stops at the FIRST condition that is true and skips the rest.

const score = 82;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log(`Score ${score} -> grade ${grade}`);
// 82 is also >= 70, but we never get there: the "B" branch already matched.
