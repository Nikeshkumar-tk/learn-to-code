// All FOUR parameters are required, even though `next` isn't used —
// that's how Express recognises an error handler.
export function errorHandler(err, req, res, next) {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  console.error("Unexpected error:", err); // details for the developer, never for the client
  res.status(500).json({ error: "Internal server error" });
}
