// Immediately Invoked Function Expressions (IIFE)
/* Benefits of IIFE
Avoiding Global Variables: By wrapping code in an IIFE, you avoid polluting the global namespace with variables.
Creating a Private Scope: Variables declared inside an IIFE are not accessible from the outside, providing a form of data encapsulation.
Execution Context: IIFEs can be useful for creating a local scope in which to execute code immediately, which can be particularly useful in event handling or initialization code. */

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('vidhi');//we are using ; here because it a immediatly invocked function and it don't know where to stop so for ending it we use ';'


//IIFEs can also accept parameters
(function(name) {
    console.log("Hello, " + name + "!");
})("World");
