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
  age: 21,
};

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(user);



/* function user(username, name, age) {
    const Username = username;
    const Name = name;       
    const Age = age;          
  }
  
  const u1 = user('vivek', 'raj', 21); // Calling it like a regular function
  console.log(u1); // What will this show?
 */
function user1(username, name, age) {
  const Username = username; // Just a local variable inside the function
  const Name = name; // Another local variable
  const Age = age; // Another local variable
  return { Username, Name, Age };
}

console.log(user1("vivek", "raj", 21)); // What will this show?



function user3(firstname, lastname, age) {
  this.firstName = firstname; // Assigns 'vivek' to u1.Username
  this.lastName = lastname; // Assigns 'raj' to u1.Name
  this.Age = age; // Assigns 21 to u1.Age
}

const u1 = new user3("vivek", "raj", 21); // Creates the object
console.log(u1);
