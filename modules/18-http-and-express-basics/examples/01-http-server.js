// @skip-verify  (starts a server that runs until you press Ctrl + C)
//
// A web server with NO framework — only Node's built-in http module.
//   node examples/01-http-server.js
// Then open http://localhost:3000 in your browser, or run (in a SECOND terminal):
//   node request.js GET /
//
// Every time a request arrives, Node calls our function with two objects:
//   req -> the REQUEST: what the client asked for (method, url, headers, body)
//   res -> the RESPONSE: what we send back (status code, headers, body)
import http from "node:http";

const server = http.createServer((req, res) => {
  console.log(`Received: ${req.method} ${req.url}`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello! You asked for ${req.url} using ${req.method}\n`);
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000  (stop with Ctrl + C)");
});
