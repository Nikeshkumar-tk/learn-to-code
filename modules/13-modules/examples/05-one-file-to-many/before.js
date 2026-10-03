// @entry
// Run:  node examples/05-one-file-to-many/before.js
//
// BEFORE: everything in one file. Fine at 40 lines. Painful at 400.
// Notice the different JOBS mixed together: data, rules, formatting, and the "main" script.

// --- data ---
const books = [];
let nextId = 1;

// --- rules (validation + operations) ---
function validateBook(input) {
  if (!input.title?.trim()) throw new Error("Title is required");
  if (!Number.isInteger(input.year)) throw new Error("Year must be a whole number");
}

function addBook(input) {
  validateBook(input);
  const book = { id: nextId++, title: input.title.trim(), year: input.year, read: false };
  books.push(book);
  return book;
}

function markRead(id) {
  const book = books.find((b) => b.id === id);
  if (!book) throw new Error(`Book ${id} not found`);
  book.read = true;
  return book;
}

// --- formatting ---
function formatBook(book) {
  return `${book.read ? "📖" : "📕"} #${book.id} ${book.title} (${book.year})`;
}

// --- main ---
addBook({ title: "Eloquent JavaScript", year: 2018 });
addBook({ title: "The Pragmatic Programmer", year: 1999 });
markRead(2);
books.forEach((b) => console.log(formatBook(b)));
