// contacts.js imports validation because addContact is the one that needs it.
// app.js doesn't need to know validation exists — that's a clean module boundary.
import { validateContact } from "./validation.js";

const contacts = []; // private

export function addContact(input) {
  validateContact(input);
  const contact = { name: input.name.trim(), email: input.email.toLowerCase() };
  contacts.push(contact);
  return contact;
}

export function findByEmail(email) {
  return contacts.find((c) => c.email === email.toLowerCase());
}

export function listContacts() {
  return [...contacts];
}
