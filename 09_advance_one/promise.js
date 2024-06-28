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

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "js", passward: "123"});
        }else{
            reject('Error: js went wrong');
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
    console.log(response);
    } catch(error) {
        console.log(error);
    }
}
consumePromiseFive();