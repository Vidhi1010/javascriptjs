//A polyfill is a piece of code (usually JS) that adds a modern feature to older browsers that don’t support it yet.

//Example: Polyfill for Array.map()
//Older browsers didn’t support .map(). So developers wrote a polyfill like this:


if(!Array.prototype.map) {
    Array.prototype.map = function(callback) {
        const arr = [];
        for(let i = 0; i < this.length; i++) {
            arr.push(callback(this[i], i, this));
        }
        return arr;
    };
}

//this[i] → element
//i → index
//this → whole array

//Tools that automatically add polyfills: Babel,core-js, polyfill.io
