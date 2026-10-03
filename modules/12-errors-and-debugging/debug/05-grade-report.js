// Debug 12.5 — A realistic bug hunt: THREE bugs, no crashes.
// Use the full debugging process from the README and write your hypotheses as comments.
//
// Expected output:
//   Ana: average 85, grade B
//   Ben: average 92, grade A
//   Cy: average 58, grade F
//   Class average: 78.33
//   Top student: Ben

const students = [
  { name: "Ana", scores: ["80", "90", "85"] },   // scores arrived from a CSV file, as text
  { name: "Ben", scores: ["95", "89", "92"] },
  { name: "Cy", scores: ["50", "60", "64"] },
];

function average(numbers) {
  let total = 0;
  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i];
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

let top = students[0];
for (let i = 0; i < students.length; i++) {
  if (averages[i] > averages[students.indexOf(top)]) top = students[1];
}
console.log("Top student:", top.name);
