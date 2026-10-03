// Solution 08.5
function parseQuery(queryString) {
  const result = {};
  const withoutQuestionMark = queryString.startsWith("?") ? queryString.slice(1) : queryString;
  if (withoutQuestionMark === "") return result;

  for (const pair of withoutQuestionMark.split("&")) {
    const [key, value] = pair.split("=");
    result[key] = value;
  }
  return result;
}

console.log(parseQuery("?search=milk&page=2&done=true"));
// Node has this built in: new URLSearchParams("?search=milk&page=2") — you'll meet it in Module 16.
