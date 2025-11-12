//Closures are functions that have access to variables from outer functions even after the outer function has fineshed executing. They remember the environment in which they were created.

function outer() {
  let outerVar = "Hello from closure";

  function inner() {
    console.log(outerVar);
  }

  return inner; // returns function, doesn't execute
}

let closureFn = outer();

setTimeout(() => {
  closureFn(); // outerVar remembered from before
}, 3000);


function outer1() {
  let outerVar1 = "Hello";

  function inner1() {
    console.log(outerVar1);
  }
  return inner1;
}

outer1()();

