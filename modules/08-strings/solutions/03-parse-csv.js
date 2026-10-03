// Solution 08.3
const csvText = `name,email,age
Ada Lovelace, ada@example.com , 36
Alan Turing,alan@example.com,41

Grace Hopper , grace@example.com,85`;

function parseContact(line) {
  const [name, email, age] = line.split(",");
  return { name: name.trim(), email: email.trim(), age: Number(age.trim()) };
}

function parseContacts(csvText) {
  const [, ...lines] = csvText.split("\n"); // skip the header with destructuring
  const contacts = [];
  for (const line of lines) {
    if (line.trim() === "") continue;
    contacts.push(parseContact(line));
  }
  return contacts;
}

console.log(parseContacts(csvText));
