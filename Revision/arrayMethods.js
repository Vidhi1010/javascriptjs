const num = [1, 2, 3, 4, 5];
function even(num) {
  return num % 2 === 0;
}

function myMap(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

console.log(myMap(num, even));

function myFilter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(myFilter(num, even));

function mySome(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}
console.log(mySome(num, even));

function myEvery(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(myEvery(num, even));

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // Pass (value, index, array) to the callback
  }
};

const numbers = [1, 2, 3, 4, 5];

numbers.customForEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});
