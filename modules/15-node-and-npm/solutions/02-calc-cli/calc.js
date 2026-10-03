// Solution 15.2
const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  },
};

function calculate(args) {
  if (args.length !== 3) throw new Error("Usage: calc <add|sub|mul|div> <a> <b>");
  const [op, aText, bText] = args;
  const operation = operations[op];
  if (!operation) throw new Error(`Unknown operation: ${op}`);
  const a = Number(aText);
  const b = Number(bText);
  if (Number.isNaN(a) || Number.isNaN(b)) throw new Error("Both operands must be numbers");
  return operation(a, b);
}

// main: the boundary where errors become messages + exit codes
try {
  console.log(calculate(process.argv.slice(2)));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
