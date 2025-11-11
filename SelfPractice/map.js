let arr = [1, 2, 3, 4];

const sqr = function(arr) {
    return arr * arr;
}
const x = function(arr) {
    return arr + 1;
}

const map = function(arr, callback) {
    const output = [];
    for(let i = 0; i < arr.length; i++) {
        output.push(callback(arr[i]));
    }
    return output;
}

console.log(map(arr, x));