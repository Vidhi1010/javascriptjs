function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

////////////////////////////////////////////////////
const arr = [1, 9, 7, 4, 5];
let max = 0;
function maximum(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } 
    }
    console.log(max);
}
maximum(arr);

//using methods
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax(arr));

/////////////////////////////////////////////////////

let str = "abaabba";

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if(str[left] === str[right]) {
            return true;
        }
        left++;
        right--;
    }
    return false;
}

console.log(isPalindrome(str));

//using str methods
function palindrome(str) {
    if(str === str.split('').reverse().join('')) {
        return true;
    }
    return false;
}

console.log(palindrome(str));

//str.split('') → Converts "abbabba" into ['a', 'b', 'b', 'a', 'b', 'b', 'a']

//.reverse() → Reverses it to ['a', 'b', 'b', 'a', 'b', 'b', 'a']

//.join('') → Joins it back to "abbabba"

//////////////////////////////////////////////////

let str1 = "vidhi"
function reverseStr(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStr(str1));

function reverse(str) {

    let reversed = "";

    for(let i = str1.length - 1 ; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

console.log(reverse(str1));

////////////////////////////////////////////////////

function newArr(arr) {
    return arr.filter((num) => num % 2 === 0);
}
console.log(newArr(arr));

//using loop
function evenArr(arr) {
    let arrEven = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arrEven.push(arr[i]);
        }
    }
    return arrEven;
}

console.log(evenArr(arr));

/////////////////////////////////////////////////////

function factorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        if(n === 0 || n ===1 ) {
            return 1;
        }else {
            fact = fact * i;
        }
    }
    return fact;
}
console.log(factorial(5));


//n!=n×(n−1)!

function fact(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}

console.log(fact(3));