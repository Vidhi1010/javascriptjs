
// what is pure function

// A pure function is a function that, given the same input, will always return the same output and does not cause any side effects (i.e., it does not modify any external state or variables).

// Example of a pure function

function makeTea(water, teaLeaves, sugar) {
  return "a cup of tea";
}
console.log(makeTea(1, 2, 3)); // Output: a cup of tea

// what is impure function
// An impure function is a function that may return different outputs for the same inputs or has side effects, such as modifying external variables or state.  

// Example of an impure function

let sugarAmount = 1;

function makeTeaWithGlobalSugar(water, teaLeaves) {
  return `a cup of tea with ${sugarAmount} spoon of sugar`;
}

console.log(makeTeaWithGlobalSugar(1, 2)); // Output: a cup of tea with 1 spoon of sugar


///////////////////////////////////////////////////////////

//what is curring?
// Currying is a technique where a function doesn't take all arguments at once, but instead takes them one by one — each returning a new function until all arguments are provided.

// Example of currying

function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

add(2)(3)(4); // 👉 9


//Modern JS version using arrow functions

const add = a => b => c => a + b + c;
console.log(add(2)(3)(4)); // 👉 9

///////////////////////////////////////////////////////////


var a = 200;

{
    var a = 400;
}

let b = a;

{
    let b = -400;
}

console.log(a);// output: 400 because var is function scoped or global scoped 

//////////////////////////////////////////////////////////

//what is laxical scope?

// Lexical Scope means how and where you write your variables and functions in code determines their accessibility.

// In JavaScript, functions can access variables from the place where they are defined — not from where they are called.


function outer() {
  let name = "Vidhi";

  function inner() {
    console.log(name); // ✅ Can access 'name' from outer scope
  }

  inner();
}

outer(); // 👉 Output: Vidhi


//inner() is defined inside outer().
//So it has access to outer’s variables — that's lexical scope.


//////////////////////////////////////////////////////////

//Methods of array

//1. Iteration / Looping

//every() - Checks if all items match condition	
arr.every(x => x > 0)// return boolean value

//some() - Checks if any item matches condition
arr.some(x => x > 0)// return boolean value

//forEach() - Executes a function for each item
arr.forEach(x => console.log(x))

//map() - Creates a new array with results of calling a function on each item
arr.map(x => x * 2)

//filter() - Creates a new array with items that match condition
arr.filter(x => x > 0)

//reduce() - Reduces array to a single value by applying a function
arr.reduce((acc, x) => acc + x, 0)

//reduceRight() - Similar to reduce, but processes items from right to left
arr.reduceRight((acc, x) => acc + x, 0)

//find() - Returns the first item that matches condition
arr.find(x => x > 0)




//2. Creation & Basic Utilities

//Array.isArray() - Checks if a value is an array
Array.isArray([1, 2]) // true

//Array.of() - Creates an array from arguments	
Array.of(1, 2) // [1, 2]

//Array.from() - Creates an array from an iterable or array-like object
Array.from('hello') // ['h', 'e', 'l', 'l', 'o']




//3. Adding/Removing Elements

//push() - Adds one or more items to the end of the array
arr.push(4); // Adds 4 to the end

//pop() - Removes the last item from the array and returns it
arr.pop(); // Removes and returns the last item

//shift() - Removes the first item from the array and returns it
arr.shift(); // Removes and returns the first item

//unshift() - Adds one or more items to the beginning of the array
arr.unshift(0); // Adds 0 to the beginning

//splice() - Adds/removes items at a specific index
arr.splice(2, 1, 'new'); // Removes 1 item at index 2 and adds 'new'

//slice() - Creates a shallow copy of a portion of the array(doesn’t change original)

arr.slice(1, 3); // Creates a new array with items from index 1 to 2


//4. Searching & Checking

//indexOf() - Returns the first index of an item, or -1 if not found
arr.indexOf(2); // Returns index of 2, or -1 if not found

//lastIndexOf() - Returns the last index of an item, or -1 if not found
arr.lastIndexOf(2); // Returns last index of 2, or -1 if not found

//includes() - Checks if an item exists in the array
arr.includes(2); // Returns true if 2 is found, false otherwise

