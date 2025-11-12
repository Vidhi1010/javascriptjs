//Constructor functions are used to create multiple similar objects easily. They act as blueprints for creating objects with the same structure and behavior.

function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const user1 = new User("Vaibhav", 22);
const user2 = new User("Vidhi", 21);

user1.sayHi(); // Hi, I'm Vaibhav
