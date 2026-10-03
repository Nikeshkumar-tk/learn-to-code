// Solution 16.2
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const csvPath = path.join(import.meta.dirname, "..", "sample-data", "contacts.csv");
const jsonPath = path.join(import.meta.dirname, "..", "output", "contacts.json");

function lineToRecord(headers, line) {
  const values = line.split(",");
  const record = {};
  headers.forEach((header, i) => {
    record[header] = values[i]?.trim();
  });
  return record;
}

async function csvFileToJson(csvPath, jsonPath) {
  const text = await readFile(csvPath, "utf8");
  const [headerLine, ...lines] = text.split("\n").filter((line) => line.trim() !== "");
  const headers = headerLine.split(",").map((h) => h.trim());
  const records = lines.map((line) => lineToRecord(headers, line));

  await mkdir(path.dirname(jsonPath), { recursive: true });
  await writeFile(jsonPath, JSON.stringify(records, null, 2));
  return records.length;
}

console.log("Records written:", await csvFileToJson(csvPath, jsonPath));
