// @entry
// STAGE 4 — a small application. This is the ENTRY POINT: it handles the INTERFACE
// (reading argv, printing output, exit codes) and delegates everything else.
//
//   node examples/stage-4-app/src/index.js add Coffee 3.5 food
//   node examples/stage-4-app/src/index.js add "Train ticket" 12 transport
//   node examples/stage-4-app/src/index.js list
//   node examples/stage-4-app/src/index.js list food
//   node examples/stage-4-app/src/index.js remove 1
//   node examples/stage-4-app/src/index.js add Snack -2
import { addExpense, removeExpense, listExpenses, getSummary } from "./services/expense-service.js";
import { ValidationError, NotFoundError } from "./errors.js";
import { formatMoney } from "./utils/money.js";

const [command = "list", ...args] = process.argv.slice(2);

async function main() {
  switch (command) {
    case "add": {
      const [description, amountText, category] = args;
      const expense = await addExpense({ description, amount: Number(amountText), category });
      console.log(`Added #${expense.id}: ${expense.description} ${formatMoney(expense.amount)}`);
      break;
    }
    case "remove":
      await removeExpense(Number(args[0]));
      console.log(`Removed #${args[0]}`);
      break;
    case "list": {
      const expenses = await listExpenses({ category: args[0] });
      if (expenses.length === 0) console.log("No expenses yet.");
      for (const e of expenses) {
        console.log(`#${e.id} ${e.date} ${e.description.padEnd(15)} ${formatMoney(e.amount).padStart(9)} (${e.category})`);
      }
      const { count, total } = await getSummary();
      console.log(`${count} expense(s), total ${formatMoney(total)}`);
      break;
    }
    default:
      throw new ValidationError(`Unknown command "${command}". Use: add | remove | list`);
  }
}

try {
  await main();
} catch (error) {
  // The entry point decides how errors look to the USER.
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    console.error("Error:", error.message);
  } else {
    console.error("Unexpected error:", error); // a bug — show everything
  }
  process.exitCode = 1;
}
