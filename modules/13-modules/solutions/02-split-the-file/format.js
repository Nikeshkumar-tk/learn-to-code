export function formatContact(contact) {
  return `${contact.name} <${contact.email}>`;
}

export function formatList(list) {
  return list.map((c, i) => `${i + 1}. ${formatContact(c)}`).join("\n");
}
