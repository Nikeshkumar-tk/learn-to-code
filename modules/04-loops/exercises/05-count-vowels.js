// Exercise 04.5 — Count vowels and words
// Run:  node exercises/05-count-vowels.js
//
// Loop over every character of `sentence` with for...of and count:
//   vowelCount  -> how many characters are a, e, i, o or u (lowercase is enough)
//   spaceCount  -> how many spaces
// Use `continue` to skip straight to the next character once you've counted a space.
// Then calculate wordCount = spaceCount + 1 (assume single spaces between words).

const sentence = "learning to code one loop at a time";

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("vowelCount", vowelCount, 14);
check("spaceCount", spaceCount, 7);
check("wordCount", wordCount, 8);
