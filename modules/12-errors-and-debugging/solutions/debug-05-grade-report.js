// Fixed — three bugs:
//
// Bug 1 (type): scores are STRINGS ("80"). total += "80" does string concatenation:
//   0 + "90" -> "090" ... Hypothesis test: console.log(typeof numbers[0]) -> "string".
//   Fix: convert at the boundary, when data enters the program (Number).
//
// Bug 2 (off-by-one): the loop started at i = 1, skipping the first score.
//   Fix: start at 0 (or use for...of / reduce, which can't get this wrong).
//
// Bug 3 (logic): the "top student" loop always assigned students[1] instead of students[i].
//   Fix: use the index. Even better, track the index of the best average directly.
//
// How you might have found them: print `average(["80","90","85"])` on its own first.
// Fix that, re-run, compare to the expected output again, and repeat. One bug at a time!
const students = [
  { name: "Ana", scores: ["80", "90", "85"] },
  { name: "Ben", scores: ["95", "89", "92"] },
  { name: "Cy", scores: ["50", "60", "64"] },
];

function average(numbers) {
  let total = 0;
  for (const n of numbers) {
    total += Number(n);
  }
  return total / numbers.length;
}

function letterGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  return "F";
}

const averages = [];
for (const student of students) {
  const avg = average(student.scores);
  averages.push(avg);
  console.log(`${student.name}: average ${Math.round(avg)}, grade ${letterGrade(avg)}`);
}

const classAverage = average(averages);
console.log("Class average:", Math.round(classAverage * 100) / 100);

let topIndex = 0;
for (let i = 0; i < students.length; i++) {
  if (averages[i] > averages[topIndex]) topIndex = i;
}
console.log("Top student:", students[topIndex].name);
