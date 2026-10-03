// Solution 12.4
function runJob(name, job, log) {
  log.push(`start:${name}`);
  try {
    return job();
  } catch (error) {
    log.push(`error:${name}:${error.message}`);
    throw error;           // re-throw: we recorded it, but we can't fix it, so pass it on
  } finally {
    log.push(`end:${name}`);
  }
}

const log = [];
runJob("demo", () => "done", log);
console.log(log);
