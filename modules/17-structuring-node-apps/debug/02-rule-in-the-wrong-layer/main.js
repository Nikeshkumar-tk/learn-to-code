// @entry
// Debug 17.2 — A negative expense got in
// Run:  node debug/02-rule-in-the-wrong-layer/main.js
// Expected:
//   Added Coffee
//   Error: amount must be positive
//   Bank import rejected "Refund": Amount must be a positive number
//   Total: 3.5
//
// Two "interfaces" add expenses: the CLI and a bank import. Only one of them is safe.
import { addFromCli } from "./cli.js";
import { addExpense, total } from "./service.js";

console.log(addFromCli("Coffee", "3.5"));
console.log(addFromCli("Oops", "-10"));

// A second interface added later by a teammate — it calls the service directly:
const bankRows = [{ description: "Refund", amount: -40 }];
for (const row of bankRows) {
  try {
    addExpense(row.description, row.amount);
  } catch (error) {
    console.log(`Bank import rejected "${row.description}": ${error.message}`);
  }
}

console.log("Total:", total());
