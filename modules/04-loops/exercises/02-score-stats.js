// Exercise 04.2 — Score statistics
// Run:  node exercises/02-score-stats.js
//
// Use for...of loops (no Math.max, no array methods) to calculate:
//   total        -> sum of all scores
//   average      -> total divided by the number of scores (scores.length)
//   highest      -> the biggest score
//   passedCount  -> how many scores are 50 or more

const scores = [72, 45, 90, 38, 66, 81];

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("total", total, 392);
check("average", Math.round(average * 100) / 100, 65.33);
check("highest", highest, 90);
check("passedCount", passedCount, 4);
