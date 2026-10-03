// Checks your refactored src/ folder.
//   node exercises/01-refactor-inventory/check.js
import { spawnSync } from "node:child_process";
import { rm, readFile } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { existsSync } from "node:fs";

const requiredFiles = ["src/config.js", "src/errors.js", "src/repository.js", "src/service.js", "src/cli.js"];
const missingFiles = requiredFiles.filter((file) => !existsSync(path.join(import.meta.dirname, file)));
if (missingFiles.length > 0) {
  console.log("❌ These files don't exist yet:\n   " + missingFiles.join("\n   "));
  process.exit(1);
}

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
async function errorOf(promise) {
  try {
    await promise;
    return null;
  } catch (e) {
    return { name: e.name, message: e.message };
  }
}

// Point the app at a temporary file BEFORE importing it, so the real data isn't touched.
const tempFile = path.join(os.tmpdir(), `inventory-check-${Date.now()}.json`);
process.env.INVENTORY_FILE = tempFile;

const { config } = await import("./src/config.js");
const { loadItems } = await import("./src/repository.js");
const service = await import("./src/service.js");
const serviceSource = await readFile(path.join(import.meta.dirname, "src", "service.js"), "utf8");

check("config reads INVENTORY_FILE", config.dataFile, tempFile);
check("addStock creates", await service.addStock("pens", 10), { name: "pens", quantity: 10 });
check("addStock adds to existing", (await service.addStock("pens", 5)).quantity, 15);
await service.addStock("staplers", 2);
check("removeStock", (await service.removeStock("pens", 4)).quantity, 11);
check("saved to the file", await loadItems(), [{ name: "pens", quantity: 11 }, { name: "staplers", quantity: 2 }]);
check("lowStock(5)", (await service.lowStock(5)).map((i) => i.name), ["staplers"]);
check("bad quantity -> ValidationError", (await errorOf(service.addStock("pens", -1)))?.name, "ValidationError");
check("unknown item -> NotFoundError", (await errorOf(service.removeStock("glue", 1)))?.name, "NotFoundError");
check("too many -> ValidationError", await errorOf(service.removeStock("staplers", 5)), { name: "ValidationError", message: "Not enough staplers in stock" });
check("service has no console.log / process.*", /console\.|process\./.test(serviceSource), false);

const cli = (...args) =>
  spawnSync(process.execPath, [path.join("src", "cli.js"), ...args], { cwd: import.meta.dirname, encoding: "utf8", env: { ...process.env, INVENTORY_FILE: tempFile } });
const ok = cli("add", "glue", "3");
check("cli add exits with 0", ok.status, 0);
const bad = cli("remove", "nothing", "1");
check("cli error exits with 1", bad.status, 1);

await rm(tempFile, { force: true });
