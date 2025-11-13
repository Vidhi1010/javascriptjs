//A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//whenever we write the below lines of code we are creating a new Promise object.
//Because Promise is a constructor function (or class) — it’s not just a regular function that you call; it’s designed to create Promise objects.
//That’s why we use the new keyword — to construct a new instance of Promise.
//resolve and reject - They are parameters of the executor function, and both are functions provided by the JavaScript engine.

const promise = new Promise(function (resolve, reject) {
  //Do async tasks here
  setTimeout(function () {
    //console.log("Async task completed");
    resolve();
  }, 1000);
});

promise.then(function () {
  //console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    //console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  //console.log("Promise 2 consumed");
});

//////////////////                Data consumption              /////////////////////////////////
//When you make an async operation (like fetching data from an API), the Promise produces some data (like an API response).
//You then consume that data using .then() or await. That’s called data consumption in Promises.

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //const user = {username: "vidhi", gmail: "vidhi123@gmail.com"};
    //resolve(user);
    resolve({ username: "vidhi", gmail: "vidhi123@gmail.com" }); // ✅ Sending data (producing)
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // 👈 Consuming the data
});

/////////////////////                 Promise chaining                //////////////////////////

//Promise chaining means calling multiple .then() methods one after another — each .then() runs after the previous one resolves and can pass data to the next one.
//Basically: Each .then() returns a new Promise — so you can chain the next one.

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = true;
    if (!error) {
      resolve({ username: "vidhi", passward: 123 });
    } else {
      reject("ERROR: somethig went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //this will always run
    console.log("The promise is either resolved or rejected");
  });

///////////////////////////////           async await          //////////////////////////////////////

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = true;
    if (!error) {
      resolve({ username: "vaibhav", passward: 123 });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();



async function getAllUsers() {
   try {
     const response = await fetch("https://jsonplaceholder.typicode.com/users");
     const data = await response.json();//we should use await here too because .json() will also take time
     console.log(data);
   } catch (error) {
     console.log(error);
   }
}

//getAllUsers();



//////////////////////////////      fetch()       ////////////////////////////////////

//fetch() is a built-in JavaScript function (part of the browser API).
//fetch() itself returns a Promise.

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error);
})
