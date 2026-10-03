// Anatomy of a for loop:
//
//   for (START; KEEP GOING WHILE...; AFTER EACH ROUND) { BODY }
//
//   1. START runs once:                let i = 0
//   2. Check the condition:            i < 5   -> if false, the loop ends
//   3. Run the BODY
//   4. Run AFTER EACH ROUND:           i++
//   5. Go back to step 2

for (let i = 0; i < 5; i++) {
  console.log("i is", i);
}

console.log("--- counting down");
for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.log("--- counting in steps of 10");
for (let i = 0; i <= 50; i += 10) {
  console.log(i);
}
