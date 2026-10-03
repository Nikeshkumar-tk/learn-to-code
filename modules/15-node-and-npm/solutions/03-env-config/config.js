// Solution 15.3
const LOG_LEVELS = ["debug", "info", "warn", "error"];

export function loadConfig(env = process.env) {
  const port = Number(env.PORT ?? 3000);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT must be a whole number between 1 and 65535");
  }

  const logLevel = env.LOG_LEVEL ?? "info";
  if (!LOG_LEVELS.includes(logLevel)) {
    throw new Error(`LOG_LEVEL must be one of: ${LOG_LEVELS.join(", ")}`);
  }

  return {
    port,
    logLevel,
    isProduction: env.NODE_ENV === "production",
    dataFile: env.DATA_FILE ?? "data/tasks.json",
  };
}
