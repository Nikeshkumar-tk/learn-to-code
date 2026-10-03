// Solution 16.1
import { readFile } from "node:fs/promises";
import path from "node:path";

const articlePath = path.join(import.meta.dirname, "..", "sample-data", "article.txt");

async function fileStats(filePath) {
  const text = await readFile(filePath, "utf8");
  const lines = text.replace(/\n$/, "").split("\n"); // drop ONE trailing newline, then split
  const nonEmpty = lines.filter((line) => line.trim() !== "");
  const words = text.trim().split(/\s+/);
  const longestLine = lines.reduce((longest, line) => (line.length > longest.length ? line : longest), "");
  return { lines: lines.length, nonEmptyLines: nonEmpty.length, words: words.length, longestLine };
}

console.log(await fileStats(articlePath));
