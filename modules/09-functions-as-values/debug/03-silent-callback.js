// @expect-error
// Debug 09.3 — The callback never gets its data
// Expected:
//   Visiting: home
//   Visiting: about
//   Visiting: contact

function visitAll(pages, onVisit) {
  for (const page of pages) {
    onVisit();
  }
}

visitAll(["home", "about", "contact"], (page) => {
  console.log("Visiting:", page.toLowerCase());
});
