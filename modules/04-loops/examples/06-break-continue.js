// break    -> leave the loop completely, right now
// continue -> skip the rest of THIS round, and move on to the next one

const numbers = [4, 8, -1, 15, 16, 23];

console.log("--- continue: skip negatives");
for (const n of numbers) {
  if (n < 0) {
    continue;
  }
  console.log(n);
}

console.log("--- break: stop at the first number above 10");
for (const n of numbers) {
  if (n > 10) {
    console.log("Found", n, "- stopping");
    break;
  }
  console.log("checked", n);
}
