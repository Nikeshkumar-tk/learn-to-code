// Solution 05.3
// Each rule is a guard: if it fails, return immediately with its message.
// If we survive all the guards, the username is fine.
function validateUsername(username) {
  if (username === "") {
    return "Username is required";
  }
  if (username.length < 3 || username.length > 15) {
    return "Must be 3-15 characters";
  }
  for (const char of username) {
    if (char === " ") {
      return "No spaces allowed";
    }
  }
  if (username === "admin" || username === "root") {
    return "That name is reserved";
  }
  return "OK";
}

console.log(validateUsername("ada lovelace"));
