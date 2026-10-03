// Debug 02.2 — Age gate
// `ageFromForm` came from a web form (forms give you strings).
// An 18-year-old should be allowed in. Expected: "Allowed: true"

const ageFromForm = "18";
const isAllowed = ageFromForm === 18 || ageFromForm > 18;

console.log("Allowed:", isAllowed);
