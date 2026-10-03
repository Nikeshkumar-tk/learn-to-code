// Solution 08.1
function normalizeEmail(raw) {
  return raw.trim().toLowerCase();
}

function isValidEmail(email) {
  if (email.includes(" ")) return false;
  const at = email.indexOf("@");
  if (at <= 0) return false;                       // -1 (missing) or 0 (first character)
  const domain = email.slice(at + 1);
  if (!domain.includes(".")) return false;
  if (email.endsWith(".")) return false;
  return true;
}

function emailDomain(email) {
  return email.slice(email.indexOf("@") + 1);
}

console.log(normalizeEmail("  Ada@Example.COM "), isValidEmail("ada@example.com"));
