//object Literals

const user = {
    username: "Vidhi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);



// Constructor function 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this;
}

const userOne = new User("vidhi", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//The new keyword in JavaScript is used to create a new instance of an object using a constructor function or a class. It automates the process of creating an object and setting up inheritance.

//When you call a function with new, JavaScript performs the following steps internally:

//1. Creates a new empty object {}.

//2. Links the new object’s prototype to the constructor function’s prototype.

//3. Sets this inside the constructor to refer to the new object.

//4. Executes the constructor function (assigning properties and methods).

//5. Returns the new object (if no other object is explicitly returned).