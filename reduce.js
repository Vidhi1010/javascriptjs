let arr = [1, 2, 3, 4];

const sum = function(accumulator, currentValue) {
    return accumulator + currentValue;
}

const reduce = function(arr, callback, initialValue) {
    let accumulator = initialValue;
    for(let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}
console.log(reduce(arr, sum, 0)); // Output: 10
