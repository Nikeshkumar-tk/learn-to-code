// A function you pass to another function, for it to call, is named a CALLBACK.
// "Here's a function — call it back when you need to."

function repeat(times, action) {
  for (let i = 1; i <= times; i++) {
    action(i);                       // call the callback, giving it the round number
  }
}

repeat(3, (round) => console.log(`Push-up number ${round}`));

// Callbacks let a function report results in a flexible way:
function checkPassword(password, onValid, onInvalid) {
  if (password.length >= 8) {
    onValid();
  } else {
    onInvalid(`Too short: needs ${8 - password.length} more characters`);
  }
}

checkPassword(
  "hunter2",
  () => console.log("✅ Password accepted"),
  (reason) => console.log("❌", reason),
);

// You've seen this shape already — maybe without knowing it:
//   app.get("/tasks", (req, res) => { ... })   <- the arrow function is a callback!
