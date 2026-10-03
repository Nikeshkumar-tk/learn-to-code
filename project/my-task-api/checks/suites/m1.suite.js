// Milestone 1 checks — run against your functions.
__lib.section("Milestone 1 — task data & functions");

__lib.group("createTask", typeof createTask === "function", () => {
  const task = createTask(1, { title: "  Learn objects  ", priority: "high" });
  __lib.check(
    "createTask builds a complete task (title trimmed, completed false)",
    { ...task, createdAt: typeof task?.createdAt },
    { id: 1, title: "Learn objects", description: "", completed: false, priority: "high", createdAt: "string" },
  );
  __lib.check("createdAt is an ISO date string like \"2026-03-01T10:00:00.000Z\"", String(task?.createdAt).endsWith("Z") && !Number.isNaN(Date.parse(task?.createdAt)), true);
  const plain = createTask(7, { title: "Defaults" });
  __lib.check("defaults: description \"\" and priority \"medium\"", [plain?.description, plain?.priority], ["", "medium"]);
  __lib.check("description is trimmed", createTask(2, { title: "x", description: "  hi  " })?.description, "hi");
});

__lib.group("nextId", typeof nextId === "function", () => {
  __lib.check("nextId([]) is 1", nextId([]), 1);
  __lib.check("nextId uses the HIGHEST id + 1", nextId([{ id: 1 }, { id: 5 }, { id: 3 }]), 6);
});

__lib.group("addTask", typeof addTask === "function", () => {
  const empty = [];
  const one = addTask(empty, { title: "First" });
  __lib.check("addTask returns an array", Array.isArray(one), true);
  const two = addTask(one, { title: "Second", priority: "low" });
  __lib.check("addTask returns a NEW array", one !== empty && two !== one, true);
  __lib.check("addTask does not change the original array", [empty.length, one.length], [0, 1]);
  __lib.check("addTask gives increasing ids", two.map((t) => t.id), [1, 2]);
  __lib.check("addTask passes the input through", [two[1]?.title, two[1]?.priority, two[1]?.completed], ["Second", "low", false]);
});

__lib.group("formatTask", typeof formatTask === "function", () => {
  __lib.check("formatTask (not done)", formatTask({ id: 3, title: "Read", completed: false, priority: "low" }), "[ ] #3 Read (low)");
  __lib.check("formatTask (done)", formatTask({ id: 4, title: "Write", completed: true, priority: "high" }), "[x] #4 Write (high)");
});

__lib.group("formatTaskList", typeof formatTaskList === "function", () => {
  __lib.check("formatTaskList([])", formatTaskList([]), "No tasks yet.");
  __lib.check(
    "formatTaskList joins lines with \\n (no trailing newline)",
    formatTaskList([
      { id: 1, title: "A", completed: true, priority: "high" },
      { id: 2, title: "B", completed: false, priority: "medium" },
    ]),
    "[x] #1 A (high)\n[ ] #2 B (medium)",
  );
});

__lib.group("countCompleted", typeof countCompleted === "function", () => {
  __lib.check("countCompleted", countCompleted([{ completed: true }, { completed: false }, { completed: true }]), 2);
  __lib.check("countCompleted([])", countCompleted([]), 0);
});
