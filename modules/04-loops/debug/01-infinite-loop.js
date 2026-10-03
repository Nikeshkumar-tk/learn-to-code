// @skip-verify  (this loop never ends — that's the bug)
// Debug 04.1 — The loop that never ends
// Expected: prints "Loading 10%" ... "Loading 100%" in steps of 10, then "Done!"
// ⚠️ When it runs forever, press Ctrl + C to stop it.

let progress = 10;

while (progress <= 100) {
  console.log(`Loading ${progress}%`);
}

console.log("Done!");
