// Exercise 18.1 — Your first Express API
// Check: node exercises/01-hello-api/check.js
// Try it by hand: node exercises/01-hello-api/server.js   then   node request.js GET /health
//
// Build these routes on `app`:
//   GET /          -> 200 JSON { message: "Welcome to my API" }
//   GET /health    -> 200 JSON { status: "ok", uptimeSeconds: <a number> }
//                     (process.uptime() gives seconds since the program started)
//   GET /greet/:name -> 200 JSON { greeting: "Hello, <name>!" }
//   GET /add?a=2&b=3 -> 200 JSON { result: 5 }
//                       if a or b is missing / not a number -> 400 JSON { error: "a and b must be numbers" }
import express from "express";

export const app = express();

// Write your routes below.
