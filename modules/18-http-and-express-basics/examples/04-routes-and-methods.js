// @skip-verify  (server)
//
// HTTP METHODS say what the client wants to DO with a resource:
//   GET    -> read            POST   -> create
//   PUT    -> replace/update  PATCH  -> partially update
//   DELETE -> remove
//
//   node examples/04-routes-and-methods.js
//   node request.js GET /books
//   node request.js POST /books
//   node request.js DELETE /books
//   node request.js PUT /books      (no route for this one -> 404)
import express from "express";

const app = express();

app.get("/books", (req, res) => {
  res.json({ action: "list all books" });
});

app.post("/books", (req, res) => {
  res.json({ action: "create a book" });
});

app.delete("/books", (req, res) => {
  res.json({ action: "delete ALL books (dangerous! real APIs rarely allow this)" });
});

// Same PATH, different METHOD = a different route. The URL names the THING ("books"),
// the method names the ACTION. That's the core idea of a "REST" API.

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
