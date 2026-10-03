// @skip-verify  (server)
//
// STATUS CODES tell the client what happened, in a way programs can check.
//   node examples/08-status-codes.js
//   node request.js GET /ok     ... try them all: /created /no-content /bad /missing /broken
//
//   2xx success       200 OK · 201 Created · 204 No Content
//   4xx client's fault 400 Bad Request · 401 Unauthorized · 403 Forbidden · 404 Not Found · 409 Conflict
//   5xx server's fault 500 Internal Server Error
import express from "express";

const app = express();

app.get("/ok", (req, res) => res.status(200).json({ message: "Here is your data" }));
app.get("/created", (req, res) => res.status(201).json({ id: 42, message: "Created" }));
app.get("/no-content", (req, res) => res.status(204).end());   // success, nothing to send back (e.g. after DELETE)
app.get("/bad", (req, res) => res.status(400).json({ error: "You sent something invalid" }));
app.get("/missing", (req, res) => res.status(404).json({ error: "That doesn't exist" }));
app.get("/broken", () => {
  throw new Error("Oops, a bug in our code");   // Express catches it -> 500
});

// res.status(...) sets the code and RETURNS res, so you can chain .json(...) after it.
// If you don't call res.status, the default is 200.

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
