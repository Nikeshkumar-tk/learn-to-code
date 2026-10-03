// Solution 07.2
const user = {
  name: "Kai",
  isActive: true,
  roles: ["user"],
  address: { city: "Chennai", country: "IN" },
};

function updateUser(user, changes) {
  return { ...user, ...changes };
}

function deactivate(user) {
  return { ...user, isActive: false };
}

function addRole(user, role) {
  return { ...user, roles: [...user.roles, role] };
}

function moveTo(user, city) {
  return { ...user, address: { ...user.address, city } };
}

console.log(moveTo(addRole(user, "admin"), "Delhi"));
console.log(user); // untouched
