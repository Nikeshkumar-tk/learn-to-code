// A helper used by the examples and debug demos in this module.
// It starts an Express app on a random free port, sends some requests, prints
// each request and response, then shuts the server down.
//
//   await runDemo(app, [
//     "GET /books",
//     { method: "POST", path: "/books", body: { title: "Dune" }, headers: { "x-api-key": "secret" } },
//   ]);
//
// Nothing here is new: events, fetch, async/await, objects, string formatting.
import { once } from "node:events";

export async function runDemo(app, requests) {
  const server = app.listen(0);
  await once(server, "listening");
  const base = `http://127.0.0.1:${server.address().port}`;

  for (const request of requests) {
    const { method, path, body, headers = {} } =
      typeof request === "string" ? { method: request.split(" ")[0], path: request.split(" ")[1] } : request;

    console.log(`\n→ ${method} ${path}${body ? " " + JSON.stringify(body) : ""}`);
    try {
      const res = await fetch(base + path, {
        method,
        headers: { ...(body ? { "Content-Type": "application/json" } : {}), ...headers },
        body: body ? JSON.stringify(body) : undefined,
        signal: AbortSignal.timeout(1500),
      });
      const text = await res.text();
      const type = res.headers.get("content-type") ?? "";
      const shown = type.includes("html") ? `(HTML page) ${text.replace(/\s+/g, " ").slice(0, 70)}...` : text;
      console.log(`← ${res.status} ${shown}`);
    } catch {
      console.log("← ⏱️  no response after 1.5 seconds");
    }
  }

  server.close();
  server.closeAllConnections();
}
