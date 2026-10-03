export function validateContact(input) {
  if (!input.name?.trim()) throw new Error("Name is required");
  if (!input.email?.includes("@")) throw new Error("Email is invalid");
}
