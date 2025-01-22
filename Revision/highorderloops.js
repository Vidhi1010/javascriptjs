/////////////////////  for of loop  /////////////////////

const arr = [1, 2, 3, 4, 5];

for(const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!";

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}
 //////////        Map         //////////

//Map object is a collection of key-value pairs where the keys can be of any type, including objects, functions, and primitives. It is similar to an object but provides more flexibility and features for managing keys and values.

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':' , value);
}

//////////////////// for in loop  //////////////////////

//for in loop - for...in loop in JavaScript is used to iterate over the enumerable properties of an object.

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObject) {
    //console.log(key);
    //console.log(`${key} : ${myObject[key]}`);
}

//////////////////////////////////////////

const prog = ["js", "cpp", "py", "java", "rb"];

for (const key in prog) {
    //console.log(prog[key]);
}

////////////////////////////////////////////

const map1 = new Map();
map1.set('IN', "India");
map1.set('USA', "United States of America");
map1.set('Fr', "France");

for (const [key, value] in map1) {
    //console.log(key, ':' , value);
}

//////////////////////  forEach loop  /////////////////////

//forEach loop - The forEach method in JavaScript is used to loop through each item in an array or other collections (like Map or Set). It runs a function once for each item.

// the forEach method in JavaScript takes a callback function as an argument.

const coding = ["js", "cpp", "py", "java", "rb"];

coding.forEach(function (item) {
    //console.log(item);
});

//using arrow function
coding.forEach(item => {
    //console.log(item);
});

function printMe(item) {
    //console.log(item);
}
coding.forEach(printMe);

///////////////////////////////////////////////

/// forEach on array

const numbers = [10, 20, 30];

// The callback function takes 3 arguments: current value, index, and the array

numbers.forEach((num, index) => {
  //console.log(`Index: ${index}, Value: ${num}`);
});


////////////////////////////////////////////////

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]


myCoding.forEach( (item) => {
    //console.log(item);
    console.log(item.languageName);
    //console.log(item.languageFileName);
})