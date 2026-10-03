// finally { ... } runs NO MATTER WHAT — success, error, or even a return inside try.
// Use it for clean-up: closing files, stopping timers, releasing locks, logging "done".

function processFile(name, shouldFail) {
  console.log(`Opening ${name}`);
  try {
    if (shouldFail) {
      throw new Error(`${name} is corrupted`);
    }
    console.log(`Processing ${name}`);
    return "ok";
  } catch (error) {
    console.log("Problem:", error.message);
    return "failed";
  } finally {
    console.log(`Closing ${name}`);          // always printed
  }
}

console.log("Result:", processFile("report.csv", false));
console.log("---");
console.log("Result:", processFile("broken.csv", true));
