// Debug 08.4 — Usernames with spaces
// Turn display names into usernames: lowercase, spaces become underscores.
// Expected:
//   ada lovelace -> ada_lovelace
//   mary ann evans -> mary_ann_evans

function toUsername(displayName) {
  return displayName.toLowerCase().replace(" ", "_");
}

console.log("ada lovelace ->", toUsername("Ada Lovelace"));
console.log("mary ann evans ->", toUsername("Mary Ann Evans"));
