// @skip-verify  (server)
//
// The REQUEST BODY carries data the client sends — e.g. a new book to create.
//   node examples/07-request-body.js
//   node request.js POST /books title="Dune" author="herbert" year=1965
//   node request.js POST /books author="nobody"
//   node request.js GET /books
import express from "express";

const app = express();

// MIDDLEWARE (Module 19 explains it fully): this line tells Express
// "if a request has a JSON body, parse it and put the result in req.body".
// Without it, req.body is undefined.
app.use(express.json());

const books = [{ id: 1, title: "The Hobbit", author: "tolkien", year: 1937 }];
let nextId = 2;

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  console.log("req.body =", req.body);
  const { title, author, year } = req.body ?? {};

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "title is required" });
  }

  const book = { id: nextId++, title: title.trim(), author: author ?? "unknown", year: year ?? null };
  books.push(book);

  // 201 Created + the new resource. That's the convention for a successful POST.
  res.status(201).json(book);
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
