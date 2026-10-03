// node exercises/02-add-a-feature/check.js
import { rm, writeFile } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

const requiredFiles = ["src/services/expense-service.js", "src/index.js"];
const missingFiles = requiredFiles.filter((file) => !existsSync(path.join(import.meta.dirname, file)));
if (missingFiles.length > 0) {
  console.log("❌ These files don't exist yet (did you copy the stage-4 app? See README.md):\n   " + missingFiles.join("\n   "));
  process.exit(1);
}

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}

const tempFile = path.join(os.tmpdir(), `expenses-check-${Date.now()}.json`);
process.env.EXPENSES_FILE = tempFile;
await writeFile(
  tempFile,
  JSON.stringify([
    { id: 1, description: "Coffee", amount: 3.5, category: "food", date: "2026-03-02" },
    { id: 2, description: "Train", amount: 12, category: "transport", date: "2026-03-05" },
    { id: 3, description: "Lunch", amount: 12, category: "food", date: "2026-03-20" },
    { id: 4, description: "Cinema", amount: 9, category: "fun", date: "2026-04-01" },
  ]),
);

const { monthlyReport } = await import("./src/services/expense-service.js");
check("monthlyReport", await monthlyReport("2026-03"), { month: "2026-03", byCategory: { food: 15.5, transport: 12 }, total: 27.5 });
check("empty month", await monthlyReport("2025-01"), { month: "2025-01", byCategory: {}, total: 0 });
let error = null;
try {
  await monthlyReport("March");
} catch (e) {
  error = `${e.name}: ${e.message}`;
}
check("invalid month", error, "ValidationError: Month must look like YYYY-MM");

const run = spawnSync(process.execPath, [path.join("src", "index.js"), "report", "2026-03"], {
  cwd: import.meta.dirname,
  encoding: "utf8",
  env: { ...process.env, EXPENSES_FILE: tempFile },
});
check("cli prints the total line", run.stdout.includes("Total") && run.stdout.includes("$27.50"), true);
await rm(tempFile, { force: true });
