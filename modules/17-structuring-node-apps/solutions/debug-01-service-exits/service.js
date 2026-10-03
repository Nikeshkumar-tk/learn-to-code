// Fixed. A SERVICE must not decide how the program reacts (printing, exiting).
// process.exit(1) killed the whole import at the first bad line; the caller's try/catch
// never got a chance. Throw an error instead and let the caller (the boundary) decide:
// the CLI might exit, the importer skips the line, an API returns 400.
export function parseExpense(line) {
  const [description, amountText] = line.split(",");
  const amount = Number(amountText);
  if (!(amount > 0)) {
    throw new Error("Amount must be a positive number");
  }
  return { description: description.trim(), amount };
}
