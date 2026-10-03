// Fixed. replace() with a string only replaces the FIRST match.
// "mary ann evans" became "mary_ann evans". replaceAll() replaces every match.
function toUsername(displayName) {
  return displayName.toLowerCase().replaceAll(" ", "_");
}

console.log("ada lovelace ->", toUsername("Ada Lovelace"));
console.log("mary ann evans ->", toUsername("Mary Ann Evans"));
