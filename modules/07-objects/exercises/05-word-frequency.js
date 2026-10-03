// Exercise 07.5 — Count words with an object as a dictionary
// Run:  node exercises/05-word-frequency.js
//
// countWords(text) -> an object mapping each word to how many times it appears.
//   countWords("the cat and the hat") -> { the: 2, cat: 1, and: 1, hat: 1 }
//
// Steps:
//   1. Split the text into words: text.split(" ")
//   2. Start with an empty object {}
//   3. For each word: if it's not a key yet, set it to 1; otherwise add 1.
//
// Then: mostCommonWord(text) -> the word with the highest count (use Object.entries).

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("countWords", countWords("the cat and the hat"), { the: 2, cat: 1, and: 1, hat: 1 });
check("single word", countWords("hello"), { hello: 1 });
check("mostCommonWord", mostCommonWord("to be or not to be to"), "to");
