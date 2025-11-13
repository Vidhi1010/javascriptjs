// A callback function is a function passed as an argument to another function, which is then invoked inside the outer function. It allows asynchronous or event-driven programming.

//1) Simple (synchronous) callback — higher-order function

function greet(name, callback) {
  //console.log(call(name));
}
function call(n) {
  return n.toUpperCase();
}
greet("Vidhi", call);

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

const cart = ["shoes", "shirts", "pants"];

api.createOrder(cart, function () {
  api.proceedTOPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});


////////////////////////         What is Inversion of Control?     //////////////////////////////


//Normally, you control when your code runs.
//But with Inversion of Control, you give control to someone else (like a callback handler, library, or framework) — and they decide when or how to call your function.
//You give someone your function, and they call it whenever they feel like it — not you.

function hi() {
    console.log("Hello!");
}

setTimeout(hi, 2000);

//Now, you passed hi to another function (setTimeout).
//That function decides when (after 2 seconds) to call your code.

//You inverted control — now setTimeout controls when your function runs.

//This is Inversion of Control. You’re not the one deciding when hi() runs anymore.