// Run:  node exercises/02-split-the-file/check.js
import { addContact, findByEmail, listContacts } from "./contacts.js";
import * as contactsModule from "./contacts.js";
import { validateContact } from "./validation.js";
import { formatContact, formatList } from "./format.js";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
function errorOf(fn) {
  try {
    fn();
    return null;
  } catch (e) {
    return e.message;
  }
}
check("validateContact rejects missing name", errorOf(() => validateContact({ email: "a@b" })), "Name is required");
check("addContact validates", errorOf(() => addContact({ name: "X", email: "nope" })), "Email is invalid");
addContact({ name: "Grace", email: "GRACE@x.com" });
check("findByEmail", findByEmail("grace@x.com"), { name: "Grace", email: "grace@x.com" });
listContacts().push({ name: "intruder", email: "i@x" });
check("listContacts returns a copy", listContacts().length, 1);
check("contacts array is not exported", "contacts" in contactsModule, false);
check("formatContact", formatContact({ name: "A", email: "a@x" }), "A <a@x>");
check("formatList", formatList([{ name: "A", email: "a@x" }, { name: "B", email: "b@x" }]), "1. A <a@x>\n2. B <b@x>");
