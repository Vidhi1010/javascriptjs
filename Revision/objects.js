const person = {
    name: "John",
    age: 20,
    isStudent: true, 
}
console.log(person);

//we can add, modify, or delete properties at runtime.

person.address = "123 Street Name"; //add
person.age = 30;//modify
delete person.isStudent; // delete

console.log(person);

//Functions can be stored as values inside an object. These functions are called methods.

const calculator = {
    add: function (a, b) {
      return a + b;
    },
  };
  console.log(calculator.add(2, 3));

//Objects can inherit properties and methods from other objects via prototypes.

const parent = { greet: () => "Hello" };
const child = Object.create(parent);
console.log(child.greet());


//
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
obj2.a = 5;
console.log(obj2); // Output: { a: 5, b: 2 }
console.log(obj1); // Output: { a: 1, b: 2 }
