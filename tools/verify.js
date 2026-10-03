// Course self-test (for maintainers — and curious learners).
//
//   npm run verify            -> check every module
//   npm run verify -- 05      -> check only modules whose folder starts with "05"
//
// What it does:
//   1. Runs every example, debug and solution file:
//        - every .js/.cjs file directly inside examples/, debug/, solutions/
//        - files in sub-folders only if they contain the marker "@entry"
//      Files containing "@expect-error" must crash; everything else must exit cleanly.
//      Files containing "@skip-verify" are skipped (servers, programs that need input).
//   2. Single-file exercises: glues the exercise's "Checks" section onto the matching
//      solution and runs it. Every check must print ✅.
//   3. Folder exercises (exercises/<name>/check.js): runs that check.js inside
//      solutions/<name>/. Every check must print ✅.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const modulesDir = path.join(root, "modules");
const filter = process.argv[2] ?? "";

let failures = 0;
let passes = 0;

function run(file, cwd) {
  return spawnSync(process.execPath, [file], { cwd, encoding: "utf8", timeout: 15000 });
}

function report(ok, label, detail = "") {
  if (ok) {
    passes++;
  } else {
    failures++;
    console.log(`❌ ${label}`);
    if (detail) console.log(detail.split("\n").slice(0, 14).map((l) => "     " + l).join("\n"));
  }
}

const isScript = (f) => (f.endsWith(".js") || f.endsWith(".cjs")) && !f.startsWith(".verify-");

function runnableFiles(dir, nested = false) {
  if (!fs.existsSync(dir)) return [];
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules") found.push(...runnableFiles(full, true));
    } else if (isScript(entry.name)) {
      if (!nested || fs.readFileSync(full, "utf8").includes("@entry")) found.push(full);
    }
  }
  return found;
}

function checksPassed(result) {
  const out = result.stdout ?? "";
  return result.status === 0 && out.includes("✅") && !out.includes("❌");
}

for (const mod of fs.readdirSync(modulesDir).sort()) {
  if (!mod.startsWith(filter)) continue;
  const modDir = path.join(modulesDir, mod);
  if (!fs.statSync(modDir).isDirectory()) continue;
  console.log(`\n▶ ${mod}`);

  if (fs.existsSync(path.join(modDir, "package.json")) && !fs.existsSync(path.join(modDir, "node_modules"))) {
    console.log(`  (skipped — run "npm install" in modules/${mod} first)`);
    continue;
  }

  // 1. Plain runs
  for (const sub of ["examples", "debug", "solutions"]) {
    for (const file of runnableFiles(path.join(modDir, sub))) {
      const src = fs.readFileSync(file, "utf8");
      if (src.includes("@skip-verify")) continue;
      const expectError = src.includes("@expect-error");
      const result = run(file, modDir);
      const crashed = result.status !== 0;
      const rel = path.relative(modDir, file);
      if (expectError) {
        report(crashed, `${rel} was expected to crash but exited cleanly`);
      } else {
        report(!crashed, `${rel} crashed`, result.stderr || result.error?.message);
      }
    }
  }

  const exercisesDir = path.join(modDir, "exercises");
  if (!fs.existsSync(exercisesDir)) continue;

  for (const entry of fs.readdirSync(exercisesDir, { withFileTypes: true })) {
    // 2. Single-file exercises
    if (entry.isFile() && isScript(entry.name)) {
      const exercise = path.join(exercisesDir, entry.name);
      const solution = path.join(modDir, "solutions", entry.name);
      const exSrc = fs.readFileSync(exercise, "utf8");
      const marker = exSrc.search(/^\/\/ ─+\n\/\/ Checks/m);
      if (marker === -1 || !fs.existsSync(solution)) continue;
      const solSrc = fs.readFileSync(solution, "utf8");
      if (solSrc.includes("@skip-verify")) continue;
      const combined = path.join(modDir, "solutions", `.verify-${entry.name}`);
      fs.writeFileSync(combined, solSrc + "\n" + exSrc.slice(marker));
      const result = run(combined, modDir);
      fs.rmSync(combined);
      report(checksPassed(result), `solutions/${entry.name} does not pass the exercise checks`, (result.stdout ?? "") + (result.stderr ?? ""));
    }

    // 3. Folder exercises with a check.js
    if (entry.isDirectory()) {
      const check = path.join(exercisesDir, entry.name, "check.js");
      const solutionDir = path.join(modDir, "solutions", entry.name);
      if (!fs.existsSync(check) || !fs.existsSync(solutionDir)) continue;
      const copy = path.join(solutionDir, ".verify-check.js");
      fs.copyFileSync(check, copy);
      const result = run(copy, solutionDir);
      fs.rmSync(copy);
      report(checksPassed(result), `solutions/${entry.name}/ does not pass exercises/${entry.name}/check.js`, (result.stdout ?? "") + (result.stderr ?? ""));
    }
  }
}

console.log(`\n${passes} passed, ${failures} failed`);
process.exitCode = failures ? 1 : 0;
