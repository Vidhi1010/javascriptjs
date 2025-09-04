function a(b) {
    console.dir(b);
    b(); // calling the function is passed in - this case, sayHi
}

function sayHi() {
    console.log("Hi");
}

a(sayHi); // sayHi is a function, it will be passed as an argument
//Notice: you're not calling sayHi() here — you're just passing the function itself, like giving it as a gift box without opening it.


function myFun(x) {
    console.log("hello");
}

myFun(myFun); // Here, myFun is passed as an argument to itself, which is a higher-order function concept.

function fun(x) {
    console.log("hi");
    fun(x); // This is a recursive call, not a higher-order function.
}

fun();
