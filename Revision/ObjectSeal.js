//Object.seal() seals an object, which means:

//✅ You can still change existing property values,
//❌ But you cannot add or delete properties.




//Prevents adding new properties.
//Prevents deleting existing properties.
//Allows modifying values of existing properties (if they are writable).
//Marks all properties as non-configurable (so you can’t change property descriptors like writable or enumerable).



const person = {
  name: "Vidhi",
  age: "22",
  address: {
    city: "Delhi",
  }
};

Object.seal(person);

person.age = 23;         // ✅ You can still modify existing values
//person.city = "Delhi";   // ❌ Cannot add new property
delete person.name;      // ❌ Cannot delete property
person.address.city = "Mumbai"; // ✅ Can modify nested object properties

console.log(person); // Output: { name: 'Vidhi', age: 23 }