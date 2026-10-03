// HTTP checks shared by Milestones 7 and 8.
import fs from "node:fs/promises";
import { once } from "node:events";
import { check, section } from "./lib.js";

export async function startApp(app) {
  const server = app.listen(0);
  await once(server, "listening");
  const base = `http://127.0.0.1:${server.address().port}`;
  async function send(method, path, body, { raw = false } = {}) {
    const res = await fetch(base + path, {
      method,
      headers: body !== undefined ? { "Content-Type": "application/json" } : {},
      body: body === undefined ? undefined : raw ? body : JSON.stringify(body),
    });
    const text = await res.text();
    let json;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = `(not JSON: ${text.slice(0, 40)}...)`;
    }
    return { status: res.status, body: json };
  }
  function stop() {
    server.close();
    server.closeAllConnections();
  }
  return { send, stop };
}

const pick = (task) => task && { id: task.id, title: task.title, completed: task.completed, priority: task.priority };

export async function runApiSuite(send, tasksFile) {
  section("Create & read");
  check("GET /tasks starts empty", await send("GET", "/tasks"), { status: 200, body: [] });
  const created = await send("POST", "/tasks", { title: "Build the API", priority: "high" });
  check("POST /tasks -> 201 + the task", [created.status, pick(created.body)], [201, { id: 1, title: "Build the API", completed: false, priority: "high" }]);
  await send("POST", "/tasks", { title: "Write tests", description: "for every endpoint" });
  await send("POST", "/tasks", { title: "Deploy", priority: "low" });
  check("GET /tasks/2", pick((await send("GET", "/tasks/2")).body), { id: 2, title: "Write tests", completed: false, priority: "medium" });

  section("Validation & not found");
  check("POST without a title -> 400", await send("POST", "/tasks", { priority: "low" }), { status: 400, body: { error: "Title is required" } });
  check("POST with a bad priority -> 400", (await send("POST", "/tasks", { title: "x", priority: "urgent" })).status, 400);
  check("GET /tasks/99 -> 404", await send("GET", "/tasks/99"), { status: 404, body: { error: "Task 99 not found" } });
  check("GET /tasks/abc -> 400", await send("GET", "/tasks/abc"), { status: 400, body: { error: "Task id must be a positive whole number" } });

  section("Update, complete, delete");
  const patched = await send("PATCH", "/tasks/2", { title: "Write more tests", priority: "high" });
  check("PATCH /tasks/2 -> 200 + updated task", [patched.status, pick(patched.body)], [200, { id: 2, title: "Write more tests", completed: false, priority: "high" }]);
  check("PATCH with no changes -> 400", await send("PATCH", "/tasks/2", {}), { status: 400, body: { error: "No changes provided" } });
  check("PATCH missing task -> 404", (await send("PATCH", "/tasks/99", { title: "x" })).status, 404);
  const completed = await send("PATCH", "/tasks/1/complete");
  check("PATCH /tasks/1/complete -> 200, completed", [completed.status, completed.body?.completed], [200, true]);
  check("DELETE /tasks/3 -> 204, empty body", await send("DELETE", "/tasks/3"), { status: 204, body: null });
  check("DELETE /tasks/3 again -> 404", (await send("DELETE", "/tasks/3")).status, 404);

  section("Query parameters & stats");
  check("GET /tasks?completed=true", (await send("GET", "/tasks?completed=true")).body?.map((t) => t.id), [1]);
  check("GET /tasks?completed=false", (await send("GET", "/tasks?completed=false")).body?.map((t) => t.id), [2]);
  check("GET /tasks?priority=high", (await send("GET", "/tasks?priority=high")).body?.map((t) => t.id), [1, 2]);
  check("GET /tasks?search=TESTS", (await send("GET", "/tasks?search=TESTS")).body?.map((t) => t.id), [2]);
  check("GET /tasks?sort=title", (await send("GET", "/tasks?sort=title")).body?.map((t) => t.id), [1, 2]);
  check("GET /tasks?completed=maybe -> 400", await send("GET", "/tasks?completed=maybe"), { status: 400, body: { error: "completed must be true or false" } });
  check("GET /tasks?priority=urgent -> 400", (await send("GET", "/tasks?priority=urgent")).status, 400);
  check("GET /tasks?sort=colour -> 400", (await send("GET", "/tasks?sort=colour")).status, 400);
  check("GET /tasks/stats (route order!)", await send("GET", "/tasks/stats"), {
    status: 200,
    body: { total: 2, completed: 1, pending: 1, byPriority: { high: 2, medium: 0, low: 0 } },
  });

  section("Persistence & unexpected errors");
  check("the data file holds the tasks", JSON.parse(await fs.readFile(tasksFile, "utf8")).length, 2);
  await fs.writeFile(tasksFile, "{ corrupted");
  const originalError = console.error;
  console.error = () => {}; // your app SHOULD log the error; we hide it to keep this output readable
  check("a corrupted data file -> 500 with a safe message", await send("GET", "/tasks"), { status: 500, body: { error: "Internal server error" } });
  console.error = originalError;
}
