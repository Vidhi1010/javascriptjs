/* const obj = { name: "Alice", age: 25 };
console.log(obj); */ 
// Output: { name: "Alice", age: 25 }
//console.dir(obj); 

let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Apna Collage";

let divs = document.querySelectorAll(".box");

let index = 1;
for(div of divs) {
    div.innerText = `unique value ${index}`;
    index++;
}
/* divs[0].innerText = "Hello";
divs[1].innerText = "How";
divs[2].innerText = "Are You"; */

/* let para = document.querySelector("p");
console.log(para.getAttribute("id"));
console.log(para.setAttribute("id", "paragraph")); */

/* para.style.backgroundColor = "green";
para.style.fontSize = "20px"; */

let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let body = document.querySelector("body");
body.append(btn);
//body.prepend(btn);

let para = document.querySelector("p");

//replace class with new class
//para.setAttribute("class", "newClass");

//add another class
para.classList.add("newClass");



