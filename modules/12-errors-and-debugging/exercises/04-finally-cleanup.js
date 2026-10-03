// Exercise 12.4 — Always clean up with finally
// Run:  node exercises/04-finally-cleanup.js
//
// runJob(name, job, log)
//   - pushes `start:${name}` into the `log` array
//   - calls job() and returns its result
//   - if job() throws, pushes `error:${name}:${error.message}` into log and RE-THROWS the error
//   - ALWAYS pushes `end:${name}` into log, whether it succeeded or failed (use finally)

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const log1 = [];
check("returns job result", runJob("backup", () => 42, log1), 42);
check("success log", log1, ["start:backup", "end:backup"]);

const log2 = [];
let rethrown = null;
try {
  runJob("email", () => {
    throw new Error("SMTP down");
  }, log2);
} catch (error) {
  rethrown = error.message;
}
check("error is re-thrown", rethrown, "SMTP down");
check("failure log", log2, ["start:email", "error:email:SMTP down", "end:email"]);
