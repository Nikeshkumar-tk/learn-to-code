// @entry
// Solution 13.2 — the entry point only wires things together.
import { addContact, findByEmail, listContacts } from "./contacts.js";
import { formatContact, formatList } from "./format.js";

addContact({ name: "Ada Lovelace", email: "ADA@example.com" });
addContact({ name: "Alan Turing", email: "alan@example.com" });
console.log(formatList(listContacts()));
console.log("Found:", formatContact(findByEmail("ada@EXAMPLE.com")));
