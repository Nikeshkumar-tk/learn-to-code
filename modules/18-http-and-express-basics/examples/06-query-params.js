// @skip-verify  (server)
//
// QUERY PARAMETERS: optional extras after "?" — for filtering, searching, sorting, paging.
//   node examples/06-query-params.js
//   node request.js GET /books
//   node request.js GET "/books?author=tolkien"
//   node request.js GET "/books?search=the&sort=year"
//   node request.js GET "/books?limit=2"
// (Quotes around the URL stop your terminal treating & specially.)
import express from "express";

const app = express();
const books = [
  { id: 1, title: "The Hobbit", author: "tolkien", year: 1937 },
  { id: 2, title: "Kindred", author: "butler", year: 1979 },
  { id: 3, title: "The Silmarillion", author: "tolkien", year: 1977 },
  { id: 4, title: "Parable of the Sower", author: "butler", year: 1993 },
];

app.get("/books", (req, res) => {
  console.log("req.query =", req.query);       // an object of STRINGS (you built this in 08.5!)
  const { author, search, sort, limit } = req.query;

  let result = books;
  if (author) result = result.filter((b) => b.author === author.toLowerCase());
  if (search) result = result.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
  if (sort === "year") result = [...result].sort((a, b) => a.year - b.year);
  if (limit) result = result.slice(0, Number(limit));

  res.json({ count: result.length, books: result });
});

// Route params identify WHICH resource (/books/2).
// Query params describe HOW you want a list (?author=tolkien&sort=year).

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
