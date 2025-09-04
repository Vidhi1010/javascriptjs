//function statements - it is a function that is defined with the function keyword 
function a() {
    console.log("Hello from function a");
}


// function expression - It is a function that is assigned to a variable

var b = function() {
    console.log("Hello from function b");
}
//difference between function statement and function expression

//// Function statements are hoisted, meaning they can be called before they are defined.Function expressions are not hoisted, meaning they cannot be called before they are defined.

// function declaration - It is a function that is defined with the function keyword and can be called before it is defined

// anoynmous function expression - This is a function that does not have a name and is assigned to a variable
var c = function() {
    console.log("Hello from anonymous function c");
}

//Named function expression
//Difference between parameters and arguments

/* *************************************************************************************************** */
//first class functions

//In JavaScript, functions are first-class citizens (or first-class functions) — meaning:

//You can store functions in variables
//You can pass functions as arguments to other functions
//You can return functions from other functions
//You can store functions in objects and arrays
//Basically, functions are treated like any other value (numbers, strings, etc.).