// Runs greet.js with different arguments and checks its output.
import { spawnSync } from "node:child_process";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
function runGreet(...args) {
  const result = spawnSync(process.execPath, ["greet.js", ...args], { cwd: import.meta.dirname, encoding: "utf8" });
  return { out: result.stdout.trim(), err: result.stderr.trim(), code: result.status };
}

check("basic", runGreet("Ana"), { out: "Hello, Ana!", err: "", code: 0 });
check("times", runGreet("Ana", "--times=2").out, "Hello, Ana!\nHello, Ana!");
check("shout", runGreet("--shout", "Ben").out, "HELLO, BEN!");
check("no name -> usage on stderr + exit code 1", runGreet(), { out: "", err: "Usage: greet <name> [--times=N] [--shout]", code: 1 });
check("bad --times", runGreet("Ana", "--times=zero"), { out: "", err: "--times must be a positive whole number", code: 1 });
