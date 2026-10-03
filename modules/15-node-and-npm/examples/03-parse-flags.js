// Command-line tools usually accept FLAGS like --name=Ana or --shout.
// Try:
//   node examples/03-parse-flags.js --name=Ana --times=3 --shout
//   node examples/03-parse-flags.js --name=Ben

function parseFlags(args) {
  const flags = {};
  for (const arg of args) {
    if (!arg.startsWith("--")) continue;          // ignore anything that isn't a flag
    const [key, value] = arg.slice(2).split("="); // "--times=3" -> ["times", "3"]
    flags[key] = value ?? true;                   // "--shout" has no value -> true
  }
  return flags;
}

const flags = parseFlags(process.argv.slice(2));
console.log("Parsed flags:", flags);

const name = flags.name ?? "stranger";
const times = Number(flags.times ?? 1);
let greeting = `Hello, ${name}!`;
if (flags.shout) greeting = greeting.toUpperCase();

for (let i = 0; i < times; i++) {
  console.log(greeting);
}

// Node also has a built-in helper for this: import { parseArgs } from "node:util".
// Writing it yourself first means you know what such helpers do for you.
