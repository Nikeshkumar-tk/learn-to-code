// A PROMISE is an object representing a value that will be ready LATER.
// Think of a restaurant buzzer: you get it now, it buzzes when your food is ready.
//
// A promise is in one of three states:
//   pending   -> still working
//   fulfilled -> finished successfully, has a value
//   rejected  -> failed, has an error
//
// .then(fn)  runs fn with the value when fulfilled
// .catch(fn) runs fn with the error when rejected

function getUser(id) {
  // (How to CREATE a promise is the next example. For now, just USE one.)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) resolve({ id: 1, name: "Ana" });
      else reject(new Error(`User ${id} not found`));
    }, 200);
  });
}

const promise = getUser(1);
console.log("Right away we only have:", promise); // Promise { <pending> }

promise
  .then((user) => console.log("Got user:", user.name))
  .catch((error) => console.log("Failed:", error.message));

getUser(99)
  .then((user) => console.log("Got user:", user.name))
  .catch((error) => console.log("Failed:", error.message));
