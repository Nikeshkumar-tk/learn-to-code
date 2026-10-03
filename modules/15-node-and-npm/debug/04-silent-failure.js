// Debug 15.4 — The deploy script "succeeded" with a broken config
// A CI server runs this before deploying. If the config is invalid, the deploy must STOP.
// CI only looks at the EXIT CODE (0 = continue, anything else = stop).
// Run it, then check the exit code:  echo $?  (or  echo $LASTEXITCODE  in PowerShell)
// Expected: the error message AND a non-zero exit code.

const config = { port: "not-a-number", dataFile: "" };

function validate(config) {
  const problems = [];
  if (!Number.isInteger(Number(config.port))) problems.push("port must be a number");
  if (!config.dataFile) problems.push("dataFile is required");
  return problems;
}

const problems = validate(config);
if (problems.length > 0) {
  console.log("Config invalid:", problems.join(", "));
} else {
  console.log("Config OK — deploying");
}
