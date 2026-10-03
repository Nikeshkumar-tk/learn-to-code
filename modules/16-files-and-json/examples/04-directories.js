// Working with folders: list contents, get information about files.
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const dataDir = path.join(import.meta.dirname, "..", "sample-data");

const entries = await readdir(dataDir, { withFileTypes: true });
for (const entry of entries) {
  const fullPath = path.join(dataDir, entry.name);
  if (entry.isDirectory()) {
    console.log(`📁 ${entry.name}/`);
  } else {
    const info = await stat(fullPath);              // size, dates, etc.
    console.log(`📄 ${entry.name.padEnd(14)} ${String(info.size).padStart(5)} bytes`);
  }
}

// Only the .log files in the logs folder:
const logFiles = (await readdir(path.join(dataDir, "logs"))).filter((name) => path.extname(name) === ".log");
console.log("Log files:", logFiles);
