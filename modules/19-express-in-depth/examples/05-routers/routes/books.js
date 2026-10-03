// A ROUTER is a mini-app that groups related routes.
// Paths here are RELATIVE to where the router is mounted in app.js ("/books").
import { Router } from "express";

const router = Router();
const books = [{ id: 1, title: "The Hobbit" }];

router.get("/", (req, res) => {            // GET /books
  res.json(books);
});

router.get("/:id", (req, res) => {         // GET /books/:id
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

export default router;
