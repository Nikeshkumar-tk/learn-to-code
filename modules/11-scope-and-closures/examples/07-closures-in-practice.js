// Practical closures you'll actually write in Node apps.

// 1. An ID generator (your task project needs one!)
function createIdGenerator(start = 1) {
  let nextId = start;
  return () => nextId++;    // returns the current value, THEN adds 1
}
const nextTaskId = createIdGenerator();
console.log(nextTaskId(), nextTaskId(), nextTaskId()); // 1 2 3

// 2. A configured logger
function createLogger(prefix) {
  let lineNumber = 0;
  return (message) => {
    lineNumber++;
    console.log(`${String(lineNumber).padStart(3, "0")} [${prefix}] ${message}`);
  };
}
const dbLog = createLogger("db");
const httpLog = createLogger("http");
dbLog("connected");
httpLog("GET /tasks");
dbLog("query took 3ms");

// 3. A simple cache (memoisation)
function createCachedSquare() {
  const cache = {};
  return (n) => {
    if (cache[n] !== undefined) {
      console.log(`  (from cache: ${n})`);
      return cache[n];
    }
    cache[n] = n * n;
    return cache[n];
  };
}
const cachedSquare = createCachedSquare();
console.log(cachedSquare(9));
console.log(cachedSquare(9));
