// ONE JOB: own the book data and the operations on it.
// The array and nextId are private to this module — other files must use these functions.
import { validateBook } from "./validation.js";

const books = [];
let nextId = 1;

export function addBook(input) {
  validateBook(input);
  const book = { id: nextId++, title: input.title.trim(), year: input.year, read: false };
  books.push(book);
  return book;
}

export function markRead(id) {
  const book = books.find((b) => b.id === id);
  if (!book) throw new Error(`Book ${id} not found`);
  book.read = true;
  return book;
}

export function listBooks() {
  return [...books]; // a copy: callers can't mess with our internal array
}
