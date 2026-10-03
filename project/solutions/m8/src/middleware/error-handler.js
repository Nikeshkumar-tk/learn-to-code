// Turns every thrown error into a JSON response. Must have FOUR parameters.
export function errorHandler(err, req, res, next) {
  // express.json() throws this when the body isn't valid JSON. Check it FIRST:
  // it also has statusCode 400, but its message is a confusing parser message.
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Request body must be valid JSON" });
  }
  // Our own ValidationError (400) and NotFoundError (404)
  if (err.statusCode === 400 || err.statusCode === 404) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  console.error("Unexpected error:", err); // full details for the developer...
  res.status(500).json({ error: "Internal server error" }); // ...nothing internal for the client
}
