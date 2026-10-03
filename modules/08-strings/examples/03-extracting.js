// slice(start, end) — copy characters from start up to (NOT including) end.
const text = "JavaScript";
//            0123456789

console.log(text.slice(0, 4));   // "Java"
console.log(text.slice(4));      // "Script" — no end = to the end
console.log(text.slice(-6));     // "Script" — negative counts from the end
console.log(text.slice(-6, -3)); // "Scr"

// substring(start, end) is very similar (it doesn't accept negatives). You'll see both.
console.log(text.substring(0, 4)); // "Java"

// Real use: get the part after a marker
const email = "ada@example.com";
const at = email.indexOf("@");
console.log("user:", email.slice(0, at));      // "ada"
console.log("domain:", email.slice(at + 1));   // "example.com"
