/* const promise1 = new Promise((resolve, reject) => {
    resolve('done1');
  });
  
  promise1.then((result) => {
    console.log(result);
  });

  console.log("========my Classssss**"); */

const p1 = new Promise((resolve, reject) => {
  resolve("done1");
});

p1.then((d) => {
  console.log(d); // Logs 'done1'
  return "done2"; // Return a string 'done2'
}).then((d2) => {
  console.log(d2); // Logs 'done2' (the string returned from the previous .then())
  console.log("done 3"); // Logs 'done 3'
});

//The .then() method is designed to work with any resolved value (not just promises). It's flexible enough to handle both asynchronous operations (by chaining promises) and synchronous values (like strings, numbers, or objects).

//If you return a string (or any value), it behaves as if that value was resolved immediately, and .then() simply forwards it to the next .then() in the chain

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //console.log('Async task is complete');
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    //console.log("Async task2")
    resolve();
  }, 1000);
}).then(function () {
  //console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Vidhi", email: "vidhi@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  //console.log(user);
});


const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Vidhi", passward: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  });
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(() => console.log("The promise is either resolved or rejected"));
