// A loop inside a loop: the inner loop runs COMPLETELY for each round of the outer loop.

for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += `${row * col}\t`;   // \t is a tab character
  }
  console.log(line);
}
// How many times does the inner body run in total? (3 rows x 3 cols = ?)
