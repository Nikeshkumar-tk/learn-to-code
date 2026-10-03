// Fixed. Output was 180 — operator precedence. Division happens BEFORE addition,
// so only score3 was divided: 70 + 80 + (90 / 3) = 180.
// Parentheses force the sum to happen first.
const score1 = 70;
const score2 = 80;
const score3 = 90;

const average = (score1 + score2 + score3) / 3;
console.log("Average:", average);
