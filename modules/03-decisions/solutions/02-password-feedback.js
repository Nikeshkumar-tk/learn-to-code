// Solution 03.2
// Order matters: check "empty" before "too short" (an empty password is also short,
// but "required" is the more helpful message).
const username = "sam";
const password = "sunshine";
let feedback;

if (password === "") {           // or: if (!password)
  feedback = "Password is required";
} else if (password.length < 8) {
  feedback = "Too short (min 8 characters)";
} else if (password === username) {
  feedback = "Do not use your username";
} else {
  feedback = "Looks good";
}

console.log(feedback);
