// Fixed. `i < 10` stops BEFORE 10, so 10 was never added (sum was 45).
// "Off-by-one" errors are among the most common bugs in programming.
// Check your loop's first and last values: print i inside the loop if unsure.
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(`Sum of 1 to 10 is ${sum}`);