//findIndex() - Returns the index of the first item that matches condition, or -1 if not found
arr.findIndex(x => x > 2); // Returns index of first item > 2, or -1 if not found

//find() - Returns the first item that matches condition, or undefined if not found
arr.find(x => x > 2); // Returns first item > 2, or undefined if not found



//5. Sorting & Reversing

//sort() - Sorts the array in place and returns it
arr.sort((a, b) => a - b); // Sorts numbers in ascending order

//reverse() - Reverses the order of items in the array
arr.reverse(); // Reverses the array in place

//6. Joining & Converting

//join() - Joins array items into a string with a specified separator
arr.join(', '); // Joins items with ', ' as separator

//toString() - Converts the array to a string
arr.toString(); // Converts array to string representation

//toLocaleString() - Converts the array to a string using locale-specific formatting
arr.toLocaleString(); // Converts array to string with locale formatting



//7. Filling & Copying

//fill() - Fills all or part of the array with a static value
arr.fill(0); // Fills entire array with 0

//copyWithin() - Copies part of the array to another location in the same array
arr.copyWithin(0, 2); // Copies items from index 2 to the beginning


//8. Flattening & Combining

//flat() - Flattens nested arrays into a single array
arr.flat(); // Flattens one level of nesting

//flatMap() - Maps each item and flattens the result into a new array
arr.flatMap(x => [x, x * 2]); // Maps each item and flattens the result

//concat() - Combines two or more arrays into a new array
arr.concat([4, 5]); // Combines arr with [4, 5] into a new array

/////////////////////////////////////////////////////////

//what is deep copy?
// A deep copy creates a new object that is a complete copy of the original object, including all nested objects and arrays. Changes made to the deep copy do not affect the original object.


let original = {
  name: "Vidhi",
  address: {
    city: "Gopalganj"
  }
};

let deep = JSON.parse(JSON.stringify(original));

deep.address.city = "Delhi";

console.log(original.address.city); // "Gopalganj" ✅ unchanged


/* 
original ----> address --> city: "Gopalganj"
deep     ----> address --> city: "Delhi" 
*/


// what is shallow copy?
// A shallow copy creates a new object that is a copy of the original object, but it only copies the references to nested objects and arrays. Changes made to the nested objects in the shallow copy will affect the original object.


let nums = [1, 2, 3];
let copy = [...nums];
copy[0] = 10;

console.log(nums); // [1, 2, 3] ✅ no change to original



let original1 = {
  name: "Vidhi",
  address: {
    city: "Gopalganj",
  }
};

let shallow = { ...original };

shallow.address.city = "Delhi";

console.log(original.address.city); // ❗ "Delhi" – original is affected!

/* original ----> address --> city: "Gopalganj"
       \
        \__ shallow (new object, but still points to same address)
 */

//////////////////////////////////////////////////////////



//JavaScript provides 3 built-in popup boxes


//1. alert() - Displays a simple message box with an OK button.

alert("Hello, Vidhi! This is a popup message.");


// 2. confirm() — Yes or No Question
//Shows a message with OK and Cancel buttons, and returns a boolean (true or false).

// Use it for confirmation dialogs, like "Are you sure you want to delete this?"

let choice = confirm("Do you want to continue?");
if (choice) {
  alert("You clicked OK!");
} else {
  alert("You clicked Cancel.");
}

// 3. prompt() — Get Input from User

//Displays a message with a text input field, and returns the user’s input as a string.

let name = prompt("What's your name?");
alert("Hello, " + name + "!");

//Use it to ask the user for input, like a name or age.



/////////////////////////////////////////////////////////

let str1 = "vidhi";
let str2 = "singh";

// now merge both strings into a single string like "vsiidnhgih"

function mergeStr(s1, s2) {
    let merged = "";
    let maxLength = Math.max(s1.length, s2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < s1.length) {
            merged += s1[i];
        }
        if (i < s2.length) {
            merged += s2[i];
        }
    }

}

//console.log(merged); 


//////////////////////////////////////////////////////////

//Different ways to handle asynchronous operations in JavaScript

// 1. Callbacks
