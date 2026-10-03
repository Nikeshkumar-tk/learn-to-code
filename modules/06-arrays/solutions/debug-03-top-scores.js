// Fixed. sort() MUTATES the array it's called on. The function received a reference
// to the caller's array and reordered it as a side effect.
// Fix: sort a copy. (Newer Node versions also have scores.toSorted(...), which returns a new array.)
function topThree(scores) {
  const sorted = [...scores].sort((a, b) => b - a);
  return sorted.slice(0, 3);
}

const allScores = [87, 98, 45, 91, 60];
console.log("Top 3:", topThree(allScores));
console.log("All scores (original order):", allScores);
