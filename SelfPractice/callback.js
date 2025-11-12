// A callback function is a function passed as an argument to another function, which is then invoked inside the outer function. It allows asynchronous or event-driven programming.


//1) Simple (synchronous) callback — higher-order function

function greet(name, call) {
    //console.log(call(name));
}
function callback(n) {
    return n.toUpperCase();
}
greet("Vidhi", callback);

//////////////////////

function sayHi(name) {
  console.log("Hi " + name);
}
function greetUser(callback) {
  callback("Vidhi");
}
greetUser(sayHi);
/////////////////////////////


//2) Asynchronous callbacks

setTimeout(() => {
    //console.log("runs in 1 sec");
}, 1000);

//3) Callback hell (pyramid of doom) — why it’s a problem

