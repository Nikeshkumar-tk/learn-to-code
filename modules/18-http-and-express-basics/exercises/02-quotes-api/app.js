// Exercise 18.2 — A read-only quotes API (params, query, status codes)
// Check: node exercises/02-quotes-api/check.js
//
//   GET /quotes                 -> 200, array of all quotes
//   GET /quotes?author=hopper   -> only quotes whose author includes "hopper" (case-insensitive)
//   GET /quotes/random          -> 200, one random quote
//   GET /quotes/:id             -> 200, the quote with that id
//                                  400 { error: "Quote id must be a positive whole number" } for ids like "abc" or "-1"
//                                  404 { error: "Quote <id> not found" }
//
// ⚠️ Think about ORDER: what does Express do with GET /quotes/random if /quotes/:id is
//    defined first? (Try it both ways!)
import express from "express";

export const app = express();

const quotes = [
  { id: 1, text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { id: 2, text: "The most dangerous phrase is: we've always done it this way.", author: "Grace Hopper" },
  { id: 3, text: "A ship in port is safe, but that's not what ships are built for.", author: "Grace Hopper" },
  { id: 4, text: "Simplicity is prerequisite for reliability.", author: "Edsger Dijkstra" },
];

// Write your routes below.
