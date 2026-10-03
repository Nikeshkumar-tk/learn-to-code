// A VARIABLE is a name that points to a value.
// Think of it as a label you stick on a value so you can use it later.

const name = "Ada";
const birthYear = 1815;

console.log(name);
console.log(birthYear);

// A variable can be used anywhere the value itself could be used:
console.log(name, "was born in", birthYear);
console.log(2026 - birthYear);

// Good names describe what the value MEANS:
const secondsPerMinute = 60;
const minutesPerHour = 60;
const secondsPerHour = secondsPerMinute * minutesPerHour;
console.log("Seconds in an hour:", secondsPerHour);
