import { spawnSync } from "node:child_process";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
function calc(...args) {
  const result = spawnSync(process.execPath, ["calc.js", ...args], { cwd: import.meta.dirname, encoding: "utf8" });
  return { out: result.stdout.trim(), err: result.stderr.trim(), code: result.status };
}

check("add", calc("add", "2", "3"), { out: "5", err: "", code: 0 });
check("sub", calc("sub", "10", "4").out, "6");
check("mul", calc("mul", "3", "4").out, "12");
check("div", calc("div", "9", "2").out, "4.5");
check("usage", calc("add", "1"), { out: "", err: "Usage: calc <add|sub|mul|div> <a> <b>", code: 1 });
check("unknown op", calc("pow", "2", "3"), { out: "", err: "Unknown operation: pow", code: 1 });
check("not numbers", calc("add", "two", "3"), { out: "", err: "Both operands must be numbers", code: 1 });
check("divide by zero", calc("div", "1", "0"), { out: "", err: "Cannot divide by zero", code: 1 });
