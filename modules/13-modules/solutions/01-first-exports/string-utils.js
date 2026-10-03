// Solution 13.1
function firstLetterUpper(word) {   // private helper — not exported
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function capitalize(text) {
  return firstLetterUpper(text);
}

export function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max) + "…";
}

export default function formatName(first, last) {
  return `${last}, ${first}`;
}
