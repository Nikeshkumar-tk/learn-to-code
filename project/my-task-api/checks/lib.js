// Shared helpers for the milestone checks. You don't need to edit (or fully understand) this file —
// but by Milestone 6 you'll recognise everything in it.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawnSync } from "node:child_process";

export const projectRoot = path.join(import.meta.dirname, "..");

let passed = 0;
let failed = 0;

// Compare by VALUE, ignoring the order of object keys.
function normalise(value) {
  if (Array.isArray(value)) return value.map(normalise);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, normalise(value[key])]));
  }
  return value;
}

export function check(label, actual, expected) {
  const ok = JSON.stringify(normalise(actual)) === JSON.stringify(normalise(expected));
  if (ok) passed++;
  else failed++;
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}

export function missing(name) {
  failed++;
  console.log(`❌ ${name} is not defined yet (or isn't exported)`);
}

// Runs a group of checks for one function. If the function doesn't exist yet, or crashes,
// that counts as ONE failure and the remaining groups still run.
export function group(name, exists, fn) {
  if (!exists) return missing(name);
  try {
    fn();
  } catch (error) {
    failed++;
    console.log(`❌ ${name} crashed: ${error.name}: ${error.message}`);
  }
}

export function section(title) {
  console.log(`\n── ${title} ──`);
}

export function errorOf(fn) {
  try {
    fn();
    return "(no error thrown)";
  } catch (error) {
    return { name: error.name, message: error.message };
  }
}

export async function asyncErrorOf(fn) {
  try {
    await fn();
    return "(no error thrown)";
  } catch (error) {
    return { name: error.name, message: error.message };
  }
}

export function summary(milestone) {
  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed === 0) {
    console.log(`🎉 Milestone ${milestone} complete! Tick it off in PROGRESS.md, then try an extension challenge.`);
  } else {
    console.log("Keep going — fix the first ❌ first. Read the expected vs received values carefully.");
  }
  process.exitCode = failed ? 1 : 0;
}

export function tempTasksFile() {
  return path.join(os.tmpdir(), `task-api-check-${process.pid}-${Date.now()}.json`);
}

export function fileExists(relativePath) {
  return fs.existsSync(path.join(projectRoot, relativePath));
}

export function isInstalled(packageName) {
  try {
    import.meta.resolve(packageName);
    return true;
  } catch {
    return false;
  }
}

export function readSource(relativePath) {
  const full = path.join(projectRoot, relativePath);
  return fs.existsSync(full) ? fs.readFileSync(full, "utf8") : "";
}

// For Milestones 1-3 (single file) and 4 (modules): build a temporary script out of
// `prelude` (your code, or imports of your modules) followed by the check files, and run it.
export function runSuites({ prelude, suites, milestone, env = {} }) {
  const checks = suites.map((name) => fs.readFileSync(path.join(import.meta.dirname, "suites", name), "utf8"));
  const script = [
    prelude,
    'import * as __lib from "./checks/lib.js";',
    ...checks.map((code) => `{\n${code}\n}`),
    `__lib.summary(${JSON.stringify(milestone)});`,
  ].join("\n");
  const tempFile = path.join(projectRoot, `.check-${milestone}.tmp.js`);
  fs.writeFileSync(tempFile, script);
  const result = spawnSync(process.execPath, [tempFile], { cwd: projectRoot, stdio: "inherit", env: { ...process.env, ...env } });
  fs.rmSync(tempFile, { force: true });
  if (result.status !== 0 && result.status !== 1) {
    console.log("\n(The check script crashed — read the error above. Line numbers refer to your code.)");
  }
  process.exitCode = result.status ?? 1;
}

export function taskManagerPrelude() {
  const file = path.join(projectRoot, "task-manager.js");
  if (!fs.existsSync(file)) {
    console.log("❌ task-manager.js not found in the project folder.");
    process.exit(1);
  }
  const source = fs.readFileSync(file, "utf8");
  const demoStart = source.indexOf("// ===== Demo");
  return demoStart === -1 ? source : source.slice(0, demoStart);
}
