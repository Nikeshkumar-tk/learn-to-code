// Fixed. "TypeError: Cannot read properties of undefined (reading 'toLowerCase')".
// The callback expects a `page` parameter, but visitAll called onVisit() with NO arguments,
// so page was undefined. The function that CALLS the callback decides what it receives.
function visitAll(pages, onVisit) {
  for (const page of pages) {
    onVisit(page);
  }
}

visitAll(["home", "about", "contact"], (page) => {
  console.log("Visiting:", page.toLowerCase());
});
