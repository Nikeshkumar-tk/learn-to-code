// Solution 12.2
function createUser(input) {
  if (typeof input !== "object" || input === null) {
    // typeof null is "object" (the famous quirk!), so null needs its own check
    throw new Error("Input must be an object");
  }
  const { name, email, age } = input;

  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Name is required");
  }
  if (typeof email !== "string" || !email.includes("@")) {
    throw new Error("Email is invalid");
  }
  if (!Number.isInteger(age) || age < 13 || age > 120) {
    throw new Error("Age must be a whole number between 13 and 120");
  }

  return { name: name.trim(), email: email.toLowerCase(), age };
}

try {
  createUser({ name: "Ana", email: "nope", age: 30 });
} catch (error) {
  console.log("Rejected:", error.message);
}
