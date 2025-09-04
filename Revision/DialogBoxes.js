// alert() – Simple Message Box

//Purpose: Used to display a message to the user. It only has an OK button.

alert("welcome to my website");



// confirm() – Confirmation Box

//Used to ask the user for confirmation. It displays OK and Cancel buttons.
//Returns true if user clicks OK
//Returns false if user clicks Cancel

const isSure = confirm("Are you sure you want to delete this item?");  //Useful for critical actions (e.g., deletion, logout)

if (isSure) {
  console.log("Item deleted.");
} else {
  console.log("Action cancelled.");
}



// prompt() – Input Box

//Purpose: Used to take input from the user via a text box. It displays a message with OK and Cancel.
//Returns the input string if user clicks OK
//Returns null if user clicks Cancel


const name = prompt("What is your name?");

if (name !== null) {
  alert(`Hello, ${name}!`);
} else {
  alert("You cancelled the input.");
}

//✅ Useful for quick input
//❌ Not secure or good for passwords or important data
