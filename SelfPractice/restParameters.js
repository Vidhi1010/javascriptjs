//REST parameters lets a function take any number of arguments and pack them into one array

function myFunc(...args) {
    console.log(args);
}

myFunc(1, 2, 3, 4, 5);