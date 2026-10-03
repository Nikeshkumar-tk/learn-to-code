// Solution 04.4
// A while loop fits: we don't know how many months it will take.
let balance = 1000;
const monthlyDeposit = 250;
const goal = 5000;
let months = 0;

while (balance < goal) {
  balance += balance * 0.01;
  balance += monthlyDeposit;
  months++;
  console.log(`Month ${months}: $${balance.toFixed(2)}`);
}

console.log(`Goal reached after ${months} months.`);
