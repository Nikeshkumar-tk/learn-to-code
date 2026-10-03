// ONE JOB: turn data into text for humans.
export function formatBook(book) {
  return `${book.read ? "📖" : "📕"} #${book.id} ${book.title} (${book.year})`;
}
