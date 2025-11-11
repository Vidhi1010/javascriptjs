const person = {
    name: "Vidhi",
    age: "22",
    address: {
      city: "Delhi",
    }
}

console.log("Original Person:", person);


const clonedPerson = {...person}; // Shallow clone using spread operator

clonedPerson.name = "Vaibhav"; // Modifying a primitive property
console.log("Cloned Person:", clonedPerson);


const assignedPerson = Object.assign({}, person); // Shallow clone using Object.assign
assignedPerson.age = 21; // Modifying a primitive property

console.log("Assigned Person:", assignedPerson);