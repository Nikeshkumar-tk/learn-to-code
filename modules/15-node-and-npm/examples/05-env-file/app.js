// @entry
// Typing env vars every time is tedious. A ".env" file stores them in one place.
//
// 1. Copy .env.example to .env in this folder:
//      macOS/Linux/Git Bash:  cp examples/05-env-file/.env.example examples/05-env-file/.env
//      PowerShell:            Copy-Item examples/05-env-file/.env.example examples/05-env-file/.env
// 2. Run with Node's built-in --env-file flag (Node 20.6+):
//      node --env-file=examples/05-env-file/.env examples/05-env-file/app.js
// 3. Run WITHOUT the flag and compare:
//      node examples/05-env-file/app.js
//
// RULES: .env is listed in .gitignore and never committed (it may contain secrets).
//        .env.example IS committed — it documents which variables exist, with fake values.

const config = {
  appName: process.env.APP_NAME ?? "MyApp",
  port: Number(process.env.PORT ?? 3000),
  logLevel: process.env.LOG_LEVEL ?? "info",
  apiKeyIsSet: Boolean(process.env.API_KEY),   // never PRINT secrets — just whether they exist
};

console.log(config);
