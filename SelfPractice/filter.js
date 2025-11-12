const arr = [1, 2, 3, 4];

function callback(arr) {
    return arr % 2 == 0;
}

function myFilter(arr, callback) {
    const newArr =[];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(myFilter(arr, callback));