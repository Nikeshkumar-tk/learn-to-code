// Exercise 13.2 — Split a single-file app into modules  ⭐
// Run (before AND after your refactor — output must stay identical):
//   node exercises/02-split-the-file/app.js
//   node exercises/02-split-the-file/check.js
//
// This file mixes four jobs. Split it into:
//   contacts.js   -> the contacts array + addContact, findByEmail, listContacts (exported)
//   validation.js -> validateContact (exported)
//   format.js     -> formatContact, formatList (exported)
//   app.js        -> (this file) ONLY imports + the "main" lines at the bottom
//
// Rules:
//   - The contacts array must NOT be exported. Other modules use the functions.
//   - listContacts() must return a copy.
//   - Which module should import validation.js? (The one that needs it — not app.js.)

const contacts = [];

function validateContact(input) {
  if (!input.name?.trim()) throw new Error("Name is required");
  if (!input.email?.includes("@")) throw new Error("Email is invalid");
}

function addContact(input) {
  validateContact(input);
  const contact = { name: input.name.trim(), email: input.email.toLowerCase() };
  contacts.push(contact);
  return contact;
}

function findByEmail(email) {
  return contacts.find((c) => c.email === email.toLowerCase());
}

function listContacts() {
  return [...contacts];
}

function formatContact(contact) {
  return `${contact.name} <${contact.email}>`;
}

function formatList(list) {
  return list.map((c, i) => `${i + 1}. ${formatContact(c)}`).join("\n");
}

// --- main ---
addContact({ name: "Ada Lovelace", email: "ADA@example.com" });
addContact({ name: "Alan Turing", email: "alan@example.com" });
console.log(formatList(listContacts()));
console.log("Found:", formatContact(findByEmail("ada@EXAMPLE.com")));
