// Debug 06.3 — Reading the top scores ruins the scoreboard
// topThree should return the 3 highest scores, WITHOUT changing the original.
// Expected:
//   Top 3: [ 98, 91, 87 ]
//   All scores (original order): [ 87, 98, 45, 91, 60 ]

function topThree(scores) {
  scores.sort((a, b) => b - a); // sorts highest first (you'll learn sort properly in Module 10)
  return scores.slice(0, 3);
}

const allScores = [87, 98, 45, 91, 60];
console.log("Top 3:", topThree(allScores));
console.log("All scores (original order):", allScores);
