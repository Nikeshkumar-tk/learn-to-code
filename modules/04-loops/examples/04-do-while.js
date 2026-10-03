// do { body } while (condition) — like while, but the body ALWAYS runs at least once,
// because the condition is checked at the END of each round.
// You'll rarely need it; recognise it when you see it.

let attempts = 0;

do {
  attempts++;
  console.log("Attempt", attempts);
} while (attempts < 3);

// Compare: this while loop never runs its body, because the condition is false from the start.
let n = 10;
while (n < 3) {
  console.log("never printed");
}
console.log("done");
