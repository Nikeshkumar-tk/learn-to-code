// @entry
// STAGE 1 — a script. Everything inline, top to bottom. Totally fine for a one-off job!
//   node examples/stage-1-script/expenses.js
//
// Problems you'd hit as it grows:
//  - the data disappears when the program ends
//  - you can't reuse "add an expense" anywhere else
//  - rules (amount must be positive) are tangled with printing
//  - to test the total calculation, you have to run the whole thing

const expenses = [];

expenses.push({ description: "Coffee", amount: 3.5, category: "food" });
expenses.push({ description: "Train ticket", amount: 12, category: "transport" });
if (-5 > 0) {
  expenses.push({ description: "Refund?", amount: -5, category: "other" });
} else {
  console.log("Skipped invalid expense");
}

let total = 0;
for (const e of expenses) {
  total += e.amount;
  console.log(`${e.description.padEnd(15)} $${e.amount.toFixed(2)}  (${e.category})`);
}
console.log(`Total: $${total.toFixed(2)}`);
