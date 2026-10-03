// Solution 07.3
function getSetting(settings, key, fallback) {
  return settings[key] ?? fallback; // bracket notation because the key is in a variable
}

function getCity(user) {
  return user.profile?.address?.city ?? "Unknown";
}

function getFirstTagName(post) {
  return post.tags?.[0]?.name ?? "untagged";
}

console.log(getCity({}), getFirstTagName({ tags: [] }));
