//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){

        console.log('Async task is complete');
        //resolve();

    },1000);
});

 promiseOne.then(function(){
    console.log("Promise consumed");
 })

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve();
    }, 1000);
 }).then(function(){
    console.log("Async 2 resolve");
 })