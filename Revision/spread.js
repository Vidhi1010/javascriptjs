//Copying an Object

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
obj2.a = 5;
console.log(obj2); // Output: { a: 5, b: 2 }
console.log(obj1); // Output: { a: 1, b: 2 }

//Merging Objects

const obj3 = { a: 1, b: 2 };
const obj4 = { c: 3, d: 4 };
const mergedObj = { ...obj3, ...obj4 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
console.log(obj3);
console.log(obj4);


//we can use the spread operator to pass elements of an array as separate arguments.

const numbers = [1, 2, 3];
function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numbers)); // Output: 6
console.log(numbers);

//Using Spread in String to Convert to Array

const word = "hello";
console.log([...word]); // Output: ['h', 'e', 'l', 'l', 'o']
console.log(word)
