// The service validates and "handles" errors itself.
export function parseExpense(line) {
  const [description, amountText] = line.split(",");
  const amount = Number(amountText);
  if (!(amount > 0)) {
    console.log(`Invalid amount in line: "${line}"`);
    process.exit(1);
  }
  return { description: description.trim(), amount };
}
