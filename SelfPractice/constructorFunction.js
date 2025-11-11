//Constructor functions are used to create multiple similar objects easily. They act as blueprints for creating objects with the same structure and behavior.

function User(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `hello ${this.name}`;
    }
}