// JSON (JavaScript Object Notation) is TEXT that looks like JavaScript objects.
// It's how programs save data to files and send data over HTTP.
//
//   JSON.stringify(value) -> object to JSON text
//   JSON.parse(text)      -> JSON text to object

const task = { id: 1, title: "Learn JSON", tags: ["node", "data"], completed: false };

const text = JSON.stringify(task);
console.log(text);                    // one line
console.log(typeof text);             // "string"

console.log(JSON.stringify(task, null, 2)); // pretty: 2-space indentation (great for files)

const parsed = JSON.parse(text);
console.log(parsed.tags[0]);          // it's a real object again
console.log(parsed === task);         // false — a brand-new object (a deep copy!)

// JSON rules: keys in "double quotes", strings in "double quotes", no trailing commas,
// no comments, no functions, no undefined.

// ⚠️ What does NOT survive a round trip:
const tricky = {
  createdAt: new Date("2026-01-01T00:00:00Z"), // becomes a STRING
  notes: undefined,                            // disappears
  format: () => "hi",                          // disappears
};
const roundTripped = JSON.parse(JSON.stringify(tricky));
console.log(roundTripped);                     // { createdAt: '2026-01-01T00:00:00.000Z' }
console.log(typeof roundTripped.createdAt);    // "string" — not a Date any more!

// Invalid JSON throws a SyntaxError (Module 12):
try {
  JSON.parse("{ title: 'oops' }");
} catch (error) {
  console.log("Parse failed:", error.message);
}
