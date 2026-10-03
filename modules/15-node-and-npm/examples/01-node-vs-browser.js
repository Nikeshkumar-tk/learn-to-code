// Node.js is a JavaScript RUNTIME: the JavaScript language + a set of extra abilities.
//
//   Browser JavaScript has:  window, document (the web page), clicks, fetch
//   Node.js has:             files, folders, processes, networking, environment variables
//   Both have:               the language itself — variables, functions, arrays, promises...

console.log("Node version:", process.version);
console.log("Operating system:", process.platform);
console.log("Current folder:", process.cwd());

console.log("typeof window:", typeof window);     // "undefined" — there is no web page here
console.log("typeof document:", typeof document); // "undefined"
console.log("typeof process:", typeof process);   // "object" — Node-only

// globalThis is "the global object" in any environment.
console.log("Has fetch?", typeof globalThis.fetch === "function"); // modern Node has fetch too
