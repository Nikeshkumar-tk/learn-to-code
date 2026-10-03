// Solution 16.5
function parseRequestUrl(rawUrl) {
  const url = new URL(rawUrl, "http://localhost");
  const query = Object.fromEntries(url.searchParams);
  const requestedPage = Number(query.page ?? 1);
  const page = Number.isInteger(requestedPage) && requestedPage >= 1 ? requestedPage : 1;
  const segments = url.pathname.split("/").filter((part) => part !== "");
  return { path: url.pathname, query, page, segments };
}

console.log(parseRequestUrl("/tasks?status=open&page=2"));
