function addTwoNumbers(number1, number2) {

    console.log(number1 + number2);

}
const result = addTwoNumbers(3, 5);
//console.log(result); //undefined

//In JavaScript, when a function does not explicitly use a return statement, it implicitly returns undefined. This is the default behavior in the language. As a result, if you try to store the result of such a function in a variable, that variable will hold the value undefined.


function addTwoNumbers1(number1, number2) {
    //let result = number1 + number2;
    //return result;

    return number1 + number2;
}
const result1 = addTwoNumbers1(3, 5);
//console.log("result:" + result1); //8


function loginUserMessage(username) {
    return `${username} just logged in`;
}
//console.log(loginUserMessage("Vidhi"));


//rest operator - It is used to collect all remaining arguments into a single array.
function calculateCartPrice(...num1) {
        return num1;
}
//console.log(calculateCartPrice(20, 400, 500));


const user = {
    username: "Vidhi",
    age: 21
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(user);