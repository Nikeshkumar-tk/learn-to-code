// @skip-verify  (server)
//
// A tiny JSON API with plain Node: we must do EVERYTHING ourselves.
//   node examples/02-http-routing-by-hand.js
//   node request.js GET /books
//   node request.js GET /books/1
//   node request.js POST /books title="Dune" author="Frank Herbert"
//   node request.js GET /nope
//
// Count the chores: matching URLs, parsing ids, reading the body in pieces,
// parsing JSON, setting headers, stringifying responses, 404s...
// Express exists to do these chores for you. Now you know what they are.
import http from "node:http";

const books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "Kindred", author: "Octavia Butler" },
];

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

async function readJsonBody(req) {
  let text = "";
  for await (const chunk of req) text += chunk; // the body arrives in pieces ("chunks")
  return text ? JSON.parse(text) : {};
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");      // Module 16!
  const parts = url.pathname.split("/").filter(Boolean); // "/books/1" -> ["books", "1"]

  if (req.method === "GET" && url.pathname === "/books") {
    return sendJson(res, 200, books);
  }
  if (req.method === "GET" && parts[0] === "books" && parts.length === 2) {
    const book = books.find((b) => b.id === Number(parts[1]));
    return book ? sendJson(res, 200, book) : sendJson(res, 404, { error: "Book not found" });
  }
  if (req.method === "POST" && url.pathname === "/books") {
    try {
      const input = await readJsonBody(req);
      const book = { id: books.length + 1, title: input.title, author: input.author };
      books.push(book);
      return sendJson(res, 201, book);
    } catch {
      return sendJson(res, 400, { error: "Body must be valid JSON" });
    }
  }
  sendJson(res, 404, { error: `Cannot ${req.method} ${url.pathname}` });
});

server.listen(3000, () => console.log("Listening on http://localhost:3000"));
