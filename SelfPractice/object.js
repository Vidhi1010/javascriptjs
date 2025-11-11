//An object in JavaScript is an unorderd collection of key -> value pairs. Keys are Strings(or Symbols) and values could be of any type including other objects, functions, primitive data types etc.

//Objects are mutable and dynamic in nature. We can add, modify or delete properties of an object at any time.

const user1 = {
  name: "Vaibhav",
  age: 28,
  isAdmin: false,
  address: { city: "Pune", pin: 411001 },
  greet() { return `Hello, ${this.name}`; }
};

//You can access data in two ways: 
console.log(user1.name);        // "Vaibhav" //// dot notation
console.log(user1["address"]);  // { city: "Pune", pin: 411001 } // bracket notation
console.log(user1.greet());     // "Hello, Vaibhav"




//////////        Objects are stored and passed by reference, not by value.     ///////////////////

//When you assign an object to another variable, both point to the same memory.

const userA = { name: "Vidhi" };
const userB = userA; // userB references the same object as userA
userB.name = "Vaibhav";
console.log(userA.name); // "Vaibhav" ✅ userA is affected because both reference the same object

///////////////////  Shallow Copy vs Deep Copy  ////////////////////////

//Shallow Copy: Creates a new object with the same top-level properties, but nested objects are still referenced.

//If you use = or spread operator { ...obj }, it creates a shallow copy — means only the top-level properties are copied, but nested objects still share references.

const obj1 = { name: "Vaibhav", address: { city: "Pune" } };
const obj2 = { ...obj1 };

obj2.address.city = "Delhi";
console.log(obj1.address.city); // "Delhi" (same nested object)


//Deep Copy: Creates a completely independent copy of the object and all its nested objects.

const deepCopy = structuredClone(obj1);
deepCopy.address.city = "Mumbai";
console.log(obj1.address.city); // "Delhi" (original remains unchanged)



//////////////////////////////////////////////////////////////////////////////////////////////////////////



//"How do you make an object immutable?” → Use Object.freeze() (shallow), Object.seal(), or deep-freeze patterns.

////////////////////    1. OBJECT.FREEZE()  ///////////////////////////

//Object.freeze() makes an object completely immutable. 
//Prevents new properties from being added.
//Prevents existing properties from being removed.
//Prevents modification of existing property values.
//Prevents changing the property's descriptors (e.g., writable, configurable).


const person = {
  name: "Vidhi",
  age: "22",
  address: {
    city: "Delhi",
  }
};

Object.freeze(person);

person.name = "vaibhav";
console.log(person.name); // Output: Vidhi

//Object.freeze() only shallow freezes an object — it doesn’t affect nested objects inside.
person.address.city = "Mumbai";
console.log(person.address.city); // Output: Mumbai


//Making nested objects immutable as well:
Object.freeze(person.address);
person.address.city = "Lucknow";
console.log(person.address.city); // Output: Mumbai


////////////////////    2. OBJECT.SEAL()  ///////////////////////////

//Prevents adding new properties.
//Prevents deleting existing properties.
//Allows modifying values of existing properties (if they are writable).
//Marks all properties as non-configurable (so you can’t change property descriptors like writable or enumerable).

const person1 = {
  name: "Vidhi",
  age: "22",
};

Object.seal(person1);

person1.age = 23;         // ✅ You can still modify existing values
person1.city = "Delhi";   // ❌ Cannot add new property
delete person1.name;      // ❌ Cannot delete property

console.log(person1); // Output: { name: 'Vidhi', age: 23 }

///////////////    To make it a deep freeze, you’d have to recursively freeze all nested objects  /////////////////

function deepCopy(obj) {
  // Base case: if obj is not an object, just return it
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Create new array or object depending on input type
  const copy = Array.isArray(obj) ? [] : {};

  // Recursive case: loop through keys and deep copy each
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]); // recursion happens here
  }

  return copy;
}

const user = {
  name: "Vaibhav",
  address: { city: "Pune", pin: { code: 411001 } }
};

const newUser = deepCopy(user);
newUser.address.pin.code = 999999;

console.log(user.address.pin.code); // 411001 ✅ original not affected



