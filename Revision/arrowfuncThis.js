const user = {
    username: "Vidhi",
    age: 21,

    welcomeMessage: function() {
        //console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}
/* user.welcomeMessage();
user.username = "Vivek";
user.welcomeMessage(); */

//console.log(this); 

function hello() {
    let username = "Vidhi";
    //console.log(this);
    //console.log(this.username);
}
hello();

//The username variable is declared with let inside the function, so it is local to the function scope and not attached to the global object.
//this.username looks for a property named username on the this object (global object), but since username is not defined on the global object, it returns undefined.

const chai = () => {
    let username = "Vidhi";
    //console.log(this);
}

chai();


let username = "Vaibhav";

const userDetails = {
    username: "Vidhi",
    age: 21,

    welcomeMessage: () => {
        // console.log(this);
        console.log(this.username);
    }
}
userDetails.welcomeMessage();

console.log(this.username);