var a = 10;
//console.log(window.a); // 10 in browser
//console.log(this.a);   // 10 in browser
console.log(this.a);   // undefined in Node.js

function hello() {
    var username = "Vidhi";
    console.log(this.username);
}
hello();