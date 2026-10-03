import { addExpense, removeExpense, listExpenses, getSummary, monthlyReport } from "./services/expense-service.js";
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
    case "report": {
      const report = await monthlyReport(args[0]);
      console.log(`Report for ${report.month}`);
      for (const [category, amount] of Object.entries(report.byCategory)) {
        console.log(`${category.padEnd(10)} ${formatMoney(amount).padStart(10)}`);
      }
      console.log(`${"Total".padEnd(10)} ${formatMoney(report.total).padStart(10)}`);
      break;
    }
    default:
      throw new ValidationError(`Unknown command "${command}". Use: add | remove | list | report`);
  }
}

try {
  await main();
} catch (error) {
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    console.error("Error:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
  process.exitCode = 1;
}
