// Solution 07.1
function createUser(name, email) {
  return { name, email, isActive: true, roles: ["user"] };
  // A NEW roles array is created on every call, so users don't share one.
}

function displayName(user) {
  if (user.name === "") {
    return user.email;
  }
  return user.name;
  // shorter: return user.name || user.email;   ("" is falsy)
}

function hasRole(user, role) {
  for (const r of user.roles) {
    if (r === role) return true;
  }
  return false;
}

console.log(createUser("Ada", "ada@example.com"));
