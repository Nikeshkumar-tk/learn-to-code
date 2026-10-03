// Run:  node exercises/01-first-exports/check.js
import formatName, { capitalize, truncate } from "./string-utils.js";
import * as everything from "./string-utils.js";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("capitalize", capitalize("hello"), "Hello");
check("truncate cuts", truncate("Hello world", 5), "Hello…");
check("truncate leaves short text alone", truncate("Hi", 5), "Hi");
check("default export formatName", formatName("Ada", "Lovelace"), "Lovelace, Ada");
check("exactly 3 exports (helper stays private)", Object.keys(everything).sort(), ["capitalize", "default", "truncate"]);
