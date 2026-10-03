// Project self-test (for maintainers): runs each milestone's checks against its reference solution.
//
//   npm run verify:project
//
// For milestone N it copies project/solutions/mN plus the check scripts into a temporary folder
// inside project/my-task-api (so `express` resolves from my-task-api/node_modules), runs
// checks/mN.js there, and expects zero failures. Milestones 7-8 need Express installed in
// project/my-task-api (npm install express) and are skipped otherwise.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const projectDir = path.join(root, "project");
const workDir = path.join(projectDir, "my-task-api");
const tempRoot = path.join(workDir, ".verify");
const expressInstalled = fs.existsSync(path.join(workDir, "node_modules", "express"));

let failures = 0;
for (let n = 1; n <= 8; n++) {
  if (n >= 7 && !expressInstalled) {
    console.log(`m${n}: skipped (run "npm install express" in project/my-task-api first)`);
    continue;
  }
  const temp = path.join(tempRoot, `m${n}`);
  fs.rmSync(temp, { recursive: true, force: true });
  fs.cpSync(path.join(projectDir, "solutions", `m${n}`), temp, { recursive: true });
  fs.cpSync(path.join(workDir, "checks"), path.join(temp, "checks"), { recursive: true });

  const result = spawnSync(process.execPath, [path.join("checks", `m${n}.js`)], { cwd: temp, encoding: "utf8", timeout: 60000 });
  const output = (result.stdout ?? "") + (result.stderr ?? "");
  const summary = output.match(/(\d+) passed, (\d+) failed/);
  const ok = result.status === 0 && summary && summary[2] === "0";
  console.log(`m${n}: ${ok ? "✅" : "❌"} ${summary ? summary[0] : "(no summary)"}`);
  if (!ok) {
    failures++;
    console.log(output.split("\n").filter((line) => line.includes("❌") || line.includes("Error")).slice(0, 15).join("\n"));
  }
}

fs.rmSync(tempRoot, { recursive: true, force: true });
process.exitCode = failures ? 1 : 0;
