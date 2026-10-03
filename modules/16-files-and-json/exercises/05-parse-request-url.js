// Exercise 16.5 — Parse request URLs like a web framework does
// Run:  node exercises/05-parse-request-url.js
//
// parseRequestUrl(rawUrl) — rawUrl is what a server receives, e.g. "/tasks?status=open&page=2"
// (no domain!). Use the URL class: new URL(rawUrl, "http://localhost") handles relative URLs.
// Return:
//   {
//     path:  "/tasks",
//     query: { status: "open", page: "2" },     // all query params, values as strings
//     page:  2,                                  // Number(query.page), default 1, must be >= 1
//     segments: ["tasks"]                        // path split on "/", without empty parts
//   }
// If page is not a whole number >= 1, use 1.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("full", parseRequestUrl("/tasks?status=open&page=2"), { path: "/tasks", query: { status: "open", page: "2" }, page: 2, segments: ["tasks"] });
check("nested path, no query", parseRequestUrl("/tasks/42/comments"), { path: "/tasks/42/comments", query: {}, page: 1, segments: ["tasks", "42", "comments"] });
check("bad page", parseRequestUrl("/tasks?page=-3").page, 1);
check("encoded characters", parseRequestUrl("/search?q=node%20%26%20express").query.q, "node & express");
