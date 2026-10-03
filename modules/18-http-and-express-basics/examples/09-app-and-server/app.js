// Splitting the APP (routes) from the SERVER (listening on a port).
// Why? Other code — like test scripts — can import the app and start it on any free port.
// All the exercises in this module use this split, and so does your project.
import express from "express";

export const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ pong: true });
});
