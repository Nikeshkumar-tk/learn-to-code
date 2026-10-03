import * as configModule from "./config.js";

const { loadConfig } = configModule;
if (typeof loadConfig !== "function") {
  console.log("❌ config.js doesn't export a function called loadConfig yet");
  process.exit(1);
}

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
function errorOf(fn) {
  try {
    fn();
    return null;
  } catch (e) {
    return e.message;
  }
}
check("defaults", loadConfig({}), { port: 3000, logLevel: "info", isProduction: false, dataFile: "data/tasks.json" });
check("from env", loadConfig({ PORT: "8080", LOG_LEVEL: "debug", NODE_ENV: "production", DATA_FILE: "x.json" }), {
  port: 8080,
  logLevel: "debug",
  isProduction: true,
  dataFile: "x.json",
});
check("port is a number", typeof loadConfig({ PORT: "5000" }).port, "number");
check("bad port", errorOf(() => loadConfig({ PORT: "abc" })), "PORT must be a whole number between 1 and 65535");
check("port too big", errorOf(() => loadConfig({ PORT: "70000" })), "PORT must be a whole number between 1 and 65535");
check("bad log level", errorOf(() => loadConfig({ LOG_LEVEL: "loud" })), "LOG_LEVEL must be one of: debug, info, warn, error");
check("works with the real process.env too", typeof loadConfig().port, "number");
