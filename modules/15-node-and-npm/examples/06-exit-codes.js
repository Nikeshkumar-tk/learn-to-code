// @expect-error  (exits with code 1 on purpose when run without arguments)
//
// Every program finishes with an EXIT CODE: 0 = success, anything else = failure.
// Other tools (scripts, CI servers, npm) use it to know whether your program worked.
//
// Try:
//   node examples/06-exit-codes.js            -> prints an error, exit code 1
//   node examples/06-exit-codes.js report.csv -> success, exit code 0
// Then check the code:  Git Bash/macOS/Linux: echo $?     PowerShell: echo $LASTEXITCODE

const [fileName] = process.argv.slice(2);

if (!fileName) {
  console.error("Usage: node examples/06-exit-codes.js <file-name>"); // console.error -> stderr
  process.exitCode = 1;   // mark the run as failed (the program still ends normally)
} else {
  console.log(`Processing ${fileName}...done`);
}
