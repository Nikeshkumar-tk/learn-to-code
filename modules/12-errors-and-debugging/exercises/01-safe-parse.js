// Exercise 12.1 — Parse JSON without crashing
// Run:  node exercises/01-safe-parse.js
//
// JSON.parse(text) turns JSON text into a JavaScript value, and THROWS if the text is invalid.
//
// parseJsonSafely(text) must NEVER throw. It returns:
//   { ok: true, data: <the parsed value> }        when parsing works
//   { ok: false, error: "Invalid JSON: <message>" } when it doesn't
//      (use the caught error's .message)
//
// Then: readSetting(jsonText, key, fallback)
//   -> parses the text with parseJsonSafely; returns data[key] if parsing worked and the key exists
//      (not null/undefined), otherwise `fallback`.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("valid object", parseJsonSafely('{"port": 3000}'), { ok: true, data: { port: 3000 } });
check("valid array", parseJsonSafely("[1,2]"), { ok: true, data: [1, 2] });
const bad = parseJsonSafely("{port: 3000}");
check("invalid -> ok false", bad.ok, false);
check("invalid -> error message prefix", bad.error?.startsWith("Invalid JSON: "), true);
check("readSetting found", readSetting('{"port": 8080}', "port", 3000), 8080);
check("readSetting missing key", readSetting('{"host": "x"}', "port", 3000), 3000);
check("readSetting bad json", readSetting("not json", "port", 3000), 3000);
