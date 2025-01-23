const coding = ["js", "cpp", "py", "java", "rb"];

const values = coding.forEach((items) => {
  //console.log(items);
  return items;
});

//console.log(values);//undefined

////////////////// Filter ///////////////////////////

//The filter method in JavaScript is used to create a new array containing elements from an original array that pass a given condition (test). The condition is defined in a callback function provided to the filter method.

//filter iterates through each element in the array.

//For each element, it runs the callback function.

//If the callback returns true, the element is included in the new array.

//If the callback returns false, the element is skipped.

//If no elements pass the condition, it returns an empty array.

const myNums = [, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter( (num) => num > 4);

const newNums = myNums.filter((num) => {
  return num > 4;
});
//console.log(newNums);

/////////////////////////////////////////////////////////
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.genre === "History");
//console.log(userBooks);

/////////////////////////  Map  ///////////////////////////

//The map method in JavaScript is used to create a new array by transforming each element in an original array, as defined by a callback function provided to the map method.

//Transforms each element of an array and creates a new array of the same length.

//Can be chained with other methods.
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNum = myNumbers.map( (num) => num + 10 );
//console.log(newNum);

//////////////////////  Chaining  /////////////////////////

const newNum = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);

//console.log(newNum);

////////////////////  Reduce  /////////////////////////////

//The reduce method in JavaScript is a powerful array method used to reduce an array to a single value by applying a callback function iteratively to each element of the array. It’s commonly used to calculate sums, products, averages, or to accumulate data into objects or arrays.

//The reducer function takes four arguments (accumulator, currentValue, currentIndex, Array).

const myNum = [1, 2, 3];

/* const myTotal = myNum.reduce(function (acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval;

}, 0); */

const myTotal = myNum.reduce((acc, curr) => acc + curr, 0);

//console.log(myTotal);

////////////////////

const shoppingCart = [
  {
    product: "phone",
    price: 699,
  },
  {
    product: "TV",
    price: 499,
  },
  {
    product: "tablet",
    price: 299,
  },
  { 
    product: "laptop",
    price: 899 
},
  { 
    product: "desktop",
    price: 999 
  },
];

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0);

console.log(totalPrice);