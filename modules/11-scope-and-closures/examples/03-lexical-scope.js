// LEXICAL scope: what a function can see is decided by WHERE IT IS WRITTEN in the code.
// Inner scopes can see outer variables. Outer scopes can't see inner ones.
//
//   ┌ file ───────────────────────────────┐
//   │ const company = "Acme"              │
//   │  ┌ function team() ──────────────┐  │
//   │  │ const teamName = "Backend"    │  │
//   │  │  ┌ function member() ──────┐  │  │
//   │  │  │ const name = "Ana"      │  │  │
//   │  │  │ sees: name, teamName,   │  │  │
//   │  │  │       company           │  │  │
//   │  │  └─────────────────────────┘  │  │
//   │  └───────────────────────────────┘  │
//   └─────────────────────────────────────┘

const company = "Acme";

function team() {
  const teamName = "Backend";

  function member() {
    const name = "Ana";
    console.log(`${name} works on ${teamName} at ${company}`);
  }

  member();
  // console.log(name); // ❌ team can't look INSIDE member
}

team();

// When JavaScript meets a name, it looks in the current scope first,
// then the enclosing one, then the next one out... up to the file. Not found -> ReferenceError.
