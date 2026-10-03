// Prints a summary of PROGRESS.md:  npm run progress
//
// It counts the ticked boxes in each section and lists everything you wrote after
// "Still fuzzy:". No scores, no rankings — just where you are and what to revisit.
import fs from "node:fs";
import path from "node:path";

const file = path.join(import.meta.dirname, "..", "PROGRESS.md");
const text = fs.readFileSync(file, "utf8");

const sections = [];
let current = null;
for (const line of text.split(/\r?\n/)) {
  const heading = line.match(/^##\s+(.*)/);
  if (heading) {
    current = { title: heading[1].trim(), done: 0, total: 0, fuzzy: [] };
    sections.push(current);
    continue;
  }
  if (!current) continue;
  const box = line.match(/^\s*[-*]\s+\[( |x|X)\]/);
  if (box) {
    current.total++;
    if (box[1].toLowerCase() === "x") current.done++;
  }
  const fuzzy = line.match(/Still fuzzy:\s*(.+)/i);
  if (fuzzy && fuzzy[1].trim()) current.fuzzy.push(fuzzy[1].trim());
}

const tracked = sections.filter((s) => s.total > 0);
const bar = (done, total) => {
  const width = 20;
  const filled = Math.round((done / total) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
};

console.log("\n📈 Your progress\n");
for (const s of tracked) {
  const mark = s.done === s.total ? "✅" : s.done > 0 ? "🔄" : "  ";
  console.log(`${mark} ${s.title.padEnd(44).slice(0, 44)} ${bar(s.done, s.total)} ${s.done}/${s.total}`);
}

const nextUp = tracked.find((s) => s.done < s.total && !s.title.startsWith("Concept"));
if (nextUp) console.log(`\n👉 Next up: ${nextUp.title}`);

const allFuzzy = sections.flatMap((s) => s.fuzzy.map((f) => `${s.title}: ${f}`));
if (allFuzzy.length > 0) {
  console.log("\n🤔 Things you marked as still fuzzy (worth revisiting):");
  allFuzzy.forEach((f) => console.log(`   • ${f}`));
}
console.log("\nTick boxes by changing [ ] to [x] in PROGRESS.md.\n");
