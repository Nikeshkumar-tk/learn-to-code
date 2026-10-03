// Solution 18.2
import express from "express";

export const app = express();

const quotes = [
  { id: 1, text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { id: 2, text: "The most dangerous phrase is: we've always done it this way.", author: "Grace Hopper" },
  { id: 3, text: "A ship in port is safe, but that's not what ships are built for.", author: "Grace Hopper" },
  { id: 4, text: "Simplicity is prerequisite for reliability.", author: "Edsger Dijkstra" },
];

app.get("/quotes", (req, res) => {
  const { author } = req.query;
  if (!author) return res.json(quotes);
  res.json(quotes.filter((q) => q.author.toLowerCase().includes(author.toLowerCase())));
});

// MUST come before /quotes/:id — Express checks routes in the order they were added,
// and "/quotes/:id" would happily match "/quotes/random" with id = "random".
app.get("/quotes/random", (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  res.json(quotes[index]);
});

app.get("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: "Quote id must be a positive whole number" });
  }
  const quote = quotes.find((q) => q.id === id);
  if (!quote) {
    return res.status(404).json({ error: `Quote ${id} not found` });
  }
  res.json(quote);
});
