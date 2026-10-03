// Exercise 15.3 — Load configuration from environment variables
// Check: node exercises/03-env-config/check.js
//
// Export a function loadConfig(env = process.env) that returns:
//   {
//     port:         Number(env.PORT), default 3000
//     logLevel:     env.LOG_LEVEL, default "info"; must be one of "debug", "info", "warn", "error"
//     isProduction: true only if env.NODE_ENV === "production"
//     dataFile:     env.DATA_FILE, default "data/tasks.json"
//   }
// Throw an Error:
//   "PORT must be a whole number between 1 and 65535"   if PORT is set but invalid
//   "LOG_LEVEL must be one of: debug, info, warn, error" if LOG_LEVEL is set but invalid
//
// WHY the `env` parameter? So tests can pass a fake environment like { PORT: "8080" }
// instead of changing the real one. Code that receives what it needs is easy to test.
