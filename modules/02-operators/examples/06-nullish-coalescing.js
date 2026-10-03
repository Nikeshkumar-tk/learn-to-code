// ?? (nullish coalescing): "use the left value, unless it is null or undefined —
// then use the right value instead". Perfect for DEFAULT VALUES.

let savedTheme = null;                   // the user never picked a theme
const theme = savedTheme ?? "light";
console.log(theme);                      // "light"

savedTheme = "dark";
console.log(savedTheme ?? "light");      // "dark"

// You will also see || used for defaults. It's similar, but treats 0, "" and false
// as "missing" too. Sometimes that's a bug:
const savedVolume = 0;                   // the user deliberately muted the sound
console.log(savedVolume || 50);          // 50 — oops, we un-muted them!
console.log(savedVolume ?? 50);          // 0  — respects their choice
