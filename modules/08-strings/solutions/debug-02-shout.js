// Fixed. Strings are immutable: toUpperCase() RETURNS a new string and leaves the old one alone.
// The result was thrown away. Store it.
let announcement = "attention: server restart at 5pm";
announcement = announcement.toUpperCase();

console.log(announcement);
