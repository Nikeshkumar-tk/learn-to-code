// Solution 16.4
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const logDir = path.join(import.meta.dirname, "..", "sample-data", "logs");

async function readLogFiles(logDir) {
  const names = (await readdir(logDir)).filter((name) => path.extname(name) === ".log").sort();
  const files = [];
  for (const name of names) {
    const text = await readFile(path.join(logDir, name), "utf8");
    files.push({ name, lines: text.split("\n") });
  }
  return files;
}

async function countErrors(logDir) {
  const counts = {};
  for (const file of await readLogFiles(logDir)) {
    counts[file.name] = file.lines.filter((line) => line.includes(" ERROR ")).length;
  }
  return counts;
}

async function errorReport(logDir) {
  const report = [];
  for (const file of await readLogFiles(logDir)) {
    for (const line of file.lines) {
      const index = line.indexOf(" ERROR ");
      if (index !== -1) {
        report.push(`${file.name}: ${line.slice(index + " ERROR ".length).trim()}`);
      }
    }
  }
  return report;
}

console.log(await countErrors(logDir));
