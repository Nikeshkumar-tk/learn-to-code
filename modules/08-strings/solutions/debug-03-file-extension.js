// Fixed. Three issues:
// 1. slice(dot) includes the "." itself -> ".jpg". Start at dot + 1.
// 2. indexOf finds the FIRST dot; for "archive.tar.gz" we need the LAST -> lastIndexOf.
// 3. With no dot, indexOf returns -1, and slice(-1) gives the last character ("E")! Handle it.
function getExtension(filename) {
  const dot = filename.lastIndexOf(".");
  if (dot === -1) return "(none)";
  return filename.slice(dot + 1);
}

for (const file of ["photo.jpg", "archive.tar.gz", "README"]) {
  console.log(`${file} -> ${getExtension(file)}`);
}
