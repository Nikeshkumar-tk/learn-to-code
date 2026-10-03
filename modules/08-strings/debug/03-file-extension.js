// Debug 08.3 — Wrong file extensions
// Expected:
//   photo.jpg -> jpg
//   archive.tar.gz -> gz
//   README -> (none)

function getExtension(filename) {
  const dot = filename.indexOf(".");
  return filename.slice(dot);
}

for (const file of ["photo.jpg", "archive.tar.gz", "README"]) {
  console.log(`${file} -> ${getExtension(file)}`);
}
