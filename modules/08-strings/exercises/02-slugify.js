// Exercise 08.2 — Make URL slugs
// Run:  node exercises/02-slugify.js
//
// A "slug" is the readable part of a URL: /blog/learn-node-js-the-basics
//
// slugify(title):
//   - lowercase everything
//   - keep letters a-z and digits 0-9
//   - every other character (spaces, punctuation...) becomes a "-"
//   - never two "-" in a row
//   - no "-" at the start or end
//
//   slugify("  Learn Node.js: The Basics! ") -> "learn-node-js-the-basics"
//
// You can check whether a character is a lowercase letter with:  char >= "a" && char <= "z"
// (and similarly for digits "0".."9")

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("basic", slugify("Hello World"), "hello-world");
check("punctuation", slugify("  Learn Node.js: The Basics! "), "learn-node-js-the-basics");
check("digits kept", slugify("Top 10 Tips"), "top-10-tips");
check("many symbols", slugify("Q&A -- Ask me anything!!!"), "q-a-ask-me-anything");
