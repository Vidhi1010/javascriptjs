//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/* const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){

        console.log('Async task is complete');
        //resolve();

    },1000);
});

 promiseOne.then(function(){
    console.log("Promise consumed");
 }) */

/* new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve();
    }, 1000);
 }).then(function(){
    console.log("Async 2 resolve");
 }) */

/* const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "vidhi", email : "vidhi@example.com"});
    }, 1000)
 });

 promiseThree.then(function(user){
    console.log(user);
 })
 */
/* const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username : "vidhi", passward : "123"});
        }else{
            reject('ERROR: Something went wrong');
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
.catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));
 */

/* const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "js", passward: "123" });
    } else {
      reject("Error: js went wrong");
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
consumePromiseFive(); */

/* async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
getAllUsers(); */

/* fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((error) => {
  console.log(data);
})
.catch((error) => console.log(error)); */
/* 
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}  */

/* const getPromise = () => {
  return new Promise((resolve, reject) => {
      console.log("I am a promise");
      //resolve("success");
      reject("error");
});
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fullfilled", res);
});

promise.catch((err) => {
  console.log("rejected", err);
}); */


//Promise chaining

/* function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 2000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 2000);
  });
}
console.log("fetching data1");
asyncFunc1().then((res) => {
  //console.log(res);
  console.log("fetching data2");
  asyncFunc2().then((res) => {
    //console.log(res);
  });
}); */

/* let promise = new Promise((resolve, reject) => {
  console.log("I am a promise"); 
}); */

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success")
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  })
}
 
 