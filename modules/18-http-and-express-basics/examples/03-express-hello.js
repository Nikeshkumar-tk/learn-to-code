// @skip-verify  (server)
//
// The same idea with Express — a framework built ON TOP of node:http.
// First, once, in this module's folder:   npm install
//   node examples/03-express-hello.js
//   node request.js GET /
//   node request.js GET /about
import express from "express";

const app = express();          // create an application

// A ROUTE = HTTP method + path + handler function.
// "When a GET request for / arrives, call this function."
app.get("/", (req, res) => {
  res.send("Hello from Express!");                   // text
});

app.get("/about", (req, res) => {
  res.json({ name: "Book API", version: "1.0.0" });  // JSON — Express sets the header + stringifies
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000  (stop with Ctrl + C)");
});

// Express didn't add magic. It just did the chores from example 02 for you:
// matching method + path, setting Content-Type, JSON.stringify, 404s for unknown routes.
