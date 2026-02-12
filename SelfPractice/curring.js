//Converting a function that takes multiple arguments into a function that takes one argument at a time.
//Currying breaks a function into multiple smaller functions, each taking one argument.
//Cleaner code in functional programming


/* function add(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
} */

//can be written as this
const add = a => b => c => a + b + c;

function sub(a) {
    return function(b) {
        return function(c) {
            return a-b-c;
        }
    }
}



console.log(add(2)(3)(4));
console.log(sub(10)(8)(2));