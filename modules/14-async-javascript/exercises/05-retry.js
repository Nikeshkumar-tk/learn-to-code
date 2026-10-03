// Exercise 14.5 — Retry a flaky operation
// Run:  node exercises/05-retry.js
//
// Networks fail sometimes. Write:
//
//   retry(fn, attempts)
//     - calls `await fn()`
//     - if it succeeds, returns the result
//     - if it throws, tries again, up to `attempts` total tries
//     - if every try fails, throws the LAST error
//
// Bonus: wait 20ms between attempts.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
function makeFlaky(failuresBeforeSuccess) {
  let calls = 0;
  const fn = async () => {
    calls++;
    if (calls <= failuresBeforeSuccess) throw new Error(`failure #${calls}`);
    return "success";
  };
  fn.calls = () => calls;
  return fn;
}
const flaky = makeFlaky(2);
check("succeeds on 3rd try", await retry(flaky, 3), "success");
check("called exactly 3 times", flaky.calls(), 3);
const hopeless = makeFlaky(10);
let finalError = null;
try {
  await retry(hopeless, 3);
} catch (error) {
  finalError = error.message;
}
check("throws the last error", finalError, "failure #3");
check("gave up after 3 tries", hopeless.calls(), 3);
