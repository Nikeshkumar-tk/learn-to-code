// Debug 04.2 — Off by one
// Expected: "Sum of 1 to 10 is 55"

let sum = 0;

for (let i = 1; i < 10; i++) {
  sum += i;
}

console.log(`Sum of 1 to 10 is ${sum}`);
