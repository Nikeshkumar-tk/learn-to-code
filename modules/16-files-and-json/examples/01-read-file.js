// Reading a text file with the fs (file system) module.
// We use the PROMISE version: "node:fs/promises" — so we can `await` it (Module 14).
import { readFile } from "node:fs/promises";
import path from "node:path";

// Build the path relative to THIS file's folder (more on why in example 02).
const filePath = path.join(import.meta.dirname, "..", "sample-data", "quote.txt");

const text = await readFile(filePath, "utf8"); // "utf8" -> give me a string, not raw bytes
console.log(text);
console.log("Characters:", text.length);
console.log("Lines:", text.trim().split("\n").length);

// What if the file doesn't exist?
try {
  await readFile(path.join(import.meta.dirname, "does-not-exist.txt"), "utf8");
} catch (error) {
  console.log("Error code:", error.code);  // "ENOENT" = Error NO ENTry = file not found
  console.log("Message:", error.message);
}
