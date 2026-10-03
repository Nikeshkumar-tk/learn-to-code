// Solution 03.3
const statusCode = 404;
let meaning;
let isError;

switch (statusCode) {
  case 200:
    meaning = "OK";
    break;
  case 201:
    meaning = "Created";
    break;
  case 400:
    meaning = "Bad Request";
    break;
  case 404:
    meaning = "Not Found";
    break;
  case 500:
    meaning = "Server Error";
    break;
  default:
    meaning = "Unknown";
}

if (statusCode >= 400) {
  isError = true;
} else {
  isError = false;
}
// Shorter alternative once you're comfortable: isError = statusCode >= 400;

console.log(statusCode, meaning, isError ? "(error)" : "(success)");
