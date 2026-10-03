import { Router } from "express";

const router = Router();
const books = [{ id: 1, title: "The Hobbit" }];

router.get("/books", (req, res) => {
  res.json(books);
});

router.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

export default router;
