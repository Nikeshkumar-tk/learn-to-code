// Run:  node exercises/03-shared-store/check.js
import { getSetting, setSetting, getAllSettings } from "./store.js";
import { userPicksDarkMode } from "./ui.js";
import { responseHeaders } from "./api.js";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("default theme", getSetting("theme"), "light");
userPicksDarkMode();
check("api.js sees the change made by ui.js", responseHeaders(), { "Content-Language": "en", "X-Theme": "dark" });
let message = null;
try {
  setSetting("colour", "red");
} catch (e) {
  message = e.message;
}
check("unknown setting throws", message, "Unknown setting: colour");
getAllSettings().language = "fr";
check("getAllSettings returns a copy", getSetting("language"), "en");
