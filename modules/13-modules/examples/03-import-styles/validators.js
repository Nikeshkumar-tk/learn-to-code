export function isEmail(text) {
  return text.includes("@");
}

export function isNonEmpty(text) {
  return text.trim().length > 0;
}

export function isPositive(n) {
  return n > 0;
}
