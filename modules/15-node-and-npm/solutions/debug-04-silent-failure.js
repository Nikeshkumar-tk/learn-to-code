// @expect-error  (the FIXED version exits with code 1 — that's the point)
// Fixed. The script printed an error but still exited with code 0 ("success"),
// so CI happily deployed a broken config. Set a failing exit code, and print errors to stderr.
const config = { port: "not-a-number", dataFile: "" };

function validate(config) {
  const problems = [];
  if (!Number.isInteger(Number(config.port))) problems.push("port must be a number");
  if (!config.dataFile) problems.push("dataFile is required");
  return problems;
}

const problems = validate(config);
if (problems.length > 0) {
  console.error("Config invalid:", problems.join(", "));
  process.exitCode = 1;
} else {
  console.log("Config OK — deploying");
}
