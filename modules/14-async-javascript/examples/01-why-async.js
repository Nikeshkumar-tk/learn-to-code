// Some operations take TIME: reading a file, querying a database, calling another server.
// Node doesn't freeze while it waits. It starts the slow work, carries on with the next
// lines, and runs your code for the result when it's ready.
//
// setTimeout(callback, ms) is the simplest "slow operation": run callback after ms milliseconds.

console.log("1. Order placed");

setTimeout(() => {
  console.log("3. Pizza delivered (after 1 second)");
}, 1000);

console.log("2. Doing other things while we wait...");

// 🔮 Predict the order BEFORE running. Then change 1000 to 0. Does the order change?
// (It doesn't! "Later" code always runs after the current code finishes — even with 0 ms.)
