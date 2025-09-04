//The object becomes immutable—you cannot add, remove, or change its properties.

//Prevents new properties from being added.
//Prevents existing properties from being removed.
//Prevents modification of existing property values.
//Prevents changing the property's descriptors (e.g., writable, configurable).



const person = {
  name: "Vidhi",
  age: "22",
};

Object.freeze(person);

person.name = "vaibhav";
console.log(person.name); // Output: Vidhi



const person2 = {
  name: "Vidhi",
  age: "22",
  address: {
    city: "Delhi",
  }
  
};

Object.freeze(person2);

person2.address.city = "Mumbai";
console.log(person2.address.city); // Output: Mumbai

//Object.freeze() is shallow:
//It only affects the immediate properties of the object.
//Nested objects inside the frozen object can still be modified unless they are also frozen.

Object.freeze(person2.address);

person2.address.city = "Lucknow";
console.log(person2.address.city); // Output: Mumbai