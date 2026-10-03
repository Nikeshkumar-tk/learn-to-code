// Exercise 16.3 — A reusable JSON file store  ⭐ (you'll use this idea in the project)
// Run:  node exercises/03-json-store.js
//
// createJsonStore(filePath, defaultValue) returns { load, save, update }:
//
//   load()           -> ASYNC. Parsed contents of the file.
//                       If the file doesn't exist (error.code === "ENOENT"), return defaultValue.
//                       If it exists but isn't valid JSON, let the error be thrown.
//   save(data)       -> ASYNC. Creates the folder if needed, writes pretty JSON.
//   update(changeFn) -> ASYNC. Loads, calls changeFn(data) to get new data, saves it, returns it.
//                       (load -> modify -> save in one call)
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const testDir = path.join(import.meta.dirname, "..", "output", "store-test");
await rm(testDir, { recursive: true, force: true });
const store = createJsonStore(path.join(testDir, "nested", "todos.json"), []);
check("missing file -> default", await store.load(), []);
await store.save([{ id: 1, title: "a" }]);
check("save then load", await store.load(), [{ id: 1, title: "a" }]);
const afterUpdate = await store.update((todos) => [...todos, { id: 2, title: "b" }]);
check("update returns new data", afterUpdate.length, 2);
check("update persisted", (await store.load()).map((t) => t.id), [1, 2]);
await writeFile(path.join(testDir, "broken.json"), "{not json");
let threw = false;
try {
  await createJsonStore(path.join(testDir, "broken.json"), []).load();
} catch {
  threw = true;
}
check("invalid JSON throws (not silently replaced)", threw, true);
