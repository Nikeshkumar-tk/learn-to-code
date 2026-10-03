// Solution 04.2
const scores = [72, 45, 90, 38, 66, 81];

let total = 0;
let highest = scores[0];   // start from a REAL score, not 0 (what if all scores were negative?)
let passedCount = 0;

for (const score of scores) {
  total += score;
  if (score > highest) {
    highest = score;
  }
  if (score >= 50) {
    passedCount++;
  }
}

const average = total / scores.length;

console.log({ total, average, highest, passedCount });
