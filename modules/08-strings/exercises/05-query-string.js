// Exercise 08.5 — Parse a URL query string
// Run:  node exercises/05-query-string.js
//
// In a URL like  /tasks?search=milk&page=2  the part after "?" is the QUERY STRING.
// Express will parse this for you later (req.query) — build it yourself first so it's not magic.
//
// parseQuery(queryString) -> object of key/value pairs (values stay STRINGS)
//   "?search=milk&page=2&done=true" -> { search: "milk", page: "2", done: "true" }
//   "search=milk"                   -> { search: "milk" }   (the "?" is optional)
//   ""                              -> {}
//
// Steps: remove a leading "?", split on "&", split each pair on "=", build the object.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("three params", parseQuery("?search=milk&page=2&done=true"), { search: "milk", page: "2", done: "true" });
check("no question mark", parseQuery("search=milk"), { search: "milk" });
check("empty string", parseQuery(""), {});
check("just a question mark", parseQuery("?"), {});
