// The SERVICE: rules about books. Knows nothing about HTTP (no req, no res, no status codes).
// It could be reused by a CLI (Module 17!). Data lives in memory here to keep the example short.
import { ValidationError, NotFoundError } from "../errors.js";

let books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "Kindred", author: "Octavia Butler" },
];

export function listBooks({ search } = {}) {
  if (!search) return books;
  return books.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
}

export function getBook(id) {
  const book = books.find((b) => b.id === id);
  if (!book) throw new NotFoundError(`Book ${id} not found`);
  return book;
}

export function createBook({ title, author } = {}) {
  if (typeof title !== "string" || !title.trim()) throw new ValidationError("title is required");
  const book = { id: Math.max(0, ...books.map((b) => b.id)) + 1, title: title.trim(), author: author ?? "Unknown" };
  books = [...books, book];
  return book;
}

export function deleteBook(id) {
  getBook(id); // throws NotFoundError if missing
  books = books.filter((b) => b.id !== id);
}
