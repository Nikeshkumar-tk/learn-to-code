// Fixed. A router's paths are RELATIVE to where it's mounted. app.js mounts it at "/books",
// so router.get("/books") actually meant "/books/books". Inside the router, use "/" and "/:id".
import { Router } from "express";

const router = Router();
const books = [{ id: 1, title: "The Hobbit" }];

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

export default router;
