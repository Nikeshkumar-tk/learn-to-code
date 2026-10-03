const url = "https://api.example.com/tasks?page=2";

console.log(url.includes("tasks"));       // true  — appears anywhere?
console.log(url.startsWith("https://"));  // true  — at the start?
console.log(url.endsWith(".png"));        // false — at the end?

console.log(url.indexOf("?"));            // position of the first "?" (-1 if none)
console.log(url.indexOf("#"));            // -1
console.log("a.b.c".lastIndexOf("."));    // position of the LAST "."

// All of these are CASE-SENSITIVE:
console.log("Hello".includes("hello"));                // false
console.log("Hello".toLowerCase().includes("hello"));  // true — normalise first
