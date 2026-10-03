// @entry
import { addFromCli } from "./cli.js";
import { addExpense, total } from "./service.js";

console.log(addFromCli("Coffee", "3.5"));
console.log(addFromCli("Oops", "-10"));

const bankRows = [{ description: "Refund", amount: -40 }];
for (const row of bankRows) {
  try {
    addExpense(row.description, row.amount);
  } catch (error) {
    console.log(`Bank import rejected "${row.description}": ${error.message}`);
  }
}

console.log("Total:", total());
