// Solution 15.1
function parseArgs(args) {
  const result = { name: undefined, times: 1, shout: false };
  for (const arg of args) {
    if (arg === "--shout") {
      result.shout = true;
    } else if (arg.startsWith("--times=")) {
      result.times = Number(arg.slice("--times=".length));
    } else if (!arg.startsWith("--") && result.name === undefined) {
      result.name = arg;
    }
  }
  return result;
}

const { name, times, shout } = parseArgs(process.argv.slice(2));

if (!name) {
  console.error("Usage: greet <name> [--times=N] [--shout]");
  process.exitCode = 1;
} else if (!Number.isInteger(times) || times < 1) {
  console.error("--times must be a positive whole number");
  process.exitCode = 1;
} else {
  const greeting = `Hello, ${name}!`;
  for (let i = 0; i < times; i++) {
    console.log(shout ? greeting.toUpperCase() : greeting);
  }
}
