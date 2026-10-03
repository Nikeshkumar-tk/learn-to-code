// @skip-verify  (server)
//
// ROUTE PARAMETERS: parts of the path that vary, like the id in /books/2.
//   node examples/05-route-params.js
//   node request.js GET /books/1
//   node request.js GET /books/99
//   node request.js GET /books/abc
//   node request.js GET /authors/tolkien/books/1
import express from "express";

const app = express();
const books = [
  { id: 1, title: "The Hobbit", author: "tolkien" },
  { id: 2, title: "Kindred", author: "butler" },
];

// :id is a placeholder. Express puts its value in req.params.id — always a STRING.
app.get("/books/:id", (req, res) => {
  console.log("req.params =", req.params);
  const id = Number(req.params.id);            // convert! "1" !== 1

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Book id must be a number" });   // early return!
  }

  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({ error: `Book ${id} not found` });
  }

  res.json(book);
});

// Several params in one path:
app.get("/authors/:author/books/:id", (req, res) => {
  res.json({ params: req.params });
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
