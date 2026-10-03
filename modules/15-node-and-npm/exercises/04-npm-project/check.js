import fs from "node:fs";
import path from "node:path";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const pkgPath = path.join(import.meta.dirname, "package.json");
const exists = fs.existsSync(pkgPath);
check("package.json exists", exists, true);
if (exists) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  check('"type" is "module"', pkg.type, "module");
  check("start script", pkg.scripts?.start, "node index.js");
  check("dev script uses --watch", pkg.scripts?.dev?.includes("--watch"), true);
  check("picocolors is a dependency", typeof pkg.dependencies?.picocolors, "string");
  const index = fs.readFileSync(path.join(import.meta.dirname, "index.js"), "utf8");
  check("index.js imports picocolors", index.includes('from "picocolors"'), true);
}
